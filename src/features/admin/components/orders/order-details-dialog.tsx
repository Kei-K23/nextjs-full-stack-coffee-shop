"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderStatusBadge } from "./order-status-badge";
import { formatDistance } from "date-fns";
import { Coffee, Order, OrderDetails, Payment } from "@prisma/client";

interface OrderDetailsProps {
  order: Order & {
    orderDetails: (OrderDetails & {
      coffee: Coffee;
    })[];
    payment: Payment;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderDetailsDialog({
  order,
  open,
  onOpenChange,
}: OrderDetailsProps) {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Customer Information</h3>
              <p className="text-sm">{order.name}</p>
              <p className="text-sm text-muted-foreground">{order.email}</p>
              <p className="text-sm">{order.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Order Information</h3>
              <p className="text-sm">Order ID: {order.id}</p>
              <div className="text-sm">
                Status: <OrderStatusBadge status={order.orderStatus} />
              </div>
              <p className="text-sm">
                Placed:{" "}
                {formatDistance(new Date(order.createdAt), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Delivery Address</h3>
            <p className="text-sm">{order.delivery_address}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Order Items</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderDetails.map(
                  (
                    item: OrderDetails & {
                      coffee: Coffee;
                    }
                  ) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.coffee.name}</TableCell>
                      <TableCell className="text-right">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        ${item.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        ${(item.quantity * item.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  )
                )}
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-semibold">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ${order.totalPrice.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {order.payment && (
            <div>
              <h3 className="font-semibold mb-2">Payment Information</h3>
              <p className="text-sm">Method: {order.payment.paymentMethod}</p>
              <p className="text-sm">Status: {order.payment.paymentStatus}</p>
              <p className="text-sm">
                Transaction ID: {order.payment.transactionId}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
