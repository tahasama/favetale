"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductModal from "../ProductModal";

import cage from "../../images/store/cage.jpg";
import feeder from "../../images/store/feeder.jpg";
import scratch from "../../images/store/scratch.jpg";
import { useSearchParams } from "next/navigation";

import cat from "../../images/category/cat.png";
import dog from "../images/category/dog.png";
import rabbit from "../images/category/rabbit.png";
import fish from "../images/category/fish.png";
import bird from "../images/category/bird.png";

const products = [
  {
    id: 7,
    name: "Cat Scratching Post",
    images: [scratch.src, cage.src],
    price: 24.99,
    discount: 30,
    rating: [3, 4, 4, 3, 5, 3],
    description:
      "A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.",
    category: "cats",

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
    rating: [1, 2, 2, 2, 1, 1, 0],
    description: "Spacious and comfortable cage for your small pet.",
    category: "birds",
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
    discount: 0,
    rating: [5, 5, 5, 4, 5],
    description: "Attract squirrels with this high-quality feeder.",
    category: "small animals",
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

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    discount: false,
    maxPrice: "",
    minPrice: "",
    minRating: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  useEffect(() => {
    if (search) {
      setFilterOptions({ ...filterOptions, category: search });
    }
  }, []);

  const openModal = (product: any) => {
    setIsModalOpen(true);

    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const averageRating = (ratings: any) => {
    if (ratings.length === 0) {
      return 0; // Return 0 if there are no ratings to avoid division by zero
    }

    const sum = ratings.reduce((total: any, rating: any) => total + rating, 0);
    const average = sum / ratings.length;
    return average;
  };

  const filteredProducts = products.filter((product) => {
    const passesCategory =
      !filterOptions.category || product.category === filterOptions.category;

    const passesDiscount = !filterOptions.discount || product.discount > 0;

    const passesPriceMax =
      !filterOptions.maxPrice ||
      product.price <= parseInt(filterOptions.maxPrice);

    const passesPriceMin =
      !filterOptions.minPrice ||
      product.price >= parseInt(filterOptions.minPrice);

    const passesRating =
      !filterOptions.minRating ||
      averageRating(product.rating) >= parseFloat(filterOptions.minRating);

    return (
      passesCategory &&
      passesDiscount &&
      passesPriceMax &&
      passesPriceMin &&
      passesRating
    );
  });
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <div className="container bg-tealLight h-full mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>

      <div className="flex mb-4 mt-10">
        <div className="flex mb-4 space-x-4">
          {/* Category Filter */}
          <div className="flex items-center">
            <label className="mr-2">Category:</label>
            <select
              className="border rounded px-2 py-1 bg-slate-50"
              value={filterOptions.category}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  category: e.target.value,
                })
              }
            >
              <option value="" className="text-lg">
                All
              </option>
              <option value="cats" className="text-lg">
                🐱 Cats
              </option>
              <option value="dogs" className="text-lg">
                🐶 Dogs
              </option>
              <option value="birds" className="text-lg">
                🦜 Birds
              </option>
              <option value="fish" className="text-lg">
                🐟 Fish
              </option>
              <option value="small animals" className="text-lg">
                🐹 Small Animals.
              </option>
            </select>
          </div>

          {/* Discount Filter */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={filterOptions.discount}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  discount: e.target.checked,
                })
              }
            />
            <label>Only with Discount</label>
          </div>

          {/* Max Price Filter */}
          <div className="flex items-center">
            <label className="mr-2">Max Price:</label>
            <input
              type="number"
              className="border rounded px-2 py-1"
              value={filterOptions.maxPrice}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  maxPrice: e.target.value,
                })
              }
            />
          </div>

          {/* Min Price Filter */}
          <div className="flex items-center">
            <label className="mr-2">Min Price:</label>
            <input
              type="number"
              className="border rounded px-2 py-1"
              value={filterOptions.minPrice}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  minPrice: e.target.value,
                })
              }
            />
          </div>

          {/* Min Rating Filter */}
          <div className="flex items-center">
            <label className="mr-2">Min Rating:</label>
            <input
              type="number"
              step="0.1"
              className="border rounded px-2 py-1"
              value={filterOptions.minRating}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  minRating: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            onClick={() => openModal(product)}
            className="bg-white relative p-4 mx-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="w-auto  flex justify-center ">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="h-[16rem] w-fit rounded-md"
                height={500}
                width={500}
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

            {/* Product Price */}
            <p className={` ${"text-gray-600"} text-xl my-1`}>
              ${product.price}
            </p>

            {/* Discount (if applicable) */}
            {product.discount > 0 && (
              <p className="my-1 absolute top-2 right-2 bg-amber-500 p-2">
                {product.discount}% OFF
              </p>
            )}
            {/* Rating (if applicable) */}
            {product.rating.length && (
              <p className="my-1 absolute top-2 flex items-center justify-center left-2 bg-pink-50 w-20">
                <p className="p-1">
                  {averageRating(product.rating).toFixed(1)} / 5
                </p>
                <span className="text-lg">⭐</span>
              </p>
            )}

            {/* Add to Cart Button */}
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-2 rounded-md cursor-pointer hover:animate-buttonHover">
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default AllProducts;
