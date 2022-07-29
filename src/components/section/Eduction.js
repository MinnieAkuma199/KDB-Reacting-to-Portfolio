import React from "react";

export default function Eduction() {
  return (
    <>
      <div className="education">
        <h2>Education</h2>
        <div className="info-frame">
          <div className="section">
            <div className="left">
              <p>2022</p>
            </div>
            <div className="right">
              <h5>
                Certification in Full Stack JavaScript Web Development Bootcamp
              </h5>
              <p>University of Denver</p>
              <p>Denver, CO</p>
            </div>
          </div>
          <div className="section">
            <div className="left">
              <p>2015 - 2019</p>
            </div>
            <div className="right">
              <h5>Bachelors in Integrative Physiology</h5>
              <p>University of Colorado - Boulder</p>
              <p>Boulder, CO</p>
            </div>
          </div>
          <div className="section">
            <div className="left">
              <p>2015 - 2019</p>
            </div>
            <div className="right">
              <h5>Minor in Sociology & Public Health Certificate</h5>
              <p>University of Colorado - Boulder</p>
              <p>Boulder, CO</p>
            </div>
          </div>
        </div>
        <p className="line right"></p>
      </div>
    </>
  );
}
