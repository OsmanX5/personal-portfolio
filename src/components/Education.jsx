import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import SectionHeading from "./ui/SectionHeading";
import { ArrowUpRight } from "./ui/icons";

const ease = [0.22, 1, 0.36, 1];

const Card = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, ease, delay }}
    className="glass-card rounded-2xl p-6"
  >
    {children}
  </motion.div>
);

const Education = () => {
  const { resume } = useResume();
  const education = resume?.education || [];
  const certs = resume?.certifications || [];

  if (!education.length && !certs.length) return null;

  return (
    <section className={styles.section}>
      <SectionHeading eyebrow="Background" title="Education & credentials" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Education */}
        {education.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-faint text-xs uppercase tracking-[0.2em]">
              Education
            </h3>
            {education.map((ed, i) => (
              <Card key={ed.id || i} delay={i * 0.08}>
                <p className="text-sm text-muted">{ed.range}</p>
                <h4 className="mt-1 font-display text-lg font-semibold text-ink">
                  {ed.degree}
                </h4>
                <p className="text-accent">{ed.institution}</p>
                {ed.gpa && (
                  <p className="mt-2 text-sm text-muted">GPA · {ed.gpa}</p>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certs.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-faint text-xs uppercase tracking-[0.2em]">
              Certifications
            </h3>
            {certs.map((c, i) => (
              <Card key={i} delay={i * 0.08}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ink">
                      {c.name}
                    </h4>
                    <p className="text-accent">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View credential"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-ink"
                    >
                      <ArrowUpRight width={17} height={17} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
