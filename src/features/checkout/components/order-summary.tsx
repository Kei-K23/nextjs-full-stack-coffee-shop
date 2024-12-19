"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { Trash2 } from "lucide-react";
import { OrderSummaryItem } from "./order-summary-item";

export function OrderSummary() {
  const { items, getTotalPrice, clearCart } = useCartStore();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        {items.length > 0 && (
          <Button variant="destructive" size="sm" onClick={clearCart}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        )}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <OrderSummaryItem key={item.id} item={item} />
        ))}
        <div className="flex justify-between items-center pt-4 font-bold">
          <p>Total</p>
          <p>${getTotalPrice().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
