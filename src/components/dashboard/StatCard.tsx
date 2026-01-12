import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
}

const variantStyles = {
  default: "bg-card",
  primary: "gradient-primary text-primary-foreground",
  success: "gradient-success text-success-foreground",
  warning: "gradient-warm text-warning-foreground",
};

const iconVariantStyles = {
  default: "bg-primary/10 text-primary",
  primary: "bg-primary-foreground/20 text-primary-foreground",
  success: "bg-success-foreground/20 text-success-foreground",
  warning: "bg-warning-foreground/20 text-warning-foreground",
};

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: StatCardProps) => {
  const isGradient = variant !== "default";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover animate-fade-in",
        variantStyles[variant],
        !isGradient && "shadow-card border border-border/50"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p
            className={cn(
              "text-sm font-medium",
              isGradient ? "text-inherit opacity-80" : "text-muted-foreground"
            )}
          >
            {title}
          </p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          {subtitle && (
            <p
              className={cn(
                "text-sm",
                isGradient ? "text-inherit opacity-70" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          )}
          {trend && (
            <div className="flex items-center gap-1 pt-1">
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive
                    ? isGradient
                      ? "text-inherit"
                      : "text-success"
                    : isGradient
                    ? "text-inherit"
                    : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
              <span
                className={cn(
                  "text-xs",
                  isGradient ? "text-inherit opacity-70" : "text-muted-foreground"
                )}
              >
                vs last month
              </span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "rounded-lg p-3",
            iconVariantStyles[variant]
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Decorative element */}
      {isGradient && (
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-foreground/5" />
      )}
    </div>
  );
};
