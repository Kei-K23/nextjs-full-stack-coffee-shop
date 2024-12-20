"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistance } from "date-fns";
import { UserRoleBadge } from "./user-role-badge";
import { Order, User } from "@prisma/client";

interface UserDetailsProps {
  user: User & {
    orders: Order[];
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserDetailsDialog({
  user,
  open,
  onOpenChange,
}: UserDetailsProps) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.image || ""} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="mt-2">
                <UserRoleBadge isAdmin={user.isAdmin} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Account Information</h4>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Member since
                  </dt>
                  <dd className="text-sm">
                    {formatDistance(new Date(user.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Coin Balance
                  </dt>
                  <dd className="text-sm">{user.coinBalance} coins</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Total Orders
                  </dt>
                  <dd className="text-sm">
                    {user?.orders?.length || 0} orders
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
