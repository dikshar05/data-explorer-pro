import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import HospitalCosts from "./HospitalCosts";
import PatientAnalytics from "./PatientAnalytics";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"hospital" | "patient">("hospital");

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === "hospital" ? <HospitalCosts /> : <PatientAnalytics />}
    </DashboardLayout>
  );
};

export default Index;
