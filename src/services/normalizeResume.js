// Normalizes the raw Resume API payload (a `sections[]` array keyed by `type`)
// into a flat, predictable shape the UI can consume directly.
//
// Doing this in one place means every component reads the same clean model and
// the app keeps working even if a section is missing, disabled, or reordered.

const getSection = (sections, type) =>
  sections.find((s) => s.type === type && s.enabled !== false);

const getData = (sections, type, fallback) => {
  const section = getSection(sections, type);
  return section?.data ?? fallback;
};

/** "2023-08" -> "Aug 2023". Tolerates already-formatted or empty values. */
export const formatMonthYear = (value) => {
  if (!value) return "";
  const [year, month] = String(value).split("-");
  if (!year) return value;
  const date = new Date(Number(year), month ? Number(month) - 1 : 0, 1);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

/** "Aug 2023 — Present" style range. */
export const formatRange = ({ startDate, endDate, isCurrent }) => {
  const start = formatMonthYear(startDate);
  const end = isCurrent || !endDate ? "Present" : formatMonthYear(endDate);
  return [start, end].filter(Boolean).join(" — ");
};

export const normalizeResume = (raw) => {
  const sections = Array.isArray(raw?.sections) ? raw.sections : [];

  const profile = getData(sections, "Profile", {}) || {};
  const social = profile.socialLinks || {};

  const experiences = (getData(sections, "Experience", []) || [])
    .map((e) => ({
      id: e.id,
      role: e.jobTitle || e.title || "",
      company: e.company || e.companyName || "",
      location: e.location || "",
      startDate: e.startDate,
      endDate: e.endDate,
      isCurrent: Boolean(e.isCurrent),
      range: formatRange(e),
      points: Array.isArray(e.description)
        ? e.description
        : e.description
        ? [e.description]
        : [],
      technologies: e.technologies || [],
    }))
    // Most recent first.
    .sort((a, b) => String(b.startDate || "").localeCompare(String(a.startDate || "")));

  const skillGroups = (getData(sections, "Skills", {})?.groups || []).map(
    (g) => ({ name: g.name || "", items: g.items || [] })
  );

  const projects = (getData(sections, "Projects", []) || []).map((p) => ({
    id: p.id,
    title: p.title || p.name || "",
    description: p.description || "",
    role: p.role || "",
    technologies: p.technologies || [],
    links: p.links || {},
  }));

  const education = (getData(sections, "Education", []) || []).map((ed) => ({
    id: ed.id,
    degree: ed.degree || "",
    institution: ed.institution || "",
    location: ed.location || "",
    range: formatRange(ed),
    gpa: ed.gpa || "",
  }));

  const certifications = (getData(sections, "Certifications", []) || []).map(
    (c) => ({
      name: c.name || "",
      issuer: c.issuer || "",
      year: c.year || "",
      credentialUrl: c.credentialUrl || "",
    })
  );

  // Derived, dynamic stats for the hero / about strip.
  const startYears = experiences
    .map((e) => Number(String(e.startDate || "").split("-")[0]))
    .filter(Boolean);
  const earliestYear = startYears.length ? Math.min(...startYears) : null;
  const yearsExperience = earliestYear
    ? new Date().getFullYear() - earliestYear
    : null;

  const allSkillItems = skillGroups.flatMap((g) => g.items);

  return {
    profile: {
      fullName: profile.fullName || "",
      jobTitle: profile.jobTitle || "",
      email: profile.email || "",
      phone: profile.phone || "",
      location: profile.location || "",
      website: profile.website || "",
      social: {
        linkedin: social.linkedin || "",
        github: social.github || "",
        portfolio: social.portfolio || "",
      },
    },
    summary: getData(sections, "Summary", {})?.text || "",
    skillGroups,
    experiences,
    projects,
    education,
    certifications,
    theme: raw?.theme || {},
    stats: {
      yearsExperience,
      projectCount: projects.length,
      companyCount: experiences.length,
      skillCount: allSkillItems.length,
    },
  };
};
