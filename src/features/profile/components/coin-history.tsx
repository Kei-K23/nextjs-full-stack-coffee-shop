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

export function CoinHistory() {
  // Mock data - replace with actual data fetching
  const transactions = [
    {
      id: "1",
      date: "2024-03-20",
      type: "Earned",
      amount: 100,
      description: "Order #1234",
    },
    {
      id: "2",
      date: "2024-03-18",
      type: "Spent",
      amount: 50,
      description: "Discount on Order #1235",
    },
    {
      id: "3",
      date: "2024-03-15",
      type: "Earned",
      amount: 75,
      description: "Monthly Bonus",
    },
  ];

  return (
    <Card className="border-none shadow-none">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                {new Date(transaction.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.type === "Earned" ? "default" : "secondary"
                  }
                >
                  {transaction.type}
                </Badge>
              </TableCell>
              <TableCell
                className={
                  transaction.type === "Earned"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {transaction.type === "Earned" ? "+" : "-"}
                {transaction.amount} coins
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
