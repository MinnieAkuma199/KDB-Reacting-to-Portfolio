import React from "react";
import View from "../components/Layout/View";
import Eduction from "../components/section/Eduction";

import Skill from "../components/section/Skill";
import resume from "../components/images/Official-Resume.pdf";

export default function Resume() {
  return (
    <View>
      <div className="resume-frame">
        <div className="title-frame">
          <h1 className="title">Resume</h1>
          <a className="downloadBtn" href={resume} download>
            Download CV
          </a>
        </div>
        <Eduction />
        <Skill />
      </div>
    </View>
  );
}
