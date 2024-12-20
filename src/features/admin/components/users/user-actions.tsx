"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, User as UserIcon, Coins, Ban } from "lucide-react";
import { Order, User } from "@prisma/client";
import { UserDetailsDialog } from "./user-detail-dialog";

interface UserActionsProps {
  user: User & {
    orders: Order[];
  };
}

export function UserActions({ user }: UserActionsProps) {
  const [showDetails, setShowDetails] = useState(false);

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
            <UserIcon className="mr-2 h-4 w-4" />
            View details
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Coins className="mr-2 h-4 w-4" />
            Adjust coins
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <Ban className="mr-2 h-4 w-4" />
            Disable account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UserDetailsDialog
        user={user}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}
