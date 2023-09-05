"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const UploadImageModal = ({ isOpen, onClose, imageSrc, title }: any) => {
  console.log("🚀 ~ file: ImageModal.tsx:6 ~ ImageModal ~ imageSrc:", imageSrc);

  const [comments, setComments] = useState<string[]>([
    "fffffff",
    "ggggggggggg",
    "hhhhhhhhhhhh",
  ]); // State to hold comments
  const [newComment, setNewComment] = useState(""); // State for the new comment

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear the new comment input
    }
  };

  const [imageFile, setImageFile] = useState(null);
  console.log(
    "🚀 ~ file: UploadImageModal.tsx:29 ~ UploadImageModal ~ imageFile:",
    imageFile
  );
  const [category, setCategory] = useState("dogs"); // Default category
  const uploaderId = "user123"; // Replace with your logic to get the uploader's ID
  const timestamp = new Date().toLocaleString();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // add logic to upload image here
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="shadow-2xl  inset-0 relative flex flex-col justify-center items-center my-1 rounded-lg h-fit overflow-auto scrollbar scrollbar-thumb-slate-500 scrollbar-track-gray-300">
        <div className="bg-white p-4 md:p-6 md:mx-auto rounded-lg shadow-md w-fit md:w-[35vw] ">
          <h1 className="text-3xl mb-4 text-center">Upload an Image</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Select an image:
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

            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 mb-2">
                Select a category:
              </label>
              <select
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
                className="w-full border  rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400 cursor-pointer"
              >
                <option value="dogs" className="bg-gray-100">
                  &nbsp;&nbsp;Dogs
                </option>
                <option value="cats" className="bg-gray-100">
                  &nbsp;&nbsp;Cats
                </option>
                <option value="birds" className="bg-gray-100">
                  &nbsp;&nbsp;Birds
                </option>
                <option value="fish" className="bg-gray-100">
                  &nbsp;&nbsp;Fish
                </option>
                <option value="small animals" className="bg-gray-100">
                  {" "}
                  &nbsp;&nbsp;Small Animals
                </option>
                {/* Add more categories as needed */}
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full w-full hover:animate-bounceQ"
            >
              Upload Image
            </button>
          </form>
        </div>
        <button
          className="absolute bg-sky-600 scale-125 hover:rotate-90 p-1 top-4 right-4   ring-2 ring-gray-300 transition-all duration-500 rounded-full"
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

export default UploadImageModal;
