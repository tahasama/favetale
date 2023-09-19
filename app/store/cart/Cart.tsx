import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemove }: any) => {
  return (
    <div className="shadow-md bg-teal-50 sm:m-4 p-4 w-full lg:w-3/4 rounded-lg">
      <h2 className="text-xl font-semibold mb-0 border-b leading-10 ">
        Your Cart
      </h2>
      {cartItems.map((item: any) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;
