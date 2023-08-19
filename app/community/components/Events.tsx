import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "September 15-17, 2023",
      image: "/images/events/event1.jpg",
    },
    {
      id: 2,
      title: "Creative Workshop",
      date: "October 5-6, 2023",
      image: "/images/events/event2.jpg",
    },
    {
      id: 3,
      title: "Startup Meetup",
      date: "November 8, 2023",
      image: "/images/events/event3.jpg",
    },
    // Add more event objects here
    {
      id: 4,
      title: "Design Conference",
      date: "December 2-4, 2023",
      image: "/images/events/event4.jpg",
    },
    {
      id: 5,
      title: "Networking Seminar",
      date: "January 20, 2024",
      image: "/images/events/event5.jpg",
    },
    {
      id: 6,
      title: "Coding Hackathon",
      date: "February 15-16, 2024",
      image: "/images/events/event6.jpg",
    },
    {
      id: 7,
      title: "Business Symposium",
      date: "March 10-12, 2024",
      image: "/images/events/event7.jpg",
    },
    {
      id: 8,
      title: "Music Festival",
      date: "April 25-28, 2024",
      image: "/images/events/event8.jpg",
    },
    {
      id: 9,
      title: "Health and Wellness Expo",
      date: "May 8, 2024",
      image: "/images/events/event9.jpg",
    },
    {
      id: 10,
      title: "Art Exhibition",
      date: "June 15-20, 2024",
      image: "/images/events/event10.jpg",
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6">Events</h2>
      <div className="relative">
        <div className="absolute h-full  bg-gray-400 ">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </div>
      </div>
    </div>
  );
};

export default Events;
