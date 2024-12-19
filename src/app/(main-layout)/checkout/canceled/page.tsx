import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderCanceledPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <XCircle className="h-16 w-16 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Order Canceled</h1>
          <p className="text-muted-foreground">
            Your order has been canceled. No charges were made to your card.
          </p>
          <div className="space-y-4">
            <Link href="/checkout">
              <Button variant="outline" className="w-full">
                Try Again
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
