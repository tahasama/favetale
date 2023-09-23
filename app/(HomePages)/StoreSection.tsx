"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Store from "../images/store.jpg";
import Store1 from "../images/store1.jpg";
import Store2 from "../images/store2.jpg";
import Store3 from "../images/store3.jpg";
import StoreL1 from "../images/store/store1.jpg";
import StoreL2 from "../images/store/store2.jpg";
import Link from "next/link";
import { useCart } from "../provider/CartProvider";
import ProductModal from "../store/ProductModal";
import { Vollkorn } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const ProductCard = ({
  product,
  isTrending,
  discounted,
  openModal,
  isModalOpen,
  closeModal,
}: any) => {
  const { cartItems, setCartItems, cart, setCart } = useCart();

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
      onClick={() => openModal(product)}
      className="bg-white relative w-ful rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-auto  flex justify-center bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="h-[15rem] w-fit rounded-t-md"
          height={500}
          width={500}
        />
      </div>
      <div className="ml-4 mb-4">
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
        {discounted && product.discount > 0 && (
          <p className="my-1 absolute top-2 right-2 bg-amber-500 p-2">
            {product.discount}% OFF
          </p>
        )}

        {/* Add to Cart Button */}
        <button className="bg-teal-500 hover:bg-teal-600 text-slate-600 px-4 py-2 mt-2 rounded-md cursor-pointer hover:animate-buttonHover">
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

const StorySection = () => {
  const products = [
    {
      images: [Store3],
      name: "Pet Toy",
      price: 19.99,
      id: 10,
      reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
      rating: 5,
      discount: 0,
    },
    {
      images: [Store2],
      name: "Premium Pet Food",
      price: 29.99,
      id: 11,
      reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
      rating: 5,
      discount: 0,
    },
    {
      images: [Store1],
      name: "Pet Grooming Kit",
      price: 39.99,
      id: 12,
      reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
      rating: 5,
      discount: 0,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productModal, setProductModal] = useState();

  const openModal = (product: any) => {
    setIsModalOpen(true);
    setProductModal(product);

    console.log("hhhhhhhhhhhhhhhhh");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="bg-tealLight">
      <div className=" px-1 sm:px-3 lg:px-6 py-12">
        <div className="grid place-items-center">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-5"></div>

          <h2 className={`text-3xl font-semibold mb-4 ${vollkorn.className}`}>
            Discover Our Pet Store
          </h2>
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-16"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-4  md:order-1 order-2">
            <div className="lg:ml-20 flex flex-col items-center md:items-start justify-start">
              <p className="text-lg text-slate-600 mb-8 sm:ml-20 indent-4 mt-4 mx-2 md:mx-0">
                Welcome to our store, where you can find a wide selection of
                high-quality pet products to cater to all your furry friend's
                needs. From toys and accessories to premium pet food and care
                essentials, we've got it all.
              </p>
              <Link
                href="/store"
                className=" w-full grid place-content-center md:place-content-start "
              >
                <button className=" hover:animate-buttonHover w-fit mt-0 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3  sm:px-8 sm:py-3 shadow-xl rounded-3xl">
                  Explore Our Store
                </button>
              </Link>
            </div>
            <div className="visible md:hidden lg:block flex flex-col justify-center space-y-4 mt-10">
              <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
                <p className="text-xl text-gray-800 mb-4">
                  🎉 Monthly Special: 15% Off!
                </p>
                <p className="text-gray-700">
                  Don't miss out on our exclusive monthly discount! Get 15% off
                  on selected products for a limited time.
                </p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
                <p className="text-xl text-gray-800 mb-4">
                  🚚 Fast Delivery Service
                </p>
                <p className="text-gray-700">
                  We offer fast and reliable delivery services to ensure your
                  pet products reach you in no time. Shop now and experience the
                  convenience of doorstep delivery!
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid place-items-center order-1 md:order-2">
            <Image
              src={StoreL2}
              width={1000}
              height={600}
              alt="storeL2"
              className="w-10/12 lg:w-8/12 rounded-3xl"
            />
          </div>

          {/* <Image src={StoreL2} width={1000} height={600} alt="storeL2"/> */}
        </div>
        <div className="hidden lg:hidden md:visible  md:flex flex-col justify-center space-y-4 mt-12">
          <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20 ">
            <p className="text-xl text-gray-800 mb-4">
              🎉 Monthly Special: 15% Off!
            </p>
            <p className="text-gray-700">
              Don't miss out on our exclusive monthly discount! Get 15% off on
              selected products for a limited time.
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
            <p className="text-xl text-gray-800 mb-4">
              🚚 Fast Delivery Service
            </p>
            <p className="text-gray-700">
              We offer fast and reliable delivery services to ensure your pet
              products reach you in no time. Shop now and experience the
              convenience of doorstep delivery!
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-3 place-items-center mt-12">
          {products.map((product, index) => (
            <>
              <ProductCard
                key={index}
                product={product}
                isTrending={false}
                discounted={true}
                openModal={() => openModal(product)}
              />
            </>
          ))}
        </div> */}
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={productModal}
        />
      </div>
    </section>
  );
};

export default StorySection;
