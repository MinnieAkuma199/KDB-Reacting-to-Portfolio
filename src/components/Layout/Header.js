import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  return (
    <nav>
      <div className="menu">
        <a className="home" href="/">
          Kristyn D-B.
        </a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <a
              href="mailto:kristyndcb@gmail.com"
              target="blank"
              // rel="noreferrer"
            >
              <AiOutlineMail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
