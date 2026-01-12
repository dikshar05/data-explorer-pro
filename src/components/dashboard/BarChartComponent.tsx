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

const formatCurrency = (value: number) => {
  return `₹${(value / 100000).toFixed(1)}L`;
};

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

export const BarChartComponent = () => {
  const sortedData = [...hospitalCostData].sort(
    (a, b) => b.total_cost - a.total_cost
  );

  return (
    <ChartCard
      title="Total Cost by Hospital Location"
      description="Comparison of healthcare costs across major Indian cities"
    >
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="hospital_location"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }} />
            <Bar dataKey="total_cost" radius={[8, 8, 0, 0]}>
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
