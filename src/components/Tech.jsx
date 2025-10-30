import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../Data";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
    >
      <div className="relative w-full h-full group cursor-pointer">
        {/* Glowing background circle */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />

        {/* Main circular container */}
        <div className="relative w-full h-full bg-tertiary rounded-full border-2 border-transparent group-hover:border-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
          {/* Tech icon */}
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {technology.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <motion.section
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-20 flex flex-wrap justify-center gap-6 md:gap-8"
      >
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Tech;
