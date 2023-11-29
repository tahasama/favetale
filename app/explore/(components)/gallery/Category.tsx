"use client";
import React from "react";
import cat from "../../../images/category/cat.png";
import dog from "../../../images/category/dog.png";
import rabbit from "../../../images/category/rabbit.png";
import fish from "../../../images/category/fish.png";
import bird from "../../../images/category/bird.png";
import all from "../../../images/4.jpg";
import { Montserrat } from "next/font/google";
import { useCart } from "@/app/provider/CartProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

const Category = () => {
  const { setFilterImage } = useCart();
  const featuredCategories = [
    { id: 1, title: "Cats", image: cat },
    { id: 2, title: "Dogs", image: dog },
    { id: 3, title: "Birds", image: bird },
    { id: 4, title: "Small pets", image: rabbit },
    { id: 5, title: "Fish", image: fish },
    { id: 6, title: "All", image: all },
  ];
  return (
    <section className="py-3 grid place-items-center">
      <div className=" lg:w-1/2 text-center">
        <div className="flex flex-wrap justify-around gap-4 md:gap-10 lg:gap-0">
          {featuredCategories.map((category, index) => (
            <span
              key={index}
              onClick={() => setFilterImage(category.title)}
              className=""
            >
              <img
                src={category.image.src}
                alt={category.title}
                className="shadow-md rounded-full object-cover h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 cursor-pointer"
              />
              <p className={`${montserrat.className} mt-2 text-xs md:text-lg`}>
                {category.title}
              </p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
