import React from "react";

import { OverlayTrigger, Col, Row, Tooltip } from "react-bootstrap";

import ascriptImg from "@images/Icons/Languages/ascript.png";
import mongoImg from "@images/Icons/Languages/mongodb.svg";
import expressImg from "@images/Icons/Languages/expressjs.png";
import reactImg from "@images/Icons/Languages/react.svg";
import nodeImg from "@images/Icons/Languages/nodejs.svg";
import htmlImg from "@images/Icons/Languages/html5.svg";
import cssImg from "@images/Icons/Languages/css3.svg";
import jscriptImg from "@images/Icons/Languages/Jscript.svg";
import gitImg from "@images/Icons/Languages/git.svg";
import pythonImg from "@images/Icons/Languages/python.svg";
import pygameImg from "@images/Icons/Languages/pygame.gif";

export default function techStackDisplay({ tools }) {
  const bindings = {
    Actionscript: ascriptImg,
    MongoDB: mongoImg,
    Express: expressImg,
    React: reactImg,
    NodeJS: nodeImg,
    "Html 5": htmlImg,
    Css: cssImg,
    Javascript: jscriptImg,
    Git: gitImg,
    Python: pythonImg,
    Pygame: pygameImg,
  };

  console.log(tools, typeof tools);

  return (
    <Row
      md={4}
      xs={6}
      sm={8}
      className="logos"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tools.map(item => (
        <Col>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="top"
            overlay={<Tooltip>{item} </Tooltip>}
          >
            <img
              src={bindings[item]}
              height="50"
              width="50"
              className="round_icon"
              alt={item}
            />
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}
