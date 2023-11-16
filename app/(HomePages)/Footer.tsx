import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-slate-300 py-8 w-full">
      <div className="flex flex-col md:flex-row gap-5  mx-0 md:mx-6  justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left order-1 mb-4 w-52">
          <p className="text-xl font-semibold">Contact or Support:</p>
          <p className="text-lg">
            <a
              href="mailto:contact@example.com"
              className="text-teal-50 hover:underline"
            >
              contact@example.com
            </a>
          </p>
          <p className="text-lg">
            Phone:{" "}
            <a href="tel:123-456-7890" className="text-teal-50 hover:underline">
              123-456-7890
            </a>
          </p>
        </div>
        <div className=" order-3 w-80 sm:order-2">
          <p className=" text-lg md:-ml-8 ml-3">
            &copy; {new Date().getFullYear()} FaveTale. All rights reserved.
          </p>
        </div>

        <div className="text-center order-2">
          <p className="text-xl font-semibold mb-4 -mt-8">Follow Us:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-2xl text-teal-50 hover:text-emerald-600"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-2xl text-teal-50 hover:text-emerald-600"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-2xl text-teal-50 hover:text-emerald-600"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
