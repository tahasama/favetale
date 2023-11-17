"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useCart } from "../provider/CartProvider";
const ProductCard = ({
  product,
  isTrending,
  discounted,
  openModal,
  isModalOpen,
  closeModal,
}: any) => {
  const { cartItems, setCartItems, cart, setCart } = useCart();
  const {
    setSelectedImage,
    setUploadpetModalOpen,
    uploadpetModalOpen,
    filterImage,
    setFilterImage,
    setProduct,
  } = useCart();
  console.log(
    "🚀 ~ file: ProductCard.tsx:24 ~ uploadpetModalOpen:",
    uploadpetModalOpen
  );

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Check if the product is already in the cart and update the button state
    setIsAddedToCart(cart.some((item: any) => item.id === product.id));
  }, [cart, product.id]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, [cartItems]);

  return (
    <div
      onClick={() => {
        setProduct(product), setUploadpetModalOpen(true);
      }}
      className="bg-white relative p-3 md:p-4 mx-0 md:mx-3 w-80 lg:w-80 xl:w-96 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-auto  flex justify-center bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="h-[15rem] w-fit rounded-md"
          height={500}
          width={500}
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

      {/* Product Price */}
      <p
        className={` ${
          isTrending
            ? "text-sky-500"
            : discounted
            ? "text-red-700"
            : "text-gray-600"
        } text-xl my-1`}
      >
        {product.price} Dhs
      </p>

      {/* Discount (if applicable) */}
      {discounted && product.discount && (
        <p className="my-1 absolute top-2 right-2 bg-amber-500 p-2">
          {product.discount}% OFF
        </p>
      )}

      {/* Add to Cart Button */}
      <button
        className={`bg-blue-500 px-3 py-2 mb-3 lg:mb-0 rounded-md text-white  hover:bg-blue-600 ${
          (product?.stock === 0 || isAddedToCart) &&
          "bg-slate-400 hover:bg-slate-400 cursor-pointer"
        }`}
        disabled={product?.stock === 0 || isAddedToCart}
      >
        {isAddedToCart
          ? "Added to Cart"
          : product?.stock === 0
          ? "Out of stock"
          : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
