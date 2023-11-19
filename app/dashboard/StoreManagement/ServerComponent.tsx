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
  const productsData = await getProductsData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:13 ~ ServerComponent ~ productsData:",
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
            {product?.rating?.reduce(
              (acc: any, rate: any) => acc + rate.points,
              0
            ) / product?.rating.length}
            &nbsp;/ 5
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
