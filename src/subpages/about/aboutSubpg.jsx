import React, { useEffect, useState } from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import MeContent from "./tabs/me";
import ReadingContent from "./tabs/reading";
import HistoryContent from "./tabs/history";
import MediaContent from "./tabs/media";
import "./aboutSubpg.scss";

const TABS = {
  me: { label: "Me", content: <MeContent /> },
  history: { label: "History", content: <HistoryContent /> },
  media: { label: "Media", content: <MediaContent /> },
  reading: { label: "Reading", content: <ReadingContent /> },
};

export default function Personal() {
  const [tab, setTab] = useState("me");
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      if (!hash || !TABS[hash]) {
        setTab("me");
      } else {
        setTab(hash);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelect = key => {
    if (!TABS[key]) return;
    setTab(key);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${key}`);
    }
  };

  return (
    <Row xs={1} id="personal">
      <Col style={{ maxWidth: "900px", minHeight: "600px" }}>
        <Tabs activeKey={tab} onSelect={handleSelect}>
          {Object.entries(TABS).map(([key, { label, content }]) => (
            <Tab eventKey={key} title={label} key={`Tab: ${key}`}>
              {content}
            </Tab>
          ))}
        </Tabs>
      </Col>
    </Row>
  );
}
