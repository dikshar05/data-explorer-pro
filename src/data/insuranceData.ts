export interface InsuranceDistribution {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

export interface InsuranceTrend {
  month: string;
  private: number;
  gov: number;
  selfPay: number;
}

export interface InsuranceByCityData {
  city: string;
  private: number;
  gov: number;
  selfPay: number;
  total: number;
}

export interface ClaimData {
  type: string;
  submitted: number;
  approved: number;
  rejected: number;
  pending: number;
  avgProcessingDays: number;
}

export interface CostByInsurance {
  category: string;
  private: number;
  gov: number;
  selfPay: number;
}

export interface InsuranceMetrics {
  type: string;
  avgClaim: number;
  coverageRate: number;
  satisfactionScore: number;
  renewalRate: number;
}

// Insurance distribution data from parquet
export const insuranceDistributionData: InsuranceDistribution[] = [
  { type: "Private", count: 18500, percentage: 45, color: "hsl(var(--chart-1))" },
  { type: "Government", count: 15200, percentage: 37, color: "hsl(var(--chart-2))" },
  { type: "Self-Pay", count: 7400, percentage: 18, color: "hsl(var(--chart-3))" },
];

// Monthly insurance trends
export const insuranceTrendData: InsuranceTrend[] = [
  { month: "Jan", private: 1450, gov: 1200, selfPay: 580 },
  { month: "Feb", private: 1520, gov: 1280, selfPay: 620 },
  { month: "Mar", private: 1580, gov: 1320, selfPay: 590 },
  { month: "Apr", private: 1490, gov: 1250, selfPay: 610 },
  { month: "May", private: 1620, gov: 1380, selfPay: 650 },
  { month: "Jun", private: 1550, gov: 1300, selfPay: 620 },
  { month: "Jul", private: 1680, gov: 1420, selfPay: 680 },
  { month: "Aug", private: 1720, gov: 1480, selfPay: 700 },
  { month: "Sep", private: 1590, gov: 1350, selfPay: 640 },
  { month: "Oct", private: 1540, gov: 1290, selfPay: 610 },
  { month: "Nov", private: 1610, gov: 1360, selfPay: 630 },
  { month: "Dec", private: 1650, gov: 1400, selfPay: 670 },
];

// Insurance by city
export const insuranceByCityData: InsuranceByCityData[] = [
  { city: "Mumbai", private: 3200, gov: 2500, selfPay: 1200, total: 6900 },
  { city: "Delhi", private: 3800, gov: 3200, selfPay: 1500, total: 8500 },
  { city: "Bangalore", private: 2900, gov: 1800, selfPay: 900, total: 5600 },
  { city: "Chennai", private: 2400, gov: 2100, selfPay: 800, total: 5300 },
  { city: "Kolkata", private: 1800, gov: 2200, selfPay: 700, total: 4700 },
  { city: "Hyderabad", private: 2200, gov: 1900, selfPay: 850, total: 4950 },
  { city: "Pune", private: 1400, gov: 1000, selfPay: 500, total: 2900 },
  { city: "Ahmedabad", private: 1200, gov: 900, selfPay: 450, total: 2550 },
];

// Claims data
export const claimsData: ClaimData[] = [
  { type: "Private", submitted: 4500, approved: 3800, rejected: 350, pending: 350, avgProcessingDays: 5 },
  { type: "Government", submitted: 3800, approved: 3200, rejected: 280, pending: 320, avgProcessingDays: 12 },
  { type: "Self-Pay", submitted: 1200, approved: 1100, rejected: 50, pending: 50, avgProcessingDays: 2 },
];

// Cost distribution by insurance type
export const costByInsuranceData: CostByInsurance[] = [
  { category: "Surgery", private: 850000, gov: 620000, selfPay: 280000 },
  { category: "ICU", private: 520000, gov: 480000, selfPay: 180000 },
  { category: "Pharmacy", private: 380000, gov: 350000, selfPay: 150000 },
  { category: "Diagnostics", private: 290000, gov: 260000, selfPay: 120000 },
  { category: "Consultation", private: 180000, gov: 160000, selfPay: 80000 },
  { category: "Room Charges", private: 420000, gov: 320000, selfPay: 140000 },
];

// Insurance metrics comparison
export const insuranceMetricsData: InsuranceMetrics[] = [
  { type: "Private", avgClaim: 45000, coverageRate: 85, satisfactionScore: 88, renewalRate: 78 },
  { type: "Government", avgClaim: 32000, coverageRate: 92, satisfactionScore: 75, renewalRate: 95 },
  { type: "Self-Pay", avgClaim: 28000, coverageRate: 0, satisfactionScore: 70, renewalRate: 0 },
];

// Summary statistics
export const insuranceSummaryStats = {
  totalPatients: 41100,
  privatePercentage: 45,
  govPercentage: 37,
  selfPayPercentage: 18,
  avgClaimAmount: 38500,
  claimApprovalRate: 87.2,
};
