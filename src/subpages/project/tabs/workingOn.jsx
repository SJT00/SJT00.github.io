import React from "react";
import { Form } from "react-bootstrap";
import CustomGitCalendar from "./components/CustomGitCalendar";

export default () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        borderRadius: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
      }}
    >
      <h4>Currently Working On:</h4>
      <p>In an effort to reignite my passion for programming, I am</p>

      <CustomGitCalendar />
      <span>
        <Form.Check type="radio" label="Start" />
      </span>
      <span>
        <Form.Check type="radio" label="Start" />
      </span>
      <span>
        <Form.Check type="radio" label="Start" />
      </span>
    </div>
  );
};
