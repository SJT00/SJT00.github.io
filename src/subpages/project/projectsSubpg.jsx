import React, { useState } from "react";
import { Col, Row, Button, ButtonGroup } from "react-bootstrap";
import ConstructionToast from "./tabs/components/constructionToast";
import { toZonedTime } from "date-fns-tz";
import "./projectsSubpg.scss";
import cardData, { cardTags } from "./cards/cardData";
import CardContainer from "./tabs/cardContainer";
import DevLogList from "./devlogs/devlogslist";

export const datesInStyle = date => {
  return (
    <span
      style={{
        fontStyle: "italic",
      }}
    >
      {date.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "long",
        day: "numeric",

        timeZone: "UTC",
      })}
    </span>
  );
};

export default function Work() {
  const tabs = ["🌐 Full Stack", "🔬 Learning", "🗂️ All"];

  const [activeTab, setActiveTab] = useState(0);
  const lastUpdated = toZonedTime(new Date("2025-04-9"), "America/New_York");

  let tagMap = new Map();

  cardData.forEach(card => {
    card.tags.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, []);
      }
      tagMap.get(tag).push(card);
    });
  });

  const getRelevantCards = currTab => {
    if (currTab === 0) {
      return tagMap.get(cardTags.fullStack);
    } else if (currTab === 1) {
      return tagMap.get(cardTags.learning);
    } else {
      return [
        ...tagMap.get(cardTags.fullStack),
        ...tagMap.get(cardTags.learning),
      ];
    }
  };

  return (
    <Row xs={1} id="work">
      <ConstructionToast />
      <Col
        style={{
          maxWidth: "900px",
          minHeight: "600px",
          paddingBottom: "45px",
        }}
      >
        <Row
          style={{
            display: "flex",
            borderBottom: "1px solid #dee2e6",
            alignItems: "flex-end",
            marginBottom: "5px",
            boxSizing: "border-box",
            width: "100%",
            justifySelf: "center",
          }}
        >
          <h4 style={{ width: "initial", paddingLeft: 0 }}>Showcase:</h4>
          <span
            style={{
              paddingRight: 0,
              width: "initial",
              fontSize: "75%",
              fontStyle: "italic",
              marginLeft: "auto",
            }}
          >
            As of {datesInStyle(lastUpdated)}
          </span>
        </Row>
        <Row style={{ justifySelf: "center" }}>
          <ButtonGroup aria-label="Project Categories">
            {tabs.map((tab, idx) => (
              <Button
                key={"category button tab " + idx}
                variant={"outline-light"}
                active={activeTab === idx}
                onClick={() => {
                  setActiveTab(idx);
                }}
              >
                {tab}
              </Button>
            ))}
          </ButtonGroup>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContainer currentViewing={getRelevantCards(activeTab)} />
          <Col
            xs={12}
            style={{
              marginTop: "5px",
            }}
          >
            <p>
              These are some of the projects I've worked on—ranging from
              personal experiments to enterprise-level products.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            borderBottom: "1px solid #dee2e6",
            alignItems: "flex-end",
            marginBottom: "5px",
            boxSizing: "border-box",
            width: "100%",
            justifySelf: "center",
          }}
        >
          <h4 style={{ width: "initial", paddingLeft: 0 }}>Dev Logs:</h4>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={12}>
            <p>
              Below you'll find my software journey, here I log my project
              updates, document my implementation and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"
                target="_blank"
                rel="noreferrer"
              >
                rubber ducky
              </a>{" "}
              my solutions.
            </p>
          </Col>
        </Row>
        <DevLogList />
      </Col>
    </Row>
  );
}
