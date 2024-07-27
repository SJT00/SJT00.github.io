import React from "react";

import { Card } from "react-bootstrap";
import sInvadersImg from "@images/Cards/S_Invaders.png";

import TechStackDisplay from "./components/techStackDisplay";

export default function spaceInvaders(props) {
  return (
    <Card>
      <Card.Img variant="top" src={sInvadersImg} />
      <Card.Body className="blackFont">
        <Card.Title>Space Invaders</Card.Title>
        <Card.Text>
          A Space Invader clone I made using python and its library pygame. Can
          be played with a keyboard, as well as a custom controller.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <TechStackDisplay tools={["Python", "Pygame", "Git"]} />
      </Card.Footer>
    </Card>
  );
}
