import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import cat from "../images/category/cat.png";
import dog from "../images/category/dog.png";
import rabbit from "../images/category/rabbit.png";
import fish from "../images/category/fish.png";
import bird from "../images/category/bird.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Category = () => {
  const featuredCategories = [
    { id: 1, title: "Cats", image: cat },
    { id: 2, title: "Dogs", image: dog },
    { id: 3, title: "Birds", image: bird },
    { id: 4, title: "Small pets", image: rabbit },
    { id: 5, title: "Fish", image: fish },
  ];
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mt-3 indent-12 font-semibold mb-12">
          Featured Categories
        </h2>
        <div className="flex flex-wrap justify-around gap-10">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              href={`/store/Allproduct?category=${category.title}`}
              className=""
            >
              <img
                src={category.image.src}
                alt={category.title}
                className="shadow-md rounded-full object-cover h-24 w-24 md:h-36 md:w-36"
              />
              <p className={`${montserrat.className} mt-2 text-lg`}>
                {category.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
