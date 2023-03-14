import React, { useState } from "react";
import { Tooltip, Col, Row } from "react-bootstrap";
import "./projectsSubpg.scss";

import Budgie from "./tabs/budgie";
import Token from "./tabs/token";
import SpaceInvaders from "./tabs/spaceInvaders";
import FlashFightingGame from "./tabs/flashFightingGame";

export default function Work() {
  const [index, setIndex] = useState(0);
  const total = 4;
  const tooltip = txt => <Tooltip>{txt}</Tooltip>; // Hover Tooltip
  const goLeft = () => {
    if (index > 0) setIndex(index - 1);
  };
  const goRight = () => {
    if (index < total - 1) setIndex(index + 1);
  };
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
          style={{ opacity: index === 0 ? "50%" : "100%" }}
          onClick={goLeft}
          onKeyDown={goLeft} // avoids accessibility warning
        />
        <span
          className="chevron right"
          style={{ opacity: index === total - 1 ? "50%" : "100%" }}
          onClick={goRight}
          onKeyDown={goRight}
        />
        {index === 0 && <Budgie popover={tooltip} />}
        {index === 1 && <Token popover={tooltip} />}
        {index === 2 && <SpaceInvaders popover={tooltip}/>}
        {index === 3 && <FlashFightingGame popover={tooltip} />}
      </Col>
    </Row>
  );
}
