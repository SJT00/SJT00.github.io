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
    <Row xs={1} id="work">
      <Col style={{ maxWidth: "900px", minHeight: "600px" }}>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={10}>
            <WorkingOn />
          </Col>
        </Row>
        <Row
          className="previousProjects"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <CardGroup>
              <Budgie />
              <Token />
              <SpaceInvaders />
              <FlashFightingGame />
            </CardGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
