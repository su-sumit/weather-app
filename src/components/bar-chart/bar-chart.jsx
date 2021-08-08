import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

export default function Chart({ data, metric, dateSelected }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis width={30} />
          <Tooltip />
          <Bar dataKey={metric} fill="#40E0D0" />
        </BarChart>
      </ResponsiveContainer>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "20px",
          textAlign: "center",
        }}
      >
        {dateSelected}
      </div>
    </>
  );
}
