import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Web Designing</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Email development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>UI Creation</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Responsive Web Pages</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Business advertisement Websites</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Personal Portfolio Websites</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Single Page Applications(React app)</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Multiple-page applications</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Blog Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Blogs on porgraming languages</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Blogs on new tech</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>bolgs on new web dev features</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>bologs on project ideas</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Dev */}
      </div>
    </section>
  );
};

export default Services;
