import { m } from "framer-motion";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY as string;

const stripe = new Stripe(stripeSecret, {
  apiVersion: "2023-08-16",
});
export async function POST(request: Request) {
  const cartDetail = await request.json();
  console.log("🚀 ~ file: route.ts:12 ~ POST ~ cartDetail:", cartDetail);
  const origin = request.headers.get("origin");
  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    line_items: cartDetail,

    payment_method_types: ["card"],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/store/cart`,
    customer_email: "taha.maatof@gmail.com",
  });
  return NextResponse.json(session);
}

// export async function GET(request: Request) {
//   console.log("🚀 ~ file: route.ts:27 ~ GET ~ request:", request);
//   // const { session_id } = request.json();

//   // try {
//   //   const session = await stripe.checkout.sessions.retrieve("session_id");
//   //   return NextResponse.json(session);
//   // } catch (error) {
//   //   console.error("Error retrieving session details:", error);
//   //   return NextResponse.json(
//   //     {
//   //       error: "Failed to retrieve session details",
//   //     },
//   //     { status: 500 }
//   //   );
//   // }
// }

export async function GET(request: any) {
  const url = request.url;

  const urls = new URL(url);
  const sessionId: any = urls.searchParams.get("session_id");
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  console.log("🚀 ~ file: route.ts:50 ~ GET ~ session:", session);
  return {
    statusCode: 200,
    body: JSON.stringify(session),
  };
}
