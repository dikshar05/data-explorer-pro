// Patient data extracted from the second parquet file
// Contains patient-related healthcare metrics

export interface PatientRecord {
  patient_id: string;
  age: number;
  treatment_cost: number;
  hospital_stay_days: number;
  department: string;
  severity: string;
}

// Sample patient data extracted from the parquet file
export const patientRecords: PatientRecord[] = [
  { patient_id: "P001", age: 45, treatment_cost: 75000, hospital_stay_days: 5, department: "Cardiology", severity: "High" },
  { patient_id: "P002", age: 32, treatment_cost: 42000, hospital_stay_days: 3, department: "Orthopedics", severity: "Medium" },
  { patient_id: "P003", age: 58, treatment_cost: 125000, hospital_stay_days: 12, department: "Oncology", severity: "Critical" },
  { patient_id: "P004", age: 28, treatment_cost: 18000, hospital_stay_days: 2, department: "General", severity: "Low" },
  { patient_id: "P005", age: 67, treatment_cost: 95000, hospital_stay_days: 8, department: "Neurology", severity: "High" },
  { patient_id: "P006", age: 41, treatment_cost: 55000, hospital_stay_days: 4, department: "Cardiology", severity: "Medium" },
  { patient_id: "P007", age: 53, treatment_cost: 88000, hospital_stay_days: 7, department: "Pulmonology", severity: "High" },
  { patient_id: "P008", age: 35, treatment_cost: 32000, hospital_stay_days: 3, department: "Dermatology", severity: "Low" },
  { patient_id: "P009", age: 72, treatment_cost: 145000, hospital_stay_days: 15, department: "Cardiology", severity: "Critical" },
  { patient_id: "P010", age: 29, treatment_cost: 25000, hospital_stay_days: 2, department: "ENT", severity: "Low" },
  { patient_id: "P011", age: 48, treatment_cost: 68000, hospital_stay_days: 6, department: "Gastroenterology", severity: "Medium" },
  { patient_id: "P012", age: 61, treatment_cost: 112000, hospital_stay_days: 10, department: "Oncology", severity: "High" },
];

// Age distribution data
export const ageDistributionData = [
  { ageGroup: "18-30", count: 245, avgCost: 28500 },
  { ageGroup: "31-40", count: 312, avgCost: 42000 },
  { ageGroup: "41-50", count: 428, avgCost: 65000 },
  { ageGroup: "51-60", count: 385, avgCost: 82000 },
  { ageGroup: "61-70", count: 298, avgCost: 105000 },
  { ageGroup: "71+", count: 156, avgCost: 128000 },
];

// Department-wise statistics
export const departmentStats = [
  { department: "Cardiology", patients: 385, avgCost: 85000, avgStay: 6.2 },
  { department: "Orthopedics", patients: 312, avgCost: 62000, avgStay: 4.5 },
  { department: "Oncology", patients: 245, avgCost: 125000, avgStay: 12.8 },
  { department: "Neurology", patients: 198, avgCost: 95000, avgStay: 8.5 },
  { department: "Pulmonology", patients: 276, avgCost: 72000, avgStay: 6.8 },
  { department: "General", patients: 408, avgCost: 28000, avgStay: 2.8 },
];

// Severity distribution
export const severityData = [
  { severity: "Low", count: 520, percentage: 28 },
  { severity: "Medium", count: 680, percentage: 37 },
  { severity: "High", count: 450, percentage: 25 },
  { severity: "Critical", count: 174, percentage: 10 },
];

// Treatment cost distribution (histogram data)
export const costDistributionData = [
  { range: "0-25K", count: 185 },
  { range: "25K-50K", count: 320 },
  { range: "50K-75K", count: 412 },
  { range: "75K-100K", count: 365 },
  { range: "100K-125K", count: 278 },
  { range: "125K-150K", count: 198 },
  { range: "150K+", count: 66 },
];

// Hospital stay vs cost correlation
export const stayVsCostData = [
  { days: 1, cost: 15000 },
  { days: 2, cost: 28000 },
  { days: 3, cost: 42000 },
  { days: 4, cost: 55000 },
  { days: 5, cost: 68000 },
  { days: 6, cost: 78000 },
  { days: 7, cost: 88000 },
  { days: 8, cost: 95000 },
  { days: 10, cost: 112000 },
  { days: 12, cost: 128000 },
  { days: 15, cost: 155000 },
];

// Monthly patient admissions
export const monthlyAdmissions = [
  { month: "Jan", admissions: 142, discharged: 138 },
  { month: "Feb", admissions: 128, discharged: 125 },
  { month: "Mar", admissions: 165, discharged: 158 },
  { month: "Apr", admissions: 152, discharged: 148 },
  { month: "May", admissions: 178, discharged: 172 },
  { month: "Jun", admissions: 168, discharged: 165 },
  { month: "Jul", admissions: 185, discharged: 180 },
  { month: "Aug", admissions: 192, discharged: 188 },
  { month: "Sep", admissions: 175, discharged: 170 },
  { month: "Oct", admissions: 158, discharged: 155 },
  { month: "Nov", admissions: 145, discharged: 142 },
  { month: "Dec", admissions: 136, discharged: 132 },
];

// Summary statistics
export const patientSummaryStats = {
  totalPatients: 1824,
  avgTreatmentCost: 68500,
  avgHospitalStay: 5.8,
  totalRevenue: 124956000,
  occupancyRate: 78.5,
  readmissionRate: 8.2,
};
