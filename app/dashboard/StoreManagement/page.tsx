import React, { Suspense } from "react";
import ServerComponent from "./ServerComponent";
import Loading from "../EventManagement/loading";
import AddProduct from "./AddProduct";

function StoreManagement() {
  // const discountProducts = [
  //   {
  //     id: 7,
  //     name: "Cat Scratching Post",
  //     images: [scratch.src, cage.src],
  //     price: 24.99,
  //     discount: 30,
  //     rating: [1, 12, 14, 16, 125, 128],
  //     cumulativeStock: 100,
  //     description:
  //       "A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.A perfect scratching post for your furry friend.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Alice",
  //         date: "2023-08-28",
  //         text: "Good scratching post for my cat!",
  //       },
  //       {
  //         id: 2,
  //         name: "Bob",
  //         date: "2023-08-27",
  //         text: "Okay product, my cat uses it sometimes.",
  //       },
  //       {
  //         id: 3,
  //         name: "Charlie",
  //         date: "2023-08-26",
  //         text: "Nice design and sturdy build.",
  //       },
  //     ],
  //     stock: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "Small Animal Cage",
  //     images: [cage.src],
  //     price: 39.99,
  //     discount: 25,
  //     rating: [12, 22, 24, 26, 135, 138],
  //     cumulativeStock: 100,
  //     description: "Spacious and comfortable cage for your small pet.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Eve",
  //         date: "2023-08-28",
  //         text: "Wow, this cage is spacious!",
  //       },
  //       {
  //         id: 2,
  //         name: "Frank",
  //         date: "2023-08-27",
  //         text: "Haha, my small animal loves it!",
  //       },
  //       {
  //         id: 3,
  //         name: "Grace",
  //         date: "2023-08-26",
  //         text: "Lol, it's easy to clean.",
  //       },
  //     ],
  //     stock: 10,
  //   },
  //   {
  //     id: 9,
  //     name: "Squirrel Feeder",
  //     images: [feeder.src],
  //     price: 7.99,
  //     discount: 15,
  //     rating: [15, 25, 25, 25, 155, 158],
  //     cumulativeStock: 100,
  //     description: "Attract squirrels with this high-quality feeder.",
  //     reviews: [
  //       {
  //         id: 1,
  //         name: "Harry",
  //         date: "2023-08-28",
  //         text: "Nah, squirrels don't seem interested.",
  //       },
  //       {
  //         id: 2,
  //         name: "Ivy",
  //         date: "2023-08-27",
  //         text: "Maybe it depends on the location?",
  //       },
  //       {
  //         id: 3,
  //         name: "Jack",
  //         date: "2023-08-26",
  //         text: "Yeah, it's a good value for the price.",
  //       },
  //     ],
  //     stock: 25,
  //   },
  // ];

  return (
    <div className="bg-tealLight relative">
      <h2 className="text-center pt-6 mb-9">Store Management</h2>
      <AddProduct />
      <div className="text-xs md:text-sm lg:text-base overflow-x-auto mx-1">
        <table className="w-full max-h-[400px] border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">Product</th>
              <th className="p-1 border border-gray-300">Name</th>
              <th className="p-1 hidden md:block mt-0.5">Description</th>
              <th className="p-1 border border-gray-300">Rate</th>
              <th className="p-1 border border-gray-300">Price</th>
              <th className="p-1 border border-gray-300">Discount</th>
              <th className="p-1 border border-gray-300">Stock</th>
              <th className="p-1 border border-gray-300">Sales</th>
              <th className="p-1 border border-gray-300">Revenue</th>
              <th className="p-1 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <Suspense fallback={<Loading />}>
            <ServerComponent />
          </Suspense>
        </table>
      </div>
    </div>
  );
}

export default StoreManagement;
