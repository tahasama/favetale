"use client";

import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import ProductModal from "./ProductModal";

const DisplayProduct = ({ product }: any) => {
  const { uploadpetModalOpen, setUploadpetModalOpen, setProduct } = useCart();

  return (
    <>
      <td
        className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300"
        onClick={() => {
          setProduct(product), setUploadpetModalOpen(true);
        }}
      >
        <p className="text-center">{product.name}</p>
      </td>
      <ProductModal />
    </>
  );
};

export default DisplayProduct;
