import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SearchModal = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const inputRef = useRef<any>(null);

  useEffect(() => {
    isOpen && inputRef.current.focus();
  }, [isOpen]);

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
      <div className="bg-greenLight p-6 rounded-lg shadow-md relative flex">
        <div className="flex items-center space-x-2 ">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-tealDark w-full"
          />
          <span
            onClick={() => router.push("/search")}
            className="cursor-pointer absolute top-1/2 right-4   -translate-y-1/2  scale-[.27]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              id="explore"
            >
              <path
                fill="#2C3E50"
                d="M112.4 105.6 86.1 79.3c-.8 1.1-1.7 2.1-2.5 3.1l26 26c1.2 1.2 1.2 3.1 0 4.2-.6.6-1.3.9-2.1.9s-1.6-.3-2.1-.9l-26-26c-1 .9-2 1.7-3.1 2.5l26.3 26.3c1.4 1.4 3.2 2.1 5 2.1s3.6-.7 5-2.1c2.5-2.6 2.5-7-.2-9.8z"
              ></path>
              <path
                fill="#2C3E50"
                d="M93.9 56.4v-1c0-.4 0-.8-.1-1.1 0-.5-.1-1-.2-1.5 0-.2 0-.4-.1-.5-.8-5.9-2.9-11.8-6.3-16.9-.5-.7-.9-1.4-1.5-2l-.1-.1c-1.1-1.4-2.2-2.7-3.5-4-.5-.5-1-.9-1.5-1.4l-.3-.3c-.4-.3-.7-.6-1.1-.9-.3-.3-.7-.6-1-.8h-.1c-6.7-5.2-15.2-8.3-24.3-8.3-22 0-39.9 17.9-39.9 39.9s17.9 39.9 39.9 39.9S94 79.4 94 57.3c0-.3 0-.6-.1-.9zM54.1 93.3c-19.8 0-35.9-16.1-35.9-35.9 0-19.8 16.1-35.9 35.9-35.9 8.3 0 16 2.9 22.1 7.6l.2.2c3.4 2.7 6.4 6.1 8.6 9.9 1.5 2.5 2.6 5.1 3.4 7.8 1.3 4.3 1.8 8.7 1.4 13.1C88.5 78.6 73 93.3 54.1 93.3z"
              ></path>
              <path
                fill="#3B97D3"
                d="M81 40.9c0-.1-.1-.1-.1-.2-.3-.4-.5-.8-.8-1.2-.1-.1-.2-.2-.3-.4-.3-.5-.7-.9-1-1.4l-.1-.1c-.4-.5-.8-.9-1.2-1.4-5.8-6.4-14.2-10.5-23.5-10.5-17.4 0-31.6 14.1-31.6 31.6S36.5 88.9 54 88.9c16.5 0 30.1-12.7 31.5-28.9v-.1c0-.3.1-.6.1-.8.3-6.3-1.2-12.7-4.6-18.2zm-26.9 46c-16.3 0-29.6-13.3-29.6-29.6s13.3-29.6 29.6-29.6c9.2 0 17.5 4.2 22.9 10.9l.1.1c.7.9 1.4 1.9 2.1 2.9 3.5 5.6 5 12.1 4.4 18.4-1.4 15.1-14.1 26.9-29.5 26.9z"
              ></path>
            </svg>
          </span>
        </div>
        <button
          className=" text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 relative  -right-3 transition-all duration-500 rounded-full"
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
