import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import HospitalCosts from "./HospitalCosts";
import PatientAnalytics from "./PatientAnalytics";
import RegionalInsights from "./RegionalInsights";
import InsuranceAnalytics from "./InsuranceAnalytics";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"hospital" | "patient" | "regional" | "insurance">("hospital");

  const renderContent = () => {
    switch (activeTab) {
      case "hospital":
        return <HospitalCosts />;
      case "patient":
        return <PatientAnalytics />;
      case "regional":
        return <RegionalInsights />;
      case "insurance":
        return <InsuranceAnalytics />;
      default:
        return <HospitalCosts />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
