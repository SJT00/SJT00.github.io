import React from "react";
import { Col, Row, CardGroup } from "react-bootstrap";
import "./projectsSubpg.scss";

import Budgie from "./tabs/budgie";
import Token from "./tabs/token";
import SpaceInvaders from "./tabs/spaceInvaders";
import FlashFightingGame from "./tabs/flashFightingGame";
import WorkingOn from "./tabs/workingOn";

export default function Work() {
  return (
    <Row id="work">
      <Row>
        <Col style={{ maxWidth: "900px", minHeight: "600px" }}>
          <WorkingOn />
        </Col>
      </Row>
      <Row>
        <CardGroup>
          <Budgie />
          <Token />
          <SpaceInvaders />
          <FlashFightingGame />
        </CardGroup>
      </Row>
    </Row>
  );
}
