"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { query, collection, where, getDocs, addDoc } from "firebase/firestore";

const ClientBottomComponent = ({ event, id }: any) => {
  const ref = useRef<any>(null);

  const {
    userx,
    setSelectedImage,
    selectedImage,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 350]); // Adjust the range and values for text
  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const adjustTextareaRows = (textarea: any) => {
    textarea.rows = textarea.value.split("\n").length || 1;
  };

  // State to handle adding comments
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const fetchComments = async () => {
    try {
      if (id) {
        // Check if selectedImage.id is defined
        const q = query(collection(db, "comments"), where("imageId", "==", id));
        const querySnapshot = await getDocs(q);

        const fetchedComments: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });

        setComments(fetchedComments);
        console.log(
          "🚀 ~ file: page.tsx:512 ~ fetchComments ~ fetchedComments:",
          fetchedComments
        );
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    id && fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (newComment) {
      const commentRef = await addDoc(collection(db, "comments"), {
        comment: newComment,
        commenter: userx,
        imageId: id,
        timestamp: Date.now(),
        likes: [],
        dislikes: [],
      });
      // const newCommentId = commentRef.id;
    }
    fetchComments();
    setNewComment("");
  };

  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2" ref={commentsSectionRef}>
          Comments 💬
        </h2>
        <ul className="list-disc list-inside">
          {comments.map((comment: any, index: any) => (
            <li key={index} className="text-gray-600 mb-2">
              <span className="font-semibold">{comment.user.name}:</span>{" "}
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Memorable moments 📷</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {event &&
          event.images.map((image: any, index: any) => (
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
      </div> */}
      </div>
    </>
  );
};

export default ClientBottomComponent;
