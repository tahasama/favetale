import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="pb-16 pt-8 bg-greenLight ">
      <div className="container text-center px-3">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Services and Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="text-3xl">📞</span>
            <h3 className="text-xl font-semibold mb-4">
              Excellent Customer Support
            </h3>
            <p className="text-gray-600">
              Our dedicated customer support team is here to assist you with any
              inquiries, issues, or concerns you may have.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="text-3xl">🔄</span>
            <h3 className="text-xl font-semibold mb-4">
              Easy Returns and Refunds
            </h3>
            <p className="text-gray-600">
              Not satisfied with your purchase? Our hassle-free return and
              refund policy ensures a seamless process to meet your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="text-3xl">🚚</span>
            <h3 className="text-xl font-semibold mb-4">
              Fast and Reliable Delivery
            </h3>
            <p className="text-gray-600">
              Experience swift and dependable delivery options that bring your
              pet's essentials right to your doorstep.
            </p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/services"
            className="hover:animate-bounceQ py-4 px-5 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-md transition-all duration-1000 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
