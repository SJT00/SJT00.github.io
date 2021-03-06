import React from "react";
import "../styles/global.scss";
import "../styles/starrynight.scss";
import { Container } from "react-bootstrap";
import headShot from "../../static/Headshot.jpg";

export default function Home() {
  return (
    <Container fluid={true}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <h1>Salam!</h1>
      <img className="circle_icon" height="150px" width="150px" src="../../Headshot.jpg" alt="Great Picture of Me"/>
    </Container>
  );
}
