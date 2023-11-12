"use client";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditDeleteProduct = ({ product }: any) => {
  console.log(
    "🚀 ~ file: EditProduct.tsx:7 ~ EditDeleteProduct ~ product:",
    product
  );
  const [deleted, setDeleted] = useState(false);

  const {
    uploadpetModalOpen,
    setUploadpetModalOpen,
    imageModalOpen,
    setImageModalOpen,
    setSelectedImage,
    selectedImage,
  } = useCart();
  const handleEditProduct = () => {
    setImageModalOpen(true);
    setSelectedImage(product);
  };

  const handleDeleteProduct = async () => {
    const likeRef = doc(db, "products", selectedImage.id); // Assuming 'db' is your Firestore instance
    await deleteDoc(likeRef)
      .then(() => setDeleted(true))
      .finally(() => setSelectedImage(null));
  };
  return (
    <td className="flex flex-col md:flex-row justify-center gap-4 h-28 items-center">
      <button
        onClick={handleEditProduct}
        disabled={!product}
        className="text-2xl text-sky-500"
      >
        <FaEdit />
      </button>
      <button
        onClick={handleDeleteProduct}
        disabled={deleted && true}
        className={`text-xl ${
          deleted ? "text-slate-400 " : "text-red-400 "
        } m-2 hover:scale-110`}
      >
        <FaTrash />
      </button>
    </td>
  );
};

export default EditDeleteProduct;
