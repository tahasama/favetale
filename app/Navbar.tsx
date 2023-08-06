"use client";
import { Cormorant, Work_Sans, Alegreya } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchModal from "./SearchModal";

// const cormorant = Cormorant({ subsets: ["latin"] });
// const cormorant2 = Cormorant({ subsets: ["latin-ext"], weight: "600" });
// const work = Work_Sans({ subsets: ["latin"], weight: "300" });
const alegreya = Alegreya({ subsets: ["latin"], weight: "400" });
const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    isDropdownOpen2 && setIsDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    isDropdownOpen && setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav
      className={`bg-tealLight h-20 px-4 flex justify-between items-center  fixed top-0 w-full`}
    >
      <div className={`flex items-center ${alegreya.className}`}>
        <div>
          <span
            onClick={toggleDropdown2}
            className="cursor-pointer pr-8 scale-[1] md:hidden block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              id="burger-menu"
            >
              <path
                fill="#2C3E50"
                stroke="#231f20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8h26M7 16h18M3 24h26"
                data-name="Burger Menu"
              ></path>
            </svg>
          </span>
          <div
            className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-opacity ${
              isDropdownOpen2 ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {isDropdownOpen2 && (
              <div className="absolute left-1 mt-2 w-48 bg-slate-50 rounded-lg shadow-lg text-lg block md:hidden">
                <Link href="/explore">
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Explore
                  </span>
                </Link>
                <Link href="/community">
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Community
                  </span>
                </Link>
                <Link href="/questions">
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Questions
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Link href="/">
          <span className="text-3xl md:5xl  font-semibold text-tealDark  cursor-pointer">
            FaveTale
          </span>
        </Link>
      </div>
      <div
        className={`flex items-center justify-between md:space-x-10 lg:space-x-20 text-xl ${alegreya.className}`}
      >
        <SearchModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="relative" onClick={openModal}>
          <input
            type="text"
            disabled
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-tealDark  hidden md:block"
          />
          <span
            onClick={toggleSearchModal}
            className="cursor-pointer absolute top-1/2 -right-9  transform -translate-y-1/2  scale-[.27]"
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
        <Link href="/explore">
          <span className="hover:text-tealDark transition-colors duration-300 cursor-pointer hidden md:block">
            Explore
          </span>
        </Link>
        <Link href="/community">
          <span className="hover:text-tealDark transition-colors duration-300 cursor-pointer hidden md:block">
            Community
          </span>
        </Link>
        <Link href="/questions">
          <span className="hover:text-tealDark transition-colors duration-300 cursor-pointer hidden md:block">
            Questions
          </span>
        </Link>
        {loggedIn ? (
          <div className="relative group text-md">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer group-hover:text-tealDark"
            >
              Me
            </span>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-opacity ${
                isDropdownOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-50 rounded-lg shadow-lg">
                  {/* Dropdown menu for logged-in users */}
                  <Link href="/my-pets">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Pets
                    </span>
                  </Link>
                  <Link href="/write-blog">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Blogs
                    </span>
                  </Link>
                  <Link href="/profile">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Profile
                    </span>
                  </Link>
                  <button className="block w-full px-4 py-2 text-left hover:bg-teal-50 hover:text-red-400 hover:scale-x-110 transition-all rounded-lg duration-150">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link href="/login">
            <span className="hover:text-tealLight transition-colors duration-300 cursor-pointer">
              Login/Register
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
