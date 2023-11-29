import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Products from "./Products";
import Services from "./Services";

const page = () => {
  return (
    <div className="bg-tealLight">
      <div>
        <Hero />
        <Category />
        <Products />
        <Services />
      </div>
    </div>
  );
};

export default page;
