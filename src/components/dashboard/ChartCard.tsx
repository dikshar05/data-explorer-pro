import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export const ChartCard = ({
  title,
  description,
  children,
  className,
  action,
}: ChartCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-card p-6 shadow-card border border-border/50 animate-fade-in",
        className
      )}
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
