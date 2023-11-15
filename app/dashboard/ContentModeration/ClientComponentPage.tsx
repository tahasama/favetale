import { Roboto, Aboreto } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaBlog, FaBook, FaBookOpen, FaImages } from "react-icons/fa";
import {
  FiClipboard,
  FiHelpCircle,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";

const ClientComponentPage = () => {
  const content: any = {
    Gallery: { component: "gallery", icon: <FaImages /> },
    Blogs: { component: "blogs", icon: <FaBook /> },
    Stories: { component: "stories", icon: <FiClipboard /> },
    Forums: { component: "discussions", icon: <FiMessageSquare /> },
    Meetups: { component: "meetups", icon: <FiUsers /> },
    Questions: { component: "questions", icon: <FiHelpCircle /> },
  };
  return (
    <div className="sticky flex flex-col justify-center order-2 md:order-1 h-full  bg-tealLight">
      <ul
        className={` flex md:flex-col justify-center   m-1 md:py-2 rounded-md md:gap-3  sm:top-0  backdrop-brightness-90`}
      >
        {Object.keys(content).map((menuItem) => (
          <li
            className={`hover:underline hover:animate-bounceQ z-50 list-none md:text-xl m-1 md:m-2  rounded-md font-semibold bg-teal-600 p-3 cursor-pointer`}
            key={menuItem}
          >
            <Tooltip text={content[menuItem].component}>
              <Link
                href={`/dashboard/ContentModeration/${content[menuItem].component}`}
              >
                {content[menuItem].icon}
              </Link>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tooltip = ({ text, children }: any) => {
  return (
    <div className="relative w-fit group z-50">
      {children}
      <div className="absolute  -left-4 top-[34px] z-50 bg-gray-700 text-white text-sm py-1 px-2 rounded-md shadow-lg transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

export default ClientComponentPage;
