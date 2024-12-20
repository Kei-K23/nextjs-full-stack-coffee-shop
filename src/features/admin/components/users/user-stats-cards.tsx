"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UserStatsCards() {
  return (
    <div className="grid gap-8 md:grid-cols-4">
      <StatsCard
        title="Total Users"
        value="2,834"
        description="Active accounts"
      />
      <StatsCard
        title="New Users"
        value="148"
        description="Last 30 days"
        trend="up"
        trendValue="12%"
      />
      <StatsCard
        title="Active Users"
        value="1,423"
        description="Last 30 days"
        trend="up"
        trendValue="8%"
      />
      <StatsCard
        title="Coins Distributed"
        value="45,231"
        description="Total coins in circulation"
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  description,
  trend,
  trendValue,
}: {
  title: string;
  value: string;
  description: string;
  trend?: "up" | "down";
  trendValue?: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-sm text-muted-foreground">
          {trend && (
            <>
              {trend === "up" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-green-500 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-red-500 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 13a1 1 0 110 2H7a1 1 0 01-1-1V9a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 0L16 10.586V7a1 1 0 112 0v5a1 1 0 01-1 1h-5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span
                className={trend === "up" ? "text-green-500" : "text-red-500"}
              >
                {trendValue}
              </span>
            </>
          )}
          <span className="ml-1">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}
