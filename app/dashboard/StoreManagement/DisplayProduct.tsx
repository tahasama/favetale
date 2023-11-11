import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import ProductModal from "./ProductModal";

const DisplayProduct = ({ product }: any) => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <>
      <td
        className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300"
        onClick={() => {
          setUploadpetModalOpen(true);
          // setproduct(product);
        }}
      >
        <p className="text-center">{product.name}</p>
      </td>
      <ProductModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default DisplayProduct;
