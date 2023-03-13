import React, { useState } from "react";
import { OverlayTrigger, Tooltip, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "./work.scss";
//Imported Imgs
import mongoImg from "../images/Icons/Languages/mongodb.svg";
import expressImg from "../images/Icons/Languages/expressjs.png";
import reactImg from "../images/Icons/Languages/react.svg";
import nodeImg from "../images/Icons/Languages/nodejs.svg";
import htmlImg from "../images/Icons/Languages/html5.svg";
import cssImg from "../images/Icons/Languages/css3.svg";
import jscriptImg from "../images/Icons/Languages/Jscript.svg";
import gitImg from "../images/Icons/Languages/git.svg";
import pythonImg from "../images/Icons/Languages/python.svg";
import pygameImg from "../images/Icons/Languages/pygame.gif";
import ascriptImg from "../images/Icons/Languages/ascript.png";

export default function Work() {
  const [index, setIndex] = useState(0);
  const total = 4;
  const popover = txt => <Tooltip>{txt}</Tooltip>; // Hover Tooltip
  const goLeft = () => {
    if (index > 0) setIndex(index - 1);
  };
  const goRight = () => {
    if (index < total - 1) setIndex(index + 1);
  };
  return (
    <Row xs={1} id="work">
      <Col style={{ maxWidth: "800px" }}>
        <span
          className="d-block"
          style={{ textAlign: "center", marginBottom: "0.5%" }}
        >
          {"(Slide: " + (index + 1) + "/" + total + ")"}
        </span>
        <span
          className="chevron left"
          style={{ opacity: index === 0 ? "50%" : "100%" }}
          onClick={goLeft}
          onKeyDown={goLeft} // avoids accessibility warning
        />
        <span
          className="chevron right"
          style={{ opacity: index === total - 1 ? "50%" : "100%" }}
          onClick={goRight}
          onKeyDown={goRight}
        />
        {index === 0 && (
          <>
            <h3 style={{ textAlign: "center" }}>Budgie</h3>
            <a
              href="https://github.com/SJT00/budgie"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="d-block mx-auto Carousel-Img"
                src="../images/Caraousel/Budgie.png"
                layout="constrained"
                alt="First slide"
              />
            </a>
            <div className="imgpar">
              Tech Stack:
              <Row xs={6} sm={8} className="logos">
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="left"
                    overlay={popover("MongoDB")}
                  >
                    <img
                      src={mongoImg}
                      height="50"
                      width="50"
                      className="round_icon"
                      alt="MongoDB"
                    />
                  </OverlayTrigger>
                </Col>
                <Col>
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="bottom"
                    overlay={popover("ExpressJS")}
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
                    overlay={popover("React")}
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
                    overlay={popover("NodeJS")}
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
                    overlay={popover("HTML5")}
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
                    overlay={popover("CSS3")}
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
                    overlay={popover("Javascript")}
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
                    overlay={popover("Git")}
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
                A Visual Budgeting Application, made using the MERN stack. My
                first full stack Web-App, made in a Typescript environment.
              </p>
            </div>
          </>
        )}
        {index === 1 && (
          <>
            <h3 style={{ textAlign: "center" }}>Token</h3>
            <a
              href="https://github.com/SJT00/Token"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="d-block mx-auto Carousel-Img"
                src="../images/Caraousel/Token.png"
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
                    overlay={popover("ExpressJS")}
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
                    overlay={popover("React")}
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
                    overlay={popover("NodeJS")}
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
                    overlay={popover("HTML5")}
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
                    overlay={popover("CSS3")}
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
                    overlay={popover("Javascript")}
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
                    overlay={popover("Git")}
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
                A Sobriety Tracking Application I made during Hack the Valley.
                Made using React, Node and Express.
              </p>
            </div>
          </>
        )}
        {index === 2 && (
          <>
            <h3 style={{ textAlign: "center" }}>Space Invaders</h3>
            <a
              href="https://github.com/SJT00/SpaceInvaders"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="d-block w-75 mx-auto Carousel-Img"
                src="../images/Caraousel/S_invaders.png"
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
                    overlay={popover("Python")}
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
                    overlay={popover("Pygame")}
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
                    overlay={popover("Git")}
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
                A Space Invader clone I made using python and its library
                pygame. Can be played with a keyboard, as well as a custom
                controller.
                <br />
                <br />
                Sprites and font courtesy of the internet.
              </p>
            </div>
          </>
        )}
        {index === 3 && (
          <>
            <h3 style={{ textAlign: "center" }}>Flash Fighting Game</h3>
            <a
              href="https://www.newgrounds.com/portal/view/651835"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="d-block w-75 mx-auto Carousel-Img"
                src="../images/Caraousel/N_Battle.png"
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
                    overlay={popover("ActionScript")}
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
                A Fighting Game Demo I made using Adobe Flash, and it's
                scripting language Actionscript.
                <br />
                <br />
                Sprites courtesy of the internet.
              </p>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
}
