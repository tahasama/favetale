"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useCart } from "@/app/provider/CartProvider";

const MeetupsModal = ({ isOpen, onClose, event }: any) => {
  console.log("🚀 ~ file: MeetupsModal.tsx:11 ~ MeetupsModal ~ event:", event);
  const [newGathering, setNewGathering] = useState<any>(
    !event
      ? {
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
          image: "",
          images: [],
        }
      : {
          ...event,
        }
  );
  console.log(
    "🚀 ~ file: MeetupsModal.tsx:53 ~ MeetupsModal ~ newGathering:",
    newGathering
  );
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };

  // ...

  const [imageFile, setImageFile] = useState<any>("");

  const { userx } = useCart();

  const handleCreateGathering = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const gatheringsCollection = collection(db, "gatherings");

      if (!event) {
        // If 'event' doesn't exist, it's a new gathering
        if (!imageFile) {
          setError("Image file is required when creating a gathering.");
          return;
        }

        // Check if all required fields are present
        if (
          !newGathering.title ||
          !newGathering.location.country ||
          !newGathering.location.city ||
          !newGathering.location.zipCode ||
          !newGathering.startDate ||
          !newGathering.endDate ||
          !newGathering.timeFrom ||
          !newGathering.timeTo ||
          !newGathering.description
        ) {
          setError("All fields are necessary to create an event.");
          return;
        }

        newGathering.writer = userx;

        const storage = getStorage();
        const storageRef = ref(
          storage,
          `meetups/${userx.id}/${Date.now()}.jpg`
        );
        await uploadBytes(storageRef, imageFile);
        const res = await getDownloadURL(storageRef);

        const newGatheringData = {
          ...newGathering,
          image: res,
        };

        const newGatheringRef = await addDoc(
          gatheringsCollection,
          newGatheringData
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
          image: "",
          images: [],
        });
      } else {
        // It's an existing gathering
        if (!imageFile) {
          // If no new image is selected during the update, retain the existing image URL
          newGathering.image = event.image;
        } else {
          // If a new image is selected, update it
          const storage = getStorage();
          const storageRef = ref(
            storage,
            `meetups/${userx.id}/${Date.now()}.jpg`
          );
          await uploadBytes(storageRef, imageFile);
          const res = await getDownloadURL(storageRef);

          // Update the image URL
          newGathering.image = res;
        }

        // Update the gathering in Firestore
        const gatheringRef = doc(db, "gatherings", event.id);
        await updateDoc(gatheringRef, newGathering);
        console.log("Gathering updated with ID: ", event.id);

        // Clear the form or perform any other necessary actions
        setNewGathering({
          ...newGathering,
          image: "", // Clear the image field
        });
      }

      setError(""); // Clear any previous error message
      setLoading(false);
      onClose();
    } catch (error) {
      console.error("Error creating or updating gathering: ", error);
      setLoading(false);
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
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
      <div className="h-fit p-6 w-full lg:w-6/12 rounded-lg relative bg-white border-2 border-slate-300 shadow-xl">
        <h2 className="text-lg lg:text-xl font-semibold mb-4 mt-6 lg:mb-7  lg:mt-0">
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              Adresse :
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="Enter Adress ex: park the pets 60000..."
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
                  className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
                  value={newGathering.timeFrom}
                  onChange={(e) => {
                    console.log(
                      "🚀 ~ file: MeetupsModal.tsx:313 ~ MeetupsModal ~ e.target.value:",
                      e.target.value
                    ),
                      setNewGathering({
                        ...newGathering,
                        timeFrom: e.target.value,
                      });
                  }}
                />
              </div>
              <div className="flex gap-6 w-full items-center">
                <p>To:</p>
                <input
                  type="time"
                  id="timeTo"
                  className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
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
              className="border rounded py-1.5 px-2 lg:py-2  lg:px-3 w-full"
              value={newGathering.description}
              onChange={(e) =>
                setNewGathering({
                  ...newGathering,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="flex mb-3">
            <label
              htmlFor="image"
              className="w-2/12 text-gray-600 font-semibold flex justify-start items-center"
            >
              Image:
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={(e: any) => handleCreateGathering(e)}
              className="bg-violet-600 hover:bg-violet-700 mt-2 text-white text-lg font-semibold py-2 px-4 rounded w-7/12"
            >
              {!loading ? (
                "Save/Draft"
              ) : (
                <span className="flex">
                  Loading
                  <div className="flex justify-center ml-0.5 mt-1.5">
                    <div className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                    <div
                      className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </span>
              )}
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
