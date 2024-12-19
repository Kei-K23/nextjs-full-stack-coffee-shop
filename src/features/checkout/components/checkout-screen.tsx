"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/use-cart-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OrderSummary } from "./order-summary";
import { CheckoutForm } from "./checkout-form";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export default function CheckoutScreen() {
  const { data: session } = useSession();
  const { items } = useCartStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: {
    name: string;
    email: string;
    address: string;
    phone: string;
  }) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/checkout/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          userId: session?.user?.id,
          ...values,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="container max-w-2xl mx-auto py-16 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => router.push("/menu")}>Check Menu</Button>
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
