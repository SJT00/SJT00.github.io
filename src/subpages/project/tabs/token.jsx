import React from "react";

import { Card } from "react-bootstrap";
import tokenImg from "@images/Cards/Token.png";

import TechStackDisplay from "./components/techStackDisplay";

export default function token(props) {
  return (
    <Card>
      <Card.Img variant="top" src={tokenImg} />
      <Card.Body className="blackFont">
        <Card.Title>Token</Card.Title>
        <Card.Text>
          A Sobriety Tracking Application I made during Hack the Valley. Made
          using React, Node and Express.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <TechStackDisplay
          tools={[
            "React",
            "Express",
            "NodeJS",
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
