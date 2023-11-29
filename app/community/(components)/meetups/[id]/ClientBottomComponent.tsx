"use client";
import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import {
  query,
  collection,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import Link from "next/link";

import UploadImageMeetupModal from "./UploadImageMeetupModal";
import UploadpetModalOpenButton from "./UploadpetModalOpenButton";
import {
  AiFillDelete,
  AiOutlineEdit,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const ClientBottomComponent = ({ event, id }: any) => {
  const ref = useRef<any>(null);

  const { userx, petModalOpen, setPetModalOpen, setComments, comments } =
    useCart();

  const commentsSectionRef = useRef<any>(null);

  const [newComment, setNewComment] = useState("");

  const fetchComments = async () => {
    try {
      if (id) {
        const q = query(collection(db, "comments"), where("imageId", "==", id));
        const querySnapshot = await getDocs(q);

        const fetchedComments: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });

        setComments(fetchedComments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    id && fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (newComment) {
      if (updatedComment === null) {
        const commentRef = await addDoc(collection(db, "comments"), {
          comment: newComment,
          commenter: userx,
          imageId: id,
          timestamp: Date.now(),
          likes: [],
          dislikes: [],
        });
        await updateDoc(doc(db, "gatherings", String(id)), {
          answerers: arrayUnion(userx.id),
        });
      } else {
        try {
          await updateDoc(doc(db, "comments", updatedComment), {
            comment: newComment,
          });
          setNewComment("");
          setUpdatedComment(null);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchComments();
    setNewComment("");
    setUpdatedComment(null);
  };

  const [updatedComment, setUpdatedComment] = useState<any>(null);

  const updateComment = async (reply: any) => {
    setNewComment(reply.comment);
    setUpdatedComment(reply.id);
  };

  return (
    <>
      <div className="mt-6 mx-2">
        <h2 className="text-xl font-semibold mb-2" ref={commentsSectionRef}>
          Comments 💬
        </h2>
        {userx.id && (
          <div className="mt-8 mb-6">
            <div className="flex items-start space-x-4">
              {userx.image ? (
                <Link href="/profile" target="_blank" rel="noopener noreferrer">
                  <img
                    src={userx.image}
                    alt="Your Name"
                    className="w-10 h-10 rounded-full"
                  />
                </Link>
              ) : (
                <div className="w-12 h-12 rounded-full bg-sky-300 px-3"></div>
              )}
              <div className="flex flex-col space-y-4 w-full">
                <textarea
                  rows={2}
                  placeholder="Participate in the discussion..."
                  className="border rounded-lg w-full py-2 px-4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  onClick={handleAddComment}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-fit hover:bg-blue-600 focus:outline-none"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-4 mx-2" ref={commentsSectionRef}>
          {comments.map((reply: any) => (
            <div
              key={reply.id}
              className="border-y-2 flex justify-between px-5 pb-3 pt-6 rounded-r-lg"
            >
              <div>
                <div className="flex items-center">
                  {userx.image ? (
                    <Link
                      href="/profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={reply.commenter.image}
                        alt="Your Name"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sky-300 px-3 mr-4"></div>
                  )}
                  <p className="text-slate-700 text-lg mb-2">
                    {" "}
                    {reply.comment}
                  </p>
                </div>

                <div className="flex gap-4 my-2">
                  <p className="text-gray-600 ml-4">@ {reply.commenter.name}</p>
                  <p className="text-gray-400 text-sm mb-2">
                    <ReactTimeAgo date={reply.timestamp} locale="en-US" />
                  </p>
                </div>
              </div>
              {reply.commenter.id === userx.id && (
                <div className=" w-fit flex gap-3 md:gap-5 z-30 h-fit">
                  <button
                    onClick={() => updateComment(reply)}
                    className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                  >
                    <span className="text-base md:text-xl"></span>
                    <AiOutlineEdit color={"#a9aeb4"} size={24} />
                  </button>
                  <button
                    onClick={async () => {
                      await deleteDoc(doc(db, "comments", reply.id)).then(() =>
                        fetchComments()
                      );
                    }}
                    className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                  >
                    <span className="text-base md:text-xl"></span>
                    <AiFillDelete color={"#a9aeb4"} size={24} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between mx-2 items-center">
          <h2 className="text-xl font-semibold ">
            Memorable moments 📷 ({event.images.length} images)
          </h2>
          {event.writer.id === userx.id && <UploadpetModalOpenButton />}
        </div>

        <UploadImageMeetupModal id={id} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 pb-3">
          {event &&
            event.images.slice(0, 3).map((image: any, index: any) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setPetModalOpen(true)}
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
          {event.images.length > 2 && (
            <div
              className="relative w-full h-60 bg-gradient-to-br z-40 from-sky-100 to-sky-300 group rounded-lg flex justify-center flex-col items-center cursor-pointer gap-3"
              onClick={() => setPetModalOpen(true)}
            >
              <AiOutlinePlusCircle
                size={44}
                className="group-hover:scale-125 transition-transform duration-200"
              />
              <span className="text-slate-700 text-lg"> Click for more...</span>
            </div>
          )}
          <ImageModal
            isOpen={petModalOpen}
            onClose={() => setPetModalOpen(false)}
            images={event.images}
          />
        </div>
      </div>
    </>
  );
};

export default ClientBottomComponent;
