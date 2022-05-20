import React, { useState } from "react";

import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav id="nav">
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("experience")}
        className={active === "experience" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active === "services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};

export default Nav;
