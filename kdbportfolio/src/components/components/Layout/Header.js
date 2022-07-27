import React from "react";

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
      <a href="mailto:kristyndcb@gmail.com" target="_blank" rel="noreferrer">
        kristyndcb@gmail.com
      </a>
    </nav>
  );
}
