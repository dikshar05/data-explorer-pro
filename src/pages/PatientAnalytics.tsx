import {
  Users,
  IndianRupee,
  Bed,
  Activity,
  TrendingUp,
  Clock,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  ComposedChart,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  ageDistributionData,
  departmentStats,
  severityData,
  costDistributionData,
  stayVsCostData,
  monthlyAdmissions,
  patientSummaryStats,
  patientRecords,
} from "@/data/patientData";

const COLORS = [
  "hsl(217, 91%, 60%)",
  "hsl(262, 83%, 58%)",
  "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(180, 70%, 45%)",
];

const SEVERITY_COLORS = {
  Low: "hsl(142, 71%, 45%)",
  Medium: "hsl(38, 92%, 50%)",
  High: "hsl(0, 84%, 60%)",
  Critical: "hsl(0, 62%, 40%)",
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-popover p-3 shadow-lg border border-border">
        <p className="font-medium text-popover-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' && entry.name?.includes('Cost') 
              ? `₹${entry.value.toLocaleString()}` 
              : entry.value?.toLocaleString?.() || entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PatientAnalytics = () => {
  const radialData = severityData.map((item, index) => ({
    ...item,
    fill: Object.values(SEVERITY_COLORS)[index],
  }));

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <StatCard
          title="Total Patients"
          value={patientSummaryStats.totalPatients.toLocaleString()}
          subtitle="This year"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Avg Treatment Cost"
          value={`₹${(patientSummaryStats.avgTreatmentCost / 1000).toFixed(1)}K`}
          subtitle="Per patient"
          icon={IndianRupee}
          trend={{ value: 5.2, isPositive: false }}
        />
        <StatCard
          title="Avg Hospital Stay"
          value={`${patientSummaryStats.avgHospitalStay} days`}
          subtitle="Average duration"
          icon={Bed}
          variant="success"
        />
        <StatCard
          title="Occupancy Rate"
          value={`${patientSummaryStats.occupancyRate}%`}
          subtitle="Current capacity"
          icon={Activity}
          trend={{ value: 3.8, isPositive: true }}
        />
        <StatCard
          title="Total Revenue"
          value={`₹${(patientSummaryStats.totalRevenue / 10000000).toFixed(1)} Cr`}
          subtitle="This year"
          icon={TrendingUp}
          variant="warning"
        />
        <StatCard
          title="Readmission Rate"
          value={`${patientSummaryStats.readmissionRate}%`}
          subtitle="30-day rate"
          icon={Clock}
          trend={{ value: 1.2, isPositive: false }}
        />
      </div>

      {/* Row 1: Age Distribution & Department Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Patient Age Distribution"
          description="Number of patients and average cost by age group"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={ageDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="ageGroup" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} />
                <YAxis yAxisId="left" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => `₹${v/1000}K`} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="count" name="Patient Count" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="avgCost" name="Avg Cost" stroke="hsl(262, 83%, 58%)" strokeWidth={3} dot={{ r: 5 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Department-wise Statistics"
          description="Patient distribution across hospital departments"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentStats} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} />
                <YAxis type="category" dataKey="department" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} axisLine={false} width={75} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="patients" name="Patients" radius={[0, 4, 4, 0]}>
                  {departmentStats.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Row 2: Severity & Cost Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard
          title="Case Severity Distribution"
          description="Patient classification by severity level"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={severityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="count"
                  nameKey="severity"
                  label={({ severity, percentage }) => `${severity}: ${percentage}%`}
                  labelLine={{ stroke: "hsl(var(--muted-foreground))" }}
                >
                  {severityData.map((entry) => (
                    <Cell key={entry.severity} fill={SEVERITY_COLORS[entry.severity as keyof typeof SEVERITY_COLORS]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Treatment Cost Distribution"
          description="Histogram of patient treatment costs"
          className="lg:col-span-2"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={1} />
                    <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="range" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Patients" fill="url(#costGradient)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Row 3: Scatter Plot & Monthly Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Hospital Stay vs Treatment Cost"
          description="Correlation between duration of stay and cost"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number" 
                  dataKey="days" 
                  name="Days" 
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                  label={{ value: 'Hospital Stay (Days)', position: 'bottom', offset: 0, fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis 
                  type="number" 
                  dataKey="cost" 
                  name="Cost" 
                  tickFormatter={(v) => `₹${v/1000}K`}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    name === 'Cost' ? `₹${value.toLocaleString()}` : value,
                    name
                  ]}
                  cursor={{ strokeDasharray: '3 3' }}
                />
                <Scatter 
                  name="Patients" 
                  data={stayVsCostData} 
                  fill="hsl(262, 83%, 58%)"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Monthly Admissions & Discharges"
          description="Patient flow throughout the year"
        >
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyAdmissions} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="admissionsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="dischargedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey="admissions" name="Admissions" stroke="hsl(217, 91%, 60%)" strokeWidth={2} fill="url(#admissionsGrad)" />
                <Area type="monotone" dataKey="discharged" name="Discharged" stroke="hsl(142, 71%, 45%)" strokeWidth={2} fill="url(#dischargedGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Row 4: Radial Bar & Patient Records Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Severity Gauge"
          description="Visual representation of case severity"
        >
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="30%" 
                outerRadius="90%" 
                data={radialData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  dataKey="count"
                  cornerRadius={10}
                  label={{ position: 'insideStart', fill: '#fff', fontSize: 11 }}
                />
                <Legend 
                  iconSize={10}
                  layout="horizontal"
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: 20 }}
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Recent Patient Records"
          description="Sample patient data from the dataset"
          className="lg:col-span-2"
        >
          <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-card">
                <tr className="border-b border-border">
                  <th className="px-3 py-2 text-left text-muted-foreground font-medium">ID</th>
                  <th className="px-3 py-2 text-left text-muted-foreground font-medium">Age</th>
                  <th className="px-3 py-2 text-left text-muted-foreground font-medium">Department</th>
                  <th className="px-3 py-2 text-right text-muted-foreground font-medium">Cost</th>
                  <th className="px-3 py-2 text-right text-muted-foreground font-medium">Stay</th>
                  <th className="px-3 py-2 text-left text-muted-foreground font-medium">Severity</th>
                </tr>
              </thead>
              <tbody>
                {patientRecords.map((patient) => (
                  <tr key={patient.patient_id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="px-3 py-2 font-mono text-xs">{patient.patient_id}</td>
                    <td className="px-3 py-2">{patient.age}</td>
                    <td className="px-3 py-2">{patient.department}</td>
                    <td className="px-3 py-2 text-right font-mono">₹{patient.treatment_cost.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right">{patient.hospital_stay_days}d</td>
                    <td className="px-3 py-2">
                      <span 
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${SEVERITY_COLORS[patient.severity as keyof typeof SEVERITY_COLORS]}20`,
                          color: SEVERITY_COLORS[patient.severity as keyof typeof SEVERITY_COLORS]
                        }}
                      >
                        {patient.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default PatientAnalytics;
