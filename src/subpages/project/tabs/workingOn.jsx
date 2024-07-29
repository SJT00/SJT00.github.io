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
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        padding: "20px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <h4>Accountability</h4>
      <p>
        I am embarking on a journey to do some challenging projects based of
        this{" "}
        <a href="https://austinhenley.com/blog/challengingprojects.html">
          blog post
        </a>{" "}
        that can help my lower-level programming understanding and intuition.
        <br /> To keep myself accountable I will record them here along with any
        notes or modifications that may arise (hence the "Under Construction")
        while committing to <b>3-4 Github contributions a week</b>{" "}
        (Starting&nbsp;
        <span
          style={{
            color: "#FFFF00",
          }}
        >
          {startDate.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "long",
            day: "numeric",

            timeZone: "UTC",
          })}
        </span>
        ), Here is my Git calendar, lets see how I do!
      </p>

      <CustomGitCalendar startDate={startDate} />
      <div>
        <h5> Projects Pipeline</h5>
        <ol>
          <li>Making a Vim Style Text Editor with C++</li>
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
    </div>
  );
};
