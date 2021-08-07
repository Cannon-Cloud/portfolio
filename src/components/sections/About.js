import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Clarence",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I am Clarence Cannon, a jack of all trades in sales and engineering. I have rich experience in web site design, building applications and customization. I also have a background in sales",
};

const progressData = [
  {
    id: 1,
    title: "MEAN Development",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "MERN Development",
    percantage: 80,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "React Native",
    percantage: 80,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "IoT",
    percantage: 95,
    progressColor: "#6C6CE5",
  },
  {
    id: 5,
    title: "Security",
    percantage: 90,
    progressColor: "#6C6CE5",
  },
  {
    id: 6,
    title: "Solution Selling",
    percantage: 85,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 30,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 5,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
