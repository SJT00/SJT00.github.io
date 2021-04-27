import React, { useState } from "react";
import { OverlayTrigger, Tooltip, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "./work.scss";
export default function Work() {
  const [index, setIndex] = useState(0);
  const total = 3;
  const popover = txt => <Tooltip>{txt}</Tooltip>; // Hover Tooltip
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
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        />
        <span
          className="chevron right"
          style={{ opacity: index === total - 1 ? "50%" : "100%" }}
          onClick={() => {
            if (index < total - 1) {
              setIndex(index + 1);
            }
          }}
        />
        {index === 0 && (
          <>
            <h3 style={{ textAlign: "center" }}>Budgie</h3>
            <StaticImage
              className="d-block mx-auto Carousel-Img"
              src="../../static/Caraousel/Budgie.png"
              layout="constrained"
              alt="First slide"
            />
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
                      src="../../Icons/Languages/mongodb.svg"
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
                      src="../../Icons/Languages/expressjs.png"
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
                      src="../../Icons/Languages/react.svg"
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
                      src="../../Icons/Languages/nodejs.svg"
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
                      src="../../Icons/Languages/html5.svg"
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
                      src="../../Icons/Languages/css3.svg"
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
                      src="../../Icons/Languages/Jscript.svg"
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
                      src="../../Icons/Languages/git.svg"
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
            <StaticImage
              className="d-block mx-auto Carousel-Img"
              src="../../static/Caraousel/Token.png"
              layout="constrained"
              alt="Second slide"
            />
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
                      src="../../Icons/Languages/expressjs.png"
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
                      src="../../Icons/Languages/react.svg"
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
                      src="../../Icons/Languages/nodejs.svg"
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
                      src="../../Icons/Languages/html5.svg"
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
                      src="../../Icons/Languages/css3.svg"
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
                      src="../../Icons/Languages/Jscript.svg"
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
                      src="../../Icons/Languages/git.svg"
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
            <StaticImage
              className="d-block w-75 mx-auto Carousel-Img"
              src="../../static/Caraousel/S_invaders.png"
              layout="constrained"
              alt="Third slide"
            />
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
                      src="../../Icons/Languages/python.svg"
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
                      src="../../Icons/Languages/pygame.gif"
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
                      src="../../Icons/Languages/git.svg"
                      height={50}
                      width="50"
                      className="round_icon"
                      alt="Git"
                    />
                  </OverlayTrigger>
                </Col>
              </Row>
              <p>
              A Space Invader clone I made using python and its library pygame.
              Can be played with a keyboard, as well as a custom controller.
              <br />
              <br />
              Sprites and font courtesy of the internet.
              </p>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
}
