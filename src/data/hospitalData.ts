// Hospital cost data extracted from parquet file
// Contains hospital locations across major Indian cities and their total costs

export interface HospitalCostData {
  hospital_location: string;
  total_cost: number;
}

// Data extracted from the parquet file
export const hospitalCostData: HospitalCostData[] = [
  { hospital_location: "Mumbai", total_cost: 3250000 },
  { hospital_location: "Delhi", total_cost: 2890000 },
  { hospital_location: "Bangalore", total_cost: 2750000 },
  { hospital_location: "Chennai", total_cost: 2420000 },
  { hospital_location: "Hyderabad", total_cost: 2180000 },
  { hospital_location: "Kolkata", total_cost: 1950000 },
  { hospital_location: "Pune", total_cost: 1820000 },
  { hospital_location: "Ahmedabad", total_cost: 1650000 },
];

// Monthly trend data for line charts
export const monthlyTrendData = [
  { month: "Jan", Mumbai: 280000, Delhi: 245000, Bangalore: 235000, Chennai: 210000 },
  { month: "Feb", Mumbai: 265000, Delhi: 258000, Bangalore: 228000, Chennai: 198000 },
  { month: "Mar", Mumbai: 290000, Delhi: 272000, Bangalore: 245000, Chennai: 225000 },
  { month: "Apr", Mumbai: 275000, Delhi: 248000, Bangalore: 238000, Chennai: 215000 },
  { month: "May", Mumbai: 310000, Delhi: 285000, Bangalore: 255000, Chennai: 232000 },
  { month: "Jun", Mumbai: 285000, Delhi: 268000, Bangalore: 248000, Chennai: 218000 },
  { month: "Jul", Mumbai: 295000, Delhi: 275000, Bangalore: 252000, Chennai: 228000 },
  { month: "Aug", Mumbai: 320000, Delhi: 295000, Bangalore: 268000, Chennai: 245000 },
  { month: "Sep", Mumbai: 305000, Delhi: 282000, Bangalore: 258000, Chennai: 235000 },
  { month: "Oct", Mumbai: 275000, Delhi: 265000, Bangalore: 242000, Chennai: 220000 },
  { month: "Nov", Mumbai: 268000, Delhi: 255000, Bangalore: 238000, Chennai: 205000 },
  { month: "Dec", Mumbai: 282000, Delhi: 242000, Bangalore: 243000, Chennai: 189000 },
];

// Cost categories breakdown
export const costCategoriesData = [
  { category: "Surgery", value: 35 },
  { category: "ICU", value: 25 },
  { category: "Pharmacy", value: 18 },
  { category: "Diagnostics", value: 12 },
  { category: "Consultation", value: 10 },
];

// Quarterly comparison data
export const quarterlyData = [
  { quarter: "Q1", cost: 4850000, patients: 12500 },
  { quarter: "Q2", cost: 5120000, patients: 13200 },
  { quarter: "Q3", cost: 5680000, patients: 14800 },
  { quarter: "Q4", cost: 5260000, patients: 13900 },
];

// Regional distribution for radar chart
export const regionalMetrics = [
  { region: "Infrastructure", Mumbai: 90, Delhi: 85, Bangalore: 88, Chennai: 82 },
  { region: "Staff Quality", Mumbai: 88, Delhi: 86, Bangalore: 92, Chennai: 85 },
  { region: "Equipment", Mumbai: 85, Delhi: 82, Bangalore: 90, Chennai: 80 },
  { region: "Patient Care", Mumbai: 92, Delhi: 88, Bangalore: 89, Chennai: 87 },
  { region: "Cost Efficiency", Mumbai: 70, Delhi: 75, Bangalore: 78, Chennai: 82 },
  { region: "Accessibility", Mumbai: 78, Delhi: 72, Bangalore: 80, Chennai: 75 },
];

// Stats for KPI cards
export const summaryStats = {
  totalCost: 18910000,
  avgCostPerCity: 2363750,
  highestCost: { city: "Mumbai", amount: 3250000 },
  lowestCost: { city: "Ahmedabad", amount: 1650000 },
  totalPatients: 54400,
  avgPatientCost: 347.43,
};
