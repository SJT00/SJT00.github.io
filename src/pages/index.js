import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.scss";
import "../styles/starrynight.scss";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="h-100">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <h1>NavbarPlchldr</h1>
      <Row style={{marginTop:"10%"}}>
        <Col/>
        <Col>
          <h1 style={{ textAlign: "center" }}>Salam!</h1>
          <Row style={{marginBottom:"30px"}}>
          <img
            className="headshot"
            height="150px"
            width="150px"
            src="../../Headshot.jpg"
            alt="Great Picture of Me"
          />
          </Row>
          <Row >
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
          </Row>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
}
