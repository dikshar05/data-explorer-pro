import { ReactNode, useState } from "react";
import { Activity, BarChart3, Users, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab: "hospital" | "patient" | "regional";
  onTabChange: (tab: "hospital" | "patient" | "regional") => void;
}

export const DashboardLayout = ({
  children,
  activeTab,
  onTabChange,
}: DashboardLayoutProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: "hospital" as const, label: "Hospital Costs", icon: BarChart3 },
    { id: "patient" as const, label: "Patient Analytics", icon: Users },
    { id: "regional" as const, label: "Regional Insights", icon: MapPin },
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl gradient-primary">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Healthcare Analytics
                </h1>
                <p className="text-sm text-muted-foreground">
                  Data Visualization Dashboard
                </p>
              </div>
            </div>

            {/* Tab Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-muted">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Navigation - Mobile Dropdown */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium"
              >
                {activeTabData && (
                  <>
                    <activeTabData.icon className="h-4 w-4" />
                    {activeTabData.label}
                  </>
                )}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-popover border border-border shadow-lg overflow-hidden z-50">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        onTabChange(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors",
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "text-popover-foreground hover:bg-muted"
                      )}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Healthcare Analytics Dashboard • Visualizing hospital costs and
            patient data across major Indian cities
          </p>
        </div>
      </footer>
    </div>
  );
};
