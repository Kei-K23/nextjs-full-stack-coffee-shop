"use client";

import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoffeeIcon, Coins, User as UserIcon } from "lucide-react";

interface UserInfoProps {
  user: User;
  totalOrders: number;
  totalCoin: number;
}

export function UserInfo({ user, totalOrders, totalCoin }: UserInfoProps) {
  return (
    <div className="space-y-6">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.image || ""} alt={user.name || "User"} />
            <AvatarFallback>
              <UserIcon className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">
              <span className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-cu-primary" />
                Reward Points
              </span>
            </CardTitle>
            <CardDescription>
              Your current coffee points balance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalCoin}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">
              <span className="flex items-center gap-2">
                <CoffeeIcon className="h-5 w-5 text-cu-primary" />
                Total Orders
              </span>
            </CardTitle>
            <CardDescription>Your lifetime orders with us</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalOrders}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
