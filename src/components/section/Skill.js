import React from "react";

export default function Skill() {
  return (
    <>
      <div className="skill">
        <h2>{"Skills"}</h2>
        <div className="info-frame">
          <div className="section">
            <div className="left"></div>
            <ul className="right">
              <li>JavaScript / JQuery</li>
              <li>React / Redux </li>
              <li>GraphQL API / RESTful API</li>
              <li>Html5 / CSS / SCSS /Bootstrap</li>
              <li>Node.js / Jest </li>
              <li> GitHub / npm </li>
              <li>MySQL / MongoDB</li>
              <li>SERN stack / MERN stack </li>
            </ul>
          </div>
        </div>
        <p className="line right"></p>
      </div>
    </>
  );
}
