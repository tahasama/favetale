"use client";
import { Cormorant, Work_Sans, Alegreya } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SearchModal from "./SearchModal";
import Image from "next/image";
import logoPets from "./images/logoPets.png";
import { useCart } from "./provider/CartProvider";

// const cormorant = Cormorant({ subsets: ["latin"] });
// const cormorant2 = Cormorant({ subsets: ["latin-ext"], weight: "600" });
// const work = Work_Sans({ subsets: ["latin"], weight: "300" });
const alegreya = Alegreya({ subsets: ["latin"], weight: "400" });
const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const { cart, setCart, quantities } = useCart();

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    isDropdownOpen2 && setIsDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    isDropdownOpen && setIsDropdownOpen(!isDropdownOpen);
  };

  // const toggleSearchModal = () => {
  //   setIsSearchModalOpen(!isSearchModalOpen);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-tealLight h-20 flex justify-around items-center gap-0 z-50 fixed top-0 w-full`}
    >
      <div className={`flex items-center ${alegreya.className}`}>
        <div>
          <span
            onClick={toggleDropdown2}
            className="cursor-pointer sm:pr-8   scale-90  md:scale-100 md:hidden block"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8h26M7 16h18M3 24h26"
                data-name="Burger Menu"
              ></path>
            </svg>
          </span>
          <div
            className={`absolute left-0 mt-2  bg-white rounded-lg shadow-lg transition-opacity ${
              isDropdownOpen2 ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {isDropdownOpen2 && (
              <div
                ref={dropdownRef}
                className="absolute left-1 mt-2  bg-slate-50 rounded-lg shadow-lg text-lg block md:hidden"
              >
                <Link
                  href="/explore"
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                >
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Explore
                  </span>
                </Link>
                <Link
                  href="/community"
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                >
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Community
                  </span>
                </Link>
                <Link
                  href="/store"
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                >
                  <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-105  transition-all rounded-lg duration-150">
                    Store
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center -ml-3 md:ml-0 p-3 gap-3  scale-90  md:scale-100"
        >
          <Image src={logoPets} alt="logoPets" className="h-12 w-12" />
          <span className="text-3xl md:5xl  font-semibold text-tealDark  cursor-pointer">
            FaveTale
          </span>
        </Link>
      </div>
      <div
        className={`mx-0 flex items-center justify-between sm:-mr-2 md:ml-0  scale-90  md:scale-100 md:space-x-10 lg:space-x-10 text-xl ${alegreya.className}`}
      >
        <SearchModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="relative" onClick={openModal}>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-tealDark  hidden lg:block"
          />
          <span className="cursor-pointer absolute top-1/2 -right-11  -translate-y-1/2  scale-[.27]">
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
        <Link href="/store">
          <span className="hover:text-tealDark transition-colors duration-300 cursor-pointer hidden md:block">
            Store
          </span>
        </Link>
        <Link href="/store/cart" className="group">
          <p className="relative text-sm text-white -top-1 left-5 rounded-full group-hover:animate-bounce bg-emerald-600 flex justify-center items-center h-6 w-6">
            <span className="mb-0.5 ml-0.5">{cart.length}</span>
          </p>
          <span className="block px-0 py-2 text-3xl -mt-7 transition-all rounded-lg hover:animate-bounceQ duration-150">
            🛒
          </span>
        </Link>
        {loggedIn ? (
          <div className="relative group text-md">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer group-hover:text-tealDark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                id="avatar"
                className="scale-90 p-0 m-0"
              >
                <path d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </span>
            <div
              className={`absolute right-0 mt-2  bg-white rounded-lg shadow-lg transition-opacity ${
                isDropdownOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className=" absolute right-0 mt-2  bg-slate-50 rounded-lg shadow-lg"
                >
                  {/* Dropdown menu for logged-in users */}
                  <Link
                    href="/profile"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Profile
                    </span>
                  </Link>
                  {/* <Link href="/write-blog">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Blogs
                    </span>
                  </Link>
                  <Link href="/profile">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Profile
                    </span>
                  </Link>
                  <Link href="/profile">
                    <span className="block px-4 py-2 hover:bg-teal-50 hover:text-slate-600 hover:scale-x-110 transition-all rounded-lg duration-150">
                      My Events
                    </span>
                  </Link> */}
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
