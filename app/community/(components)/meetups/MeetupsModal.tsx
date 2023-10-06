"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const MeetupsModal = ({ isOpen, onClose }: any) => {
  const meetups = [
    {
      id: 1,
      title: "Tech Enthusiasts Meetup",
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
      title: "Art Lovers Gathering",
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
    title: "",
    location: {
      country: "",
      city: "",
      zipCode: "",
    },
    startDate: "",
    endDate: "",
    timeFrom: "",
    timeTo: "",
    description: "",
  });
  console.log(
    "🚀 ~ file: MeetupsModal.tsx:53 ~ MeetupsModal ~ newGathering:",
    newGathering
  );

  const [error, setError] = useState("");

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
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

    if (filteredMeetups.length === 0) {
      setError("No meetups found for the provided criteria.");
    } else {
      setSearchResults(filteredMeetups);
      setError(""); // Clear any previous error messages
    }
  };

  const handleCreateGathering = async (e: any) => {
    e.preventDefault();

    try {
      // Define the Firestore collection where gatherings will be stored
      const gatheringsCollection = collection(db, "gatherings");

      // Add a new gathering document to the collection
      const newGatheringRef = await addDoc(gatheringsCollection, newGathering);
      console.log(
        "🚀 ~ file: MeetupsModal.tsx:96 ~ handleCreateGathering ~ newGathering:",
        newGathering
      );

      console.log("Gathering created with ID: ", newGatheringRef.id);

      // Clear the form or perform any other necessary actions
      setNewGathering({
        title: "",
        location: {
          country: "",
          city: "",
          zipCode: "",
        },
        startDate: "",
        endDate: "",
        timeFrom: "",
        timeTo: "",
        description: "",
      });
      onClose();
    } catch (error) {
      console.error("Error creating gathering: ", error);
    }
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
      <div className="p-6 w-full lg:w-6/12 rounded-lg relative bg-white border-2 border-slate-300 shadow-xl">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4 mt-6 lg:mt-0">
          Create a New Gathering
        </h2>
        <form>
          <div className="flex mb-3">
            <label
              htmlFor="title"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add a title"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
              value={newGathering.title}
              onChange={(e) =>
                setNewGathering({ ...newGathering, title: e.target.value })
              }
            />
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="country"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Country:
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter Country"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
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
          <div className="flex mb-3">
            <label
              htmlFor="city"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter City"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
              value={newGathering.location.city}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  location: { ...newGathering.location, city: e.target.value },
                })
              }
            />
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="zipCode"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              ZIP Code:
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="Enter ZIP Code"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
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
          <div className="flex mb-3">
            <label
              htmlFor="date"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Start Date :
            </label>
            <input
              type="date"
              id="startDate"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
              value={newGathering.startDate}
              onChange={(e) =>
                setNewGathering({ ...newGathering, startDate: e.target.value })
              }
            />
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="date"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
              value={newGathering.endDate}
              onChange={(e) =>
                setNewGathering({ ...newGathering, endDate: e.target.value })
              }
            />
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="time"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Time:
            </label>
            <div className="flex gap-6 w-full">
              <div className="flex gap-6 w-full items-center">
                <p>From:</p>
                <input
                  type="time"
                  id="timeFrom"
                  className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
                  value={newGathering.timeFrom}
                  onChange={(e) =>
                    setNewGathering({
                      ...newGathering,
                      timeFrom: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-6 w-full items-center">
                <p>To:</p>
                <input
                  type="time"
                  id="timeTo"
                  className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
                  value={newGathering.timeTo}
                  onChange={(e) =>
                    setNewGathering({ ...newGathering, timeTo: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="description"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Description:
            </label>
            <textarea
              id="description"
              placeholder="Enter Description"
              rows={3}
              className="border rounded py-1.5 px-2 lg:py-2 lg:px-3 w-full"
              value={newGathering.description}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={(e: any) => handleCreateGathering(e)}
              className="bg-violet-600 hover:bg-violet-700 mt-2 text-white text-lg font-semibold py-2 px-4 rounded w-7/12"
            >
              Create
            </button>
          </div>
        </form>
        <button
          className=" text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 absolute ring-1 ring-gray-300 top-5 right-2 lg:top-4 xl:top-3 lg:right-3 transition-all duration-500 rounded-full"
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
