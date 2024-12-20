import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature")!;
    console.log({ body, signature, webhookSecret });

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const session = event.data.object as any;
      const orderId = session.metadata.orderId;

      // Update order status and create payment record
      await prisma.order.update({
        where: { id: orderId },
        data: {
          orderStatus: "Paid",
          payment: {
            create: {
              paymentMethod: "CreditCard",
              paymentStatus: "Paid",
              transactionId: session.payment_intent,
              amountPaid: session.amount_total / 100,
            },
          },
        },
      });
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook error", { status: 400 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
