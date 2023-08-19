import Link from "next/link";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: "Tech Conference 2023",
      startDate: new Date("2023-09-25"),
      endDate: new Date("2023-09-28"),
      initiator: "John Doe",
      location: "Conference Center",
      hour: "9:00 AM - 5:00 PM",
      image: "/images/events/event1.jpg",
      initiatorImage: "/images/initiators/john-doe.jpg",
    },
    {
      id: 2,
      title: "Creative Workshop",
      startDate: new Date("2023-08-02"),
      endDate: new Date("2023-08-08"),
      initiator: "Jane Smith",
      location: "Art Studio",
      hour: "1:00 PM - 4:00 PM",
      image: "/images/events/event2.jpg",
      initiatorImage: "/images/initiators/jane-smith.jpg",
    },
    // Add more event objects here
    // ...
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const currentMonth = selectedDate.toLocaleString("default", {
    month: "long",
  });

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );

  const handleActiveStartDateChange = ({ activeStartDate }: any) => {
    setCurrentMonthIndex(activeStartDate.getMonth());
  };

  return (
    <div className="container mx-auto bg-tealLight">
      <div className="flex flex-row-reverse items-center h-[calc(100vh-140px)] justify-around p-6">
        <div className="flex flex-row-reverse justify-around w-11/12 bg-teal-400 p-6 rounded-xl shadow-md">
          <Calendar
            onChange={handleDateChange}
            onActiveStartDateChange={handleActiveStartDateChange}
            value={selectedDate}
            className=" bg-white p-6 rounded-lg border shadow-lg"
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
          <div className="w-1/2 pl-6">
            <h3 className="text-xl font-semibold mb-3">
              {currentMonth} Events
            </h3>
            <ul>
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
                        isEventOnDate ? "bg-fuchsia-500" : ""
                      } flex items-start py-2`}
                      key={index}
                    >
                      <img
                        className="rounded-full h-12 w-12 bg-yellow-100 mr-3"
                        src={event.initiatorImage}
                        alt="initiator"
                      />
                      <div>
                        <p className="font-semibold">{event.initiator}</p>
                        <div className="flex leading-10 tracking-wider">
                          <p className="text-gray-600 ">📅 {event.hour} |</p>
                          <p className="text-gray-600">📍 {event.location}</p>
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
