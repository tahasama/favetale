import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useCart } from "../provider/CartProvider";

const ProductCard = ({ product, isTrending, discounted }: any) => {
  const { cartItems, setCartItems } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cart, setCart] = useState<any>(cartItems);

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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="mx-auto h-32" />

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
        }`}
      >
        ${product.price}
      </p>

      {/* Discount (if applicable) */}
      {discounted && product.discount && (
        <p className="text-red-600">{product.discount}% OFF</p>
      )}
      <div className="flex justify-evenly items-center my-2">
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

const Products = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Premium Cat Food",
      image: "/images/cat-food.jpg",
      price: 19.99,
      discount: 15,
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 2,
      name: "Interactive Dog Toy",
      image: "/images/dog-toy.jpg",
      price: 12.99,
      discount: 10,
      rating: 4.6,
      reviews: 95,
    },
    {
      id: 3,
      name: "Cozy Pet Bed",
      image: "/images/pet-bed.jpg",
      price: 29.99,
      discount: 20,
      rating: 4.9,
      reviews: 150,
    },
  ];

  const regularProducts = [
    {
      id: 4,
      name: "Pet Shampoo",
      image: "/images/pet-shampoo.jpg",
      price: 8.99,
      rating: 4.4,
      reviews: 60,
    },
    {
      id: 5,
      name: "Cat Collar",
      image: "/images/cat-collar.jpg",
      price: 5.99,
      rating: 4.2,
      reviews: 45,
    },
    {
      id: 6,
      name: "Dog Leash",
      image: "/images/dog-leash.jpg",
      price: 11.99,
      rating: 4.5,
      reviews: 80,
    },
  ];

  const discountProducts = [
    {
      id: 7,
      name: "Cat Scratching Post",
      image: "/images/scratching-post.jpg",
      price: 24.99,
      discount: 30,
      rating: 4.7,
      reviews: 110,
    },
    {
      id: 8,
      name: "Small Animal Cage",
      image: "/images/small-animal-cage.jpg",
      price: 39.99,
      discount: 25,
      rating: 4.3,
      reviews: 70,
    },
    {
      id: 9,
      name: "Bird Feeder",
      image: "/images/bird-feeder.jpg",
      price: 7.99,
      discount: 15,
      rating: 4.6,
      reviews: 90,
    },
  ];

  return (
    <section className="py-10 bg-tealLight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Featured Products
        </h2>

        <div className="flex flex-wrap flex-col items-center justify-center mt-12 mb-6">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-3"></div>
          <h3 className="text-lg font-semibold text-gray-700">Best Offers</h3>
          <div className="bg-teal-500 h-1 w-40 ml-2 mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trending Products with Discounts */}
          {discountProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isTrending={false}
              discounted={true}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/products"
            className="hover:animate-bounceQ p-4 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md transition-all duration-1000 cursor-pointer"
          >
            View All Products
          </Link>
        </div>

        <div className="flex flex-wrap flex-col items-center justify-center mt-12 mb-6">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-3"></div>
          <h3 className="text-lg font-semibold text-gray-700">
            Trending this week
          </h3>
          <div className="bg-teal-500 h-1 w-40 ml-2 mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trending Products */}
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isTrending={true}
              discounted={false}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/products"
            className="hover:animate-bounceQ p-4 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md transition-all duration-1000 cursor-pointer"
          >
            View All Products
          </Link>
        </div>

        <div className="flex flex-wrap flex-col items-center justify-center mt-12 mb-6">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-3"></div>
          <h3 className="text-lg font-semibold text-gray-700">
            Most reviewed this month
          </h3>
          <div className="bg-teal-500 h-1 w-40 ml-2 mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Regular Products */}
          {regularProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isTrending={false}
              discounted={false}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/products"
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
