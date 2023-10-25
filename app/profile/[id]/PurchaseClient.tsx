"use client";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import Image from "next/image";
import logo from "../../logo.png";
import { useCart } from "@/app/provider/CartProvider";
import BlogModal from "@/app/explore/(components)/blogs/BlogModal";
import Link from "next/link";

const PurchaseClient = ({ purchase }: any) => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  const calculateTotal = (purchase: any) => {
    return purchase.cart.reduce(
      (total: any, item: any) =>
        total +
        item.quantity * (item.price - (item.price * item.discount) / 100),
      0
    );
  };
  return (
    <Link
      className="bg-white shadow-lg rounded-lg hover:scale-[1.01] cursor-pointer transition-all duration-200"
      href={`/profile/purchase/${purchase.id}`}
    >
      <div className="px-10 py-3 bg-tealDark flex justify-between items-center  text-white rounded-t-lg">
        <Image src={logo} width={500} alt="logo" className="w-2/12" />
        {/* <h1 className="text-xl font-semibold">Order Confirmed</h1> */}
      </div>

      <div className="border-t border-gray-200 px-6 py-4">
        <h2 className="text-base font-semibold mb-2">
          Date: {purchase.date.toDate().toLocaleString()}
        </h2>
        <h2 className="text-base font-semibold mb-2">
          Number of items: {purchase.cart.length}
        </h2>
      </div>
      <div className="w-full grid place-items-center mb-5">
        <button className="rounded-md bg-indigo-400 p-3 text-slate-50">
          Click for details!
        </button>
      </div>
      <p className="font-semibold text-lg mt-2 flex justify-between rounded-b-md p-3 bg-indigo-300">
        <span>Total:</span>
        <span>{calculateTotal(purchase).toFixed(2)}DH</span>
      </p>
    </Link>
  );
};

export default PurchaseClient;
