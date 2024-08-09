import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default (
  { startDate } // Add startDate prop
) => {
  const formattedStartDate = new Date(startDate).toISOString().slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);
  const Wrapper = ({ color, children }) => {
    if (!color) return <>{children}</>;
    return <>{children}</>;
  };
  return (
    <GitHubCalendar
      username="SJT00"
      blockSize={10}
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      renderBlock={(b, a) => {
        let dayLabel = "";
        let color = "";
        if (a.date === today) {
          dayLabel = "Today";
          color = "#ff0000";
        } else if (a.date === formattedStartDate) {
          dayLabel = "Start Date";
          color = "#FFFF00";
        } else {
          dayLabel = new Date(a.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          });
        }
        const content = dayLabel + `: ${a.count} contributions`;
        return (
          <Wrapper color={color}>
            <Tippy
              content={content}
              placement="top"
              theme="translucent"
              animation="fade"
              duration={[0, 200]}
              inertia={true}
              arrow={true}
            >
              {b}
            </Tippy>
          </Wrapper>
        );
      }}
    />
  );
};
