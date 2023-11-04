"use client";
import React, { useState, useEffect } from "react";

import cage from "../../images/store/cage.jpg";
import feeder from "../../images/store/feeder.jpg";
import scratch from "../../images/store/scratch.jpg";
import Image from "next/image";
import ProductModal from "./ProductModal";
import { useCart } from "@/app/provider/CartProvider";
import { FaInfo, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function StoreManagement() {
  const discountProducts = [
    {
      id: 7,
      name: "Cat Scratching Post",
      images: [scratch.src, cage.src],
      price: 24.99,
      discount: 30,
      rating: [1, 12, 14, 16, 125, 128],
      cumulativeStock: 100,
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
      stock: 1,
    },
    {
      id: 8,
      name: "Small Animal Cage",
      images: [cage.src],
      price: 39.99,
      discount: 25,
      rating: [12, 22, 24, 26, 135, 138],
      cumulativeStock: 100,
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
      stock: 10,
    },
    {
      id: 9,
      name: "Squirrel Feeder",
      images: [feeder.src],
      price: 7.99,
      discount: 15,
      rating: [15, 25, 25, 25, 155, 158],
      cumulativeStock: 100,
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
      stock: 25,
    },
  ];
  const [products, setProducts] = useState(discountProducts);

  const [product, setproduct] = useState<any>(null);
  const [pressed, setPressed] = useState<any>({
    isPressed: false,
    pressedIndex: null,
  });
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  useEffect(() => {
    // Fetch the list of products from your backend when the component mounts
    // Example: fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleProductClick = (product: any) => {
    // Set the selected product when a product is clicked
    setproduct(product);
  };

  const handleDeselectProduct = () => {
    // Deselect the currently selected product
    setproduct(null);
  };

  const handleAddProduct = () => {
    // Implement functionality to add a new product (e.g., open a modal)
  };

  const handleEditProduct = () => {
    // Implement functionality to edit the selected product (e.g., open a modal)
  };

  const handleDeleteProduct = () => {
    // Implement functionality to delete the selected product (e.g., confirm and send a delete request to the backend)
  };

  return (
    <div className="bg-tealLight">
      <h2 className="text-center my-6">Store Management</h2>

      {/* Product List */}
      <div className="text-xs md:text-sm lg:text-base overflow-x-auto">
        <table className="w-full max-h-[400px] ">
          <thead>
            <tr>
              <th className="p-2">Product</th>
              <th className="p-1">Name</th>
              <th className="p-1 hidden md:block">Description</th>
              <th className="p-1">Rate</th>
              <th className="p-1">Price</th>
              <th className="p-1">Stock</th>
              <th className="p-1">sales</th>
              <th className="p-1">revenue</th>
              <th className="p-1">Actions</th>
            </tr>
          </thead>
          <tbody className="mt-10">
            {products.map((product: any, index: any) => (
              <tr
                key={product.id}
                onClick={() => handleProductClick(product)}
                className={`text-center border-2 border-slate-300  ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                <td className="w-36 relative">
                  <Image
                    src={product.images[0]}
                    alt="product"
                    height={500}
                    width={500}
                    onClick={() =>
                      setPressed({
                        isPressed: !pressed.isPressed,
                        pressedIndex: index,
                      })
                    }
                    className={`max-h-20 max-w-20 md:max-h-28 md:max-w-28 object-cover rounded-md my-1 ${
                      pressed.pressedIndex === index && pressed.isPressed
                        ? "scale-[3] z-50 absolute left-0 top-0"
                        : "scale-[1] z-10"
                    } hover:md:scale-[4] z-10 hover:z-50  hover:md:absolute origin-top-left top-1  transition-all duration-300`}
                  />
                </td>
                <td
                  className="max-w-[5rem] text-sky-600 underline cursor-pointer"
                  onClick={() => {
                    setUploadpetModalOpen(true);
                    setproduct(product);
                  }}
                >
                  <p className="text-center">{product.name}</p>
                </td>
                <td className="max-w-4xl h-full hidden md:block">
                  <p className="line-clamp-3 w-full relative -top-5">
                    {product.description}
                  </p>
                </td>
                <td>
                  {(
                    product.rating.reduce((x: any, y: any) => x + y, 0) / 5
                  ).toFixed(2)}
                </td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td> {product.cumulativeStock - product.stock} Unit</td>
                <td>
                  ${" "}
                  {(
                    (product.cumulativeStock - product.stock) *
                    product.price
                  ).toFixed(2)}
                </td>
                <td className="flex flex-col md:flex-row justify-center gap-4 h-24 items-center">
                  <button
                    onClick={handleEditProduct}
                    disabled={!product}
                    className="text-xl text-sky-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={handleDeleteProduct}
                    disabled={!product}
                    className="text-lg text-red-400"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Details */}

      {/* Product Actions */}
      <ProductModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        product={product}
      />
    </div>
  );
}

export default StoreManagement;
