"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "@/features/admin/components/users/columns";
import { DataTable } from "@/features/admin/components/users/data-table";
import { UserStatsCards } from "@/features/admin/components/users/user-stats-cards";
import { Order, User } from "@prisma/client";

interface UsersScreenPageProps {
  data: (User & {
    orders: Order[];
  })[];
}

export default function UsersScreenPage({ data }: UsersScreenPageProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">
          Manage customer accounts and permissions
        </p>
      </div>

      <UserStatsCards />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
