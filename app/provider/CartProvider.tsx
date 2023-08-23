"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>([]);

export const CartProvider = ({ children }: any) => {
  const [quantities, setQuantities] = useState<any>({});
  const [cartItems, setCartItems] = useState<any>([]);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        quantities,
        setQuantities,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
