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
import { Coffee, Order, OrderDetails } from "@prisma/client";

interface OrderHistoryProps {
  orders: (Order & {
    orderDetails: (OrderDetails & {
      coffee: Coffee;
    })[];
  })[];
}

export function OrderHistory({ orders }: OrderHistoryProps) {
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
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div>
                  {order.orderDetails.map((od, i) => (
                    <p key={od.id}>
                      <span key={od.id}>
                        {od.coffee.name} ({od.quantity})
                      </span>
                      {order.orderDetails.length - 1 > i && <span> |</span>}
                    </p>
                  ))}
                </div>
              </TableCell>
              <TableCell>${order.totalPrice}</TableCell>
              <TableCell>
                <Badge variant="secondary">{order.orderStatus}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
