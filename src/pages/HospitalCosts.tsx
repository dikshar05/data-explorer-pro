import {
  IndianRupee,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { BarChartComponent } from "@/components/dashboard/BarChartComponent";
import { LineChartComponent } from "@/components/dashboard/LineChartComponent";
import { PieChartComponent } from "@/components/dashboard/PieChartComponent";
import { AreaChartComponent } from "@/components/dashboard/AreaChartComponent";
import { RadarChartComponent } from "@/components/dashboard/RadarChartComponent";
import { HorizontalBarChart } from "@/components/dashboard/HorizontalBarChart";
import { DataTable } from "@/components/dashboard/DataTable";
import { summaryStats } from "@/data/hospitalData";

const HospitalCosts = () => {
  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Healthcare Cost"
          value={`₹${(summaryStats.totalCost / 10000000).toFixed(2)} Cr`}
          subtitle="Across all cities"
          icon={IndianRupee}
          trend={{ value: 12.5, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Average Cost per City"
          value={`₹${(summaryStats.avgCostPerCity / 100000).toFixed(2)}L`}
          subtitle="8 major cities"
          icon={Building2}
          trend={{ value: 8.2, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Highest Cost City"
          value={summaryStats.highestCost.city}
          subtitle={`₹${(summaryStats.highestCost.amount / 100000).toFixed(2)} Lakhs`}
          icon={TrendingUp}
          variant="warning"
        />
        <StatCard
          title="Total Patients Served"
          value={summaryStats.totalPatients.toLocaleString()}
          subtitle={`Avg ₹${summaryStats.avgPatientCost.toFixed(0)} per patient`}
          icon={Users}
          trend={{ value: 5.4, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BarChartComponent />
        <LineChartComponent />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PieChartComponent />
        <div className="lg:col-span-2">
          <AreaChartComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RadarChartComponent />
        <HorizontalBarChart />
      </div>

      {/* Data Table */}
      <div className="mb-8">
        <DataTable />
      </div>
    </div>
  );
};

export default HospitalCosts;
