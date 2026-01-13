export interface RegionalPerformance {
  city: string;
  efficiency: number;
  satisfaction: number;
  readmissionRate: number;
  avgWaitTime: number;
  bedOccupancy: number;
  staffRatio: number;
}

export interface CityComparison {
  city: string;
  inpatient: number;
  outpatient: number;
  emergency: number;
  surgery: number;
}

export interface TrendData {
  month: string;
  kolkata: number;
  pune: number;
  chennai: number;
  mumbai: number;
  bangalore: number;
  delhi: number;
  hyderabad: number;
  ahmedabad: number;
}

export interface ResourceAllocation {
  category: string;
  value: number;
  color: string;
}

export interface QualityMetric {
  city: string;
  qualityScore: number;
  patientSafety: number;
  clinicalEffectiveness: number;
  patientExperience: number;
}

export interface CapacityData {
  city: string;
  totalBeds: number;
  icuBeds: number;
  occupiedBeds: number;
  available: number;
}

// Regional performance data by city
export const regionalPerformanceData: RegionalPerformance[] = [
  { city: "Mumbai", efficiency: 92, satisfaction: 88, readmissionRate: 4.2, avgWaitTime: 18, bedOccupancy: 87, staffRatio: 3.2 },
  { city: "Delhi", efficiency: 89, satisfaction: 85, readmissionRate: 5.1, avgWaitTime: 22, bedOccupancy: 91, staffRatio: 2.8 },
  { city: "Bangalore", efficiency: 94, satisfaction: 91, readmissionRate: 3.8, avgWaitTime: 15, bedOccupancy: 82, staffRatio: 3.5 },
  { city: "Chennai", efficiency: 88, satisfaction: 86, readmissionRate: 4.5, avgWaitTime: 20, bedOccupancy: 85, staffRatio: 3.0 },
  { city: "Kolkata", efficiency: 85, satisfaction: 82, readmissionRate: 5.8, avgWaitTime: 25, bedOccupancy: 78, staffRatio: 2.6 },
  { city: "Hyderabad", efficiency: 91, satisfaction: 89, readmissionRate: 4.0, avgWaitTime: 16, bedOccupancy: 84, staffRatio: 3.3 },
  { city: "Pune", efficiency: 90, satisfaction: 87, readmissionRate: 4.3, avgWaitTime: 19, bedOccupancy: 80, staffRatio: 3.1 },
  { city: "Ahmedabad", efficiency: 86, satisfaction: 83, readmissionRate: 5.2, avgWaitTime: 23, bedOccupancy: 76, staffRatio: 2.7 },
];

// City-wise patient type comparison
export const cityComparisonData: CityComparison[] = [
  { city: "Mumbai", inpatient: 4500, outpatient: 12000, emergency: 2800, surgery: 1200 },
  { city: "Delhi", inpatient: 5200, outpatient: 14500, emergency: 3200, surgery: 1500 },
  { city: "Bangalore", inpatient: 3800, outpatient: 10500, emergency: 2400, surgery: 980 },
  { city: "Chennai", inpatient: 3200, outpatient: 9800, emergency: 2100, surgery: 850 },
  { city: "Kolkata", inpatient: 2800, outpatient: 8500, emergency: 1900, surgery: 720 },
  { city: "Hyderabad", inpatient: 3500, outpatient: 9200, emergency: 2200, surgery: 880 },
  { city: "Pune", inpatient: 2600, outpatient: 7800, emergency: 1700, surgery: 650 },
  { city: "Ahmedabad", inpatient: 2400, outpatient: 7200, emergency: 1500, surgery: 580 },
];

