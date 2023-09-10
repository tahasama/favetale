"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MeetupsModal = ({ isOpen, onClose }: any) => {
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

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const [newGathering, setNewGathering] = useState({
    id: 0,
    name: "",
    location: {
      country: "",
      city: "",
      zipCode: "",
    },
    date: "",
    time: "",
    description: "",
  });

  console.log(
    "🚀 ~ file: meetupsModal.tsx:9 ~ MeetupsModal ~ searchResults:",
    searchResults
  );
  const [error, setError] = useState("");

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal

      console.log("🚀 ~ file: discussionModal.tsx:48 ~ handleModalClick ~ c:");
    }
  };

  // ...

  // Function to handle location search by criteria
  const handleLocationSearch = () => {
    if (!country && !city && !zipCode) {
      setError("Please enter at least one search criteria.");
      return;
    }

    // Perform a keyword-based search
    const filteredMeetups = meetups.filter((meetup) => {
      const meetupLocation = meetup.location;
      const criteriaMatch =
        (!country || meetupLocation.country.toLowerCase()) &&
        (!city || meetupLocation.city.toLowerCase()) &&
        (!zipCode || meetupLocation.zipCode.toLowerCase());
      return criteriaMatch;
    });
    console.log(
      "🚀 ~ file: meetupsModal.tsx:71 ~ filteredMeetups ~ filteredMeetups:",
      filteredMeetups
    );

    if (filteredMeetups.length === 0) {
      setError("No meetups found for the provided criteria.");
    } else {
      setSearchResults(filteredMeetups);
      setError(""); // Clear any previous error messages
    }
  };

  const handleCreateGathering = () => {
    // Perform actions to create a new gathering
    // For example, add it to your meetups array or send it to the server
    meetups.push(newGathering);
  };

  return (
    <div
      className={` fixed inset-0 flex items-center justify-center modal-overlay z-50 backdrop-brightness-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="p-6 w-6/12 rounded-lg relative bg-white border-2 border-slate-300 shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Create a New Gathering</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="text-gray-600 font-semibold block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="border rounded py-2 px-3 w-full"
              value={newGathering.name}
              onChange={(e) =>
                setNewGathering({ ...newGathering, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
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
              value={newGathering.location.country}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  location: {
                    ...newGathering.location,
                    country: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="text-gray-600 font-semibold block">
              City:
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter City"
              className="border rounded py-2 px-3 w-full"
              value={newGathering.location.city}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  location: { ...newGathering.location, city: e.target.value },
                })
              }
            />
          </div>
          <div className="mb-3">
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
              value={newGathering.location.zipCode}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  location: {
                    ...newGathering.location,
                    zipCode: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="text-gray-600 font-semibold block">
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="border rounded py-2 px-3 w-full"
              value={newGathering.date}
              onChange={(e) =>
                setNewGathering({ ...newGathering, date: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="text-gray-600 font-semibold block">
              Time:
            </label>
            <input
              type="time"
              id="time"
              className="border rounded py-2 px-3 w-full"
              value={newGathering.time}
              onChange={(e) =>
                setNewGathering({ ...newGathering, time: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="text-gray-600 font-semibold block"
            >
              Description:
            </label>
            <textarea
              id="description"
              placeholder="Enter Description"
              rows={5}
              className="border rounded py-2 px-3 w-full"
              value={newGathering.description}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  description: e.target.value,
                })
              }
            />
          </div>
          <button
            onClick={handleCreateGathering}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Create
          </button>
        </form>
        <button
          className=" text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 absolute ring-1 ring-gray-300  top-3 right-3 transition-all duration-500 rounded-full"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="close"
          >
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MeetupsModal;
