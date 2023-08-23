"use client";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import PaymentButton from "./PaymentButton";
import { useCart } from "@/app/provider/CartProvider";

const CartPage = () => {
  const { quantities, cart, setCart } = useCart();

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, []);

  const handleRemoveItem = (itemId: any) => {
    const updatedCart = cart.filter((item: any) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total: any, item: any) => total + quantities[item.id] * item.price,
      0
    );
  };

  const calculateTotalAfterDiscount = () => {
    return cart.reduce(
      (total: any, item: any) =>
        total +
        quantities[item.id] * (item.price - (item.price * item.discount) / 100),
      0
    );
  };

  return (
    <div className="flex flex-col md:flex-row  mt-20 bg-gray-100">
      <Cart cartItems={cart} onRemove={handleRemoveItem} />
      <div className="bg-white shadow-md rounded-md p-4 m-4 md:w-1/4 h-fit sticky top-24">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between">
            <div className="flex justify-between mb-2">
              total products: {cart.length}
            </div>
            <div className="flex justify-between mb-2">
              total items:{" "}
              {cart.reduce(
                (total: any, item: any) => total + quantities[item.id],
                0
              )}
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Total:</span>
            <span className="font-semibold text-lg">
              ${calculateTotalAfterDiscount().toFixed(2)}
            </span>
          </div>
        </div>
        <PaymentButton />
      </div>
    </div>
  );
};

export default CartPage;
