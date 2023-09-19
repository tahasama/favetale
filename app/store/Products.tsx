import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useCart } from "../provider/CartProvider";

import cage from "../images/store/cage.jpg";
import feeder from "../images/store/feeder.jpg";
import scratch from "../images/store/scratch.jpg";
import collar from "../images/store/collar.jpg";
import leash from "../images/store/leash.jpg";
import shampoo from "../images/store/shampoo.jpg";
import catfood from "../images/store/catfood.jpg";
import toy from "../images/store/toy.jpg";
import bed from "../images/store/bed.jpg";

import Image from "next/image";
import ProductModal from "./ProductModal";

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
      <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-2 rounded-md cursor-pointer hover:animate-buttonHover">
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

const Products = () => {
  const discountProducts = [
    {
      id: 7,
      name: "Cat Scratching Post",
      images: [scratch.src, cage.src],
      price: 24.99,
      discount: 30,
      rating: [1, 12, 14, 16, 125, 128],
      description:
        "A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.",
      reviews: [
        {
          id: 1,
          name: "Alice",
          date: "2023-08-28",
          text: "Good scratching post for my cat!",
        },
        {
          id: 2,
          name: "Bob",
          date: "2023-08-27",
          text: "Okay product, my cat uses it sometimes.",
        },
        {
          id: 3,
          name: "Charlie",
          date: "2023-08-26",
          text: "Nice design and sturdy build.",
        },
      ],
      quantity: 1,
    },
    {
      id: 8,
      name: "Small Animal Cage",
      images: [cage.src],
      price: 39.99,
      discount: 25,
      rating: [12, 22, 24, 26, 135, 138],
      description: "Spacious and comfortable cage for your small pet.",
      reviews: [
        {
          id: 1,
          name: "Eve",
          date: "2023-08-28",
          text: "Wow, this cage is spacious!",
        },
        {
          id: 2,
          name: "Frank",
          date: "2023-08-27",
          text: "Haha, my small animal loves it!",
        },
        {
          id: 3,
          name: "Grace",
          date: "2023-08-26",
          text: "Lol, it's easy to clean.",
        },
      ],
      quantity: 1,
    },
    {
      id: 9,
      name: "Squirrel Feeder",
      images: [feeder.src],
      price: 7.99,
      discount: 15,
      rating: [15, 25, 25, 25, 155, 158],
      description: "Attract squirrels with this high-quality feeder.",
      reviews: [
        {
          id: 1,
          name: "Harry",
          date: "2023-08-28",
          text: "Nah, squirrels don't seem interested.",
        },
        {
          id: 2,
          name: "Ivy",
          date: "2023-08-27",
          text: "Maybe it depends on the location?",
        },
        {
          id: 3,
          name: "Jack",
          date: "2023-08-26",
          text: "Yeah, it's a good value for the price.",
        },
      ],
      quantity: 1,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productModal, setProductModal] = useState();

  const openModal = (product: any) => {
    setIsModalOpen(true);
    setProductModal(product);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Featured Products
        </h2>

        <div className="flex flex-wrap flex-col items-center justify-center mt-12 mb-6">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-3"></div>
          <h3 className="text-lg font-semibold text-gray-700">Best Offers</h3>
          <div className="bg-teal-500 h-1 w-40 ml-2 mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 lg:gap-6 text-start">
          {/* Trending Products with Discounts */}
          {discountProducts.map((product, index) => (
            <div>
              <ProductCard
                key={index}
                product={product}
                isTrending={false}
                discounted={true}
                openModal={openModal}
              />
            </div>
          ))}
        </div>
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={productModal}
        />
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/store/Allproduct"
            className="hover:animate-bounceQ p-4 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md transition-all duration-1000 cursor-pointer"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
