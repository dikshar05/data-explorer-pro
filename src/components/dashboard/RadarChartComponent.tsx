import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { regionalMetrics } from "@/data/hospitalData";
import { ChartCard } from "./ChartCard";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-popover p-3 shadow-lg border border-border min-w-[140px]">
        <p className="font-medium text-popover-foreground mb-2">
          {payload[0].payload.region}
        </p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const RadarChartComponent = () => {
  return (
    <ChartCard
      title="Hospital Performance Metrics"
      description="Multi-dimensional comparison of hospital capabilities"
    >
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={regionalMetrics}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis
              dataKey="region"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Radar
              name="Mumbai"
              dataKey="Mumbai"
              stroke="hsl(217, 91%, 60%)"
              fill="hsl(217, 91%, 60%)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Delhi"
              dataKey="Delhi"
              stroke="hsl(262, 83%, 58%)"
              fill="hsl(262, 83%, 58%)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Bangalore"
              dataKey="Bangalore"
              stroke="hsl(142, 71%, 45%)"
              fill="hsl(142, 71%, 45%)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Chennai"
              dataKey="Chennai"
              stroke="hsl(38, 92%, 50%)"
              fill="hsl(38, 92%, 50%)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend
              wrapperStyle={{ paddingTop: 20 }}
              iconType="circle"
              iconSize={8}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};
