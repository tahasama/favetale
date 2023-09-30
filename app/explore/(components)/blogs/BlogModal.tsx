"use client";
import React from "react";

import "react-quill/dist/quill.snow.css"; // Import styles
import "./blog.css";

const BlogModal = ({ isOpen, onClose }: any) => {
  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center justify-center full w-full mb-4 bg-white  h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      BBBBBBBB
    </div>
  );
};

export default BlogModal;
