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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
} from "recharts";
import {
  Shield,
  Users,
  FileCheck,
  TrendingUp,
  Building2,
  CreditCard,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  insuranceDistributionData,
  insuranceTrendData,
  insuranceByCityData,
  claimsData,
  costByInsuranceData,
  insuranceMetricsData,
  insuranceSummaryStats,
} from "@/data/insuranceData";

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const InsuranceAnalytics = () => {
  // Prepare radar data
  const radarData = [
    { metric: "Avg Claim (K)", Private: 45, Government: 32, SelfPay: 28 },
    { metric: "Coverage %", Private: 85, Government: 92, SelfPay: 0 },
    { metric: "Satisfaction", Private: 88, Government: 75, SelfPay: 70 },
    { metric: "Renewal %", Private: 78, Government: 95, SelfPay: 0 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Insurance Analytics</h2>
        <p className="text-muted-foreground">
          Analysis of patient insurance types and claim patterns
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Patients"
          value={insuranceSummaryStats.totalPatients.toLocaleString()}
          icon={Users}
          trend={{ value: 5.4, isPositive: true }}
          subtitle="Across all insurance types"
        />
        <StatCard
          title="Private Insurance"
          value={`${insuranceSummaryStats.privatePercentage}%`}
          icon={Shield}
          trend={{ value: 2.1, isPositive: true }}
          subtitle="Of total patients"
          variant="primary"
        />
        <StatCard
          title="Avg Claim Amount"
          value={`₹${(insuranceSummaryStats.avgClaimAmount / 1000).toFixed(1)}K`}
          icon={CreditCard}
          trend={{ value: 8.3, isPositive: true }}
          subtitle="Per patient"
          variant="success"
        />
        <StatCard
          title="Claim Approval Rate"
          value={`${insuranceSummaryStats.claimApprovalRate}%`}
          icon={CheckCircle2}
          trend={{ value: 1.5, isPositive: true }}
          subtitle="Successfully processed"
          variant="warning"
        />
      </div>

      {/* First Row - Pie Chart & Trend Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Insurance Distribution"
          description="Patient count by insurance type"
        >
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={insuranceDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
                paddingAngle={4}
                dataKey="count"
                label={({ type, percentage }) => `${type}: ${percentage}%`}
              >
                {insuranceDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [value.toLocaleString(), "Patients"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Monthly Insurance Trends"
          description="Patient admissions by insurance type over time"
        >
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={insuranceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="private" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} name="Private" />
              <Area type="monotone" dataKey="gov" stackId="1" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} name="Government" />
              <Area type="monotone" dataKey="selfPay" stackId="1" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.6} name="Self-Pay" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Second Row - City Bar & Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Insurance by City"
          description="Distribution across major cities"
        >
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={insuranceByCityData}>
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
              <Bar dataKey="private" fill="hsl(var(--chart-1))" name="Private" />
              <Bar dataKey="gov" fill="hsl(var(--chart-2))" name="Government" />
              <Bar dataKey="selfPay" fill="hsl(var(--chart-3))" name="Self-Pay" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Insurance Metrics Comparison"
          description="Multi-dimensional comparison of insurance types"
        >
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Radar name="Private" dataKey="Private" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} />
              <Radar name="Government" dataKey="Government" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Third Row - Cost Distribution & Claims Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Cost Distribution by Insurance"
          description="Healthcare costs breakdown by category and insurance type"
        >
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costByInsuranceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
              <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={90} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`₹${(value / 100000).toFixed(2)}L`, ""]}
              />
              <Legend />
              <Bar dataKey="private" fill="hsl(var(--chart-1))" name="Private" />
              <Bar dataKey="gov" fill="hsl(var(--chart-2))" name="Government" />
              <Bar dataKey="selfPay" fill="hsl(var(--chart-3))" name="Self-Pay" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Claims Processing Status"
          description="Submitted vs approved vs rejected claims"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={claimsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="submitted" fill="hsl(var(--chart-1))" name="Submitted" opacity={0.8} />
              <Bar dataKey="approved" fill="hsl(var(--chart-2))" name="Approved" />
              <Bar dataKey="rejected" fill="hsl(var(--chart-4))" name="Rejected" />
              <Line type="monotone" dataKey="avgProcessingDays" stroke="hsl(var(--chart-5))" strokeWidth={3} name="Avg Days" yAxisId={0} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Claims Summary Table */}
      <ChartCard
        title="Insurance Performance Summary"
        description="Detailed metrics by insurance type"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Submitted</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Approved</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Rejected</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Pending</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Approval Rate</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Avg Processing</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {claimsData.map((row, index) => {
                const approvalRate = ((row.approved / row.submitted) * 100).toFixed(1);
                return (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      {row.type}
                    </td>
                    <td className="text-right py-3 px-4 text-foreground">{row.submitted.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-green-500">{row.approved.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-red-500">{row.rejected.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-amber-500">{row.pending.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">
                      <span className={Number(approvalRate) >= 85 ? "text-green-500" : "text-amber-500"}>
                        {approvalRate}%
                      </span>
                    </td>
                    <td className="text-right py-3 px-4 text-foreground flex items-center justify-end gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {row.avgProcessingDays} days
                    </td>
                    <td className="text-center py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          Number(approvalRate) >= 90
                            ? "bg-green-500/20 text-green-500"
                            : Number(approvalRate) >= 80
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {Number(approvalRate) >= 90 ? "Excellent" : Number(approvalRate) >= 80 ? "Good" : "Review"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default InsuranceAnalytics;
