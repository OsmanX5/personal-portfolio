import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useResume } from "../context/ResumeContext";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const { resumeData } = useResume();
  const contactInfo = resumeData?.contactInformation;

  return (
    <motion.section
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-12 flex flex-col gap-8 bg-black-100 p-8 rounded-2xl"
      >
        {contactInfo?.email && (
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium">Email</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-secondary text-lg hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        )}

        {contactInfo?.phoneNumber && (
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium">Phone</span>
            <a
              href={`tel:${contactInfo.phoneNumber}`}
              className="text-secondary text-lg hover:text-white transition-colors"
            >
              {contactInfo.phoneNumber}
            </a>
          </div>
        )}

        {contactInfo?.country && (
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium">Location</span>
            <span className="text-secondary text-lg">
              {contactInfo.country}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-4">
          {contactInfo?.linkedInAccount && (
            <a
              href={`https://${contactInfo.linkedInAccount}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-tertiary rounded-lg text-white hover:bg-purple-500 transition-colors"
            >
              LinkedIn
            </a>
          )}

          {contactInfo?.gitHubAccount && (
            <a
              href={`https://github.com/${contactInfo.gitHubAccount}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-tertiary rounded-lg text-white hover:bg-purple-500 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
