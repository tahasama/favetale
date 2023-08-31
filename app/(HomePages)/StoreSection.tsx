"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Store from "../images/store.jpg";
import Store1 from "../images/store1.jpg";
import Store2 from "../images/store2.jpg";
import Store3 from "../images/store3.jpg";
import Link from "next/link";
import { useCart } from "../provider/CartProvider";

const ProductCard = ({ product, isTrending, discounted }: any) => {
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

  const addToCart = () => {
    if (!isAddedToCart) {
      const updatedCartItems = [...cart, product];
      setCartItems(updatedCartItems);
      setIsAddedToCart(true);

      // Save the updated cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };
  return (
    <div className="bg-white grid p-4 mx-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300">
      {/* Product Image */}
      <div className="w-auto  flex justify-center ">
        <Image
          src={product.image}
          alt={product.name}
          className="h-[12rem] w-fit rounded-md"
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
        ${product.price}
      </p>

      {/* Discount (if applicable) */}
      {discounted && product.discount && (
        <p className="text-red-600 my-1">{product.discount}% OFF</p>
      )}
      <div className="flex justify-center gap-2 items-center my-2">
        <div className="flex justify-evenly items-center">
          <p> {product.reviews} </p>
          <span className="text-xl">🗨️</span>
        </div>
        <div className="flex justify-evenly items-center">
          <p> {product.rating} / 5 </p>
          <span className="text-xl">⭐</span>
        </div>
      </div>
      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        disabled={isAddedToCart}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-2 rounded-md cursor-pointer hover:animate-buttonHover"
      >
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

const StorySection = () => {
  const products = [
    {
      image: Store3,
      name: "Pet Toy",
      price: 19.99,
      id: 10,
      reviews: 10,
      rating: 5,
      discount: 0,
    },
    {
      image: Store2,
      name: "Premium Pet Food",
      price: 29.99,
      id: 10,
      reviews: 11,
      rating: 5,
      discount: 0,
    },
    {
      image: Store1,
      name: "Pet Grooming Kit",
      price: 39.99,
      id: 12,
      reviews: 10,
      rating: 5,
      discount: 0,
    },
  ];
  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Explore Our Store
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-teal-700">
          {/* Store Story Image */}
          <div className="relative overflow-hidden col-span-1">
            <Image
              src={Store} // Replace with your store front image URL
              alt="Store Front W "
              width={600}
              height={400}
              layout="responsive"
              //   className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
              <a
                href="/store"
                className="text-white text-lg font-semibold hover:underline"
              >
                Visit the Store
              </a>
            </div>
          </div>

          {/* Store Story Content */}
          <div className="flex flex-col justify-evenly  col-span-2 mx-5">
            <h3 className="text-2xl text-gray-100 font-semibold mb-4">
              Discover Our Pet Store
            </h3>
            <span>
              <p className="text-gray-200 mb-6">
                Welcome to our store, where you can find a wide selection of
                high-quality pet products to cater to all your furry friend's
                needs. From toys and accessories to premium pet food and care
                essentials, we've got it all.
              </p>

              <p className="text-gray-200 mb-6">
                Whether you're a first-time pet owner or a seasoned enthusiast,
                our store is your one-stop shop for all things pet-related.
                Visit us today and embark on a journey of discovery for your
                beloved companions.
              </p>

              <Link
                href="/store"
                className="bg-tealLight w-fit hover:text-white px-4 py-3 rounded-md hover:bg-lime-600 transition-colors duration-300 mb-4"
              >
                Explore Our Store
              </Link>
            </span>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  isTrending={false}
                  discounted={true}
                />
              ))}
            </div>

            <span>
              <div className="bg-yellow-300 p-4 mt-4 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">
                  🎉 Monthly Special: 15% Off!
                </p>
                <p className="text-gray-700">
                  Don't miss out on our exclusive monthly discount! Get 15% off
                  on selected products for a limited time.
                </p>
              </div>
              <div className="bg-green-300 p-4 mt-4 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">
                  🚚 Fast Delivery Service
                </p>
                <p className="text-gray-700">
                  We offer fast and reliable delivery services to ensure your
                  pet products reach you in no time. Shop now and experience the
                  convenience of doorstep delivery!
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;