import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree",
    years: "2005 - 2008",
    content: "Physics degree that started my passion for how things work.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "CTO / Developer",
    years: "2020 - Present",
    content:
      "Responsible for overall engineering, operations, IT, and security.",
  },
  {
    id: 2,
    title: "Solutions Engineering",
    years: "2020 - 2021",
    content: "Design and suggest wireless solutions for various applications",
  },
  {
    id: 3,
    title: "Sales",
    years: "2012 - 2021",
    content: "Experienced in SMB and Enterprise sales",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
