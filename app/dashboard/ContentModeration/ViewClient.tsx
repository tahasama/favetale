"use client";

import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import { useCart } from "@/app/provider/CartProvider";
import { useState } from "react";

const ViewClient = ({ image }: any) => {
  const { uploadpetModalOpen, setUploadpetModalOpen, setSelectedImage } =
    useCart();
  const [product, setproduct] = useState<any>(null);

  return (
    <td
      className="w-full text-sky-600 underline invisible md:visible cursor-pointer hidden md:flex justify-center items-center h-28"
      onClick={() => {
        setSelectedImage(image), setUploadpetModalOpen(true);
      }}
    >
      <p className="text-center ">View</p>
    </td>
  );
};

export default ViewClient;
