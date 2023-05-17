import React from "react";

import { OverlayTrigger, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import ascriptImg from "../../../images/Icons/Languages/ascript.png";

export default function flashFightingGame(props) {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Flash Fighting Game</h3>
      <a
        href="https://www.newgrounds.com/portal/view/651835"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          className="d-block w-75 mx-auto Carousel-Img"
          src="../../../images/Caraousel/N_Battle.png"
          layout="constrained"
          alt="Third slide"
        />
      </a>
      <div className="imgpar">
        Tech Stack:
        <Row xs={3} className="logos" style={{ maxWidth: "250px" }}>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="left"
              overlay={props.popover("ActionScript")}
            >
              <img
                src={ascriptImg}
                height="50"
                width="50"
                className="round_icon"
                alt="ActionScript"
              />
            </OverlayTrigger>
          </Col>
        </Row>
        <p>
          A Fighting Game Demo I made using Adobe Flash, and it's scripting
          language Actionscript.
          <br />
          <br />
          Sprites courtesy of the internet.
        </p>
      </div>
    </>
  );
}
