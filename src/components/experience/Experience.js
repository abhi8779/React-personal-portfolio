import React from "react";
import "./experience.css";
import { HiClipboardCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container ">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiClipboardCheck className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
