import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Data/index.js";
import { fadeIn, textVariant } from "../utils/motion";

function ServiceCard({ title, icon }) {
  const [scale, setScale] = React.useState(1);
  function OnMouseEnter(e) {
    setScale(1.1);
  }
  function OnMouseLeave(e) {
    setScale(1);
  }
  return (
    <motion.div
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
      className=" flex items-center flex-col glass-container w-[250px] h-[200px] p-5 rounded-[20px] shadow-card  justify-center bg-radial from-[#00eeff00] to-[#01021e] hover:from-[#00a2ff86] hover:to-[#01021e] cursor-pointer"
      animate={{ scale: scale }}
    >
      <img src={icon} alt={title} className="w-16 h-16 object-contain " />
      <h3 className="text-white text-[20px] font-bold text-center mt-4">
        {title}
      </h3>
    </motion.div>
  );
}

const About = () => {
  return (
    <section className=" max-w-7xl mx-auto relative z-0 mt-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mx-auto text-center`}>
          About Me
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-lg max-w-3xl leading-[30px] m-auto text-center"
      >
        I am a Certified Unity Professional Programmer and experienced software
        engineer with 4 years of delivering clean, scalable code and
        well-designed architectures. I excel in collaborative environments,
        working effectively with cross-functional teams to achieve project
        goals. My passion for learning drives me to stay updated with the latest
        industry trends and continuously enhance my skill set.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard title={service.title} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

export default About;
