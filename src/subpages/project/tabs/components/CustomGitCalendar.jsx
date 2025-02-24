import React from "react";
import { format, toZonedTime } from "date-fns-tz";
import GitHubCalendar from "react-github-calendar";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const customGitCalendar = (
  { startDate } // Add startDate prop
) => {
  const formattedStartDate = format(
    toZonedTime(new Date(startDate), "America/New_York"),
    "yyyy-MM-dd"
  );
  const today = format(
    toZonedTime(new Date(), "America/New_York"),
    "yyyy-MM-dd"
  );
  const breakDays = [
    {
      startDate: toZonedTime(new Date("2024-09-30"), "America/New_York"),
      endDate: toZonedTime(new Date("2024-10-06"), "America/New_York"),
    },
  ];

  const onABreak = date => {
    const curDate = toZonedTime(new Date(date), "America/New_York");
    return breakDays.some(
      val => curDate >= val.startDate && curDate <= val.endDate
    );
  };

  const selectSinceStartDate = contributions => {
    const daybefore = new Date(startDate);
    daybefore.setDate(daybefore.getDate() - 1);
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      return date >= daybefore;
    });
  };
  return (
    <GitHubCalendar
      username="SJT00"
      blockSize={10}
      transformData={selectSinceStartDate}
      weekStart={1}
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
        let shade = false;
        if (a.date === today) {
          dayLabel = "Today";
          color = "#ff0000";
        } else if (a.date === formattedStartDate) {
          dayLabel = "Start Date";
          color = "#FFFF00";
        } else if (onABreak(a.date)) {
          dayLabel = "Got Really Sick!";
          color = "#500075";
          shade = true;
        } else {
          dayLabel = toZonedTime(
            new Date(a.date),
            "America/New_York"
          ).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          });
        }
        const content = dayLabel + `: ${a.count} contributions`;
        const style = {
          stroke: color,
          strokeWidth: shade ? "" : "2px",
          fill: shade ? color : "",
        };
        const c = React.cloneElement(b, { style });
        return (
          <Tippy
            content={content}
            placement="top"
            theme="translucent"
            animation="fade"
            duration={[0, 200]}
            inertia={true}
            arrow={true}
          >
            {c}
          </Tippy>
        );
      }}
      labels={{
        totalCount: "{{count}} contributions so far",
      }}
      throwOnError={false}
      errorMessage="Github is experiencing an error at the moment"
    />
  );
};

export default customGitCalendar;
