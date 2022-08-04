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
            <p>
              After login, app allows its users to interact with resources,
              events, a forum, and a live chat feature.
            </p>
            <p>
              Tools: JavaScript React, socket.io, MongoDB, GraphQL, Bootstrap,
              bcrypt, Express, CSS
            </p>
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
            <p>
              After login, app allows user to filter through db to find
              traditional games based on party size.{" "}
            </p>
            <p>
              Tools: mySQL, Handlebars, Node, Express, RESTful API, bcrypt,
              Bulma, JavaScript, HTML{" "}
            </p>
          </div>
        </div>
        <div className="img">
          <img src={graphQL} alt="functionality of website" />
          <p className="shadow"></p>
          <div className="project-info">
            <div className="title-frame">
              <h3>GetYourBooksHere</h3>
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
            <p>
              Refactored RESTful API to GraphQL to cut down on amount fetched
              through Google Books API.After login, users are able to search for
              books, add & delete books to the user's page.
            </p>
            <p>
              Tools: GraphQL, React, Express, Apollo, Mongoose, HTML, CSS,
              JavaScript, Bootstrap, bcrypt
            </p>
          </div>
        </div>
      </div>
    </View>
  );
}
