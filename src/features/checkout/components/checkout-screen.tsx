"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OrderSummary } from "./order-summary";
import { CheckoutForm } from "./checkout-form";

export default function CheckoutScreen() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: any) {
    try {
      setIsLoading(true);
      // Here you would typically make an API call to create the order
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      clearCart();
      router.push("/order-success");
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="container max-w-2xl mx-auto py-16 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => router.push("/")}>Check Menu</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4 mt-28">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <OrderSummary />
      <CheckoutForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}
