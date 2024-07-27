import React from "react";
import { Col, Row, CardGroup, Card } from "react-bootstrap";
import "./projectsSubpg.scss";

import Budgie from "./tabs/budgie";
import Token from "./tabs/token";
import SpaceInvaders from "./tabs/spaceInvaders";
import FlashFightingGame from "./tabs/flashFightingGame";

export default function Work() {
  return (
    <Row id="work">
      <Col>
        <CardGroup>
          <Budgie />
          <Token />
          <SpaceInvaders />
          <FlashFightingGame />
        </CardGroup>
      </Col>
    </Row>
  );
}
