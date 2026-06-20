import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import { featuredProjects } from "../Data";
import SectionHeading from "./ui/SectionHeading";
import { MapPinIcon } from "./ui/icons";

const SPECIALTIES = [
  "Backend Architecture",
  ".NET / C#",
  "Real-time · WebRTC",
  "XR / WebXR",
  "Cloud & CI/CD",
  "Full-stack React",
];

const ease = [0.22, 1, 0.36, 1];

const About = () => {
  const { resume } = useResume();
  const summary = resume?.summary;
  const stats = resume?.stats || {};
  const edu = resume?.education?.[0];
  const cert = resume?.certifications?.[0];
  const location = resume?.profile?.location;

  const statCards = [
    { value: stats.yearsExperience ? `${stats.yearsExperience}+` : "4+", label: "Years experience" },
    {
      value: `${(stats.projectCount || 0) + featuredProjects.length}+`,
      label: "Projects shipped",
    },
    { value: stats.skillCount ? `${stats.skillCount}+` : "30+", label: "Technologies" },
  ].filter(Boolean);

  return (
    <section id="about" className={styles.section}>
      <SectionHeading
        eyebrow="About"
        title="Engineering across the stack — and into XR"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-3"
        >
          <p className="text-muted text-lg leading-relaxed">
            {summary ||
              "Senior Software Engineer focused on scalable backends, real-time systems and immersive XR."}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {SPECIALTIES.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick facts card */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="glass-card lg:col-span-2 rounded-2xl p-6"
        >
          <h3 className="font-display font-semibold text-ink text-lg">
            Quick facts
          </h3>
          <dl className="mt-5 space-y-4 text-sm">
            {location && (
              <Fact label="Based in">
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon width={15} height={15} className="text-accent" />
                  {location}
                </span>
              </Fact>
            )}
            {edu && (
              <Fact label="Education">
                {edu.degree}
                <span className="block text-faint text-xs mt-0.5">
                  {edu.institution}
                  {edu.gpa ? ` · GPA ${edu.gpa}` : ""}
                </span>
              </Fact>
            )}
            {cert && (
              <Fact label="Certified">
                {cert.name}
                {cert.issuer && (
                  <span className="block text-faint text-xs mt-0.5">
                    by {cert.issuer}
                  </span>
                )}
              </Fact>
            )}
          </dl>
        </motion.aside>
      </div>

      {/* Stats strip */}
      <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
        {statCards.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 sm:p-6 text-center sm:text-left"
          >
            <p className="font-display font-bold text-3xl sm:text-4xl text-gradient-accent">
              {s.value}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Fact = ({ label, children }) => (
  <div>
    <dt className="text-faint text-xs uppercase tracking-wider">{label}</dt>
    <dd className="mt-1 text-ink leading-snug">{children}</dd>
  </div>
);

export default About;
