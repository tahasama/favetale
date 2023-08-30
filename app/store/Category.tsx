import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import cat from "../images/category/cat.png";
import dog from "../images/category/dog.png";
import rabbit from "../images/category/rabbit.png";
import fish from "../images/category/fish.png";
import bird from "../images/category/bird.png";

const Category = () => {
  const featuredCategories = [
    { id: 1, title: "cats", image: cat },
    { id: 2, title: "dogs", image: dog },
    { id: 3, title: "birds", image: bird },
    { id: 4, title: "small pets", image: rabbit },
    { id: 5, title: "fish", image: fish },
  ];
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mt-3 indent-12 font-semibold mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-8">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              href={`/store/Allproduct?category=${category.title}`}
              className=""
            >
              <img
                src={category.image.src}
                alt={category.title}
                className="shadow-md rounded-full object-cover  h-36 w-36"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
