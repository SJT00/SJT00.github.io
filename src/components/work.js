import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import "./work.scss";
export default function Work() {
  const [index, setIndex] = useState(0);
  const total = 3;
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
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        />
        <span
          className="chevron right"
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
              className="d-block mx-auto"
              src="../../static/Caraousel/Budgie.png"
              layout="constrained"
              alt="First slide"
            />
            <p className="imgpar">
              A Visual Budgeting Application, made using the MERN stack. My
              first full stack Web-App, made in a Typescript environment.
            </p>
          </>
        )}
        {index === 1 && (
          <>
            <h3 style={{ textAlign: "center" }}>Token</h3>
            <StaticImage
              className="d-block mx-auto"
              src="../../static/Caraousel/Token.png"
              layout="constrained"
              alt="Second slide"
            />
            <p className="imgpar">
              A Sobriety Tracking Application I made during Hack the Valley.
              Made using React, Node and Express.
            </p>
          </>
        )}
        {index === 2 && (
          <>
            <h3 style={{ textAlign: "center" }}>Space Invaders</h3>
            <StaticImage
              className="d-block w-75 mx-auto"
              src="../../static/Caraousel/S_invaders.png"
              layout="constrained"
              alt="Third slide"
            />
            <p className="imgpar">
              A Space Invader clone I made using python and its library pygame.
              Can be played with a keyboard, as well as a custom controller.
              <br />
              <br />
              Sprites and font courtesy of the internet.
            </p>
          </>
        )}
      </Col>
    </Row>
  );
}
