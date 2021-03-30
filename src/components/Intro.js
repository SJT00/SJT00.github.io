import React from "react";
import { Col, Row } from "react-bootstrap";
import TypeWriter from "./typeWriter.js";
export default function Intro() {
  return (
    <>
      <Row>
        <Col>
          <TypeWriter style={{ marginLeft:"1%"}} text={["Hi","سالام","你好"]}/>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col />
        <Col>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Saad Jahanzeb Taj
              </h1>
              <img
                style={{ marginBottom: "40px" }}
                id="headshot"
                height="200px"
                width="200px"
                src="../../Headshot.jpg"
                alt="Great Picture of Me"
              />
            </Col>
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <a href="https://github.com/SJT00" target="_blank">
                <img
                  src="../../Icons/github.svg"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="My GitHub"
                  height="50"
                  width="50"
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
                  height="50"
                  width="50"
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
                  height="50"
                  width="50"
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
                  height="50"
                  width="50"
                  className="icon circle_icon"
                  alt="My Resume"
                />
              </a>
            </Col>
            <Col />
            <Col />
          </Row>
        </Col>
        <Col />
      </Row>
    </>
  );
}
