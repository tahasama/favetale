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
  const [profile, setProfile] = useState(false);
  const [userx, setUserx] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [uploadpetModalOpen, setUploadpetModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [meetupModalOpen, setMeetupModalOpen] = useState(false);
  const [petModalOpen, setPetModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [comments, setComments] = useState<any[]>([]);
  const [filterImage, setFilterImage] = useState<any>("");

  // const [petModalOpen, setPetModalOpen] = useState(false);

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
          };
          {
            !userz.suspended
              ? setUserx(userz)
              : console.log("This Account has been suspended");
          }
        } else {
          // dispatch(saveUser(null));
        }
      }
    });

    return () => unsubscribe();
  }, [userx.id]);

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
        uploadpetModalOpen,
        setUploadpetModalOpen,
        selectedImage,
        setSelectedImage,
        imageModalOpen,
        setImageModalOpen,
        comments,
        setComments,
        meetupModalOpen,
        setMeetupModalOpen,
        petModalOpen,
        setPetModalOpen,
        filterImage,
        setFilterImage,
        profile,
        setProfile,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
