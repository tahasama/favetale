"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import AddProductModal from "./AddProductModal";

const AddProduct = () => {
  const {
    userx,
    setSelectedImage,
    selectedImage,
    uploadpetModalOpen,
    setUploadpetModalOpen,
    setImageModalOpen,
    imageModalOpen,
  } = useCart();
  return (
    <>
      <button
        onClick={() => setImageModalOpen(true)}
        className="absolute right-5 top-5 bg-sky-400 px-4 py-2 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring focus:border-sky-300 transition duration-300"
      >
        Add Product
      </button>
      <AddProductModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        productD={null}
      />
    </>
  );
};

export default AddProduct;
