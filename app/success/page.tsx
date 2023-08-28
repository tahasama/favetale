"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import stripe from "stripe";
import Stripe from "stripe";
import { useCart } from "../provider/CartProvider";
import PurchasePage from "./Purshase";

const Success = ({ searchParams: { session_id } }: any) => {
  const [orderData, setOrderData] = useState<any>(null);
  // console.log(
  //   "🚀 ~ file: page.tsx:10 ~ Success ~ orderData:",
  //   orderData.customer_details
  // );
  const fff = localStorage.getItem("cart");
  // console.log("🚀 ~ file: page.tsx:12 ~ Success ~ fff:", fff);
  const { cart } = useCart();
  // console.log("🚀 ~ file: page.tsx:15 ~ Success ~ cart:", cart);

  const getPurshase = () => {
    if (orderData) {
      const purchase = {
        userId: "myId1234",
        ...orderData.customer_details,
        cart: [...cart], // Create a new array to avoid modifying the original array
      };
      console.log("🚀 ~ file: page.tsx:22 ~ getPurshase ~ purchase:", purchase);
      localStorage.setItem("purshase", JSON.stringify(purchase));
    } else {
      console.log("Purchase not found in localStorage.");
    }
  };

  const storedPurchase = localStorage.getItem("purshase");
  if (storedPurchase) {
    const purchase = JSON.parse(storedPurchase); // Deserialize the string back to an object
    console.log("Retrieved purchase:", purchase);
  } else {
    console.log("Purchase not found in localStorage.");
  }

  const getData = async () => {
    const res = await fetch(`/api/checkout?session_id=${session_id}`);
    const ress = await res.json();
    // console.log("🚀 ~ file: page.tsx:16 ~ getData ~ ress:", typeof ress);
    setOrderData(JSON.parse(ress.body));
  };

  useEffect(() => {
    getData().then(() => getPurshase());
  }, []);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-white">
      <div className="text-center">
        <div className="text-teal-500 text-6xl mb-6">
          <span role="img" aria-label="Success Emoji">
            ✅
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-2 tracking-wider">
          Order Successful!
        </h2>
        <p className="mt-2 text-lg text-gray-600 max-w-xl pt-4 tracking-wide">
          Congratulations, your order has been successfully processed. You can
          now view your purchase history in your profile or check your email for
          the receipt.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back to homepage
          </Link>
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:underline ring-1 ring-indigo-600 p-2.5 rounded-sm"
          >
            Need assistance? Contact support{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <PurchasePage />
    </main>
  );
};

export default Success;
