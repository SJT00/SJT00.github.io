import React from "react";
import { Form } from "react-bootstrap";
import CustomGitCalendar from "./components/CustomGitCalendar";
import justStartDate from "./components/justStartDate";

export default () => {
  const blurStyle = {
    filter: "blur(6px)",
    userSelect: "none",
  };
  const startDate = justStartDate;
  const lastUpdated = new Date("2024-08-09");
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4
        style={{
          border: "3px solid #d6d4d3",
          padding: "10px",
          borderRadius: "10px",
        }}
        >Currently working on: </h4>
        <span
          style={{
            fontSize: "75%",
            fontStyle: "italic",
          }}
        >
          Last updated on {datesInStyle(lastUpdated)}
        </span>
      </div>
      <p>
        I am embarking on a journey to do some challenging CS projects based of
        this{" "}
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
          {datesInStyle(startDate)}
        </span>
        ), Here is my Git calendar, lets see how I do!
      </p>

      <CustomGitCalendar startDate={startDate} />
      <div>
        <h5> Projects Pipeline</h5>
        <ol>
          <li>Making a Vim Style Text Editor with C</li>
          <li style={blurStyle}>Making a Doom Style 3D Environment</li>
          <li style={blurStyle}>Building own language</li>
          <li style={blurStyle}>Building own OS</li>
        </ol>
      </div>
      <p>Check out some past projects below!</p>
      <span
        style={{
          position: "absolute",
          transform: "rotate(-12deg)",
          right: 0,
          top: "66vh",
          color: "#EE4B2B",
          fontSize: "2rem",
          fontWeight: "500",
          border: "0.25rem solid #EE4B2B",
          display: "inline-block",
          padding: "0.25rem 1rem",
          textTransform: "uppercase",
          borderRadius: "1rem",
          fontFamily: "Courier",
          webkitMaskImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png')",
          zIndex: "100",
        }}
      >
        Under Construction
      </span>
    </>
  );
};
