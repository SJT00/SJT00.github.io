import React from "react";

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

export default datesInStyle;
