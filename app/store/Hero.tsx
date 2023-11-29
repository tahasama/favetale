import React from "react";
import store5 from "../images/store5.jpg";
import Link from "next/link";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${store5.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      style={heroStyle}
      className={`bg-blue-900 text-white mt-20 h-[50vh] flex items-end justify-start w-full `}
    >
      <div className="container p-6 w-12/12 lg:w-6/12 h-8/12  backdrop-blur-sm">
        <h1 className="text-4xl md:xl:text-4xl lg:text-5xl xl:text-6xl md:text-5xl text-emerald-50 font-semibold mb-4 ">
          Welcome to FaveTale Store
        </h1>
        <p className="text-lg mb-8">
          Your one-stop destination for all your pet needs
        </p>
        <Link href={"/store/Allproduct"}>
          <button className="hover:animate-bounceQ bg-teal-600 hover:bg-teal-600 text-white px-5 py-3 md:px-8 md:py-4 text-lg rounded-md shadow-md transition-all duration-1000 cursor-pointer">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
