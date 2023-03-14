import React from "react";

import { OverlayTrigger, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import gitImg from "../../../images/Icons/Languages/git.svg";
import pythonImg from "../../../images/Icons/Languages/python.svg";
import pygameImg from "../../../images/Icons/Languages/pygame.gif";

export default function spaceInvaders(props) {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Space Invaders</h3>
      <a
        href="https://github.com/SJT00/SpaceInvaders"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          className="d-block w-75 mx-auto Carousel-Img"
          src="../../../images/Caraousel/S_invaders.png"
          layout="constrained"
          alt="Third slide"
        />
      </a>
      <div className="imgpar">
        Tech Stack:
        <Row xs={3} className="logos">
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="left"
              overlay={props.popover("Python")}
            >
              <img
                src={pythonImg}
                height="50"
                width="50"
                className="round_icon"
                alt="Python"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="bottom"
              overlay={props.popover("Pygame")}
            >
              <img
                src={pygameImg}
                height="100px"
                width="100px"
                className="round_icon"
                alt="Pygame"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="right"
              overlay={props.popover("Git")}
            >
              <img
                src={gitImg}
                height={50}
                width="50"
                className="round_icon"
                alt="Git"
              />
            </OverlayTrigger>
          </Col>
        </Row>
        <p>
          A Space Invader clone I made using python and its library pygame. Can
          be played with a keyboard, as well as a custom controller.
          <br />
          <br />
          Sprites and font courtesy of the internet.
        </p>
      </div>
    </>
  );
}
