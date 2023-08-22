import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemove }: any) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cartItems.map((item: any) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;
