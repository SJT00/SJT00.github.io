import React from "react";

import { Card } from "react-bootstrap";
import flashGameImg from "@images/Cards/N_Battle.png";

import TechStackDisplay from "./components/techStackDisplay";

export default function flashFightingGame(props) {
  return (
    <Card>
      <Card.Img variant="top" src={flashGameImg} />
      <Card.Body className="blackFont">
        <Card.Title>Flash Fighting Game</Card.Title>
        <Card.Text>
          A Fighting Game Demo I made using Adobe Flash, and it's scripting
          language Actionscript.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <TechStackDisplay tools={["Actionscript"]} />
      </Card.Footer>
    </Card>
  );
}
