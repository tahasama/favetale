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
      className={`bg-blue-900 text-white mt-20 h-[50vh] flex items-center justify-center w-full `}
    >
      <Link href={"/store/Allproduct"}>
        <button className="hover:animate-bounceQ bg-teal-600 hover:bg-teal-600 text-white px-5 py-3 md:px-7 md:py-3 text-lg rounded-md shadow-md transition-all duration-1000 cursor-pointer">
          Shop Now
        </button>
      </Link>
    </section>
  );
};

export default Hero;
