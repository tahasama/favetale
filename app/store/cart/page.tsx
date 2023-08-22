"use client";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import PaymentButton from "./PaymentButton";
import { useCart } from "@/app/provider/CartProvider";

const CartPage = () => {
  //   const { cartItems } = useCart();

  const [cart, setCart] = useState([]);

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

  const handlePaymentClick = () => {
    // Handle PayPal payment integration here
    alert("Redirecting to PayPal for payment...");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-40">
      <Cart cartItems={cart} onRemove={handleRemoveItem} />
      <PaymentButton onClick={handlePaymentClick} />
    </div>
  );
};

export default CartPage;
