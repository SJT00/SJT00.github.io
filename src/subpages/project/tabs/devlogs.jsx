import React from "react";
import { Row } from "react-bootstrap";
import DevLogList from "./components/devlogs/devlogslist";

export default function DevLogs({ logCompId, injectedParams }) {
  return (
    <>
      <Row>
        <p>
          Below you'll find my software journey, here I log my project updates,
          document my implementation and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"
            target="_blank"
            rel="noreferrer"
          >
            rubber ducky
          </a>{" "}
          my solutions.
        </p>
      </Row>
      <DevLogList myId={logCompId} slugId={injectedParams[logCompId]} />
    </>
  );
}
