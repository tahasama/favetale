"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";

import {
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

import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import DiscussionModal from "../../DiscussionModal";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const ClientComponent = ({ discussionData }: any) => {
  const discussionId = discussionData.id;
  const {
    userx,

    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const commentsSectionRef = useRef<any>(null);

  const fetchComments = async () => {
    try {
      if (discussionId) {
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
      await updateDoc(doc(db, "discussions", discussionId), {
        participants: arrayUnion(userx.id),
      });
    }
    fetchComments();
    setNewComment("");
  };

  const handleAgree = async (replyId: any) => {
    try {
      const likeRef = doc(db, "comments", String(replyId));
      const commentDoc = await getDoc(likeRef);
      const commentData = commentDoc.data();

      if (!commentDoc.exists) {
        console.error("Comment document does not exist!");
        return;
      }

      const userId = userx.id;
      if (commentData) {
        if (commentData.likes.includes(userId)) {
          await updateDoc(likeRef, {
            likes: arrayRemove(userId),
          });
        } else {
          await updateDoc(likeRef, {
            likes: arrayUnion(userId),
          });

          if (commentData.dislikes.includes(userId)) {
            await updateDoc(likeRef, {
              dislikes: arrayRemove(userId),
            });
          }
        }
      }
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
      const userId = userx.id;

      if (commentData) {
        if (commentData.dislikes.includes(userId)) {
          await updateDoc(commentRef, {
            dislikes: arrayRemove(userId),
          });
        } else {
          await updateDoc(commentRef, {
            dislikes: arrayUnion(userId),
          });

          if (commentData.likes.includes(userId)) {
            await updateDoc(commentRef, {
              likes: arrayRemove(userId),
            });
          }
        }
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const removeImage = async () => {
    try {
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });

      const deleteImagePromise = deleteDoc(
        doc(db, "discussions", discussionId)
      );

      await Promise.all(deleteCommentPromises);

      await deleteImagePromise;
    } catch (error) {
      console.error("Error deleting image and related comments:", error);
    }
  };

  return (
    <div className="h-fit">
      <DiscussionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        discussion={discussionData}
      />
      {discussionData && discussionData.writer.id === userx.id && (
        <div className="relative">
          <div className=" w-fit flex gap-3 md:gap-5 right-2 md:right-4 absolute -top-16">
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
      <div className="mt-8 mb-6">
        {userx.id && (
          <div className="flex items-start space-x-3">
            {userx.image ? (
              <Link href="/profile" target="_blank" rel="noopener noreferrer">
                <img
                  src={userx.image}
                  alt="Your Name"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            ) : (
              <div className="w-9 h-9 rounded-full bg-sky-300 px-3"></div>
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
        )}
      </div>
      {userx.id && <div className="border-b-2 mb-3"></div>}
      <div className="space-y-4" ref={commentsSectionRef}>
        {comments.map((reply) => (
          <div key={reply.id} className="border-b-2 p-3 rounded-r-lg">
            <p className="text-slate-700 text-lg mb-2"> {reply.comment}</p>
            <div className="flex gap-4">
              <div className="text-sky-600 ">
                @{" "}
                <Link
                  className="mb-2 hover:underline"
                  href={`profile/${reply.commenter.id}`}
                >
                  {reply.commenter.name}
                </Link>
              </div>
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
              </button>
              <button
                onClick={() => handleDisagree(reply.id)}
                className="bg-pink-100 text-white px-2 py-1 rounded-e text-xl hover:bg-pink-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
              >
                👎
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComponent;
