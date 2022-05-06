import React from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import Chart from "./chart";
import HistoryContent from "./tabs/history";
import ReadingContent from "./tabs/reading";
import MediaContent from "./tabs/media";
import TechnfitnessContent from "./tabs/technfitness";
import "./personal.scss";
export default function Personal() {
  return (
    <Row xs={1} id="personal">
      <Col style={{ maxWidth: "800px" }}>
        <Tabs>
          <Tab eventKey="home" title="Me">
            <Chart />
            <br />
            <p>
              I am an Honours Mathematics student at the University of Waterloo,
              with experience in Computer Science.
              <br />
              <br />
              I love creating interactive applications, whether they be
              websites, games, organizational tools, or just fun projects to
              learn new technologies.
              <br />
              See more about my hobbies in the above tabs, but as a primer...
              <br />
              <br />
              I'm a history buff, tech tinkerer, fitness devotee, music addict,
              struggling reader, story telling enthusiast, and horrible cook.
            </p>
          </Tab>
          <Tab eventKey="reading" title="Reading">
            <ReadingContent />
          </Tab>
          <Tab eventKey="history" title="History">
            <HistoryContent />
          </Tab>
          <Tab eventKey="media" title="Media">
            <MediaContent />
          </Tab>
          {/* <Tab eventKey="technfitness" title="Tech & Fitness">
            <TechnfitnessContent />
          </Tab> */}
        </Tabs>
      </Col>
      {/* Timeline Here */}
    </Row>
  );
}
