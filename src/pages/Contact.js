import React from "react";
import View from "../components/Layout/View";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <View>
        <div className="title">
          <h1>Get In Touch</h1>
          <p>Looking forward to hearing from you!</p>
          <p></p>
        </div>
        <div className="contact-frame">
          <div className="left">
            <h2>Based In</h2>
            <p>Denver, CO (US)</p>
            <h2>Email</h2>
            <p>kristyndcb@gmail.com</p>
            <h2>Github</h2>
            <a href="https://github.com/MinnieAkuma199" target="blank">
              <AiFillGithub size={20} />
            </a>
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/kristyn-del-campo-banrevy-8060b2197/"
              target="blank"
            >
              <AiFillLinkedin size={20} />
            </a>
          </div>
        </div>
      </View>
    </>
  );
}
