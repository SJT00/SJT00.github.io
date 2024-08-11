import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomGitCalendar from "./components/CustomGitCalendar";
import justStartDate from "./components/justStartDate";
import { toZonedTime } from "date-fns-tz";

export default () => {
  const blurStyle = {
    filter: "blur(6px)",
    userSelect: "none",
  };
  // Add Day for UTC to EST conversion
  const startDate = new Date(justStartDate); // Used for Git Calendar
  startDate.setDate(startDate.getDate() + 1); // Add days
  const lastUpdated = toZonedTime(new Date("2024-08-09"), "America/New_York");
  const datesInStyle = date => {
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
  return (
    <>
      <Row>
        <h4
          style={{
            border: "3px solid #d6d4d3",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Currently working on:{" "}
        </h4>
      </Row>
      <Row
      style={{
        justifyContent: "flex-end",
      }}
      >
        <span
          style={{
            fontSize: "75%",
            fontStyle: "italic",
          }}
        >
          Last updated on {datesInStyle(lastUpdated)}
        </span>
      </Row>
      <Row>
        <p>
          I am embarking on a journey to do some challenging CS projects based
          of this{" "}
          <a href="https://austinhenley.com/blog/challengingprojects.html">
            blog post
          </a>{" "}
          to help my lower-level understanding and intuition.
        </p>
        <p>
          I dedicate this segment to keeping myself accountable while committing
          to <b>3-4 Github contributions a week</b> (Starting&nbsp;
          <span
            style={{
              color: "#FFFF00",
            }}
          >
            {datesInStyle(justStartDate)}
          </span>
          ), here's my Git calendar, lets see how I do!
        </p>
      </Row>
      <Row>
        <CustomGitCalendar startDate={startDate} />
      </Row>
      <Row>
        <h5> Projects Pipeline</h5>
        <ol>
          <li>Making a Vim Style Text Editor with C++</li>
          <li style={blurStyle}>Making a Doom Style 3D Environment</li>
          <li style={blurStyle}>Building own language</li>
          <li style={blurStyle}>Building own OS</li>
        </ol>
      </Row>
      <p>Check out some of my past projects below!</p>
    </>
  );
};
