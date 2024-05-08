"use client";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { type DataPoint } from "@/types";

type BarChartProps = {
  data: DataPoint[];
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export const DataBarChart: React.FC<BarChartProps & { className?: string }> = ({
  data,
  className = "",
  xAxisLabel = "",
  yAxisLabel = "",
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        id="data-bar-chart"
        className={cn("text-black", className)}
        data={data}
        width={300}
      >
        <XAxis dataKey="label" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip
          formatter={(value) => [value, yAxisLabel]}
          labelFormatter={(label) => `${xAxisLabel}: ${label}`}
          contentStyle={{ backgroundColor: "white", opacity: 0.9 }}
        />

        <Bar
          dataKey="value"
          radius={[4, 4, 0, 0]}
          fill="currentColor"
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
