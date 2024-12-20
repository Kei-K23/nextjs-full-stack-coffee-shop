"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { OrderStatusBadge } from "./order-status-badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye } from "lucide-react";
import { formatDistance } from "date-fns";
import { OrderDetailsDialog } from "./order-details-dialog";
import {
  Coffee,
  Order,
  OrderDetails,
  OrderStatus,
  Payment,
} from "@prisma/client";
import { updateOrderStatus } from "@/app/actions";
import { toast } from "sonner";

export const columns: ColumnDef<
  Order & {
    orderDetails: (OrderDetails & {
      coffee: Coffee;
    })[];
    payment: Payment;
  }
>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => {
      return <span className="font-mono text-sm">{row.getValue("id")}</span>;
    },
  },
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row }) => {
      const email = row.original.email;
      return (
        <div>
          <div className="font-medium">{row.getValue("name")}</div>
          <div className="text-sm text-muted-foreground">{email}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "orderStatus",
    header: "Status",
    cell: ({ row }) => {
      return <OrderStatusBadge status={row.getValue("orderStatus")} />;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Placed",
    cell: ({ row }) => {
      return (
        <div className="text-sm">
          {formatDistance(new Date(row.getValue("createdAt")), new Date(), {
            addSuffix: true,
          })}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: function ActionsCell({ row }) {
      const [showDetails, setShowDetails] = useState(false);
      const order = row.original;

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setShowDetails(true)}>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {order.orderStatus === "Pending" && (
                <>
                  <DropdownMenuItem
                    onClick={async () => {
                      const { errors, success } = await updateOrderStatus(
                        order.id,
                        OrderStatus.Paid
                      );
                      if (errors) {
                        toast.error(errors);
                      }
                      if (success) {
                        toast.success(success);
                      }
                    }}
                  >
                    Mark as paid
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={async () => {
                      const { errors, success } = await updateOrderStatus(
                        order.id,
                        OrderStatus.Cancelled
                      );
                      if (errors) {
                        toast.error(errors);
                      }
                      if (success) {
                        toast.success(success);
                      }
                    }}
                    className="text-destructive"
                  >
                    Cancel order
                  </DropdownMenuItem>
                </>
              )}
              {order.orderStatus === "Paid" && (
                <DropdownMenuItem
                  onClick={async () => {
                    const { errors, success } = await updateOrderStatus(
                      order.id,
                      OrderStatus.Completed
                    );
                    if (errors) {
                      toast.error(errors);
                    }
                    if (success) {
                      toast.success(success);
                    }
                  }}
                >
                  Mark as completed
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <OrderDetailsDialog
            order={order}
            open={showDetails}
            onOpenChange={setShowDetails}
          />
        </>
      );
    },
  },
];
