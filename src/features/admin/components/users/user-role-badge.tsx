import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface UserRoleBadgeProps {
  isAdmin: boolean;
  className?: string;
}

export function UserRoleBadge({ isAdmin, className }: UserRoleBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        isAdmin
          ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
          : "bg-blue-100 text-blue-800 hover:bg-blue-100",
        "rounded-full",
        className
      )}
    >
      {isAdmin ? "Admin" : "Customer"}
    </Badge>
  );
}
