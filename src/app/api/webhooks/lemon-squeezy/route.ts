import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const headersList = headers();
    const signature = (await headersList).get("x-signature");

    // Verify webhook signature
    const isValid = verifyWebhookSignature(
      body,
      signature!,
      process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!
    );

    if (!isValid) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const event = JSON.parse(body);
    const { data, meta } = event;

    // Handle different webhook events
    switch (meta.event_name) {
      case "order_created":
        await handleOrderCreated(data);
        break;
      case "order_refunded":
        await handleOrderRefunded(data);
        break;
      // Add more event handlers as needed
    }

    return new NextResponse("Webhook processed", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook error", { status: 500 });
  }
}

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return signature === digest;
}

async function handleOrderCreated(data: any) {
  const { custom_data, order_number, total } = data.attributes;
  const { userId, coffeeId, quantity } = custom_data;

  await prisma.order.create({
    data: {
      id: order_number,
      userId,
      orderStatus: "Paid",
      totalPrice: parseFloat(total),
      orderDetails: {
        create: {
          coffeeId,
          quantity,
          price: parseFloat(total) / quantity,
        },
      },
      payment: {
        create: {
          paymentMethod: "CreditCard",
          paymentStatus: "Paid",
          transactionId: order_number,
          amountPaid: parseFloat(total),
        },
      },
    },
  });
}

async function handleOrderRefunded(data: any) {
  const { order_number } = data.attributes;

  await prisma.order.update({
    where: { id: order_number },
    data: {
      orderStatus: "Cancelled",
      payment: {
        update: {
          paymentStatus: "Failed",
        },
      },
    },
  });
}
