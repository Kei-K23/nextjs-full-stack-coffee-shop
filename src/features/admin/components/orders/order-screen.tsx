"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Order, OrderStatus } from "@prisma/client";
import { OrderStatusBadge } from "@/features/admin/components/orders/order-status-badge";
import { DataTable } from "@/features/admin/components/orders/data-table";
import { columns } from "@/features/admin/components/orders/columns";

interface OrdersScreenPageProps {
  orderData: Order[];
  orderStatistics: {
    totalOrders: number;
    pendingOrders: number;
    paidOrders: number;
    completedOrders: number;
    cancelledOrders: number;
  };
}

export default function OrdersScreenPage({
  orderData,
  orderStatistics,
}: OrdersScreenPageProps) {
  const [activeTab, setActiveTab] = useState<OrderStatus>("Pending");

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Order Management</h1>
        <p className="text-muted-foreground">
          Manage and track all customer orders
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <StatsCard
          title="Total Orders"
          value={orderStatistics.totalOrders.toString()}
          description="Last 30 days"
        />
        <StatsCard
          title="Pending Orders"
          value={orderStatistics.pendingOrders.toString()}
          description="Needs attention"
          trend="up"
          trendValue="12%"
        />
        <StatsCard
          title="Paid Orders"
          value={orderStatistics.paidOrders.toString()}
          description="Needs attention"
          trend="up"
          trendValue="12%"
        />
        <StatsCard
          title="Completed Orders"
          value={orderStatistics.completedOrders.toString()}
          description="Last 30 days"
          trend="up"
          trendValue="8%"
        />
        <StatsCard
          title="Cancelled Orders"
          value={orderStatistics.cancelledOrders.toString()}
          description="Last 30 days"
          trend="down"
          trendValue="3%"
        />
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="Pending"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as OrderStatus)}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="Pending">
                Pending <OrderStatusBadge className="ml-2" status="Pending" />
              </TabsTrigger>
              <TabsTrigger value="Paid">
                Paid <OrderStatusBadge className="ml-2" status="Paid" />
              </TabsTrigger>
              <TabsTrigger value="Completed">
                Completed{" "}
                <OrderStatusBadge className="ml-2" status="Completed" />
              </TabsTrigger>
              <TabsTrigger value="Cancelled">
                Cancelled{" "}
                <OrderStatusBadge className="ml-2" status="Cancelled" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <DataTable columns={columns} data={orderData} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
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
