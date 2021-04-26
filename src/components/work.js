import React from "react";
import { Col, Row } from "react-bootstrap";
import "./work.scss";
export default function Work() {
  return (
    <Row xs={1} id="work">
      <Col style={{ maxWidth: "800px" }}>
        <span className="chevron left" />
        <span className="chevron right" />
        <img
          className="d-block w-80 mx-auto"
          src="../../Caraousel/Budgie.png"
          alt="First slide"
        />
        {/*
            <ProjCarousel> 
            <img
              className="d-block w-100"
              src="../../Caraousel/Token.png"
              alt="Second slide"
            />
            <img
              className="d-block w-100"
              src="../../Caraousel/S_invaders.png"
              alt="Third slide"
            /> */}
      </Col>
    </Row>
  );
}
