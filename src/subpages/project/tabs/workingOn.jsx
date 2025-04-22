import React from "react";
import { Row } from "react-bootstrap";
import CustomGitCalendar from "./components/CustomGitCalendar";
import { datesInStyle } from "./components/datesInStyle";

export default function WorkingOn() {
  const blurStyle = {
    filter: "blur(6px)",
    userSelect: "none",
  };
  const startDate = new Date("2024-07-29");
  startDate.setDate(startDate.getDate() + 1); // Add day for UTC to EST conversion
  return (
    <>
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
          to <b>2-3 Github contributions a week</b> (Starting&nbsp;
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
      <Row
        style={{
          marginTop: "10px",
        }}
      >
        <h5>Projects Pipeline</h5>
        <ol>
          <li>Making a Vim Style Text Editor with C++</li>
          <li style={blurStyle}>Making a Doom Style 3D Environment</li>
          <li style={blurStyle}>Building own language</li>
          <li style={blurStyle}>Building own OS</li>
        </ol>
      </Row>
      <Row>
        <h5>Bonus</h5>
        <ol>
          <li style={blurStyle}>Wedding Website</li>
          <li style={blurStyle}>Finally finish Shatranj</li>
          <li style={blurStyle}>Dragoman</li>
        </ol>
      </Row>
      <p>Check out some of my past projects below!</p>
    </>
  );
}
