import React from "react";
import View from "../components/Layout/View";
import homeImg from "../components/images/Minniepic.png";

export default function Home() {
  return (
    <View>
      <div className="home-frame">
        <img className="main-img" src={homeImg} alt="main-images" />
        <div className="right">
          {/* <h1>Kristyn Del Campo-Banrevy</h1> */}
          <p>
            Hiya! I'm Kristyn Del Campo-Banrevy. Welcome to my portfolio browse
            at your leisure!
          </p>
          {/* <a href="/portfolio">{`Click for Projects`}</a> */}
        </div>
      </div>
    </View>
  );
}
