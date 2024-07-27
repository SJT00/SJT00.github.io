import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
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
    subject: "Games",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "Film",
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
  return (
    <ResponsiveContainer width="99%" height={250}>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ dy: 4 }} />
        {/* Ticks(Subject Titles) adjusted vertically by 4px down */}
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
        <Legend wrapperStyle={{ bottom: -5 }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
