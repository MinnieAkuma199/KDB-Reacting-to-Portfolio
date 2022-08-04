import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../images/Logo.png";

export default function Header() {
  return (
    <nav>
      <div className="menu">
        <a className="home" href="/">
          <img className="container" src={logo} alt="Logo" />
        </a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <a href="mailto:kristyndcb@gmail.com" target="blank">
              <AiOutlineMail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
