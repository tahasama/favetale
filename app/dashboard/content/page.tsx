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
import { FaBlog, FaBookOpen, FaImages } from "react-icons/fa";

function ContentModeration() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>("");

  useEffect(() => {
    setSelectedMenuItem("Gallery");
  }, []);

  const content: any = {
    Gallery: { component: <Gallery />, icon: <FaImages /> },
    Blogs: { component: <Blogs />, icon: <FaBlog /> },
    Stories: { component: <Stories />, icon: <FaBookOpen /> },
    // "Forums":</>,
    // "Meetups":</>,
    // "Questions":</>
  };
  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)] min-h-[15rem] flex-col lg:flex-row  w-full">
      <div className="sticky flex flex-col justify-center order-2 lg:order-1">
        <ul
          className={` flex md:flex-col justify-center   m-1 lg:py-2 rounded-md gap-4  sm:top-0  backdrop-brightness-90`}
        >
          {Object.keys(content).map((menuItem) => (
            <li
              className={`hover:underline hover:animate-bounceQ1  list-none lg:text-xl m-2 w-auto rounded-md font-semibold bg-teal-600 p-3 cursor-pointer`}
              key={menuItem}
            >
              <p onClick={() => handleMenuItemClick(menuItem)}>
                {content[menuItem].icon}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <main className="flex-grow min-h-[16rem] overflow-y-auto order-1 lg:order-2">
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
