"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistance } from "date-fns";
import { Order, User } from "@prisma/client";
import { UserRoleBadge } from "./user-role-badge";
import { UserActions } from "./user-actions";

export const columns: ColumnDef<
  User & {
    orders: Order[];
  }
>[] = [
  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => {
      const email = row.original.email;
      const image = row.original.image;
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image || ""} />
            <AvatarFallback>{row?.getValue("name")?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground">{email}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <UserRoleBadge isAdmin={row.original.isAdmin} />;
    },
  },
  {
    accessorKey: "coinBalance",
    header: "Coins",
    cell: ({ row }) => {
      return (
        <div className="font-medium">{row.getValue("coinBalance")} coins</div>
      );
    },
  },
  {
    accessorKey: "orders",
    header: "Orders",
    cell: ({ row }) => {
      return (
        <div className="font-medium">{row.original?.orders?.length || 0}</div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Joined",
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
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];
