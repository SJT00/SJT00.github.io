import React from "react";
import { Col, Row } from "react-bootstrap";
import Chart from "./components/chart.jsx";

export default function me() {
  return (
    <Col>
      <Row>
        <Chart />
      </Row>
      <Row>
      <p>
        I am an Honours Mathematics graduate from the University of Waterloo,
        with a passion for (and experience in) Computer Science.
        <br />
        <br />
        I love creating interactive applications, whether they be websites,
        games, organizational tools, or just fun projects to learn new
        technologies.
        <br />
        See more about my hobbies in the above tabs, but as a primer...
        <br />
        <br />
        I'm a history buff, tech tinkerer, fitness devotee, music addict,
        struggling reader, story telling enthusiast, and horrible cook.
      </p>
      </Row>
    </Col>
  );
}
