"use client";

import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CoffeeIcon, Coins, Mail, User as UserIcon } from "lucide-react";

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="text-2xl font-bold">1,234</p>
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
            <p className="text-2xl font-bold">42</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cu-primary" />
                Contact Preferences
              </span>
            </CardTitle>
            <CardDescription>Manage your email preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" value={user.email || ""} disabled />
            </div>
            <Button>Update Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
