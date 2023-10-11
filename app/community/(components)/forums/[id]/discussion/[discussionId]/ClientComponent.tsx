"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import Link from "next/link";

import {
  FieldValue,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useCart } from "@/app/provider/CartProvider";

import parse from "html-react-parser";
import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import DiscussionModal from "../../DiscussionModal";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const ClientComponent = ({ discussionData }: any) => {
  console.log(
    "🚀 ~ file: ClientComponent.tsx:39 ~ ClientComponent ~ discussionData:",
    discussionData
  );
  const discussionId = discussionData.id;
  const {
    userx,
    setSelectedImage,
    selectedImage,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  console.log(
    "🚀 ~ file: ClientComponent.tsx:29 ~ ClientComponent ~ comments:",
    comments
  );

  const { id } = useParams();
  // console.log("🚀 ~ file: page.tsx:453 ~ Story ~ id:", typeof id);

  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchComments = async () => {
    try {
      if (discussionId) {
        // Check if selectedImage.id is defined
        const q = query(
          collection(db, "comments"),
          where("imageId", "==", discussionId)
        );
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

  useEffect(() => {
    discussionId && fetchComments();
  }, [discussionId]);

  const handleAddComment = async () => {
    if (newComment) {
      const commentRef = await addDoc(collection(db, "comments"), {
        comment: newComment,
        commenter: userx,
        imageId: discussionId,
        timestamp: Date.now(),
        likes: [],
        dislikes: [],
      });
      // const newCommentId = commentRef.id;
    }
    fetchComments();
    setNewComment("");
  };

  //   const updatecommentData.likes = async () => {
  //     const likeRef = doc(db, "blogs", String(id));
  //     const documentSnapshot = await getDoc(likeRef);
  //     const petImageData = documentSnapshot.data();

  //     try {
  //       // Get the current document data

  //       if (petImageData) {
  //         const currentcommentData.likes = petImageData.commentData.likes || [];
  //         console.log(
  //           "🚀 ~ file: page.tsx:561 ~ updatecommentData.likes ~ currentcommentData.likes:",
  //           currentcommentData.likes
  //         );

  //         // Check if userToAdd is already in the array
  //         if (currentcommentData.likes.includes(userx.id)) {
  //           // Remove the user from the array on the client side
  //           const updatedcommentData.likes = currentcommentData.likes.filter(
  //             (userId: any) => userId !== userx.id
  //           );

  //           // Update the local data immediately
  //           setSelectedImage({ ...selectedImage, commentData.likes: updatedcommentData.likes });

  //           // Update the document on Firestore in the background
  //           await updateDoc(likeRef, { commentData.likes: updatedcommentData.likes });

  //           console.log("Like removed successfully.");
  //         } else {
  //           // Add the user to the array on the client side
  //           const updatedcommentData.likes = [...currentcommentData.likes, userx.id];

  //           // Update the local data immediately
  //           setSelectedImage({ ...selectedImage, commentData.likes: updatedcommentData.likes });

  //           // Update the document on Firestore in the background
  //           await updateDoc(likeRef, { commentData.likes: updatedcommentData.likes });

  //           console.log("Like added successfully.");
  //         }
  //       } else {
  //         console.log("Document not found or data is null.");
  //       }
  //     } catch (error) {
  //       console.error("Error updating heart:", error);
  //     }
  //   };

  const handleAgree = async (replyId: any) => {
    try {
      const likeRef = doc(db, "comments", String(replyId));
      const commentDoc = await getDoc(likeRef);
      const commentData = commentDoc.data();

      if (!commentDoc.exists) {
        console.error("Comment document does not exist!");
        return;
      }

      const userId = userx.id; // Assuming you have userx defined
      if (commentData) {
        if (commentData.likes.includes(userId)) {
          // User has previously agreed, so remove the like
          await updateDoc(likeRef, {
            likes: arrayRemove(userId),
          });
        } else {
          // User is agreeing for the first time
          await updateDoc(likeRef, {
            likes: arrayUnion(userId),
          });

          // Check if the user previously disagreed and remove the dislike
          if (commentData.dislikes.includes(userId)) {
            await updateDoc(likeRef, {
              dislikes: arrayRemove(userId),
            });
          }
        }
      }

      console.log("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDisagree = async (replyId: any) => {
    try {
      const commentRef = doc(db, "comments", String(replyId));
      const commentDoc = await getDoc(commentRef);

      if (!commentDoc.exists) {
        console.error("Comment document does not exist!");
        return;
      }

      const commentData = commentDoc.data();
      const userId = userx.id; // Assuming you have userx defined

      if (commentData) {
        if (commentData.dislikes.includes(userId)) {
          // User has previously disagreed, so remove the dislike
          await updateDoc(commentRef, {
            dislikes: arrayRemove(userId),
          });
        } else {
          // User is disagreeing for the first time
          await updateDoc(commentRef, {
            dislikes: arrayUnion(userId),
          });

          // Check if the user previously liked and remove the like
          if (commentData.likes.includes(userId)) {
            await updateDoc(commentRef, {
              likes: arrayRemove(userId),
            });
          }
        }
      }

      console.log("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const removeImage = async () => {
    console.log("lets delete", comments);
    try {
      // Step 2: Iterate through the comments and delete each comment document
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });
      console.log(
        "🚀 ~ file: page.tsx:598 ~ comments.forEach ~ deleteCommentPromises:"
      );

      // Step 3: Delete the selected image document
      const deleteImagePromise = deleteDoc(
        doc(db, "discussions", discussionId)
      ); // Assuming 'petImages' is the collection name for images

      // Wait for all comment deletions to complete
      await Promise.all(deleteCommentPromises);

      // After all comments are deleted, delete the image
      await deleteImagePromise;

      // Optionally, you can handle success or show a message here
      console.log("Image and related comments deleted successfully.");
    } catch (error) {
      console.error("Error deleting image and related comments:", error);
    }
  };

  return (
    <>
      <DiscussionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        discussion={discussionData}
      />
      {discussionData && discussionData.writer.id === userx.id && (
        <div className="relative">
          <div className=" w-fit flex gap-3 md:gap-5 right-2 md:right-4 absolute -top-10">
            <button
              onClick={() => setUploadpetModalOpen(true)}
              className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
            >
              <span className="text-slate-300 text-base md:text-xl"></span>
              <AiOutlineEdit color={"#94a3b8"} size={24} />
            </button>
            <button
              onClick={removeImage}
              className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
            >
              <span className="text-slate-300 text-base md:text-xl"></span>
              <AiFillDelete color={"#94a3b8"} size={24} />
            </button>
          </div>
        </div>
      )}
      {/* Add Comment */}
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
      <div className="border-b-2 mb-3"></div>
      {/* Comments */}
      <div className="space-y-4" ref={commentsSectionRef}>
        {comments.map((reply) => (
          <div key={reply.id} className="border-b-2 p-3 rounded-r-lg">
            <p className="text-slate-700 text-lg mb-2"> {reply.comment}</p>
            <div className="flex gap-4">
              <p className="text-gray-600 mb-2">@ {reply.commenter.name}</p>
              <p className="text-gray-400 text-sm mb-2">
                <ReactTimeAgo date={reply.timestamp} locale="en-US" />
              </p>
            </div>

            <div className="flex items-center my-2 ">
              <button
                onClick={() => handleAgree(reply.id)}
                className="bg-emerald-100 text-white px-2 py-1 rounded-s text-xl hover:bg-emerald-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
              >
                👍
                {/* {reply.commentData.likes || 0} */}
              </button>
              <button
                onClick={() => handleDisagree(reply.id)}
                className="bg-pink-100 text-white px-2 py-1 rounded-e text-xl hover:bg-pink-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
              >
                👎
                {/* {discommentData.likes[reply.id] || 0} */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientComponent;
