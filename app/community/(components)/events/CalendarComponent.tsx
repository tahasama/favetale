"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

const CalendarComponent = ({ eventsData }: any) => {
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

  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-4 lg:gap-0 justify-around md:h-[76vh] w-full bg-teal-50 lg:p-6 rounded-xl shadow-md  overflow-y-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-200">
      <Calendar
        onChange={handleDateChange}
        onActiveStartDateChange={handleActiveStartDateChange}
        value={selectedDate}
        className=" bg-white p-2 md:p-6  h-96 sticky top-0 rounded-lg border shadow-lg"
        calendarType="US"
        tileClassName={({ date }) => {
          const eventsOnDate = eventsData.some((event: any) => {
            const adjustedStartDate = new Date(event.startDate);
            return adjustedStartDate <= date && date <= new Date(event.endDate);
          });

          return eventsOnDate ? "text-purple-500" : "";
        }}
        tileContent={({ date }) => {
          const eventsOnDate = eventsData.some((event: any) => {
            const adjustedStartDate = new Date(event.startDate);
            return adjustedStartDate <= date && date <= new Date(event.endDate);
          });

          return eventsOnDate ? (
            <span className="bg-purple-500 rounded-full h-2 w-2 block mx-auto mt-1"></span>
          ) : null;
        }}
      />
      <div className="md:w-7/12 lg:w-6/12 mt-2 lg:pl-6 bg-red- h-full overflow-y-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-200">
        <ul className=" gap-4 flex flex-col px-0 pb-2">
          <h3
            className={`text-xl font-semibold mb-3 ${
              eventsData.length !== 0 ? "mt-0" : "-mt-40"
            }`}
          >
            {monthNames[currentMonthIndex]}&nbsp;
            {currentYearIndex} Events :
          </h3>
          {eventsData
            .filter(
              (event: any) =>
                new Date(event.startDate).getMonth() === currentMonthIndex &&
                new Date(event.startDate).getFullYear() === currentYearIndex
            )
            .map((event: any, index: any) => {
              const adjustedStartDate = new Date(event.startDate);
              adjustedStartDate.setDate(adjustedStartDate.getDate() - 1);

              const isEventOnDate =
                selectedDate >= adjustedStartDate &&
                selectedDate <= new Date(event.endDate);

              return (
                <Link href={`/community/events/${event.id}`}>
                  <motion.li
                    initial={{ opacity: 0, transform: "scale(.9)" }}
                    animate={{ opacity: 1, transform: "scale(1)" }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    className={`${
                      isEventOnDate ? "bg-sky-100" : "bg-white"
                    } flex items-start p-4 rounded-lg shadow-md h-fit w-full cursor-pointer transition-all duration-300 border-x-2`}
                    key={index}
                  >
                    {event.writer.image !== "" ? (
                      <Image
                        className="rounded-full h-12 w-12 bg-yellow-100 mr-3"
                        src={event.writer.image}
                        alt="initiator"
                        width={1000}
                        height={1000}
                      />
                    ) : (
                      <div className="h-6 w-6 bg-sky-500 rounded-full"></div>
                    )}
                    <div>
                      <p className="font-semibold">{event.initiator}</p>
                      <p className="font-light text-md tex py-1 text-gray-800">
                        {event.title}
                      </p>
                      <p className="font-extralight text-sm py-1 line-clamp-1 text-gray-600">
                        {event.description}
                      </p>
                      <div className="flex leading-10 tracking-wider mb-1">
                        <p className="text-gray-600 ">
                          📅 {event.timeFrom} | {event.startDate}
                        </p>
                        <p className="text-gray-600">
                          📍 {event.location.city}- {event.location.country}
                        </p>
                      </div>
                      <Link
                        href={`/community/events/${event.id}`}
                        className="bg-gray-50 shadow-md cursor-pointer text-gray-500 w-fit px-4 py-2.5 rounded-md text-sm hover:animate-buttonHover"
                      >
                        Join the event
                      </Link>
                    </div>
                  </motion.li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
