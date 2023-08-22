import React from "react";

const CartItem = ({ item, onRemove }: any) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-md mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
