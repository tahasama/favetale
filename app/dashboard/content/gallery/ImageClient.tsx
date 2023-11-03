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
    <>
      <td className=" relative">
        <img
          onClick={() =>
            setPressed({
              isPressed: !pressed.isPressed,
              pressedIndex: index,
            })
          }
          src={image.image}
          alt={`Image ${image.id}`}
          className={`max-h-20 max-w-20 md:max-h-28 md:max-w-28 object-cover rounded-md my-1 
       ${
         pressed.pressedIndex === index && pressed.isPressed
           ? "scale-[3] z-50 absolute left-0 top-0"
           : "scale-[1] z-10"
       }
     hover:md:scale-[4] z-10 hover:z-50  hover:md:absolute origin-top-left top-1  transition-all duration-300`}
        />
      </td>
    </>
  );
};

export default ImageClient;
