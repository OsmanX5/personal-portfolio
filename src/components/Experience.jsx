import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useResume } from "../context/ResumeContext";
import {
  riftDigitalLab,
  threeLinesXr,
  codeSudan,
  suMakers,
} from "../assets/Icons";

// Map company names to icons
const companyIconMap = {
  "3 Lines XR": threeLinesXr,
  "Rift Digital Lab": riftDigitalLab,
  "Code Sudan": codeSudan,
  "Sumakers LAB": suMakers,
};

// Helper function to format date
const formatDate = (startDate, endDate) => {
  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const start = formatMonthYear(startDate);
  const end =
    endDate && new Date(endDate) <= new Date()
      ? formatMonthYear(endDate)
      : "Present";

  return `${start} - ${end}`;
};

const WorkIcon = ({ icon, company_link }) => {
  function OpenWorkLink() {
    if (company_link) {
      window.open(company_link, "_blank");
    }
  }
  return (
    <div onClick={OpenWorkLink} className="hover:scale-120 cursor-pointer p-2">
      <img className="rounded-full" src={icon} alt={icon} />
    </div>
  );
};

function ExperienceCard({ experience }) {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{
          background: "linear-gradient(#01021e, #00a2ff86)",
          color: "#fff",
          borderRadius: "25px",
          boxShadow:
            "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={experience.date}
        iconStyle={{ background: `${experience.iconBg}`, color: "#fff" }}
        icon={
          <WorkIcon
            icon={experience.icon}
            company_link={experience.company_link}
          />
        }
      >
        <h3 className="vertical-timeline-element-title text-2xl">
          {experience.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-xl text-gray-400">
          {experience.company_name}
        </h4>
        <p className="text-gray-300 mt-2">{experience.description}</p>
      </VerticalTimelineElement>
    </>
  );
}

const Experience = () => {
  const { resumeData } = useResume();

  // Transform API experience data to match component format
  const experiences =
    resumeData?.experience?.map((exp) => ({
      title: exp.title,
      company_name: exp.companyName,
      company_link: "", // API doesn't provide this, you can add it later
      icon: companyIconMap[exp.companyName] || riftDigitalLab, // Use default icon if not found
      iconBg: "#fff",
      date: formatDate(exp.startDate, exp.endDate),
      description: exp.description,
    })) || [];

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
