"use client";

import { User } from "next-auth";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { UserInfo } from "./user-info";
import { OrderHistory } from "./user-history";
import { CoinHistory } from "./coin-history";
import { Coffee, Order, OrderDetails, User as UserData } from "@prisma/client";

interface UserProfileProps {
  userData: UserData;
  user?: User | null;
  orders: (Order & {
    orderDetails: (OrderDetails & {
      coffee: Coffee;
    })[];
  })[];
}

export function UserProfile({ user, orders, userData }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState("info");

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">
          Please sign in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and view your order history
        </p>
      </div>

      <Card className="p-1">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Profile Info</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="coins">Coin History</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="p-4">
            <UserInfo
              user={user}
              totalOrders={orders.length}
              totalCoin={userData.coinBalance}
            />
          </TabsContent>
          <TabsContent value="orders" className="p-4">
            <OrderHistory orders={orders} />
          </TabsContent>
          <TabsContent value="coins" className="p-4">
            <CoinHistory />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
