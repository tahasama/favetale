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
      className="max-w-[5rem] text-sky-600 underline invisible md:visible cursor-pointer"
      onClick={() => {
        setSelectedImage(image), setUploadpetModalOpen(true);
      }}
    >
      <p className="text-center">View</p>
    </td>
  );
};

export default ViewClient;
