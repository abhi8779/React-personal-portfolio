import React from "react";

import ME2 from "../../assets/Picsart_22-05-20_22-21-52-954.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="me2"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small> 3+ Clients </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I am a software developer who loves to bring ideas to life through
            programming.
          </p>
          <p>
            I’ve always been a great problem solver, an independent introvert,
            and a technophile obsessed with the latest devices. Today, I’m a
            software engineer with CS degree , And I get to show off all these
            elements of who I am. I started learning to code when I was at 1st
            year, though it was always more of a hobby than a career focus.
            After a college education in IT, and continuing to pursue that
            hobby, I realized software engineering was the right field for me.
            Since then, I’ve worked on countless freelance projects and have
            been involved with a handful of Experienced devs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
