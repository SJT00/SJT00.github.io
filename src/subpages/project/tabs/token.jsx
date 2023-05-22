import React from "react";

import { OverlayTrigger, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import expressImg from "@images/Icons/Languages/expressjs.png";
import reactImg from "@images/Icons/Languages/react.svg";
import nodeImg from "@images/Icons/Languages/nodejs.svg";
import htmlImg from "@images/Icons/Languages/html5.svg";
import cssImg from "@images/Icons/Languages/css3.svg";
import jscriptImg from "@images/Icons/Languages/Jscript.svg";
import gitImg from "@images/Icons/Languages/git.svg";

export default function token(props) {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Token</h3>
      <a href="https://github.com/SJT00/Token" target="_blank" rel="noreferrer">
        <StaticImage
          className="d-block mx-auto Carousel-Img"
          src="../../../images/Caraousel/Token.png"
          layout="constrained"
          alt="Second slide"
        />
      </a>
      <div className="imgpar">
        Tech Stack:
        <Row xs={5} className="logos">
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="bottom"
              overlay={props.popover("ExpressJS")}
            >
              <img
                src={expressImg}
                height="50px"
                width="80px"
                className="round_icon"
                alt="ExpressJS"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={props.popover("React")}
            >
              <img
                src={reactImg}
                height="50"
                width="70"
                className="round_icon"
                alt="React"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={props.popover("NodeJS")}
            >
              <img
                src={nodeImg}
                height="85"
                width="85"
                className="round_icon"
                alt="NodeJS"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={props.popover("HTML5")}
            >
              <img
                src={htmlImg}
                height="50"
                width="50"
                className="round_icon"
                alt="HTML5"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={props.popover("CSS3")}
            >
              <img
                src={cssImg}
                height="50"
                width="50"
                className="round_icon"
                alt="CSS3"
              />
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="top"
              overlay={props.popover("Javascript")}
            >
              <img
                src={jscriptImg}
                height="50"
                width="50"
                className="round_icon"
                alt="Javascript"
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
          A Sobriety Tracking Application I made during Hack the Valley. Made
          using React, Node and Express.
        </p>
      </div>
    </>
  );
}
