"use client";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useCart } from "@/app/provider/CartProvider";
import Payment from "./Payment";

const CartPage = () => {
  const {
    cartItems,
    quantities,
    cart,
    setCart,
    total,
    setTotal,
    setQuantities,
  } = useCart();

  const handleRemoveItem = (itemId: any) => {
    localStorage.setItem(`quantity_${itemId}`, String(1));
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

  useEffect(() => {
    setTotal(
      cart.reduce(
        (total: any, item: any) =>
          total +
          quantities[item.id] *
            (item.price - (item.price * item.discount) / 100),
        0
      )
    );
  }, [cartItems, quantities, cart]);

  return (
    <div className="flex flex-col lg:flex-row  mt-20 bg-gray-100">
      <Cart cartItems={cart} onRemove={handleRemoveItem} />
      <div className="bg-white shadow-md rounded-md p-4 m-4 lg:w-1/4 h-fit sticky top-24">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between">
            <div className="flex justify-between mb-2">
              total products: {cart.length}
            </div>
            <div className="flex justify-between mb-2">
              total items:{" "}
              {cart.reduce(
                (total: any, item: any) =>
                  total + quantities !== null ? quantities[item.id] : 0,
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
            <span className="font-semibold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
