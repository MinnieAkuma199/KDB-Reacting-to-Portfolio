import React from "react";
import View from "../components/Layout/View";
import aboutImg from "../components/images/Minniepic.png";
import resume from "../components/images/Official-Resume.pdf";

export default function About() {
  return (
    <View>
      <div className="about-frame">
        <div className="left">
          <h1>About Me</h1>
          <img src={aboutImg} />
        </div>
        <div className="right">
          <p>
            Meet Kris! A Certified Full Stack Web Developer, with a
            certification from the University of Denver Coding Bootcamp. I have
            a Bachelors of Science from the University of Colorado-Boulder.{" "}
            <br />
            <br />
            🌱 Confident in JavaScript, SQL, GraphQL, Node, NoSQL, & React.🌱
            <br />
            <br />
            My passion lies in back end development but I can nail any part of
            the application necessary front or back! I love my pets, nature, &
            coding. I am a bubbly and hard-working addition to any team.
          </p>
          <a className="downloadBtn" href={resume} download>
            Download CV
          </a>
        </div>
      </div>
    </View>
  );
}
