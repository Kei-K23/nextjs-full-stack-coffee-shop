"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function OrderHistory() {
  // Mock data - replace with actual data fetching
  const orders = [
    {
      id: "1",
      date: "2024-03-20",
      total: 15.99,
      status: "Completed",
      items: "Cappuccino (2x), Croissant",
    },
    {
      id: "2",
      date: "2024-03-18",
      total: 12.5,
      status: "Completed",
      items: "Latte, Blueberry Muffin",
    },
    {
      id: "3",
      date: "2024-03-15",
      total: 18.75,
      status: "Completed",
      items: "Mocha (2x), Chocolate Cake",
    },
  ];

  return (
    <Card className="border-none shadow-none">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant="secondary">{order.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
