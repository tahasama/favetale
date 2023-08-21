import React from "react";
import Image from "next/image";
import Store from "../images/store.jpg";
import Store1 from "../images/store1.jpg";
import Store2 from "../images/store2.jpg";
import Store3 from "../images/store3.jpg";
import Link from "next/link";

const StorySection = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Explore Our Store
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-teal-700">
          {/* Store Story Image */}
          <div className="relative overflow-hidden col-span-1">
            <Image
              src={Store} // Replace with your store front image URL
              alt="Store Front W "
              width={600}
              height={400}
              layout="responsive"
              //   className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
              <a
                href="/store"
                className="text-white text-lg font-semibold hover:underline"
              >
                Visit the Store
              </a>
            </div>
          </div>

          {/* Store Story Content */}
          <div className="flex flex-col justify-evenly  col-span-2 mx-5">
            <h3 className="text-2xl text-gray-100 font-semibold mb-4">
              Discover Our Pet Store
            </h3>
            <span>
              <p className="text-gray-200 mb-6">
                Welcome to our store, where you can find a wide selection of
                high-quality pet products to cater to all your furry friend's
                needs. From toys and accessories to premium pet food and care
                essentials, we've got it all.
              </p>
              <p className="text-gray-200 mb-6">
                Our team is dedicated to providing you with the best products
                that enhance the well-being and happiness of your pets. We value
                the bond between pets and their owners, and we strive to offer
                products that support that special relationship.
              </p>
              <p className="text-gray-200 mb-6">
                Whether you're a first-time pet owner or a seasoned enthusiast,
                our store is your one-stop shop for all things pet-related.
                Visit us today and embark on a journey of discovery for your
                beloved companions.
              </p>

              <Link
                href="/store"
                className="bg-tealLight w-fit hover:text-white px-4 py-3 rounded-md hover:bg-lime-600 transition-colors duration-300 mb-4"
              >
                Explore Our Store
              </Link>
            </span>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {/* Product Cards */}
              {/* Product 1 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={Store3}
                  alt={"Store1"}
                  className="max-h-60 w-auto"
                />
                <h4 className="text-lg font-semibold mb-2">Pet Toy</h4>
                <p className="text-gray-600 mb-2">$19.99</p>
                <button className="bg-indigo-600 text-white px-2 py-1 rounded-md text-xs">
                  Add to Cart
                </button>
              </div>
              {/* Product 2 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={Store2}
                  alt={"Store2"}
                  className="max-h-60 w-auto"
                />

                <h4 className="text-lg font-semibold mb-2">Premium Pet Food</h4>
                <p className="text-gray-600 mb-2">$29.99</p>
                <button className="bg-indigo-600 text-white px-2 py-1 rounded-md text-xs">
                  Add to Cart
                </button>
              </div>
              {/* Product 3 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={Store1}
                  alt={"Store3"}
                  className="max-h-60 w-auto"
                />

                <h4 className="text-lg font-semibold mb-2">Pet Grooming Kit</h4>
                <p className="text-gray-600 mb-2">$39.99</p>
                <button className="bg-indigo-600 text-white px-2 py-1 rounded-md text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
            <span>
              <div className="bg-yellow-300 p-4 mt-4 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">
                  🎉 Monthly Special: 15% Off!
                </p>
                <p className="text-gray-700">
                  Don't miss out on our exclusive monthly discount! Get 15% off
                  on selected products for a limited time.
                </p>
              </div>
              <div className="bg-green-300 p-4 mt-4 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">
                  🚚 Fast Delivery Service
                </p>
                <p className="text-gray-700">
                  We offer fast and reliable delivery services to ensure your
                  pet products reach you in no time. Shop now and experience the
                  convenience of doorstep delivery!
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
