import React, { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import "./chart.scss";

const data = [
  {
    subject: "Technology",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "History",
    A: 100,
    fullMark: 100,
  },
  {
    subject: "Music",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "Food",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Movies",
    A: 85,
    fullMark: 100,
  },
  {
    subject: "Reading",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "Fitness",
    A: 85,
    fullMark: 100,
  },
];

export default function RadChart() {
  let wv = window.innerWidth;
  const [width, setWidth] = useState(wv < 830 ? wv - 30 : 750); //Subtract margins, natural width of 750 to 250 ratio
  window.addEventListener("resize", () => {
    // React to resizing
    wv = window.innerWidth;
    setWidth(wv < 830 ? wv - 30 : 750);
  });
  return (
    <RadarChart outerRadius={90} width={width} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={{ dy: 4 }} />
      {/* Ticks adjusted vertically by 4px down */}
      <PolarRadiusAxis
        axisLine={false}
        domain={[0, 100]}
        orientation="right"
        tick={false}
        label={{ position: "insideStart" }}
      />
      <Radar
        name="My Interests"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
