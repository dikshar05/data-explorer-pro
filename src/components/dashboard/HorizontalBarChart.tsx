import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { hospitalCostData } from "@/data/hospitalData";
import { ChartCard } from "./ChartCard";

const COLORS = [
  "hsl(217, 91%, 60%)",
  "hsl(262, 83%, 58%)",
  "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(180, 70%, 45%)",
  "hsl(320, 70%, 55%)",
  "hsl(45, 93%, 47%)",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-popover p-3 shadow-lg border border-border">
        <p className="font-medium text-popover-foreground">{label}</p>
        <p className="text-sm text-primary font-semibold">
          ₹{(payload[0].value / 100000).toFixed(2)} Lakhs
        </p>
      </div>
    );
  }
  return null;
};

export const HorizontalBarChart = () => {
  const sortedData = [...hospitalCostData].sort(
    (a, b) => a.total_cost - b.total_cost
  );

  return (
    <ChartCard
      title="Cost Ranking by City"
      description="Horizontal view of hospital costs for easy comparison"
    >
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              horizontal={false}
            />
            <XAxis
              type="number"
              tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis
              type="category"
              dataKey="hospital_location"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={70}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }} />
            <Bar dataKey="total_cost" radius={[0, 6, 6, 0]}>
              {sortedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};
