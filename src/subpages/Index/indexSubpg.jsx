import React, { useState } from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./indexSubpg.scss";
//Imported Imgs
import gitImg from "@images/Icons/github.svg";
import linkedinImg from "@images/Icons/linkedin.svg";
import emailImg from "@images/Icons/mail.svg";
import resumeImg from "@images/Icons/resume.svg";
import resumeFile from "@images/Resume.pdf";
import headShot from "@images/Headshot.jpg";
export default function Intro() {
  var iWH = 40; // Icon width and Height
  const [isVisible, setVisible] = useState(true);
  return (
    <Row xs={1} id="intro">
      <Row>
        <Col className="welcometxt">
          {isVisible && (
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString("<h1>Hi<h1>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("<h1>سلام<h1>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("<h1>你好<h1>")
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    setTimeout(2500, setVisible(false));
                  })
                  .start();
              }}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col
          style={{ marginRight: "auto", marginLeft: "auto", maxWidth: "600px" }}
        >
          <Row>
            <Col>
              <h1
                id="title"
                style={{ textAlign: "center", marginBottom: "1ex" }}
              >
                Saad Jahanzeb Taj
              </h1>
            </Col>
          </Row>
          <Row xs={1} sm={2}>
            <Col style={{ zIndex: 1 }}>
              <img
                style={{ marginBottom: "1ex" }}
                id="headshot"
                height="200px"
                width="200px"
                src={headShot}
                alt="Great Pic of Me"
              />
              <Row
                id="links"
                style={{ paddingTop: "1ex", marginBottom: "1ex" }}
              >
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="left"
                    overlay={<Tooltip>My GitHub</Tooltip>}
                  >
                    <a
                      href="https://github.com/SJT00"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={gitImg}
                        height={iWH}
                        width={iWH}
                        className="icon circle_icon"
                        alt="My Github"
                      />
                    </a>
                  </OverlayTrigger>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="bottom"
                    overlay={<Tooltip>My Linkedin</Tooltip>}
                  >
                    <a
                      href="https://www.linkedin.com/in/saad-taj-b79024185"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={linkedinImg}
                        height={iWH}
                        width={iWH}
                        className="icon round_icon"
                        alt="My Linkedin"
                      />
                    </a>
                  </OverlayTrigger>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="bottom"
                    overlay={<Tooltip>My Email</Tooltip>}
                  >
                    <a href="mailto:saadtaj96@gmail.com">
                      <img
                        src={emailImg}
                        height={iWH}
                        width={iWH}
                        className="icon round_icon"
                        alt="My Email"
                      />
                    </a>
                  </OverlayTrigger>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="right"
                    overlay={<Tooltip>My Resume</Tooltip>}
                  >
                    <a href={resumeFile} target="_blank" rel="noreferrer">
                      <img
                        src={resumeImg}
                        height={iWH}
                        width={iWH}
                        className="icon circle_icon"
                        alt="My Resume"
                      />
                    </a>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
            <Col>
              <p id="desc">
                Honours Mathematics
                <br />@ The University of Waterloo
                <br />
                <br />
                Interested in:
                <br />
                <code>
                  ["Web", "App", "Game", "Mobile"]
                  <br />
                  .Development();
                </code>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}
