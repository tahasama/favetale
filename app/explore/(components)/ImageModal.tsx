"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageSrc, title }: any) => {
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
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="inset-0 flex flex-col justify-center items-center my-4 h-full overflow-auto  scrollbar scrollbar-thumb-slate-400 scrollbar-track-gray-100">
        <div className="bg-white rounded-lg shadow-lg relative top-36 h-full ">
          <Image
            src={imageSrc}
            alt={title}
            className="h-[93vh]"
            width={1000}
            height={1000}
          />
          <button
            className="absolute scale-125 text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 top-1.5 right-1.5 transition-all duration-500 rounded-full"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="close"
            >
              <path fill="white" d="..." />
            </svg>
          </button>
          <div className="absolute bottom-2 flex gap-5 left-4 bgba">
            <button className="text-3xl backdrop-blur-sm hover:grayscale transition-all duration-300">
              <span className="text-slate-300 text-xl">3.3k</span>
              ❤️
            </button>
            <button className="text-3xl backdrop-blur-sm hover:grayscale transition-all duration-300">
              <span className="text-slate-300 text-xl">1.7k</span>
              👍
            </button>
          </div>
        </div>
        <div className="w-full bg-white p-4 shadow-md relative top-36 ">
          <h3 className="text-xl font-semibold mb-2 text-start">Comments ⬇️</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Add a comment..."
              className="border rounded px-2 py-1 mr-2 flex-grow"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
          <div className=" mt-6 mx-2">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start mb-4">
                <img
                  src={"commenterImage"} // Replace with the actual source of the commenter's image
                  alt="Commenter"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-700 font-semibold">
                    {"commenterName"}
                  </p>
                  <p className="text-gray-600 mb-1">{comment}</p>
                  <p className="text-blue-950 text-sm">{"timestamp"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Comments */}
    </div>
  );
};

export default ImageModal;