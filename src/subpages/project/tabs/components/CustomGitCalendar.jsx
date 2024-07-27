import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Import tippy.js styles

export default () => {
  const startDate = new Date("2024-07-29").toISOString().slice(0, 10);
  const calendarRef = useRef(null);
  useEffect(() => {
    // Add tooltips to calendar days courtesy of Chat GPT
    const addTooltips = () => {
      const calendarDays = document.querySelectorAll(
        ".react-activity-calendar rect"
      );

      calendarDays.forEach(day => {
        const date = day.getAttribute("data-date");
        if (!date) return;
        const count = day.getAttribute("data-level");
        const today = new Date().toISOString().slice(0, 10);
        let dayLabel = "";

        if (date === today) {
          day.setAttribute("data-today", "true");
          day.style.strokeWidth = "1px";
          day.style.stroke = "#ff0000";
          dayLabel = "Today";
        } else if (date === startDate) {
          dayLabel = "Start Date";
          day.setAttribute("data-start", "true");
          day.style.strokeWidth = "1px";
          day.style.stroke = "#7851A9";
        } else {
          dayLabel = new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          });
        }

        const content = dayLabel + `: ${count} contributions`;
        tippy(
          day, // vary based on the location of block
          {
            content,
            placement: "top",
            theme: "translucent",
            animation: "fade",
            duration: [0, 200],
            inertia: true,
            arrow: true,
          }
        );
      });
    };

    // Due to dynamic rendering, we need to observe the calendarRef element
    // Initialize tooltips when the calendar is rendered
    const observer = new MutationObserver(() => {
      addTooltips();
    });

    // Observe changes in the calendarRef element
    if (calendarRef.current) {
      observer.observe(calendarRef.current, { childList: true, subtree: true });
    }

    // Add tooltips initially
    addTooltips();

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  setTimeout(() => {
    const legend = document.querySelector(
      ".react-activity-calendar__legend-colors"
    );

    if (legend) {
      const todayText = document.createElement("span");
      todayText.innerText = "Today";
      todayText.style.marginLeft = "0.4em";
      legend.appendChild(todayText);
    }
  }, 3000);
  return (
    <div ref={calendarRef}>
      <GitHubCalendar
        username="SJT00"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
    </div>
  );
};
