"use client";
import React from "react";
import Link from "next/link";

const PurchaseClient = ({ purchase }: any) => {
  const calculateTotal = (purchase: any) => {
    return purchase.cart.reduce(
      (total: any, item: any) =>
        total +
        item.quantity * (item.price - (item.price * item.discount) / 100),
      0
    );
  };
  return (
    <tr key={purchase.id} className="text-center">
      <td className="py-3 px-6 border">{purchase.email}</td>
      <td className="py-3 px-6 border">
        {purchase.date.toDate().toLocaleString()}
      </td>
      <td className="py-3 px-6 border">{purchase.cart.length}</td>
      <td className="py-3 px-6 border">
        {calculateTotal(purchase).toFixed(2)} DH
      </td>
      <td className="py-3 px-6 border hover:animate-buttonHover text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-500">
        <Link
          className="bg-white p-2 shadow-lg rounded-lg "
          href={`/profile/purchase/${purchase.id}`}
        >
          <button className=" ">Click for details</button>
        </Link>
      </td>
    </tr>
  );
};

export default PurchaseClient;
