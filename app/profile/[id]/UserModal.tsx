"use client";
import React, { useState, useEffect } from "react";

import { db } from "@/firebase";
import { useCart } from "@/app/provider/CartProvider";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { FaInstagram, FaTwitter, FaFacebook, FaLink } from "react-icons/fa";

const UserModal = ({ isOpen, onClose }: any) => {
  const { userx, setSelectedImage } = useCart();
  const [loading2, setLoading2] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [socialMedia, setSocialMedia] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    website: "",
  });

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    if (userx) {
      setName(userx.name || "");
      setLastName(userx.lastName || "");
      setDescription(userx.description || "");
      setSocialMedia({
        instagram: userx.socialMedia?.instagram || "",
        twitter: userx.socialMedia?.twitter || "",
        facebook: userx.socialMedia?.facebook || "",
        website: userx.socialMedia?.website || "",
      });
    }
  }, [userx]);

  const updateUser = async (e: any) => {
    e.preventDefault();
    setLoading2(true);

    const updateData: any = {};

    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(storage, `users/${userx.id}/${Date.now()}.jpg`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);
      updateData.image = imageUrl;
    }

    updateData.name = name;
    updateData.lastName = lastName;
    updateData.description = description;
    updateData.socialMedia = socialMedia;

    const userRef = doc(db, "users", userx.id);
    await updateDoc(userRef, updateData);

    setLoading2(false);
    onClose();
    setSelectedImage(updateData);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center modal-overlay justify-center w-full mb-2 h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div
        className={`inset-0 relative flex flex-col justify-start lg:overflow-auto my-1 h-full w-full md:w-6/12 lg:w-4/12 mb-2 bg-white scrollbar scrollbar-thumb-slate-00 scrollbar-track-gray-0`}
      >
        <div className=" py-4 px-4 rounded-lg h-full ">
          <div>
            <h2 className="mb-2">Update Profile</h2>
            <div className="flex items-center mb-2 gap-3">
              <label htmlFor="name" className="min-w-[80px]">
                First Name:
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-1 px-3 lg:w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center mb-4 gap-3">
              <label htmlFor="lastName" className="min-w-[80px]">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-1 px-3 lg:w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="block text-gray-700 mb-2">
                Description:
              </label>
              <textarea
                id="description"
                placeholder="Talk about yourself a little ..."
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-indigo-100 border rounded-lg py-1 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Profile Image:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full bg-indigo-100 border rounded-lg py-1 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Social Media:</label>
              <div className="flex flex-col items-start mb-2 gap-3">
                <div className="flex items-center">
                  <label htmlFor="instagram" className="mr-2 w-16">
                    Instagram:
                  </label>
                  <div className="flex items-center gap-2">
                    <FaInstagram className="text-gray-600" />
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Instagram Profile URL"
                      value={socialMedia.instagram}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          instagram: e.target.value,
                        })
                      }
                      className="py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="twitter" className="mr-2 w-16">
                    Twitter:
                  </label>
                  <div className="flex items-center gap-2">
                    <FaTwitter className="text-gray-600" />
                    <input
                      type="text"
                      id="twitter"
                      placeholder="Twitter Profile URL"
                      value={socialMedia.twitter}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          twitter: e.target.value,
                        })
                      }
                      className="py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="facebook" className="mr-2 w-16">
                    Facebook:
                  </label>
                  <div className="flex items-center gap-2">
                    <FaFacebook className="text-gray-600" />
                    <input
                      type="text"
                      id="facebook"
                      placeholder="Facebook Profile URL"
                      value={socialMedia.facebook}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          facebook: e.target.value,
                        })
                      }
                      className="py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="website" className="mr-2 w-16">
                    Website:
                  </label>
                  <div className="flex items-center gap-2">
                    <FaLink className="text-gray-600" />
                    <input
                      type="text"
                      id="website"
                      placeholder="Website URL"
                      value={socialMedia.website}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          website: e.target.value,
                        })
                      }
                      className="py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="my-3 flex justify-center space-x-5 lg:space-x-4">
              <button
                type="submit"
                className="ring-1 ring-green-600 hover:bg-green-700 group hover:text-white transition-colors duration-300 text-green-600 py-1 px-6 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                onClick={updateUser}
              >
                {!loading2 ? (
                  "Update"
                ) : (
                  <span className="flex">
                    Loading
                    <div className="flex justify-center ml-0.5 mt-1.5">
                      <div className="w-1 h-1 bg-green-700  group-hover-bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                      <div
                        className="w-1 h-1 bg-green-700 group-hover-bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-700 group-hover-bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </span>
                )}
              </button>
            </div>
          </div>
          <button
            className="absolute scale-125 hover:rotate-90 p-1 top-4 right-3 ring-1 ring-gray-300 transition-all duration-500 rounded-full"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
