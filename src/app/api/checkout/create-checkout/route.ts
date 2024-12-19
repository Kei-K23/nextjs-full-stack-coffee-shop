import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { CartItem } from "@/types/index";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, userId, name, email, address, phone } = body;

    if (!items?.length || !userId) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    // Create a new order in the database
    const order = await prisma.order.create({
      data: {
        userId,
        orderStatus: "Pending",
        totalPrice: items.reduce(
          (acc: number, item: CartItem) => acc + item.price * item.quantity,
          0
        ),
        name: name || "",
        email: email || "",
        phone: phone || "",
        delivery_address: address || "",
        orderDetails: {
          create: items.map((item: CartItem) => ({
            coffeeId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        orderDetails: true,
      },
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: CartItem) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.imageUrl ? [item.imageUrl] : undefined,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/canceled`,
      metadata: {
        orderId: order.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
