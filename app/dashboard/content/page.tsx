"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import {
  IoIosEye,
  IoIosCreate,
  IoIosLock,
  IoIosChatboxes,
  IoIosPeople,
  IoIosHelpCircle,
} from "react-icons/io";
import Gallery from "./gallery/page";
import Blogs from "./blogs/page";
import Stories from "./stories/page";
import { FaBlog, FaBook, FaBookOpen, FaImages } from "react-icons/fa";
import {
  FiClipboard,
  FiHelpCircle,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";
import Meetups from "./meetups/page";
import Questions from "./questions/page";
import Discussions from "./discussions/page";

function ContentModeration() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>("");

  useEffect(() => {
    setSelectedMenuItem("Gallery");
  }, []);

  const content: any = {
    Gallery: { component: <Gallery />, icon: <FaImages /> },
    Blogs: { component: <Blogs />, icon: <FaBook /> },
    Stories: { component: <Stories />, icon: <FiClipboard /> },
    Forums: { component: <Discussions />, icon: <FiMessageSquare /> },
    Meetups: { component: <Meetups />, icon: <FiUsers /> },
    Questions: { component: <Questions />, icon: <FiHelpCircle /> },
  };
  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] min-h-[15rem] flex-col md:flex-row w-full">
      <div className="sticky flex flex-col justify-center order-2 md:order-1">
        <ul
          className={` flex md:flex-col justify-center   m-1 md:py-2 rounded-md md:gap-4  sm:top-0  backdrop-brightness-90`}
        >
          {Object.keys(content).map((menuItem) => (
            <li
              className={`hover:underline hover:animate-bounceQ1  list-none md:text-xl m-1 md:m-2 w-auto rounded-md font-semibold bg-teal-600 p-3 cursor-pointer`}
              key={menuItem}
            >
              <p onClick={() => handleMenuItemClick(menuItem)}>
                {content[menuItem].icon}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <main className="flex-grow min-h-[16rem] overflow-y-auto order-1 md:order-2">
        {/* Content related to the selected feature will be displayed here */}
        <Suspense>
          {" "}
          {selectedMenuItem && content[selectedMenuItem].component}
        </Suspense>
      </main>
    </div>
  );
}

export default ContentModeration;
