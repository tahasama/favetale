"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/provider/CartProvider";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import UploadImageModal from "./UploadImageModal";
import Link from "next/link";
TimeAgo.addDefaultLocale(en);

const ImageModal = () => {
  const {
    selectedImage,
    setSelectedImage,
    userx,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  const [comments, setComments] = useState<any[]>([]);
  console.log(
    "🚀 ~ file: ImageModal.tsx:47 ~ fetchComments ~ selectedImage:",
    selectedImage?.poster?.id
  );

  // Function to fetch comments
  const fetchComments = async () => {
    try {
      if (selectedImage.id) {
        // Check if selectedImage.id is defined
        const q = query(
          collection(db, "comments"),
          where("imageId", "==", selectedImage.id)
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

  // Fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, [selectedImage.id]);

  const [newComment, setNewComment] = useState("");

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      setUploadpetModalOpen(false);
    }
  };

  const handleAddComment = async () => {
    if (newComment) {
      const commentRef = await addDoc(collection(db, "comments"), {
        comment: newComment,
        commenter: userx,
        imageId: selectedImage.id,
        timestamp: Date.now(),
        likes: [],
        dislikes: [],
      });
      // const newCommentId = commentRef.id;
    }
    fetchComments();
    setNewComment("");
  };

  const adjustTextareaRows = (textarea: any) => {
    textarea.rows = textarea.value.split("\n").length || 2;
  };

  const updateLikes = async () => {
    const likeRef = doc(db, "petImages", selectedImage.id); // Assuming 'db' is your Firestore instance
    const documentSnapshot = await getDoc(likeRef);
    const petImageData = documentSnapshot.data();

    try {
      // Get the current document data

      if (petImageData) {
        const currentLikes = petImageData.likes;

        // Check if userToAdd is already in the array
        if (currentLikes.includes(userx.id)) {
          // Remove the user from the array on the client side
          const updatedLikes = currentLikes.filter(
            (userId: any) => userId !== userx.id
          );

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, likes: updatedLikes });

          // Update the document on Firestore in the background
          await updateDoc(likeRef, { likes: updatedLikes });

          console.log("Like removed successfully.");
        } else {
          // Add the user to the array on the client side
          const updatedLikes = [...currentLikes, userx.id];

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, likes: updatedLikes });

          // Update the document on Firestore in the background
          await updateDoc(likeRef, { likes: updatedLikes });

          console.log("Like added successfully.");
        }
      } else {
        console.log("Document not found or data is null.");
      }
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const updateHearts = async () => {
    const heartRef = doc(db, "petImages", selectedImage.id); // Assuming 'db' is your Firestore instance
    const documentSnapshot = await getDoc(heartRef);
    const petImageData = documentSnapshot.data();

    try {
      // Get the current document data

      if (petImageData) {
        const currentHearts = petImageData.hearts;

        // Check if userToAdd is already in the array
        if (currentHearts.includes(userx.id)) {
          // Remove the user from the array on the client side
          const updatedHearts = currentHearts.filter(
            (userId: any) => userId !== userx.id
          );

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, hearts: updatedHearts });

          // Update the document on Firestore in the background
          await updateDoc(heartRef, { hearts: updatedHearts });

          console.log("Heart removed successfully.");
        } else {
          // Add the user to the array on the client side
          const updatedHearts = [...currentHearts, userx.id];

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, hearts: updatedHearts });

          // Update the document on Firestore in the background
          await updateDoc(heartRef, { hearts: updatedHearts });

          console.log("Heart added successfully.");
        }
      } else {
        console.log("Document not found or data is null.");
      }
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const updateFlag = async () => {
    const likeRef = doc(db, "petImages", selectedImage.id); // Assuming 'db' is your Firestore instance
    const documentSnapshot = await getDoc(likeRef);
    const petImageData = documentSnapshot.data();

    try {
      // Get the current document data

      // Update the document on Firestore in the background
      await updateDoc(likeRef, { flag: true });
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const { imageModalOpen, setImageModalOpen } = useCart();

  const removeImage = async () => {
    try {
      // Step 2: Iterate through the comments and delete each comment document
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });

      // Step 3: Delete the selected image document
      const deleteImagePromise = deleteDoc(
        doc(db, "petImages", selectedImage.id)
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
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        uploadpetModalOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="lg:my-1 lg:rounded-lg h-full overflow-auto lg:scrollbar scrollbar-thumb-slate-500 scrollbar-track-gray-300">
        <div className="bg-white shadow-lg sticky top-0 h-fit">
          <img
            src={selectedImage.image}
            alt={"title"}
            className="lg:h-[93vh] max-h-[95vh]"
          />
          <button
            className="absolute bg-gray-100/40 scale-125 hover:rotate-90 p-1 top-3 lg:top-4 ring-2 right-3 md:right-4 transition-all duration-500 rounded-full"
            onClick={() => setUploadpetModalOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="close"
            >
              <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
            </svg>
          </button>
          <div className="absolute bottom-3  flex left-2   py-0.5">
            <button
              onClick={updateHearts}
              className="text-xl flex justify-center items-center md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300 backdrop-blur-sm backdrop-brightness-75 rounded-l-lg px-1.5 py-0.5"
            >
              <span className="text-slate-300 text-base md:text-xl ">
                {selectedImage.hearts ? selectedImage.hearts.length : 0}
              </span>
              ❤️
            </button>
            <button
              onClick={updateLikes}
              className="text-xl flex justify-center items-center md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300 backdrop-blur-sm backdrop-brightness-75 rounded-r-lg px-1.5 py-0.5"
            >
              <span className="text-slate-300 text-base md:text-xl">
                {selectedImage.likes ? selectedImage.likes.length : 0}
              </span>
              👍
            </button>
          </div>

          <Link
            href={`/profile/${selectedImage?.poster?.id}`}
            className="absolute top-3 gap-2 items-center flex left-2 px-2 text-sm md:text-lg  py-0.5 text-sky-400 backdrop-brightness-75 rounded-md cursor-pointer"
          >
            <Image
              src={selectedImage?.poster?.image || ""}
              alt="image"
              className={`${
                selectedImage?.poster?.image ? "visible" : "hidden"
              }`}
            />

            <p className="text-slate-300 ">
              Posted by :{" "}
              <Link
                href={`/profile/${selectedImage?.poster?.id}`}
                className="capitalize text-sky-500 underline underline-offset-2"
              >
                {" "}
                {selectedImage?.poster?.name}{" "}
              </Link>
              {selectedImage.postedOn && (
                <ReactTimeAgo
                  date={selectedImage.postedOn}
                  className="text-indigo-200 text-sm"
                  locale="en-US"
                />
              )}
            </p>
            {/* {new Date(selectedImage?.poster?.postedOn)} */}
          </Link>

          <div className="absolute bottom-3 right-2 text-xl flex justify-center items-center md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300 backdrop-blur-sm backdrop-brightness-75 rounded-lg px-1.5 py-0.5">
            <button onClick={updateFlag}>🚩</button>
            {selectedImage && selectedImage?.poster?.id === userx.id && (
              <>
                <button
                  onClick={() => setImageModalOpen(true)}
                  className="text-xl md:text-3xl  hover:scale-105 active:scale-110 transition-all duration-300"
                >
                  <span className="text-slate-300 text-base md:text-xl"></span>
                  <AiOutlineEdit color={"#d4dae2"} size={24} />
                </button>
                <button
                  onClick={removeImage}
                  className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                >
                  <span className="text-slate-300 text-base md:text-xl"></span>
                  <AiFillDelete color={"#d4dae2"} size={24} />
                </button>
              </>
            )}
          </div>
        </div>
        <div className="w-full bg-white px-4 py-2 relative top-0 lg:-top-0 ">
          <h3 className="text-sm md:text-xl font-semibold mb-2 text-start">
            Comments ⬇️
          </h3>
          <div className="flex">
            <textarea
              rows={2}
              placeholder="Add a comment..."
              className="border lg:rounded rounded-2xl px-2 py-1 mr-2 flex-grow"
              value={newComment}
              onChange={(e) => {
                setNewComment(e.target.value);
                adjustTextareaRows(e.target);
              }}
            />
            <button
              className="bg-blue-500 text-white px-4 py-1 lg:rounded rounded-xl active:animate-buttonActive"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
          <div className=" mt-6 mx-2">
            {comments &&
              comments.map((comment, index: number) => (
                <div key={comment.id} className="flex flex-col items-start  ">
                  <div className="flex  mb-1">
                    <img
                      src={"commenterImage"} // Replace with the actual source of the commenter's image
                      alt="Commenter"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="w-11/12">
                      <p className="text-gray-700 font-semibold mb-1">
                        {comment.commenter.name}
                      </p>
                      <p className="text-gray-600">{comment.comment}</p>
                      <ReactTimeAgo
                        date={comment.timestamp}
                        className="text-sky-700 text-xs"
                        locale="en-US"
                      />
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-300 my-2.5"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
