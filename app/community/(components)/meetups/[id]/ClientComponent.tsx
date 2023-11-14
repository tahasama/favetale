"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import MeetupsModal from "../MeetupsModal";
import JoinButton from "./JoinButton";

const ClientComponent = ({ event, id }: any) => {
  const ref = useRef<any>(null);

  const {
    userx,

    uploadpetModalOpen,
    setMeetupModalOpen,
    comments,
  } = useCart();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 350]); // Adjust the range and values for text

  const removeImage = async () => {
    try {
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });

      const deleteImagePromise = deleteDoc(doc(db, "gatherings", event.id)); // Assuming 'petImages' is the collection name for images

      await Promise.all(deleteCommentPromises);

      await deleteImagePromise;
    } catch (error) {
      console.error("Error deleting image and related comments:", error);
    }
  };

  return (
    <div
      className="grid place-items-center relative w-full h-[70vh] overflow-hidden"
      ref={ref}
    >
      {event && event.writer.id === userx.id && (
        <div className=" w-fit flex gap-3 md:gap-5 right-2 md:right-0 rounded-l-3xl absolute top-8 z-30 backdrop-brightness-75 backdrop-blur-sm p-4">
          <button
            onClick={() => setMeetupModalOpen(true)}
            className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
          >
            <span className="text-base md:text-xl"></span>
            <AiOutlineEdit color={"#d4dae2"} size={24} />
          </button>
          <button
            onClick={removeImage}
            className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
          >
            <span className="text-base md:text-xl"></span>
            <AiFillDelete color={"#d4dae2"} size={24} />
          </button>
        </div>
      )}

      <MeetupsModal
        isOpen={uploadpetModalOpen}
        onClose={() => setMeetupModalOpen(false)}
        event={event}
      />

      <motion.p
        style={{ y: textTranslateY }}
        className="font-semibold tracking-wider -mt-36 px-1.5 rounded-lg leading-loose text-center md:text-start text-base lg:text-2xl xl:text-2xl z-10 absolute"
      >
        {userx.id && userx.id !== event.writer.id && (
          <JoinButton newEvent={event} />
        )}
      </motion.p>

      <motion.p
        style={{ y: textTranslateY }}
        className="font-semibold tracking-wider backdrop-blur-sm backdrop-brightness-75 p-1.5 rounded-lg leading-loose text-center md:text-start text-4xl lg:text-5xl xl:text-6xl z-10 absolute capitalize  text-tealLight"
      >
        {event && event.title}
      </motion.p>

      <motion.div
        className="absolute  inset-0 z-0"
        style={{
          backgroundImage: `url(${event && event.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundTranslateY,
        }}
      />
    </div>
  );
};

export default ClientComponent;
