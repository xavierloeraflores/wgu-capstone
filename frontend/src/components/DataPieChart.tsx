"use client";
import { cn } from "@/lib/utils";
import { PieChart, Tooltip, Pie, ResponsiveContainer } from "recharts";

import { type PieChartDataPoint } from "@/types";

type PieChartProps = {
  data: PieChartDataPoint[];
};

export const DataPieChart: React.FC<PieChartProps & { className?: string }> = ({
  data,
  className = "",
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart id="data-Pie-chart" className={cn("", className)} width={300}>
        <Tooltip contentStyle={{ backgroundColor: "white", opacity: 0.9 }} />

        <Pie
          data={data}
          label={true}
          dataKey="value"
          nameKey="label"
          fill="currentColor"
          className="fill-primary"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
