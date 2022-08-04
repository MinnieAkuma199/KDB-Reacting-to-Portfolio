import React from "react";
import View from "../components/Layout/View";
import aboutImg from "../components/images/Minniepic.png";
import resume from "../components/images/Official-Resume.pdf";

export default function About() {
  return (
    <View>
      <div className="about-frame">
        <div className="left">
          <h1>About Kris</h1>
          <img src={aboutImg} />
        </div>
        <div className="right">
          <p>
            {/* HIYA! My name is Kristyn but I go by Kris. I am a full stack web
            developer leveraging a Bachelors from the University of
            Colorado-Boulder with a medical and customer-oriented background to
            build the best user experience on the web. Certificate from the
            University of Denver in full stack web development, with newly
            developed skills in JavaScript, Express, Jest, Node, React, MERN &
            SERN stack, restful APIs and GraphQL. Skilled in meeting deadlines
            and learning quickly and efficiently. Passionate about approaching
            programming challenges from different angles and collaborating with
            team members to create the best web application experience for both
            the user and the client. I’m excited to leverage my skills as part
            of a fast-paced, quality-driven team to build better experiences on
            the web. I have a passion for back end development but I feel
            comfortable working whatever part of the application front or back
            that is in need! */}
            I am a Full Stack Web Developer, with a certification from the
            University of Denver Coding Bootcamp. I have a Bachelors of Science
            from the University of Colorado-Boulder. Confident in React, MERN
            stack, SERN stack, & JavaScript. My passion lies in back end
            development but I can nail any part of the program necessary front
            or back! I love my pets, nature, and coding. I am a bubbly and
            hard-working addition to any team.
          </p>
          <a className="downloadBtn" href={resume} download>
            Download CV
          </a>
        </div>
      </div>
    </View>
  );
}
