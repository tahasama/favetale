import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Products from "./Products";
import Services from "./Services";

const page = () => {
  return (
    <div className="bg-tealLight">
      <div>
        {/* Hero Section */}
        <Hero />

        {/* Featured Categories */}
        <Category />

        {/* Trending Products */}
        <Products />

        {/* Services and Benefits */}
        <Services />

        {/* Customer Reviews */}
        <section>{/* Review Carousel */}</section>

        {/* Footer */}
        <footer>{/* Footer Content */}</footer>
      </div>

      {/* Hero Section */}
      {/* ... */}

      {/* Featured Categories */}
      {/* ... */}

      {/* Featured Products */}
      {/* ... */}

      {/* Testimonials */}
      {/* ... */}

      {/* Blog Section */}
      {/* ... */}

      {/* Newsletter Subscription */}
      {/* ... */}

      {/* Footer */}
      {/* ... */}
    </div>
  );
};

export default page;
