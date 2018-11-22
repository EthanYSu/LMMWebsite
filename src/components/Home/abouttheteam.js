import React, { Component } from "react";
import "../../css/abouttheteam.css";

import sam from "../../images/sKim.png";
import yam from "../../images/yam.png";
import eric from "../../images/eFriela.png";
import arvan from "../../images/aDas.png";
import ethan from "../../images/eSu.png";

export default class AboutTheTeam extends Component {
  render() {
    return (
      <div className="team-container">
        <div className="img-responsive team-row1">
          <img
            id="memberpic"
            src={sam}
            alt="sam"
            width="250px"
            height="250px"
          />
          <p id="memberinfo">Sam Kim - Team Lead</p>
        </div>
        <div className="img-responsive team-row1">
          <img
            id="memberpic"
            src={yam}
            alt="yam"
            width="250px"
            height="250px"
          />
          <p id="memberinfo">Nikhil Patil - Scribe</p>
        </div>
        <div className="img-responsive team-row1">
          <img
            id="memberpic"
            src={eric}
            alt="eric"
            width="250px"
            height="250px"
          />
          <p id="memberinfo">Eric Frielafert</p>
        </div>
        <div className="team-row2">
          <img
            id="memberpic1"
            src={arvan}
            alt="arvan"
            width="250px"
            height="250px"
          />
          <p id="memberinfo">Arvan Das</p>
        </div>
        <div className="team-row2">
          <img
            id="memberpic1"
            src={ethan}
            alt="ethan"
            width="250px"
            height="250px"
          />
          <p id="memberinfo">Ethan Su</p>
        </div>
      </div>
    );
  }
}
