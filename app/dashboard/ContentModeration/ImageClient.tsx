"use client";

import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import { useCart } from "@/app/provider/CartProvider";
import { useState } from "react";

const ImageClient = ({ image, index }: any) => {
  const [pressed, setPressed] = useState<any>({
    isPressed: false,
    pressedIndex: null,
  });
  const { uploadpetModalOpen, setUploadpetModalOpen, setSelectedImage } =
    useCart();
  const [product, setproduct] = useState<any>(null);

  return (
    <td
      className=" relative lg:max-w-[40px] w-[90px] lg:w-auto 
    border border-gray-300  px-1"
    >
      <div className="flex justify-center">
        <img
          onClick={() =>
            setPressed({
              isPressed: !pressed.isPressed,
              pressedIndex: index,
            })
          }
          src={image.image}
          alt={`Image ${image.id}`}
          className={`max-h-20 max-w-20 md:max-h-28 md:max-w-28 object-cover rounded-md m-1 `}
        />
      </div>
    </td>
  );
};

export default ImageClient;
