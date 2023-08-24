import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SearchModal = ({ isOpen, onClose, image }: any) => {
  console.log("🚀 ~ file: ImageModal.tsx:6 ~ SearchModal ~ image:", image);
  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={` fixed inset-0 flex items-center justify-center modal-overlay  z-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className=" p-6  relative flex w-8/12">
        <Image
          src={image}
          alt="pet"
          className="w-full h-auto cursor-pointer rounded-lg shadow-xl bg-tealDark"
          width={1000}
          height={1000}
        />
        <button
          className=" text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 absolute  -top-0 -right-3 transition-all duration-500 rounded-full"
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

export default SearchModal;
