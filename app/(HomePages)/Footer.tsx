import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-tealLight text-slate-700 py-8 w-full">
      <div className="flex flex-col md:flex-row mr-28  justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left ">
          <p className="text-xl font-semibold">Contact or Support:</p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:contact@example.com"
              className="text-slate-900 hover:underline"
            >
              contact@example.com
            </a>
          </p>
          <p className="text-lg">
            Phone:{" "}
            <a
              href="tel:123-456-7890"
              className="text-slate-900 hover:underline"
            >
              123-456-7890
            </a>
          </p>
        </div>
        <p className=" text-lg ">
          &copy; {new Date().getFullYear()} FaveTale. All rights reserved.
        </p>
        <div className="text-center ">
          <p className="text-xl font-semibold mb-4 -mt-8">Follow Us:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-2xl text-teal-900 hover:text-emerald-600"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-2xl text-teal-900 hover:text-emerald-600"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-2xl text-teal-900 hover:text-emerald-600"
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
