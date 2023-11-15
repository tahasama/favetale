"use client";
import React, { useEffect, useState } from "react";

import { HiMenu } from "react-icons/hi";

import Link from "next/link";
import { Aboreto, Roboto, Abhaya_Libre, Montaga } from "next/font/google";

// const aboreto = Abhaya_Libre({ weight: "400", subsets: ["latin"] });
const montaga = Montaga({ weight: "400", subsets: ["latin"] });
const abhaya = Abhaya_Libre({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

const ClientComponentPage = () => {
  const components: any = {
    Overview: "DashboardOverview",
    Users: "UserManagement",
    Content: "ContentModeration",
    Store: "StoreManagement",
    Events: "EventManagement",
  };
  const storedTab =
    (typeof window !== "undefined" &&
      localStorage.getItem("dashboardActiveTab")) ||
    "Dashboard Overview";
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(storedTab);

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("dashboardActiveTab", selectedMenuItem);
  }, [selectedMenuItem]);

  const [open, setOpen] = useState(false);

  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
    setOpen(!open);
  };

  return (
    <header className="bg-teal-500 py-1 text-white relative mt-0 ">
      <nav className="ml-3 flex items-center gap-4">
        <h1
          className={` ${roboto.className} text-lg text-white lg:text-xl xl:text-3xl `}
        >
          Manager Dashboard
        </h1>
        <p
          onClick={() => setOpen(!open)}
          className={`cursor-pointer md:hidden  absolute top-1.5 right-1.5 text-3xl ${
            open ? "text-indigo-200" : "text-white"
          }`}
        >
          <HiMenu />
        </p>
        <ul
          className={`flex items-center transform gap-0 md:gap-4 ${
            open ? "scale-y-100" : "scale-y-0 md:scale-y-100 "
          } transition-transform ${
            montaga.className
          } origin-top-right  absolute right-0 border-b-2 border-s-2 border-tealLight md:border-none top-[52px] md:p-1 rounded-b-lg bg-teal-500 md:bg-transparent  z-40 md:relative md:top-0 flex-col md:flex-row`}
        >
          {Object.keys(components).map((menuItem) => (
            <Link
              href={`/dashboard/${components[menuItem]}`}
              className={`hover:animate-buttonHover w-full list-none text-xs lg:text-base xl:text-xl  md:w-auto md:rounded-md md:backdrop-brightness-75 py-1.5 md:py-1.5 md:px-1.5 cursor-pointer`}
              key={menuItem}
            >
              <p className="min-w-[5rem] lg:min-w-[8rem] text-center">
                {menuItem}
              </p>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ClientComponentPage;
