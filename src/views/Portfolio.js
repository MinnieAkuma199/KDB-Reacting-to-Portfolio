import React from "react";
import View from "../components/Layout/View";
import eventListeners from "../components/images/Event-Listeners.gif";
import scrolloDeck from "../components/images/ScrolloDeck.gif";
import graphQL from "../components/images/Graphql-gif.gif";
import { AiOutlineLink } from "react-icons/ai/";
// import { FaGithub } from "react-icons/fa/";

export default function Portfolio() {
  return (
    <View>
      <div className="project-frame">
        <h1 className="title">Portfolio</h1>
        <div className="img">
          <img src={eventListeners} alt="functionality of website" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>Event Listeners</h3>
              <span>
                <a
                  href="https://du-event-listeners.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              </span>
            </div>
            <p>MERN stack application </p>
          </div>
        </div>
        <div className="img">
          <img src={scrolloDeck} alt="functionality of website" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>Scrollo Deck</h3>
              <span>
                <a
                  href="https://dry-crag-90231.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              </span>
            </div>
            <p>MERN stack application </p>
          </div>
        </div>
        <div className="img">
          <img src={graphQL} alt="functionality of website" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>Refactoring RESTful API to GraphQL</h3>
              <span>
                <a
                  href="https://restful-to-graphql.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              </span>
            </div>
            <p>refactoring google books api</p>
          </div>
        </div>
        {/* <div className="img">
          <img src={rosePro} alt="Rose-project images" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>Flores Rosa Emilia</h3>
              <span>
                <a
                  href="https://github.com/ollyhite/Flores-Rosa-Emilia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
            </div>
            <p>Online flower store</p>
          </div>
        </div>
        <div className="img">
          <img src={eventPro} alt="evets-project images" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>DU-Events-Listener</h3>
              <span>
                <a
                  href="https://github.com/ruxpin86/DU-Event-Listeners"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
            </div>
            <p>The Web can keep in touch, chat, share coding stuffs</p>
          </div> */}
        {/* </div> */}
        <p>© 2022 Kristyn D. ❤️ Website Productions</p>
      </div>
    </View>
  );
}
