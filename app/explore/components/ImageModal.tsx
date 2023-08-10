"use client";
import React, { useEffect, useRef } from "react";

const ImageModal = ({ isOpen, onClose, imageSrc, title }: any) => {
  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };
  return (
    <div
      className={` fixed inset-0 flex items-center justify-center modal-overlay z-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className=" inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <img src={imageSrc} alt={title} className="h-[96vh]" />
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
              <path
                fill="white"
                d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              ></path>
            </svg>
          </button>
          <div className=" absolute bottom-2 flex gap-5 left-4 bgba">
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
      </div>
    </div>
  );
};

export default ImageModal;
