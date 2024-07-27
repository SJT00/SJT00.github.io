import React from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import MeContent from "./tabs/me";
import ReadingContent from "./tabs/reading";
import HistoryContent from "./tabs/history";
import MediaContent from "./tabs/media";
import "./aboutSubpg.scss";

export default function Personal() {
  let lastTab = "home";
  try {
    if (localStorage.getItem("lastTab"))
      lastTab = localStorage.getItem("lastTab");
  } catch (e) {
    console.log(e);
  }
  return (
    <Row xs={1} id="personal">
      <Col style={{ maxWidth: "900px", minHeight: "600px" }}>
        <Tabs
          defaultActiveKey={lastTab}
          onSelect={key => {
            try {
              localStorage.setItem("lastTab", key);
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <Tab eventKey="home" title="Me">
            <MeContent />
          </Tab>
          <Tab eventKey="history" title="History">
            <HistoryContent />
          </Tab>
          <Tab eventKey="media" title="Media">
            <MediaContent />
          </Tab>
          <Tab eventKey="reading" title="Reading">
            <ReadingContent />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}
