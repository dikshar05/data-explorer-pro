import { ChartCard } from "@/components/dashboard/ChartCard";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Area,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import {
  MapPin,
  Activity,
  TrendingUp,
  Users,
  Bed,
  Heart,
  Building2,
  BarChart3,
} from "lucide-react";
import {
  regionalPerformanceData,
  cityComparisonData,
  efficiencyTrendData,
  resourceAllocationData,
  qualityMetricsData,
  capacityData,
  regionalSummaryStats,
} from "@/data/regionalData";

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
];

const RegionalInsights = () => {
  // Prepare scatter data for efficiency vs satisfaction
  const scatterData = regionalPerformanceData.map((item, index) => ({
    ...item,
    z: item.bedOccupancy,
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Regional Insights</h2>
        <p className="text-muted-foreground">
          Comprehensive analysis of hospital performance across major Indian cities
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Cities Analyzed"
          value={regionalSummaryStats.totalCities.toString()}
          icon={MapPin}
          trend={{ value: 0, isPositive: true }}
          subtitle="Major metro cities"
        />
        <StatCard
          title="Avg Efficiency"
          value={`${regionalSummaryStats.avgEfficiency}%`}
          icon={TrendingUp}
          trend={{ value: 3.2, isPositive: true }}
          subtitle="Across all regions"
        />
        <StatCard
          title="Total Bed Capacity"
          value={regionalSummaryStats.totalBedCapacity.toLocaleString()}
          icon={Bed}
          trend={{ value: 8.5, isPositive: true }}
          subtitle="All hospitals combined"
        />
        <StatCard
          title="Avg Satisfaction"
          value={`${regionalSummaryStats.avgSatisfaction}%`}
          icon={Heart}
          trend={{ value: 2.1, isPositive: true }}
          subtitle="Patient satisfaction rate"
        />
      </div>

      {/* First Row - Stacked Bar & Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Patient Type Distribution by City"
          description="Breakdown of inpatient, outpatient, emergency, and surgery cases"
        >
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={cityComparisonData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="city" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="inpatient" stackId="a" fill="hsl(var(--chart-1))" name="Inpatient" />
              <Bar dataKey="outpatient" stackId="a" fill="hsl(var(--chart-2))" name="Outpatient" />
              <Bar dataKey="emergency" stackId="a" fill="hsl(var(--chart-3))" name="Emergency" />
              <Bar dataKey="surgery" stackId="a" fill="hsl(var(--chart-4))" name="Surgery" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Quality Metrics Comparison"
          description="Multi-dimensional quality analysis by city"
        >
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={qualityMetricsData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="city" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" fontSize={10} domain={[70, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Radar name="Quality Score" dataKey="qualityScore" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} />
              <Radar name="Patient Safety" dataKey="patientSafety" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Second Row - Line Chart & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Efficiency Trends Over Time"
          description="Monthly efficiency scores for top 4 cities"
        >
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={efficiencyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[75, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="mumbai" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} name="Mumbai" />
              <Line type="monotone" dataKey="bangalore" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} name="Bangalore" />
              <Line type="monotone" dataKey="delhi" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} name="Delhi" />
              <Line type="monotone" dataKey="hyderabad" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={false} name="Hyderabad" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Resource Allocation"
          description="Distribution of resources across categories"
        >
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={resourceAllocationData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
                label={({ category, value }) => `${category}: ${value}%`}
                labelLine={false}
              >
                {resourceAllocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Third Row - Scatter & Composed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Efficiency vs Satisfaction Analysis"
          description="Bubble size represents bed occupancy rate"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number" 
                dataKey="efficiency" 
                name="Efficiency" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                domain={[80, 100]}
                label={{ value: 'Efficiency %', position: 'bottom', offset: -5 }}
              />
              <YAxis 
                type="number" 
                dataKey="satisfaction" 
                name="Satisfaction" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                domain={[78, 95]}
                label={{ value: 'Satisfaction %', angle: -90, position: 'insideLeft' }}
              />
              <ZAxis type="number" dataKey="z" range={[100, 500]} name="Bed Occupancy" />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number, name: string) => [value, name]}
                labelFormatter={(label) => scatterData.find(d => d.efficiency === label)?.city || ''}
              />
              <Scatter name="Cities" data={scatterData}>
                {scatterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Bed Capacity Overview"
          description="Total vs occupied beds by city"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={capacityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="city" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-45} textAnchor="end" height={70} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="totalBeds" fill="hsl(var(--chart-1))" name="Total Beds" opacity={0.8} />
              <Bar dataKey="occupiedBeds" fill="hsl(var(--chart-2))" name="Occupied" />
              <Line type="monotone" dataKey="icuBeds" stroke="hsl(var(--chart-4))" strokeWidth={2} name="ICU Beds" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Fourth Row - Performance Table */}
      <ChartCard
        title="Regional Performance Summary"
        description="Detailed metrics for all cities"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">City</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Efficiency</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Satisfaction</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Readmission %</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Avg Wait (min)</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Bed Occupancy</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Staff Ratio</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {regionalPerformanceData.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    {row.city}
                  </td>
                  <td className="text-right py-3 px-4 text-foreground">{row.efficiency}%</td>
                  <td className="text-right py-3 px-4 text-foreground">{row.satisfaction}%</td>
                  <td className="text-right py-3 px-4">
                    <span className={row.readmissionRate <= 4.5 ? "text-green-500" : "text-amber-500"}>
                      {row.readmissionRate}%
                    </span>
                  </td>
                  <td className="text-right py-3 px-4 text-foreground">{row.avgWaitTime} min</td>
                  <td className="text-right py-3 px-4 text-foreground">{row.bedOccupancy}%</td>
                  <td className="text-right py-3 px-4 text-foreground">{row.staffRatio}:1</td>
                  <td className="text-center py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.efficiency >= 90
                          ? "bg-green-500/20 text-green-500"
                          : row.efficiency >= 85
                          ? "bg-amber-500/20 text-amber-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {row.efficiency >= 90 ? "Excellent" : row.efficiency >= 85 ? "Good" : "Needs Improvement"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default RegionalInsights;
