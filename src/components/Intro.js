import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "./typewriter.scss";
import "./intro.scss";
//Imported Imgs
import gitImg from "../images/Icons/github.svg";
import linkedinImg from "../images/Icons/linkedin.svg";
import emailImg from "../images/Icons/mail.svg";
import resumeImg from "../images/Icons/resume.svg";
export default function Intro() {
  var iWH = 40; // Icon width and Height
  const popover = txt => <Tooltip>{txt}</Tooltip>; // Hover Tooltip
  return (
    <Row xs={1} id="intro">
      <Row id="welcometxt">
        <Col>
          <h1 className="typewriter" id="l2r1">
            {"Hi"}
          </h1>
          <h1 className="typewriter" dir="rtl" id="r2l">
            {"سالام"}
          </h1>
          <h1 className="typewriter" id="l2r2">
            {"你好"}
          </h1>
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
            <Col>
              <img
                style={{ marginBottom: "1ex" }}
                id="headshot"
                height="200px"
                width="200px"
                src="/Headshot.jpg"
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
                    overlay={popover("My GitHub")}
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
                    overlay={popover("My Linkedin")}
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
                    overlay={popover("My Email")}
                  >
                    <a href="mailto:sjahanze@uwaterloo.ca">
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
                    overlay={popover("My Resume")}
                  >
                    <a href=".\Resume.pdf" target="_blank" rel="noreferrer">
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
                <code className="typewriter" id="code">
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
