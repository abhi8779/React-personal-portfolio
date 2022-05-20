import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a herf="#" className="footer__logo">
        Abhishek Bhandari
      </a>
      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Abhishek Bhandari. Copyright @107 & 2022. Any illegal
          reproduction of this content will result in immediate legal action.
          This website features materials protected by the Fair Use guidelines
          of Section 107 of the Copyright Act. All rights reserved to the
          copyright owners AB_
        </small>
      </div>
    </footer>
  );
};

export default Footer;
