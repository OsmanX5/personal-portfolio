import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const Skills = () => {
  const { resume } = useResume();
  const groups = resume?.skillGroups || [];

  if (!groups.length) return null;

  return (
    <section id="skills" className={styles.section}>
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & technologies"
        subtitle="The languages, platforms and practices I reach for to ship reliable, high-performance software."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/30 to-accent-2/20 font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-ink leading-tight">
                {group.name}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
