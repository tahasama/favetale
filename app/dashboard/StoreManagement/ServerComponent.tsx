import React from "react";
import { FaInfo, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Image from "next/image";
import cage from "../../images/store/cage.jpg";
import feeder from "../../images/store/feeder.jpg";
import scratch from "../../images/store/scratch.jpg";
import DisplayProduct from "./DisplayProduct";
import EditDeleteProduct from "./EditProduct";
import { getProductsData } from "@/app/api/GerData";

const ServerComponent = async () => {
  // const products = [
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

  const productsData = await getProductsData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:110 ~ ServerComponent ~ productsData:",
    productsData
  );

  return (
    <tbody className="mt-10">
      {productsData.map((product: any, index: any) => (
        <tr
          key={product.id}
          //   onClick={() => handleProductClick(product)}
          className={`text-center border-2 border-slate-300  ${
            index % 2 !== 0 ? "bg-white" : "bg-teal-50"
          }`}
        >
          <td className="w-36 relative border border-gray-300">
            <Image
              src={product.images[0]}
              alt="product"
              height={500}
              width={500}
              //   onClick={() =>
              //     setPressed({
              //       isPressed: !pressed.isPressed,
              //       pressedIndex: index,
              //     })
              //   }
              className={`max-h-20 max-w-20 md:max-h-28 md:max-w-28 object-cover rounded-md my-1`}
            />
          </td>
          <DisplayProduct product={product} />

          <td className="max-w-4xl h-full hidden md:block">
            <p className="line-clamp-3 w-full relative -top-5">
              {product.description}
            </p>
          </td>
          <td className="border border-gray-300">
            {(product.rating.reduce((x: any, y: any) => x + y, 0) / 5).toFixed(
              2
            )}
          </td>
          <td className="border border-gray-300 px-0.5">
            {product.price}&nbsp;Dh
          </td>
          <td className="border border-gray-300 px-0.5">{product.discount}%</td>
          <td className="border border-gray-300 px-0.5">{product.stock}</td>
          <td className="border border-gray-300 px-0.5">
            {product.cumulativeStock - product.stock} Unit
          </td>
          <td className="border border-gray-300 px-0.5">
            ${" "}
            {(
              (product.cumulativeStock - product.stock) *
              product.price
            ).toFixed(2)}
          </td>
          <EditDeleteProduct product={product} />
        </tr>
      ))}
    </tbody>
  );
};

export default ServerComponent;
