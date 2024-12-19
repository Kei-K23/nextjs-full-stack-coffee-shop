"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { Product } from "@/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface OrderSummaryItemProps {
  item: Product & { quantity: number };
}

export function OrderSummaryItem({ item }: OrderSummaryItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="flex-1 flex items-center gap-x-2">
        <Image
          src={item.imageUrl || ""}
          alt={item.name}
          width={80}
          height={80}
          className="aspect-square object-cover"
        />
        <div>
          <p className="font-medium text-lg">{item.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => {
                if (item.quantity > 1) {
                  updateQuantity(item.id, item.quantity - 1);
                } else {
                  removeItem(item.id);
                }
              }}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm text-muted-foreground w-8 text-center">
              {item.quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="h-6 w-6"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
}