// Monthly efficiency trends
export const efficiencyTrendData: TrendData[] = [
  { month: "Jan", kolkata: 82, pune: 87, chennai: 85, mumbai: 89, bangalore: 91, delhi: 86, hyderabad: 88, ahmedabad: 83 },
  { month: "Feb", kolkata: 83, pune: 88, chennai: 86, mumbai: 90, bangalore: 92, delhi: 87, hyderabad: 89, ahmedabad: 84 },
  { month: "Mar", kolkata: 84, pune: 88, chennai: 87, mumbai: 91, bangalore: 93, delhi: 88, hyderabad: 90, ahmedabad: 85 },
  { month: "Apr", kolkata: 83, pune: 89, chennai: 86, mumbai: 90, bangalore: 92, delhi: 87, hyderabad: 89, ahmedabad: 84 },
  { month: "May", kolkata: 85, pune: 90, chennai: 88, mumbai: 92, bangalore: 94, delhi: 89, hyderabad: 91, ahmedabad: 86 },
  { month: "Jun", kolkata: 84, pune: 89, chennai: 87, mumbai: 91, bangalore: 93, delhi: 88, hyderabad: 90, ahmedabad: 85 },
  { month: "Jul", kolkata: 85, pune: 90, chennai: 88, mumbai: 92, bangalore: 94, delhi: 89, hyderabad: 91, ahmedabad: 86 },
  { month: "Aug", kolkata: 86, pune: 91, chennai: 89, mumbai: 93, bangalore: 95, delhi: 90, hyderabad: 92, ahmedabad: 87 },
  { month: "Sep", kolkata: 85, pune: 90, chennai: 88, mumbai: 92, bangalore: 94, delhi: 89, hyderabad: 91, ahmedabad: 86 },
  { month: "Oct", kolkata: 84, pune: 89, chennai: 87, mumbai: 91, bangalore: 93, delhi: 88, hyderabad: 90, ahmedabad: 85 },
  { month: "Nov", kolkata: 85, pune: 90, chennai: 88, mumbai: 92, bangalore: 94, delhi: 89, hyderabad: 91, ahmedabad: 86 },
  { month: "Dec", kolkata: 86, pune: 91, chennai: 89, mumbai: 93, bangalore: 95, delhi: 90, hyderabad: 92, ahmedabad: 87 },
];

// Resource allocation breakdown
export const resourceAllocationData: ResourceAllocation[] = [
  { category: "Medical Staff", value: 35, color: "hsl(var(--chart-1))" },
  { category: "Equipment", value: 22, color: "hsl(var(--chart-2))" },
  { category: "Infrastructure", value: 18, color: "hsl(var(--chart-3))" },
  { category: "Supplies", value: 12, color: "hsl(var(--chart-4))" },
  { category: "Administration", value: 8, color: "hsl(var(--chart-5))" },
  { category: "Training", value: 5, color: "hsl(var(--primary))" },
];

// Quality metrics by city
export const qualityMetricsData: QualityMetric[] = [
  { city: "Mumbai", qualityScore: 92, patientSafety: 94, clinicalEffectiveness: 90, patientExperience: 88 },
  { city: "Delhi", qualityScore: 88, patientSafety: 90, clinicalEffectiveness: 87, patientExperience: 85 },
  { city: "Bangalore", qualityScore: 95, patientSafety: 96, clinicalEffectiveness: 94, patientExperience: 91 },
  { city: "Chennai", qualityScore: 87, patientSafety: 89, clinicalEffectiveness: 86, patientExperience: 84 },
  { city: "Kolkata", qualityScore: 82, patientSafety: 84, clinicalEffectiveness: 81, patientExperience: 80 },
  { city: "Hyderabad", qualityScore: 90, patientSafety: 92, clinicalEffectiveness: 89, patientExperience: 87 },
  { city: "Pune", qualityScore: 89, patientSafety: 91, clinicalEffectiveness: 88, patientExperience: 86 },
  { city: "Ahmedabad", qualityScore: 84, patientSafety: 86, clinicalEffectiveness: 83, patientExperience: 82 },
];

// Capacity data
export const capacityData: CapacityData[] = [
  { city: "Mumbai", totalBeds: 1200, icuBeds: 150, occupiedBeds: 1044, available: 156 },
  { city: "Delhi", totalBeds: 1500, icuBeds: 180, occupiedBeds: 1365, available: 135 },
  { city: "Bangalore", totalBeds: 950, icuBeds: 120, occupiedBeds: 779, available: 171 },
  { city: "Chennai", totalBeds: 850, icuBeds: 100, occupiedBeds: 722, available: 128 },
  { city: "Kolkata", totalBeds: 720, icuBeds: 85, occupiedBeds: 561, available: 159 },
  { city: "Hyderabad", totalBeds: 880, icuBeds: 110, occupiedBeds: 739, available: 141 },
  { city: "Pune", totalBeds: 650, icuBeds: 75, occupiedBeds: 520, available: 130 },
  { city: "Ahmedabad", totalBeds: 580, icuBeds: 65, occupiedBeds: 440, available: 140 },
];

// Summary statistics
export const regionalSummaryStats = {
  totalCities: 8,
  avgEfficiency: 89.4,
  avgSatisfaction: 86.4,
  totalBedCapacity: 7330,
  avgOccupancy: 83.1,
  avgReadmissionRate: 4.6,
};
