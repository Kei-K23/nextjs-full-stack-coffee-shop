"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/stores/use-cart-store";

export default function OrderSuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Order Successful!
          </h1>
          <p className="text-muted-foreground">
            Thank you for your order. We&apos;ll send you a confirmation email
            with your order details.
          </p>
          <div className="space-y-4">
            <Link href="/profile">
              <Button variant="outline" className="w-full">
                View Order History
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
