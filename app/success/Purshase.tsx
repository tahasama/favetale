import React from "react";
import Image from "next/image";
import scratch from "../images/store/scratch.jpg";
import feeder from "../images/store/feeder.jpg";

import logo from "../logo.png";
import logoPets from "../images/logoPets.png";

const Purshase = () => {
  const purchaseInfo = {
    address: {
      city: "paris",
      country: "MA",
      line1: "boulevard",
      line2: "5",
      postal_code: "65000",
      state: null,
    },
    email: "taha.maatof@gmail.com",
    name: "celo oilk",
    phone: null,
    tax_exempt: "none",
    tax_ids: [],
    userId: "myId1234",
    cart: [
      {
        discount: 15,
        id: 9,
        image: feeder.src,
        name: "Squirrel Feeder",
        price: 7.99,
        quantity: 1,
        rating: 4.6,
        reviews: 90,
      },
      {
        id: 7,
        name: "Cat Scratching Post",
        image: scratch.src,
        price: 24.99,
        discount: 30,
        rating: 4.7,
        reviews: 110,
        quantity: 1,
      },
    ],
  };

  const calculateTotal = () => {
    return purchaseInfo.cart.reduce(
      (total, item) =>
        total +
        item.quantity * (item.price - (item.price * item.discount) / 100),
      0
    );
  };

  return (
    <div className="bg-gray-0 w-full min-h-screen mt-10 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-screen-sm">
        <div className="p-6 bg-tealDark text-white rounded-t-lg">
          <Image src={logo} width={500} alt="logo" className="w-2/12" />
          <h1 className="text-3xl font-semibold">Order Confirmed</h1>
          <p className="mt-2">Thank you for your purchase!</p>
        </div>
        <div className="grid sm:grid-cols-2">
          <div className="border-t border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold mb-2">Customer Information</h2>
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {purchaseInfo.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {purchaseInfo.email}
            </p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
            <p className="mb-2">
              <span className="font-semibold">City:</span>{" "}
              {purchaseInfo.address.city}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Country:</span>{" "}
              {purchaseInfo.address.country}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Street:</span>{" "}
              {purchaseInfo.address.line1}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Postal Code:</span>{" "}
              {purchaseInfo.address.postal_code}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold mb-2">Order Details</h2>
          {purchaseInfo.cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-tealLight space-x-4 mb-4 p-4 border rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="rounded-md object-cover h-20 w-20"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p className="text-red-600">Discount: ${item.discount}%</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-semibold text-lg mt-2 flex justify-between rounded-b-md p-5 bg-indigo-300">
          <span>Total:</span>
          <span>{calculateTotal().toFixed(2)}DH</span>
        </p>
      </div>
    </div>
  );
};

export default Purshase;
