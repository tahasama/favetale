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
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl mt-3 indent-12 font-semibold mb-12">
          Featured Categories
        </h2>
        <div className="flex flex-wrap justify-around gap-3 md:w-6/12">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              href={`/store/Allproduct?category=${category.title}`}
              className=""
            >
              <img
                src={category.image.src}
                alt={category.title}
                className="shadow-md rounded-full object-cover h-16 w-16 md:h-24 md:w-24"
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
