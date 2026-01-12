import { hospitalCostData } from "@/data/hospitalData";
import { ChartCard } from "./ChartCard";
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

type SortDirection = "asc" | "desc";

export const DataTable = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedData = [...hospitalCostData].sort((a, b) =>
    sortDirection === "desc"
      ? b.total_cost - a.total_cost
      : a.total_cost - b.total_cost
  );

  const maxCost = Math.max(...hospitalCostData.map((d) => d.total_cost));
  const avgCost =
    hospitalCostData.reduce((sum, d) => sum + d.total_cost, 0) /
    hospitalCostData.length;

  const toggleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <ChartCard
      title="Detailed Cost Analysis"
      description="Complete breakdown with variance indicators"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Rank
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                City
              </th>
              <th
                className="px-4 py-3 text-right text-sm font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition-colors flex items-center justify-end gap-1"
                onClick={toggleSort}
              >
                Total Cost
                <ArrowUpDown className="h-4 w-4" />
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-muted-foreground">
                % of Max
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-muted-foreground">
                vs Average
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">
                Cost Bar
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => {
              const percentOfMax = (item.total_cost / maxCost) * 100;
              const vsAverage = ((item.total_cost - avgCost) / avgCost) * 100;
              const isAboveAverage = vsAverage > 0;

              return (
                <tr
                  key={item.hospital_location}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-4">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {sortDirection === "desc"
                        ? index + 1
                        : sortedData.length - index}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-medium text-foreground">
                    {item.hospital_location}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm font-semibold text-foreground">
                    ₹{(item.total_cost / 100000).toFixed(2)}L
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-muted-foreground">
                    {percentOfMax.toFixed(1)}%
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-medium ${
                        isAboveAverage ? "text-success" : "text-destructive"
                      }`}
                    >
                      {isAboveAverage ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {Math.abs(vsAverage).toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-primary transition-all duration-500"
                        style={{ width: `${percentOfMax}%` }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ChartCard>
  );
};
