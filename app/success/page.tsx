"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import stripe from "stripe";
import Stripe from "stripe";
import { useCart } from "../provider/CartProvider";
import PurchasePage from "./Purshase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";

const Success = ({ searchParams: { session_id } }: any) => {
  const { userx } = useCart();
  const [purchaseData, setPurchaseData] = useState<any[]>([]);

  const storedPurchase = async (purchase: any) => {
    await addDoc(collection(db, "purchases"), purchase);
    let Q: any[] = purchase.cart.reduce((K: any[], product: any) => {
      K.push({
        id: product.id,
        quantity: product.quantity,
        stock: product.stock,
      });
      return K;
    }, []);
    console.log("🚀 ~ file: page.tsx:33 ~ Q ~ Q:", Q);
    Q.map(async (product) => {
      await updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
      localStorage.setItem(`quantity_${product.id}`, String(1));
    });
  };

  const getData = async () => {
    const res = await fetch(`/api/checkout?session_id=${session_id}`);
    const ress = await res.json();
    const orderData = JSON.parse(ress.body);
    const cartAfter: any = localStorage.getItem("cartAfter");
    const cart = JSON.parse(cartAfter);
    if (orderData) {
      const purchase = {
        userId: userx.id,
        ...orderData.customer_details,
        session_id: session_id,
        cart: cart,
        date: serverTimestamp(),
      };
      localStorage.setItem("purshase", JSON.stringify(purchase));
      try {
        const snapshot = await getDocs(
          query(
            collection(db, "purchases"),
            where("session_id", "==", session_id)
          )
        );
        if (snapshot.empty) {
          storedPurchase(purchase);
          setPurchaseData(purchase);
          return;
        } else {
          snapshot.forEach((doc: any) => {
            setPurchaseData({ id: doc.id, ...doc.data() });
          });
          return purchaseData;
        }
      } catch (error) {
        console.log("🚀 ~ file: page.tsx:42 ~ getData ~ error:", error);
      }
    } else {
      console.log("Purchase not found in localStorage.");
    }
    // setQuantities({});
  };

  useEffect(() => {
    userx.id && purchaseData.length === 0 && getData();
  }, [userx, purchaseData]);

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
      {purchaseData && purchaseData.length !== 0 && (
        <PurchasePage purchase={purchaseData} />
      )}
    </main>
  );
};

export default Success;
