import React from "react";

import { Card } from "react-bootstrap";
import budgieImg from "@images/Cards/Budgie.png";

import TechStackDisplay from "./components/techStackDisplay";

export default function budgie(props) {
  return (
    <Card>
      <Card.Img variant="top" src={budgieImg} />
      <Card.Body className="blackFont">
        <Card.Title>Budgie</Card.Title>
        <Card.Text>
          A Visual Budgeting Application, made using the MERN stack. My first
          full stack Web-App, made in a Typescript environment.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <TechStackDisplay
          tools={[
            "React",
            "Express",
            "NodeJS",
            "MongoDB",
            "Html 5",
            "Css",
            "Javascript",
            "Git",
          ]}
        />
      </Card.Footer>
    </Card>
  );
}
