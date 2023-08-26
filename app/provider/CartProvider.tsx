"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>([]);

export const CartProvider = ({ children }: any) => {
  const [quantities, setQuantities] = useState<any>({});
  const [cartItems, setCartItems] = useState<any>([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.clear();
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        quantities,
        setQuantities,
        cart,
        setCart,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
