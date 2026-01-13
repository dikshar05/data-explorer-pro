import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import HospitalCosts from "./HospitalCosts";
import PatientAnalytics from "./PatientAnalytics";
import RegionalInsights from "./RegionalInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"hospital" | "patient" | "regional">("hospital");

  const renderContent = () => {
    switch (activeTab) {
      case "hospital":
        return <HospitalCosts />;
      case "patient":
        return <PatientAnalytics />;
      case "regional":
        return <RegionalInsights />;
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
