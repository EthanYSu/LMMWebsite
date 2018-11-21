import React, { Component } from "react";
import VideoPlayer from "react-simple-video-player";
import "../../css/cuevideos.css";
import squatdepth1 from "../../videos/squatdeepdata.mp4";
export default class CueVideos extends Component {
  render() {
    return (
      <div>
        <section className="cuesection">
          <div className="indivcue">
            <div id="cuename">Squat Depth</div>
            <video
              id="cuevideo1"
              src={squatdepth1}
              type="video\mp4"
              autoPlay
              loop
              muted
            />
            <div id="aboutcue1">Something about Squat Depth</div>
          </div>
        </section>
      </div>
    );
  }
}
