import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import user1 from "../../../images/users/user1.jpg";
import user2 from "../../../images/users/user2.jpg";
import user3 from "../../../images/users/user3.jpg";
import user4 from "../../../images/users/user4.jpg";
import user5 from "../../../images/users/user5.jpg";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import img4 from "../../../images/4.jpg";
import img5 from "../../../images/5.jpg";
import img6 from "../../../images/6.jpg";
import img7 from "../../../images/7.jpg";
import img8 from "../../../images/8.jpg";
import img9 from "../../../images/9.jpg";
import img10 from "../../../images/10.jpg";
import img11 from "../../../images/11.jpg";
import img12 from "../../../images/12.jpg";

const Events = () => {
  const eventsData = [
    {
      id: 2,
      title: "Pet Adoption Fair 2023",
      startDate: new Date("2023-09-15"),
      endDate: new Date("2023-09-17"),
      image: img6.src,
      initiator: "Animal Rescue Society",
      initiatorImage: user1.src,
      location: "City Park",
      hour: "10:00 AM - 4:00 PM",
      description: "Find your new furry friend at our adoption fair.",
      images: [img1.src, img2.src, img3.src],
      likes: [8, 12, 24, 36],
      comments: [
        {
          text: "I adopted the sweetest cat from here last year!",
          user: {
            name: "Sarah Brown",
            image: user4.src,
          },
        },
        {
          text: "Thank you for helping animals in need!",
          user: {
            name: "Michael Davis",
            image: user5.src,
          },
        },
      ],
    },
    {
      id: 3,
      title: "Wildlife Conservation Seminar",
      startDate: new Date("2023-10-10"),
      endDate: new Date("2023-10-11"),
      image: img4.src,
      initiator: "Nature Conservancy",
      initiatorImage: user2.src,
      location: "Nature Center",
      hour: "9:00 AM - 3:00 PM",
      description:
        "Learn about efforts to protect wildlife and their habitats.",
      images: [img4.src, img5.src, img6.src],
      likes: [15, 19, 27, 42],
      comments: [
        {
          text: "These animals deserve our protection!",
          user: {
            name: "Emma Wilson",
            image: user1.src,
          },
        },
        {
          text: "I'm excited to attend this event!",
          user: {
            name: "David Green",
            image: user2.src,
          },
        },
      ],
    },
    {
      id: 4,
      title: "Dog Training Workshop",
      startDate: new Date("2023-09-22"),
      endDate: new Date("2023-09-23"),
      image: img11.src,
      initiator: "Pawsitive Training Academy",
      initiatorImage: user3.src,
      location: "Community Center",
      hour: "11:00 AM - 2:00 PM",
      description: "Enhance your dog's behavior and obedience skills.",
      images: [img7.src, img8.src, img9.src],
      likes: [10, 14, 22, 31],
      comments: [
        {
          text: "This workshop transformed my dog's behavior!",
          user: {
            name: "Lisa Anderson",
            image: user3.src,
          },
        },
        {
          text: "I recommend this to all dog owners!",
          user: {
            name: "Jason Smith",
            image: user4.src,
          },
        },
      ],
    },
    {
      id: 5,
      title: "Cat Show Competition 2023",
      startDate: new Date("2023-11-05"),
      endDate: new Date("2023-11-06"),
      image: img9.src,
      initiator: "Feline Fanciers Club",
      initiatorImage: user4.src,
      location: "Convention Center",
      hour: "10:00 AM - 6:00 PM",
      description: "Witness the beauty and grace of various cat breeds.",
      images: [img10.src, img11.src, img12.src],
      likes: [7, 11, 18, 25],
      comments: [
        {
          text: "These cats are so elegant!",
          user: {
            name: "Olivia Johnson",
            image: user5.src,
          },
        },
        {
          text: "I can't wait to see the Maine Coon cats!",
          user: {
            name: "Lucas Clark",
            image: user1.src,
          },
        },
      ],
    },
    {
      id: 6,
      title: "Horseback Riding Retreat",
      startDate: new Date("2023-09-30"),
      endDate: new Date("2023-10-02"),
      image: img7.src,
      initiator: "Trail Blazers Equestrian Club",
      initiatorImage: user5.src,
      location: "Ranch Resort",
      hour: "9:00 AM - 5:00 PM",
      description:
        "Experience the joy of horseback riding in a beautiful setting.",
      images: [img1.src, img3.src, img5.src],
      likes: [9, 13, 21, 28],
      comments: [
        {
          text: "Horseback riding is so therapeutic!",
          user: {
            name: "Sophie Adams",
            image: user1.src,
          },
        },
        {
          text: "I'm bringing my kids to this event. They love horses!",
          user: {
            name: "Mark Roberts",
            image: user2.src,
          },
        },
      ],
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [currentYearIndex, setcurrentYearIndex] = useState(
    new Date().getFullYear()
  );

  const handleActiveStartDateChange = ({ activeStartDate }: any) => {
    setCurrentMonthIndex(activeStartDate.getMonth());
    setcurrentYearIndex(activeStartDate.getFullYear());
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleScrollToSection = (e: any, sectionId: any) => {
    e.preventDefault(); // Prevent the default link behavior

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Use smooth scrolling animation
        block: "start", // Scroll to the top of the section
      });
    }
  };

  return (
    <div className="container mx-auto bg-gradient-to-b from-tealLight to-teal-100">
      <div className="mb-6">
        <div className="bg-green-600 p-12 text-left leading-loose tracking-wide">
          <h2 className="text-4xl font-semibold text-white mb-5">
            Explore Pet Events
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover exciting pet-related events happening in your area and
            beyond. Don't miss out on the fun and opportunities to learn and
            connect!
          </p>
          <Link
            href="#pet-events" // Points to the anchor element with id "pet-questions"
            onClick={(e) => handleScrollToSection(e, "pet-events")}
          >
            <button className="hover:animate-buttonHover bg-tealLight hover:text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors duration-500">
              View Upcoming Events
            </button>
          </Link>
        </div>
      </div>

      <div
        className="flex flex-row-reverse items-center h-[calc(100vh-138px)] justify-around p-6 "
        id="pet-events"
      >
        <div className="flex flex-row-reverse items-center justify-around w-11/12 h-[76vh] bg-teal-50 p-6 rounded-xl shadow-md">
          <Calendar
            onChange={handleDateChange}
            onActiveStartDateChange={handleActiveStartDateChange}
            value={selectedDate}
            className=" bg-white p-6 scale-125 h-96 sticky top-20 rounded-lg border shadow-lg"
            calendarType="US"
            tileClassName={({ date }) => {
              const eventsOnDate = eventsData.some((event) => {
                const adjustedStartDate = new Date(event.startDate);
                adjustedStartDate.setDate(event.startDate.getDate() - 1);
                return adjustedStartDate <= date && date <= event.endDate;
              });

              return eventsOnDate ? "text-purple-500" : "";
            }}
            tileContent={({ date }) => {
              const eventsOnDate = eventsData.some((event) => {
                const adjustedStartDate = new Date(event.startDate);
                adjustedStartDate.setDate(event.startDate.getDate() - 1);
                return adjustedStartDate <= date && date <= event.endDate;
              });

              return eventsOnDate ? (
                <span className="bg-purple-500 rounded-full h-2 w-2 block mx-auto mt-1"></span>
              ) : null;
            }}
          />
          <div className="w-7/12 pl-6 h-full  overflow-y-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-200">
            <ul className="h-auto gap-4 flex flex-col px-4 pb-2">
              <h3 className="text-xl font-semibold mb-5">
                {monthNames[currentMonthIndex]}&nbsp;
                {currentYearIndex} Events :
              </h3>
              {eventsData
                .filter(
                  (event: any) =>
                    event.startDate.getMonth() === currentMonthIndex &&
                    event.startDate.getFullYear() === currentYearIndex
                )
                .map((event, index) => {
                  const adjustedStartDate = new Date(event.startDate);
                  adjustedStartDate.setDate(adjustedStartDate.getDate() - 1);

                  const isEventOnDate =
                    selectedDate >= adjustedStartDate &&
                    selectedDate <= event.endDate;

                  return (
                    <Link href={`community/events/${event.id}`}>
                      <motion.li
                        initial={{ opacity: 0, transform: "scale(.9)" }} // Initial state (hidden and slightly moved down)
                        animate={{ opacity: 1, transform: "scale(1)" }} // Animation state (visible and at normal position)
                        transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
                        className={`${
                          isEventOnDate ? "bg-sky-100" : ""
                        } flex items-start p-3 rounded-lg shadow-md h-fit w-full cursor-pointer transition-all duration-300 border-x-2`}
                        key={index}
                      >
                        <Image
                          className="rounded-full h-12 w-12 bg-yellow-100 mr-3"
                          src={event.initiatorImage}
                          alt="initiator"
                          width={1000}
                          height={1000}
                        />
                        <div>
                          <p className="font-semibold">{event.initiator}</p>
                          <p className="font-light text-md tex py-1 text-gray-800">
                            {event.title}
                          </p>
                          <p className="font-extralight text-sm py-1 text-gray-600">
                            {event.description}
                          </p>
                          <div className="flex leading-10 tracking-wider mb-1">
                            <p className="text-gray-600 ">📅 {event.hour} |</p>
                            <p className="text-gray-600">📍 {event.location}</p>
                          </div>
                          <div className="bg-gray-50 shadow-md cursor-pointer text-gray-500 w-fit px-4 py-3 rounded-md text-sm hover:animate-buttonHover">
                            Join the event
                          </div>
                        </div>
                      </motion.li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
