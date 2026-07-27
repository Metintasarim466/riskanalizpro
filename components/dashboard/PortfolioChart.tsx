"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { value: 420000 },
  { value: 470000 },
  { value: 510000 },
  { value: 620000 },
  { value: 590000 },
  { value: 700000 },
  { value: 830000 },
  { value: 980000 },
  { value: 1120000 },
  { value: 1248430 },
];

export default function PortfolioChart() {
  return (
    <div className="h-72 w-full">

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="color"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#22d3ee"
                stopOpacity={0.9}
              />

              <stop
                offset="100%"
                stopColor="#22d3ee"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <Area
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#color)"
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}