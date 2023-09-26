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
  const [userx, setUserx] = useState({
    uid: "",
    name: "",
    email: "",
    creationTime: "",
    lastSignInTime: "",
  });

  useEffect(() => {
    // localStorage.clear();
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        const userRef = doc(db, "users", user.uid);

        const userData = await getDoc(userRef);

        if (userData.exists()) {
          // const user: any = userData.data();
          const userz: any = {
            ...userData.data(),
            id: userData.id,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
          };
          setUserx(userz);
        } else {
          // dispatch(saveUser(null));
        }
      }
    });

    return () => unsubscribe();
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
        setUserx,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
