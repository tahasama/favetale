"use client";

import Image from "next/image";
import Link from "next/link";

import { Vollkorn } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

import StoreL2 from "../images/store2.jpg";

const StorySection = () => {
  // const products = [
  //   {
  //     images: [Store3],
  //     name: "Pet Toy",
  //     price: 19.99,
  //     id: 10,
  //     reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
  //     rating: 5,
  //     discount: 0,
  //   },
  //   {
  //     images: [Store2],
  //     name: "Premium Pet Food",
  //     price: 29.99,
  //     id: 11,
  //     reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
  //     rating: 5,
  //     discount: 0,
  //   },
  //   {
  //     images: [Store1],
  //     name: "Pet Grooming Kit",
  //     price: 39.99,
  //     id: 12,
  //     reviews: ["ggggggg", "ttttttt", "yyyyyyyy"],
  //     rating: 5,
  //     discount: 0,
  //   },
  // ];

  return (
    <section className="bg-tealLight">
      <div className=" px-1 sm:px-3 lg:px-6 py-12">
        <div className="grid place-items-center">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-5"></div>

          <h2 className={`text-3xl font-semibold mb-4 ${vollkorn.className}`}>
            Discover Our Pet Store
          </h2>
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-4  md:order-1 order-2">
            <div className="lg:ml-20 flex flex-col items-center md:items-start justify-start">
              <p className="text-lg text-slate-600 mb-8 sm:ml-20 indent-4 mt-4 mx-2 md:mx-0">
                Welcome to our store, where you can find a wide selection of
                high-quality pet products to cater to all your furry friend's
                needs. From toys and accessories to premium pet food and care
                essentials, we've got it all.
              </p>
              <Link
                href="/store"
                className=" w-full grid place-content-center md:place-content-start "
              >
                <button className=" hover:animate-buttonHover w-fit mt-0 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3  sm:px-8 sm:py-3 shadow-xl rounded-3xl">
                  Explore Our Store
                </button>
              </Link>
            </div>
            <div className="visible md:hidden lg:block flex flex-col justify-center space-y-4 mt-6">
              <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
                <p className="text-xl text-gray-800 mb-2">
                  🎉 Monthly Special: 15% Off!
                </p>
                <p className="text-gray-700">
                  Don't miss out on our exclusive monthly discount! Get 15% off
                  on selected products for a limited time.
                </p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
                <p className="text-xl text-gray-800 mb-2">
                  🚚 Fast Delivery Service
                </p>
                <p className="text-gray-700">
                  We offer fast and reliable delivery services to ensure your
                  pet products reach you in no time.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid place-items-center order-1 md:order-2">
            <Image
              src={StoreL2}
              width={800}
              height={600}
              alt="storeL2"
              className="w-10/12 lg:w-9/12 rounded-3xl"
            />
          </div>
        </div>
        <div className="hidden lg:hidden md:visible  md:flex flex-col justify-center space-y-4 mt-12">
          <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20 ">
            <p className="text-xl text-gray-800 mb-4">
              🎉 Monthly Special: 15% Off!
            </p>
            <p className="text-gray-700">
              Don't miss out on our exclusive monthly discount! Get 15% off on
              selected products for a limited time.
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg lg:ml-20">
            <p className="text-xl text-gray-800 mb-4">
              🚚 Fast Delivery Service
            </p>
            <p className="text-gray-700">
              We offer fast and reliable delivery services to ensure your pet
              products reach you in no time. Shop now and experience the
              convenience of doorstep delivery!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
