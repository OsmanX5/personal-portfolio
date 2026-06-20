import { useResume } from "../context/ResumeContext";
import { GithubIcon, LinkedinIcon, GlobeIcon } from "./ui/icons";

const Footer = () => {
  const { resume } = useResume();
  const p = resume?.profile || {};
  const social = p.social || {};
  const name = p.fullName || "Osman Elfaki";

  const socials = [
    social.github && { icon: <GithubIcon width={18} height={18} />, href: social.github, label: "GitHub" },
    social.linkedin && { icon: <LinkedinIcon width={18} height={18} />, href: social.linkedin, label: "LinkedIn" },
    social.portfolio && { icon: <GlobeIcon width={18} height={18} />, href: social.portfolio, label: "Website" },
  ].filter(Boolean);

  return (
    <footer className="relative mx-auto max-w-7xl px-6 sm:px-10 pb-10">
      <div className="divider-glow" />
      <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-ink">{name}</p>
          <p className="text-sm text-faint">
            {p.jobTitle || "Software Engineer"}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-muted transition-colors hover:text-ink hover:border-accent/50"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-faint sm:text-left">
        © {new Date().getFullYear()} {name}. Built with React, Tailwind &
        Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
