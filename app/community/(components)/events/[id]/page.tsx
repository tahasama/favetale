"use client";

import React, { useState } from "react";

import q from "../../../../images/event/q.jpg";
import w from "../../../../images/event/w.jpg";
import e from "../../../../images/event/e.jpg";
import r from "../../../../images/event/r.jpg";
import t from "../../../../images/event/t.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import user1 from "../../../../images/users/user1.jpg";
import user2 from "../../../../images/users/user2.jpg";
import user3 from "../../../../images/users/user3.jpg";

import Image from "next/image";
import ImageModal from "./ImageModal";

function Event() {
  const event = {
    id: 1,
    title: "Tech Conference 2023",
    startDate: new Date("2023-08-25"),
    endDate: new Date("2023-08-28"),
    image: q.src,
    initiator: "John Doe",
    initiatorImage: "/images/initiators/john-doe.jpg",
    location: "Conference Center",
    hour: "10:00 AM - 5:00 PM",
    description: "Join us for the latest tech innovations and trends.",
    images: [w.src, e.src, r.src, t.src], // Array of images added during or after the event
    likes: 12, // Number of likes received
    comments: [
      {
        text: "Great tips for pet owners!",
        user: {
          name: "Alice Smith",
          image: user1.src,
        },
      },
      {
        text: "I found this really helpful. Thanks!",
        user: {
          name: "Bob Johnson",
          image: user3.src,
        },
      },
      {
        text: "Nice article! Keep up the good work.",
        user: {
          name: "Eva Wilson",
          image: user2.src,
        },
      },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pet: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-tealLight mt-20 to-blue-300 text-black py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-teal-700 font-bold mb-4">
          {event.title} 🎉
        </h1>
        <Image
          src={event.image}
          alt={`Event Image`}
          className="rounded-lg"
          width={2000}
          height={1000}
        />
        <p className="text-lg">{event.description}</p>
        <p className="text-xl mt-4">
          📅 Date: {event.startDate.toDateString()} -{" "}
          {event.endDate.toDateString()}
        </p>
        <p className="text-xl">🕒 Time: {event.hour}</p>
        <p className="text-xl">📍 Location: {event.location}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Images 📷</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {event.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Event Image ${index}`}
                className="rounded-lg h-80 object-cover cursor-pointer"
                width={2000}
                height={1000}
                onClick={() => openModal(true)}
              />
            ))}
          </div>
        </div>

        <ImageModal
          images={event.images}
          isOpen={isModalOpen}
          onClose={closeModal}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Comments 💬</h2>
          <ul className="list-disc list-inside mt-4">
            {event.comments.map((comment, index) => (
              <li key={index} className="text-lg">
                {comment.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Likes 👍</h2>
          <p className="text-lg">{event.likes} Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
