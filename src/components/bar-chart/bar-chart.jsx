import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

export default function Chart({ data, metric }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="time" />
        <YAxis width={30} />
        <Tooltip />
        <Bar dataKey={metric} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
