"use client";
import { auth, db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>([]);

export const CartProvider = ({ children }: any) => {
  const [quantities, setQuantities] = useState<any>({});
  const [cartItems, setCartItems] = useState<any>([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [userx, setUserx] = useState();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      const userRef = doc(db, "users", user.uid);

      const userData = await getDoc(userRef);

      if (userData.exists()) {
        const user: any = userData.data();
        setUserx(user);
      } else {
        // User document doesn't exist, handle this case
        console.log("User document does not exist in Firestore.");
      }

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  useEffect(() => {
    // localStorage.clear();
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
        userx,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
