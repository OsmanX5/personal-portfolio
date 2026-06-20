import { motion } from "framer-motion";
import { styles } from "../../styles";

// Consistent eyebrow + title + optional subtitle used by every section.
const SectionHeading = ({ eyebrow, title, subtitle, center = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={center ? "flex flex-col items-center text-center" : ""}
  >
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2 className={styles.sectionHeadText}>{title}</h2>
    {subtitle && (
      <p className={`${styles.sectionSubText} ${center ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
