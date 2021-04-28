import React, { useState, useEffect } from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "./typewriter.scss";
import "./intro.scss";
export default function Intro() {
  var iWH = 40; // Icon width and Height
  const popover = txt => <Tooltip>{txt}</Tooltip>; // Hover Tooltip
  const firstLoad = () => {
    //Returns true if first ever visit to pg()
    if (sessionStorage.getItem("animPlayed") == null) {//Might change to localStorage
      return true;
    } else {
      return false;
    }
  };
  const [animPlayed, setanimPlayed] = useState(true);//Bad naming should be not Anim Played
  const testing = false;//Always set this to false before hosting
  useEffect(() => {//Check if first visit
    setanimPlayed(firstLoad());
  });//Hides welcometxt if return visitor
  setTimeout(
    ()=>{
      sessionStorage.setItem("animPlayed", false)
    },12000);//Store animation being played after its over
  return (
    <Row xs={1} id="intro">
      <Row id="welcometxt" style={{ opacity: animPlayed||testing ? "" : "0" }}>
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
                alt="Great Picture of Me"
              />
              <Row id="links" style={{ marginBottom: "1ex" }}>
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="left"
                    overlay={popover("My GitHub")}
                  >
                    <a href="https://github.com/SJT00" target="_blank">
                      <img
                        src="/Icons/github.svg"
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
                    >
                      <img
                        src="/Icons/linkedin.svg"
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
                        src="/Icons/mail.svg"
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
                    <a href=".\assets\Resume.pdf" target="_blank">
                      <img
                        src="/Icons/resume.svg"
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
