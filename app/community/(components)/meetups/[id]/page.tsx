"use client";

import React, { useRef, useState } from "react";

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

import user4 from "../../../../images/users/user4.jpg";
import user5 from "../../../../images/users/user5.jpg";
import img1 from "../../../../images/1.jpg";
import img2 from "../../../../images/2.jpg";
import img3 from "../../../../images/3.jpg";
import img4 from "../../../../images/4.jpg";
import img5 from "../../../../images/5.jpg";
import img6 from "../../../../images/6.jpg";
import img7 from "../../../../images/7.jpg";
import img8 from "../../../../images/8.jpg";
import img9 from "../../../../images/9.jpg";
import img10 from "../../../../images/10.jpg";
import img11 from "../../../../images/11.jpg";
import img12 from "../../../../images/12.jpg";

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

function Event() {
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
  const { id } = useParams();
  console.log("🚀 ~ file: page.tsx:195 ~ Event ~ id:", id);

  const event = eventsData.filter((blog: any) => blog.id === Number(id))[0];
  console.log("🚀 ~ file: page.tsx:197 ~ Event ~ event:", event);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the clicked image's index

  const openModal = (pet: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 350]); // Adjust the range and values for text

  return (
    <div className="relative  h-full text-black py-12 ">
      <div
        className="grid place-items-center relative w-full h-[95vh] overflow-hidden"
        ref={ref}
      >
        <motion.p
          className="font-semibold tracking-wider text-6xl z-10 absolute  text-teal-600"
          style={{ y: textTranslateY }}
        >
          {event.title}
        </motion.p>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundTranslateY,
          }}
        />
      </div>

      <div className="p-6 bg-gradient-to-b h-auto from-tealLight to-blue-300">
        <p className="text-xl font-semibold mb-4">{event.title}</p>
        <p className="text-gray-600 text-lg mb-2">{event.description}</p>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Date:</span>{" "}
          {event.startDate.toDateString()} - {event.endDate.toDateString()}
        </p>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Time:</span> {event.hour}
        </p>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold">Location:</span> {event.location}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Images 📷</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setUploadModalOpen(true)}
              >
                <img
                  src={image}
                  alt={`Event Image ${index}`}
                  className="w-full h-60 object-cover rounded-lg group-hover:brightness-50 cursor-pointer transform transition-all duration-300 ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-sm font-semibold">
                    Click to enlarge
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={uploadModalOpen}
          onClose={() => setUploadModalOpen(false)}
          images={event.images}
          initialIndex={selectedImageIndex}
        />

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Comments 💬</h2>
          <ul className="list-disc list-inside">
            {event.comments.map((comment, index) => (
              <li key={index} className="text-gray-600 mb-2">
                <span className="font-semibold">{comment.user.name}:</span>{" "}
                {comment.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Likes 👍</h2>
          <p className="text-gray-600">{event.likes.length} Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
