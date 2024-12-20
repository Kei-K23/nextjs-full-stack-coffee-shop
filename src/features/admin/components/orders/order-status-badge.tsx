import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@prisma/client";
import { cn } from "@/lib/utils";

const statusConfig = {
  Pending: { color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  Paid: { color: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
  Cancelled: { color: "bg-red-100 text-red-800 hover:bg-red-100" },
  Completed: { color: "bg-green-100 text-green-800 hover:bg-green-100" },
};

export function OrderStatusBadge({
  status,
  className,
}: {
  status: OrderStatus;
  className?: string;
}) {
  return (
    <Badge
      variant="secondary"
      className={cn(statusConfig[status].color, "rounded-full", className)}
    >
      {status}
    </Badge>
  );
}
