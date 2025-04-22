import React, { useState, useEffect } from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import { toZonedTime } from "date-fns-tz";
import ConstructionToast from "./tabs/components/constructionToast";
import Showcase from "./tabs/showcase";
import DevLogs from "./tabs/devlogs";
import datesInStyle from "./tabs/components/datesInStyle";
import "./projectsSubpg.scss";

export default function Work() {
  const [tab, setTab] = useState("showcase");
  const lastUpdated = toZonedTime(new Date("2025-04-22"), "America/New_York");

  const [injectedParams, setInjectedParams] = useState({});
  const logCompId = "devlogs";

  const TABS = {
    showcase: { label: "Showcase", content: <Showcase /> },
    devlogs: {
      label: "Dev Logs",
      content: (
        <DevLogs logCompId={logCompId} injectedParams={injectedParams} />
      ),
    },
  };

  useEffect(() => {
    const handleHashChange = () => {
      const cleanHash = window.location.hash.slice(1).toLowerCase();
      const [hashId, hashParam] = cleanHash.split(":");
      if (!hashId || !TABS[hashId]) {
        setTab("showcase");
      } else {
        setTab(hashId);
        if (hashParam) {
          setInjectedParams(prev => ({ ...prev, [hashId]: hashParam }));
        }
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
    <Row xs={1} id="work">
      <ConstructionToast />
      <Col
        style={{
          maxWidth: "900px",
          minHeight: "600px",
          paddingBottom: "45px",
        }}
      >
        <Tabs activeKey={tab} onSelect={handleSelect}>
          {Object.entries(TABS).map(([key, { label, content }]) => (
            <Tab eventKey={key} title={label} key={`Tab: ${key}`}>
              {content}
            </Tab>
          ))}
          <Tab
            disabled
            title={
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
            }
          />
        </Tabs>
      </Col>
    </Row>
  );
}
