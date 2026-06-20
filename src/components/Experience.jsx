import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const ExperienceItem = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease, delay: index * 0.05 }}
    className="relative pl-16 sm:pl-20"
  >
    {/* Node: company monogram on the rail */}
    <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display font-bold text-white shadow-[0_0_0_6px_rgba(5,5,16,1),0_0_30px_-6px_rgba(10,132,255,0.8)]">
      {(exp.company || "?").charAt(0)}
    </div>

    <div className="glass-card rounded-2xl p-6 mb-10">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            {exp.role}
          </h3>
          <p className="text-accent font-medium">
            {exp.company}
            {exp.location ? (
              <span className="text-faint font-normal"> · {exp.location}</span>
            ) : null}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {exp.isCurrent && (
            <span className="rounded-full bg-green-400/15 px-2.5 py-1 text-[11px] font-semibold text-green-300">
              Current
            </span>
          )}
          <span className="text-sm text-muted whitespace-nowrap">
            {exp.range}
          </span>
        </div>
      </div>

      {exp.points.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-muted text-[15px] leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {exp.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Experience = () => {
  const { resume } = useResume();
  const experiences = resume?.experiences || [];

  if (!experiences.length) return null;

  return (
    <section id="experience" className={styles.section}>
      <SectionHeading
        eyebrow="Career"
        title="Where I've made an impact"
        subtitle="Building and scaling real-time, XR and full-stack systems across product teams."
      />

      <div className="relative mt-14">
        {/* Vertical rail */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent-2/40 to-transparent" />
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.id || i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
