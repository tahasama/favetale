"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import stripe from "stripe";
import Stripe from "stripe";

const Success = () => {
  const params = useSearchParams();

  const session_id = params.get("session_id");

  useEffect(() => {
    const xxx = async () => {
      const response = await fetch(`/api/checkout?session_id=${session_id}`);
      //   const data = await response.json();
      console.log("🚀 ~ file: page.tsx:17 ~ xxx ~ response:", response);
      //   console.log("🚀 ~ file: page.tsx:19 ~ xxx ~ data:", data);
    };
    xxx();
  }, []);

  //   const sessionDetails = response.json();

  //   console.log("Session Details:", sessionDetails);
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Checkout session */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Success;
