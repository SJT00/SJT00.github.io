import React from "react";
import { Col, Row } from "react-bootstrap";
import "./typewriter.scss";
import "./intro.scss";
export default function Intro() {
  var iWH = 40; // Icon width and Height
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
        <Col style={{marginRight:"auto",marginLeft:"auto",maxWidth:"700px"}}>
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
          <Row sm={2}>
            <Col>
              <img
                style={{ marginBottom: "1ex" }}
                id="headshot"
                height="200px"
                width="200px"
                src="../../Headshot.jpg"
                alt="Great Picture of Me"
              />
              <Row id="links" style={{ marginBottom: "1ex" }}>
                <Col>
                  <a href="https://github.com/SJT00" target="_blank">
                    <img
                      src="../../Icons/github.svg"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="My GitHub"
                      height={iWH}
                      width={iWH}
                      className="icon circle_icon"
                      alt="My Github"
                    />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/in/saad-taj-b79024185"
                    target="_blank"
                  >
                    <img
                      src="../../Icons/linkedin.svg"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="My Linkedin"
                      height={iWH}
                      width={iWH}
                      className="icon round_icon"
                      alt="My Linkedin"
                    />
                  </a>
                </Col>
                <Col>
                  <a href="mailto:sjahanze@uwaterloo.ca">
                    <img
                      src="../../Icons/mail.svg"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="My Email"
                      height={iWH}
                      width={iWH}
                      className="icon round_icon"
                      alt="My Email"
                    />
                  </a>
                </Col>
                <Col>
                  <a href=".\assets\Resume.pdf" target="_blank">
                    <img
                      src="../../Icons/resume.svg"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="My Resume"
                      height={iWH}
                      width={iWH}
                      className="icon circle_icon"
                      alt="My Resume"
                    />
                  </a>
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
