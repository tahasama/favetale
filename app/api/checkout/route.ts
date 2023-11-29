import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY as string;

const stripe = new Stripe(stripeSecret, {
  apiVersion: "2023-08-16",
});
export async function POST(request: Request) {
  const cartDetail = await request.json();
  const origin = request.headers.get("origin");
  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    line_items: cartDetail,
    billing_address_collection: "required",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/store/cart`,
  });
  return NextResponse.json(session);
}

export async function GET(request: any) {
  const url = request.url;

  const urls = new URL(url);
  const sessionId: any = urls.searchParams.get("session_id");
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return NextResponse.json({
    statusCode: 200,
    body: JSON.stringify(session),
  });
}
