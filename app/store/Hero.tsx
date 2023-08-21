import React from "react";
import heroBackground from "../images/10.jpg";
import store4 from "../images/store4.jpg";
import store5 from "../images/store5.jpg";

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
      // style={{
      //   backgroundImage:
      //     "url(https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg)",
      // }}
    >
      <div className="container p-6 w-6/12 h-8/12  backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl text-emerald-50 lg:text-6xl font-semibold mb-4 ">
          Welcome to PetStore
        </h1>
        <p className="text-lg mb-8">
          Your one-stop destination for all your pet needs
        </p>
        <button className="hover:animate-bounceQ bg-teal-600 hover:bg-teal-600 text-white px-8 py-4 text-lg rounded-md shadow-md transition-all duration-1000 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
