import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useResume } from "../context/ResumeContext";

const Hero = () => {
  const { resumeData } = useResume();

  // Extract name and title from API data, with fallback values
  const name = resumeData?.header?.name || "Osman";
  const title = resumeData?.header?.title || "Software Engineer";

  return (
    <section className="relative max-w-7xl h-screen mx-auto mt-[100px]">
      {/* Hero container */}
      <div className="flex flex-row relative max-w-2xl z-[1] ">
        {/* Decorative elements */}
        <div className="flex flex-col items-center m-5">
          <div className="w-8 h-8 rounded-full bg-[#0291df] " />
          <div className="w-2 sm:h-80 h-40 bg-linear bg-linear-to-b from-[#0291df] to-[#002e4700]" />
        </div>
        {/** Hero text and subtext */}
        <div>
          <h1 className="text-7xl font-bold">
            Hi , I'm{" "}
            <span className="bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent text-underline">
              {name.split(" ")[0]}
            </span>
          </h1>
          <p className="mt-2 text-lg max-w-xl mt-5 h-[200px]">{title}</p>
        </div>
      </div>
      <div className="h-full relative top-[-300px] z-0">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
