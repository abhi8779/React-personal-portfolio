import React from "react";
import IMG1 from "../../assets/Screenshot (104).png";
import IMG2 from "../../assets/Screenshot (105).png";
import IMG3 from "../../assets/Screenshot (108).png";
import IMG4 from "../../assets/Screenshot (107).png";
import IMG5 from "../../assets/Screenshot (106).png";
import IMG6 from "../../assets/Screenshot (109).png";

import "./portfolio.css";

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "Forkify Food Recipe App",
    github: "https://github.com/abhi8779/Foodify-Food-Ordering-App",
    demo: "https://forkify-recipe-app-abhi.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Mapty Real World Fitness Tracker🗺️",
    github: "https://github.com/abhi8779/Mapty-Fitness-Tracker-App",
    demo: "https://mapty-fitness-tracker.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Foodify Food Ordering React App",
    github: "https://github.com/abhi8779/Foodify-Food-Ordering-App",
    demo: "https://food-ordering-react-app-abhi.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Bankist Bank App",
    github: "https://github.com/abhi8779/Bankist-Bank-Advertisement-app",
    demo: "https://bankist-bank-app-abhishek.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto CUrrency Dashboard and Financial Visualization",
    github: "https://github.com/abhi8779/Expense-Tracker",
    demo: "https://expense-tracker-abhi.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Bank Money Flow Dashboard",
    github: "https://github.com/abhi8779/Bankist-Money-Transfer-App",
    demo: "bank-money-flow-dashboard.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectsData.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title}></img>
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-CTA">
                <a
                  href={project.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
