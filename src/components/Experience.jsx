import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../Data";

const WorkIcon = ({ icon, company_link }) => {
  function OpenWorkLink() {
    window.open(company_link, "_blank");
  }
  return (
    <div onClick={OpenWorkLink} className="hover:scale-120 cursor-pointer p-2">
      <img className="rounded-full" src={icon} alt={icon} />
    </div>
  );
};

function ExperienceCard({ experience }) {
  console.log(experience.iconBg);
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
        {experience.points.map((point, index) => (
          <ul key={`experience-point-${index}`}>
            <li className="m-2">
              <div className="w-2 h-2 rounded-full bg-white inline-block mr-2" />
              <span>{point}</span>
            </li>
          </ul>
        ))}
      </VerticalTimelineElement>
    </>
  );
}
const Experience = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
