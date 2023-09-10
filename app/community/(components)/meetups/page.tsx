"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MeetupsModal from "./MeetupsModal";

const Meetups = () => {
  const meetups = [
    {
      id: 1,
      name: "Tech Enthusiasts Meetup",
      location: {
        country: "USA",
        city: "New York",
        zipCode: "10001",
      },
      date: "2023-09-15",
      time: "6:00 PM",
      description: "Join us for a tech discussion!",
    },
    {
      id: 2,
      name: "Art Lovers Gathering",
      location: {
        country: "USA",
        city: "Los Angeles",
        zipCode: "90001",
      },
      date: "2023-09-20",
      time: "7:00 PM",
      description: "A creative evening of art and culture.",
    },
    // Add more meetups with actual data
  ];

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>(meetups);

  const [error, setError] = useState("");

  const handleSearch = () => {
    const filteredMeetups = meetups.filter((meetup) => {
      const meetupLocation = meetup.location;
      const criteriaMatch =
        (!country ||
          meetupLocation.country
            .toLowerCase()
            .includes(country.toLowerCase())) &&
        (!city ||
          meetupLocation.city.toLowerCase().includes(city.toLowerCase())) &&
        (!zipCode ||
          meetupLocation.zipCode.toLowerCase().includes(zipCode.toLowerCase()));
      return criteriaMatch;
    });

    setSearchResults(filteredMeetups);
  };

  return (
    <div className="container mx-auto bg-tealLight p-6">
      <div className="bg-fuchsia-700 rounded-lg p-6 text-left leading-loose tracking-wide">
        <h2 className="text-4xl font-semibold text-white mb-5">
          Join Pet Meetups
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Connect with local pet lovers, attend fun events, and create lasting
          memories with your furry friends.
        </p>

        <button
          onClick={() => setUploadModalOpen(true)}
          className="bg-tealLight hover:text-white px-4 py-3 rounded-md hover:bg-fuchsia-400 transition-colors duration-500"
        >
          Create a Gathering
        </button>
      </div>

      <MeetupsModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div>
          <label
            htmlFor="country"
            className="text-gray-600 font-semibold block"
          >
            Country:
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter Country"
            className="border rounded py-2 px-3 w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="city" className="text-gray-600 font-semibold block">
            City:
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            className="border rounded py-2 px-3 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="text-gray-600 font-semibold block"
          >
            ZIP Code:
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter ZIP Code"
            className="border rounded py-2 px-3 w-full"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-gray-600 font-semibold block"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            className="border rounded py-2 px-3 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date" className="text-gray-600 font-semibold block">
            Date:
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter Date"
            className="border rounded py-2 px-3 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-span-full">
          <button
            onClick={handleSearch}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded w-full"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      {/* Display search results here */}

      {/* Error Handling */}
      {error && (
        <div id="error-message" className="text-red-600 mt-4">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6">
        {searchResults.map((meetup, index) => (
          <motion.div
            initial={{ opacity: 0 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
            key={meetup.id}
            className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden m-2 bg-gradient-to-b from-tealLight to-purple-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <Image
                src="/images/meetup-placeholder.jpg"
                alt={meetup.name}
                className="w-full h-40 object-cover"
                width={1000}
                height={1000}
              />
              <div className="absolute bottom-0 left-0 bg-indigo-500 text-white px-3 py-1 m-4 rounded-md">
                {meetup.date}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{meetup.name}</h3>
              <p className="text-gray-600 mb-2">{meetup.location.country}</p>
              <p className="text-gray-600 mb-2">{meetup.location.city}</p>
              <p className="text-gray-600 mb-2">{meetup.location.zipCode}</p>
              <p className="text-gray-600 mb-2">{meetup.date}</p>
              <p className="text-gray-600">{meetup.description}</p>
              <button className="mt-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-indigo-400 transition-colors">
                Join Meetup
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Meetups;
