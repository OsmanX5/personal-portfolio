import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import {
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  ArrowDown,
} from "./ui/icons";

// A few flagship technologies to surface as chips (intersected with real skills).
const HERO_TECH = [
  "C#",
  ".NET",
  "React",
  "Node.js",
  "AWS",
  "WebRTC",
  "Unity",
  "MongoDB",
];

const ease = [0.22, 1, 0.36, 1];
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const Hero = () => {
  const { resume } = useResume();
  const profile = resume?.profile;

  const fullName = profile?.fullName || "Osman Elfaki";
  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ");
  const title = profile?.jobTitle || "Senior Software Engineer";
  const location = profile?.location;
  const social = profile?.social || {};

  // Show flagship tech that actually appears in the resume's skills.
  const skillSet = new Set(
    (resume?.skillGroups || []).flatMap((g) => g.items.map((i) => i.toLowerCase()))
  );
  const techChips = HERO_TECH.filter((t) =>
    [...skillSet].some((s) => s.includes(t.toLowerCase()))
  );
  const chips = techChips.length ? techChips : HERO_TECH.slice(0, 6);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-20"
    >
      <div className="w-full">
        {/* Eyebrow: availability + title */}
        <motion.div
          {...rise(0)}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="text-sm text-muted">
            {title}
            {location ? ` · ${location}` : ""}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...rise(0.08)} className={styles.heroName}>
          <span className="text-ink">{firstName}</span>{" "}
          <span className="text-gradient-accent">{lastName}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...rise(0.16)}
          className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted"
        >
          I design and ship{" "}
          <span className="text-ink font-medium">scalable .NET systems</span>,{" "}
          <span className="text-ink font-medium">real-time platforms</span> and{" "}
          <span className="text-ink font-medium">immersive XR experiences</span>{" "}
          — from backend architecture down to the last millisecond of latency.
        </motion.p>

        {/* CTAs + socials */}
        <motion.div
          {...rise(0.24)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-[0_12px_32px_-10px_rgba(10,132,255,0.9)] transition-transform hover:scale-[1.04]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-xl glass px-6 py-3 font-semibold text-ink transition-colors hover:border-accent/50"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-2 sm:ml-2">
            {social.github && (
              <SocialBtn href={social.github} label="GitHub">
                <GithubIcon />
              </SocialBtn>
            )}
            {social.linkedin && (
              <SocialBtn href={social.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </SocialBtn>
            )}
            {social.portfolio && (
              <SocialBtn href={social.portfolio} label="Website">
                <GlobeIcon />
              </SocialBtn>
            )}
          </div>
        </motion.div>

        {/* Tech chips */}
        <motion.div {...rise(0.32)} className="mt-12 flex flex-wrap gap-2.5">
          {chips.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint hover:text-ink transition-colors"
        aria-label="Scroll to about"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
};

const SocialBtn = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="grid h-11 w-11 place-items-center rounded-xl glass text-muted transition-colors hover:text-ink hover:border-accent/50"
  >
    {children}
  </a>
);

export default Hero;
