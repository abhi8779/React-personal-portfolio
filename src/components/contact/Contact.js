import { MdOutlineAttachEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_w7q5smn",
      "template_99s1yt3",
      form.current,
      "KuXtdmhWIJF2VMBim"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAttachEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>profabhi51513@Gmail.com</h5>
            <a href="mailto:profabhi51513@Gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abhi Shek</h5>
            <a href="https://m.me/abhishek.bhabdari/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>877-983-5728</h5>
            <a
              href="https:/api.whatsapp.com/send?phone=8779835728"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF contact option */}
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmailHandler}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
