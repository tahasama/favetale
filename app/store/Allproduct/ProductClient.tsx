"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductModal from "../ProductModal";
import { useCart } from "@/app/provider/CartProvider";

const ProductClient = ({ products }: any) => {
  const { setUploadpetModalOpen, setProduct } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    discount: false,
    maxPrice: "",
    minPrice: "",
    minRating: "",
  });

  const openModal = (product: any) => {
    setProduct(product), setUploadpetModalOpen(true);
  };

  const averageRating = (ratings: any) => {
    if (ratings.length === 0) {
      return 0;
    }

    const sum = ratings.reduce(
      (total: any, rating: any) => total + rating.points,
      0
    );
    const average = sum / ratings.length;
    return average;
  };

  const filteredProducts = products.filter((product: any) => {
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
    <div className="bg-tealLight h-full mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>
      <div className="flex mb-4 mt-10 bg-indigo-100 w-full rounded-lg p-2">
        <div className="flex flex-wrap gap-10 items-center justify-start w-full">
          {/* Category Filter */}
          {/* <div className="flex items-center">
            <label className="mr-2 text-lg">Category:</label>
            <select
              className="border rounded px-4 py-2 bg-gray-100 text-lg"
              value={filterOptions.category}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  category: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option value="cats">🐱 Cats</option>
              <option value="dogs">🐶 Dogs</option>
              <option value="birds">🦜 Birds</option>
              <option value="fish">🐟 Fish</option>
              <option value="small animals">🐹 Small Animals</option>
            </select>
          </div> */}

          {/* Price Filters */}
          <div className="flex items-center space-x-2">
            <label className="text-lg">Price Range:</label>
            <input
              type="number"
              className="border rounded  w-32 md:w-auto px-4 py-2 bg-gray-100"
              placeholder="Min"
              value={filterOptions.minPrice}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  minPrice: e.target.value,
                })
              }
            />
            <span className="text-lg">-</span>
            <input
              type="number"
              className="border rounded  w-32 md:w-auto px-4 py-2 bg-gray-100"
              placeholder="Max"
              value={filterOptions.maxPrice}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  maxPrice: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center">
            <label className="mr-2 text-lg">Min Rating:</label>
            <input
              type="number"
              step="0.1"
              className="border rounded  px-4 py-2 bg-gray-100"
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
      <div className="flex items-center my-4 bg-sky-100 rounded-md p-2 w-fit">
        <input
          type="checkbox"
          className="mr-2 h-6 w-6"
          checked={filterOptions.discount}
          onChange={(e) =>
            setFilterOptions({
              ...filterOptions,
              discount: e.target.checked,
            })
          }
        />
        <label className="text-lg text-blue-900">Only with Discount</label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl">
        {filteredProducts.map((product: any) => (
          <div
            onClick={() => openModal(product)}
            className="bg-white relative p-4 mx-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
          >
            <div className="w-auto  flex justify-center ">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="h-[16rem] w-fit rounded-md"
                height={500}
                width={500}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className={` dh{"text-gray-600"} text-xl my-1`}>
              {product.price} Dhs
            </p>
            {product.discount > 0 && (
              <p className="my-1 absolute top-2 right-2 bg-amber-500 p-2">
                {product.discount}% OFF
              </p>
            )}
            {product.rating.length !== 0 && (
              <p className="my-1 absolute top-2 flex items-center justify-center left-2 bg-pink-50 w-20">
                <p className="p-1">
                  {averageRating(product.rating).toFixed(0)} / 5
                </p>
                <span className="text-lg">⭐</span>
              </p>
            )}

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-2 rounded-md cursor-pointer hover:animate-buttonHover">
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
      <ProductModal />
    </div>
  );
};

export default ProductClient;
