import Link from "next/link";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: "Tech Conference 2023",
      startDate: new Date("2023-08-25"),
      endDate: new Date("2023-08-28"),
      image: "/images/events/event1.jpg",
      initiator: "John Doe",
      initiatorImage: "/images/initiators/john-doe.jpg",
      location: "Conference Center",
      hour: "10:00 AM - 5:00 PM",
      description: "Join us for the latest tech innovations and trends.",
    },
    {
      id: 2,
      title: "Creative Workshop",
      startDate: new Date("2023-08-02"),
      endDate: new Date("2023-08-08"),
      image: "/images/events/event2.jpg",
      initiator: "Alice Smith",
      initiatorImage: "/images/initiators/alice-smith.jpg",
      location: "Art Studio",
      hour: "2:00 PM - 4:00 PM",
      description: "Unleash your creativity in this hands-on workshop.",
    },
    {
      id: 3,
      title: "Startup Meetup",
      startDate: new Date("2023-11-08"),
      endDate: new Date("2023-11-08"),
      image: "/images/events/event3.jpg",
      initiator: "Bob Johnson",
      initiatorImage: "/images/initiators/bob-johnson.jpg",
      location: "Co-working Space",
      hour: "6:00 PM - 8:00 PM",
      description: "Connect with fellow startup enthusiasts and entrepreneurs.",
    },
    {
      id: 4,
      title: "Design Conference",
      startDate: new Date("2023-12-02"),
      endDate: new Date("2023-12-04"),
      image: "/images/events/event4.jpg",
      initiator: "Emily Brown",
      initiatorImage: "/images/initiators/emily-brown.jpg",
      location: "Design Center",
      hour: "9:00 AM - 6:00 PM",
      description: "Explore the world of design and creative thinking.",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );

  const handleActiveStartDateChange = ({ activeStartDate }: any) => {
    setCurrentMonthIndex(activeStartDate.getMonth());
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
    <div className="container mx-auto bg-gradient-to-b from-tealLight to-teal-100">
      <div className="flex flex-row-reverse items-center h-[calc(100vh-138px)] justify-around p-6">
        <div className="flex flex-row-reverse justify-around w-11/12 bg-teal-50 p-6 rounded-xl shadow-md">
          <Calendar
            onChange={handleDateChange}
            onActiveStartDateChange={handleActiveStartDateChange}
            value={selectedDate}
            className=" bg-white p-6 scale-105 h-96 sticky top-20 rounded-lg border shadow-lg"
            calendarType="US"
            tileClassName={({ date }) => {
              const eventsOnDate = eventsData.some((event) => {
                const adjustedStartDate = new Date(event.startDate);
                adjustedStartDate.setDate(event.startDate.getDate() - 1);
                return adjustedStartDate <= date && date <= event.endDate;
              });

              return eventsOnDate ? "bg-red-500 text-purple-500" : "";
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
          <div className="w-8/12 pl-6 ">
            <ul className="h-80 gap-4 flex flex-col px-4 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-5">
                {monthNames[currentMonthIndex]} Events
              </h3>
              {eventsData
                .filter(
                  (event: any) =>
                    event.startDate.getMonth() === currentMonthIndex
                )
                .map((event, index) => {
                  const adjustedStartDate = new Date(event.startDate);
                  adjustedStartDate.setDate(adjustedStartDate.getDate() - 1);

                  const isEventOnDate =
                    selectedDate >= adjustedStartDate &&
                    selectedDate <= event.endDate;

                  return (
                    <li
                      className={`${
                        isEventOnDate ? "bg-fuchsia-100" : ""
                      } flex items-start p-3 rounded-lg shadow-md h-fit transition-all duration-300 border-x-2`}
                      key={index}
                    >
                      <img
                        className="rounded-full h-12 w-12 bg-yellow-100 mr-3"
                        src={event.initiatorImage}
                        alt="initiator"
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
                    </li>
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
