"use client";
import { useCart } from "@/app/provider/CartProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CartItem = ({ item, onRemove }: any) => {
  // localStorage.clear();
  const { quantities, setQuantities } = useCart();
  console.log("🚀 ~ file: CartItem.tsx:8 ~ CartItem ~ quantities:", quantities);

  useEffect(() => {
    const savedQuantity = localStorage.getItem(`quantity_${item.id}`);
    console.log(
      `Saved quantity for item ${item.id}:`,
      savedQuantity,
      typeof savedQuantity
    );

    if (savedQuantity !== null) {
      const parsedQuantity = parseInt(savedQuantity, 10);
      console.log(
        `Parsed quantity for item ${item.id}:`,
        parsedQuantity,
        typeof parsedQuantity
      );
      setQuantities((prevQuantities: any) => ({
        ...prevQuantities,
        [item.id]: parsedQuantity,
      }));
    } else {
      console.log(
        `No saved quantity found for item ${item.id}. Using default.`
      );
      setQuantities((prevQuantities: any) => ({
        ...prevQuantities,
        [item.id]: 1, // Default quantity is 1 if not found in local storage
      }));
    }
  }, [item.id, setQuantities]);

  useEffect(() => {
    localStorage.setItem(`quantity_${item.id}`, String(quantities[item.id]));
  }, [item.id, quantities]);
  console.log(
    "🚀 ~ file: CartItem.tsx:43 ~ useEffect ~ quantities[item.id]:",
    quantities[item.id]
  );

  const increaseQuantity = () => {
    setQuantities((prevQuantities: any) => ({
      ...prevQuantities,
      [item.id]: prevQuantities[item.id] + 1,
    }));
  };

  const decreaseQuantity = () => {
    if (quantities[item.id] > 1) {
      setQuantities((prevQuantities: any) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] - 1,
      }));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b bg-white border-gray-200">
      <div className=" bg-tealLight rounded-md mt-6 border border-gray-300">
        <Image
          src={item.image}
          alt={item.name}
          className="w-72 h-40  object-cover rounded-md "
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between h-40 py-2 mt-6 sm:ml-9 w-11/12">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <div className="flex flex-col justify-between items-center">
          <p className="text-gray-600 text-lg ">${item.price.toFixed(2)}</p>
          {item.discount !== 0 && (
            <div className="flex justify-center gap-5 items-center">
              ➡️
              <p className="text-red-600 text-md ">-{item.discount}% Off </p> ➡️
              <p className="text-gray-600 text-lg ">
                ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
              </p>
            </div>
          )}

          <div className="flex justify-center gap-5 items-center">
            ➡️
            <div className="flex items-center border border-gray-300 rounded-md p-1">
              <button className="px-2" onClick={decreaseQuantity}>
                -
              </button>
              <span className="px-2">{quantities[item.id]}</span>
              <button className="px-2" onClick={increaseQuantity}>
                +
              </button>
            </div>
            ➡️
            <p className="text-gray-600 text-lg ">
              $
              {(
                (item.price - (item.price * item.discount) / 100) *
                quantities[item.id]
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <button
        className="text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 relative -top-96 sm:-top-20 left-32 sm:left-0 sm:-right-3 transition-all duration-500 rounded-full"
        onClick={() => onRemove(item.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          id="close"
        >
          <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
