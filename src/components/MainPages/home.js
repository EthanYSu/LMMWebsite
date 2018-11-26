import React, { Component } from "react";

import Title from "../Home/title";
import MainDemo from "../Home/maindemo";
import CueVideos from "../Home/cuevideos";
import TeamMembers from "../Home/abouttheteam";
import Footer from "../Home/footer";
import "../../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="mainvideoclass">Demo</div>
        <MainDemo />
        <CueVideos
          cuenumber="1"
          cueName={"Squat Depth"}
          videoName1={"squatdeepdata.mp4"}
          videoName2={"squatnotdeepdata.mp4"}
          aboutCue1={"Something about Squat Depth 1."}
          aboutCue2={"Something about Squat Depth 2."}
        />
        <CueVideos
          cuenumber="2"
          cueName={"Shoulder Alignment"}
          videoName1={"shoulderaligndata.mp4"}
          videoName2={"shouldernotalignleftdata.mp4"}
          aboutCue1={"Something about Shoulder Alignment 1."}
          aboutCue2={"Something about Shoulder Alignment 2."}
        />
        <CueVideos
          cuenumber="3"
          cueName={"Feet Width"}
          videoName1={"good_width.mp4"}
          videoName2={"bad_width_wide.mp4"}
          aboutCue1={"Something about Feet Width 1."}
          aboutCue2={"Something about Feet Width 2."}
        />
        <div className="teamclass">Team Members</div>
        <TeamMembers />
        <Footer />
      </div>
    );
  }
}
