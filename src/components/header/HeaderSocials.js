import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abhishek-bhandari-87b116233/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/abhi8779" target="_blank">
        <BsGithub />
      </a>
      <a href="http://instagram.com/abhi____009/?hl=en" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
