import React, { Component } from "react";

import Title from "../Home/title";
import CueVideos from "../Home/cuevideos";
import "../../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="cueclass">Cues</div>
        <CueVideos />
      </div>
    );
  }
}
