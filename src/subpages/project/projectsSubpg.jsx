import React, { useState } from "react";
import { Col, Row, Button, ButtonGroup } from "react-bootstrap";
import ConstructionToast from "./tabs/components/constructionToast";
import { toZonedTime } from "date-fns-tz";
import "./projectsSubpg.scss";
import cardData, { cardTags } from "./cards/cardData";

import WorkingOn from "./tabs/workingOn";
import CardContainer from "./tabs/cardContainer";

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

export const tags = {
  fullStack: ["WeddingWebsite", "VCS"],
  learning: ["Minipad", "SpaceInvaders", "FlashFightingGame"],
  live: ["WeddingWebsite", "VCS"],
  construction: ["Minipad"],
};

export default function Work() {
  const tabs = ["🌐 Full Stack", "🔬 Learning", "🗂️ All"];

  const [activeTab, setActiveTab] = useState(0);
  const lastUpdated = toZonedTime(new Date("2025-02-25"), "America/New_York");

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
      <Col style={{ maxWidth: "900px", minHeight: "600px" }}>
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
          <h4>Showcase:</h4>
          <span
            style={{
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
        </Row>
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
      </Col>
    </Row>
  );
}
