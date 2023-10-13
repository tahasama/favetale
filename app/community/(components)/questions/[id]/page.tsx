"use client";

import React, { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCart } from "@/app/provider/CartProvider";
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
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import QuestionModal from "./QuestionModal";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function Question({ params: { id } }: any) {
  // const questionsData = [
  //   {
  //     id: 1,
  //     title:
  //       "What's the best way to introduce a new pet to your existing pets?",
  //     description:
  //       "I'm considering getting a new pet and I want to make sure the introduction goes smoothly. Any tips?",
  //     author: {
  //       id: 1,
  //       name: "PetLover123",
  //       image: "pet_lover_123.jpg",
  //     },
  //     date: "September 5, 2023",
  //     answers: [
  //       {
  //         id: 1,
  //         date: "September 5, 2023",
  //         text: "Start with a slow introduction in a neutral space.",
  //         author: {
  //           id: 2,
  //           name: "ExpertPetOwner",
  //           image: "expert_pet_owner.jpg",
  //         },
  //         likes: [2, 3],
  //         dislikes: [4],
  //       },
  //       {
  //         id: 2,
  //         text: "Make sure to supervise their interactions at first.",
  //         date: "September 5, 2023",
  //         author: {
  //           id: 3,
  //           name: "PetEnthusiast456",
  //           image: "pet_enthusiast_456.jpg",
  //         },
  //         likes: [1],
  //         dislikes: [],
  //       },
  //     ],
  //     likes: [1, 3],
  //     dislikes: [],
  //   },
  //   {
  //     id: 2,
  //     title: "Where can I find local pet-friendly events and meetups?",
  //     description:
  //       "I'd love to connect with other pet owners in my area. Are there any upcoming pet-friendly events?",
  //     author: {
  //       id: 5,
  //       name: "PawsAndFriends",
  //       image: "paws_and_friends.jpg",
  //     },
  //     date: "September 10, 2023",
  //     answers: [
  //       {
  //         id: 3,
  //         text: "Check local pet stores and community bulletin boards.",
  //         author: {
  //           id: 6,
  //           name: "EventExplorer789",
  //           image: "event_explorer_789.jpg",
  //         },
  //         date: "September 5, 2023",
  //         likes: [],
  //         dislikes: [7],
  //       },
  //       {
  //         id: 4,
  //         text: "Join online pet owner groups on social media for event updates.",
  //         author: {
  //           id: 8,
  //           name: "SocialPetLover",
  //           image: "social_pet_lover.jpg",
  //         },
  //         date: "September 5, 2023",
  //         likes: [5],
  //         dislikes: [],
  //       },
  //     ],
  //     likes: [],
  //     dislikes: [],
  //   },
  //   {
  //     id: 3,
  //     title: "What are some essential items for a new puppy?",
  //     description:
  //       "I'm getting a new puppy soon and want to make sure I have everything I need to welcome them home. Any recommendations?",
  //     author: {
  //       id: 9,
  //       name: "PuppyParent101",
  //       image: "puppy_parent_101.jpg",
  //     },
  //     date: "September 15, 2023",
  //     answers: [],
  //     likes: [],
  //     dislikes: [],
  //   },
  //   {
  //     id: 4,
  //     title: "How do you manage separation anxiety in pets?",
  //     description:
  //       "My pet gets anxious when I leave the house. What strategies have worked for you to help alleviate separation anxiety?",
  //     author: {
  //       id: 10,
  //       name: "CaringPetOwner",
  //       image: "caring_pet_owner.jpg",
  //     },
  //     date: "September 20, 2023",
  //     answers: [
  //       {
  //         id: 5,
  //         text: "Gradually increase the time you're away to desensitize your pet.",
  //         author: {
  //           id: 11,
  //           name: "PetCareExpert",
  //           image: "pet_care_expert.jpg",
  //         },
  //         date: "September 5, 2023",
  //         likes: [12],
  //         dislikes: [],
  //       },
  //     ],
  //     likes: [],
  //     dislikes: [],
  //   },
  //   {
  //     id: 5,
  //     title: "What are the benefits of adopting a pet from a shelter?",
  //     description:
  //       "I'm considering adopting a pet from a shelter, but I'd like to know more about the advantages. Can you share your experiences?",
  //     author: {
  //       id: 13,
  //       name: "ShelterAdvocate",
  //       image: "shelter_advocate.jpg",
  //     },
  //     date: "September 25, 2023",
  //     answers: [],
  //     likes: [],
  //     dislikes: [],
  //   },
  // ];

  console.log("🚀 ~ file: page.tsx:195 ~ question ~ id:", id);

  const {
    userx,
    setSelectedImage,
    selectedImage,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();
  console.log(
    "🚀 ~ file: page.tsx:188 ~ Question ~ setSelectedImage:",
    selectedImage
  );

  useEffect(() => {
    const getQuestion = async () => {
      const docRef = doc(db, "questions", String(id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:");
        setSelectedImage({ ...docSnap.data(), id: docSnap.id });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!!!!");
      }
    };
    getQuestion();
  }, [id]);

  // const question = questionsData.filter(
  //   (blog: any) => blog.id === Number(id)
  // )[0];
  // console.log("🚀 ~ file: page.tsx:197 ~ question ~ question:", question);

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
  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(
    (selectedImage.upvotes && selectedImage.upvotes.length) ?? 0
  );

  const toggleLike = () => {
    if (liked) {
      // Unlike
      setLikesCount(likesCount - 1);
    } else {
      // Like
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const [newComment, setNewComment] = useState("");

  // Function to handle upvoting an answer
  const handleUpvote = (answerId: any) => {
    // Implement upvoting logic here
  };

  // Function to handle downvoting an answer
  const handleDownvote = (answerId: any) => {
    // Implement downvoting logic here
  };

  const [newAnswer, setNewAnswer] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  // Function to add a new answer
  const addAnswer = async () => {
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
  useEffect(() => {
    id && fetchComments();
  }, [id]);

  const handleAgree = async () => {
    console.log("🚀 ~ file: page.tsx:313 ~ handleAgree ~ id:", id);
    try {
      const likeRef = doc(db, "questions", String(id));
      const commentDoc = await getDoc(likeRef);
      const commentData = commentDoc.data();

      if (!commentDoc.exists) {
        console.error("Comment document does not exist!");
        return;
      }

      const userId = userx.id; // Assuming you have userx defined
      console.log(
        "🚀 ~ file: page.tsx:323 ~ handleAgree ~ userx.id:",
        userx.id
      );
      if (commentData) {
        if (commentData.upvotes.includes(userId)) {
          // User has previously agreed, so remove the like
          await updateDoc(likeRef, {
            upvotes: arrayRemove(userId),
          });
        } else {
          // User is agreeing for the first time
          await updateDoc(likeRef, {
            upvotes: arrayUnion(userId),
          });

          // Check if the user previously disagreed and remove the dislike
          if (commentData.downvotes.includes(userId)) {
            await updateDoc(likeRef, {
              downvotes: arrayRemove(userId),
            });
          }
        }
      }

      console.log("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDisagree = async () => {
    try {
      const commentRef = doc(db, "questions", String(id));
      const commentDoc = await getDoc(commentRef);

      if (!commentDoc.exists) {
        console.error("Comment document does not exist!");
        return;
      }

      const commentData = commentDoc.data();
      const userId = userx.id; // Assuming you have userx defined

      if (commentData) {
        if (commentData.downvotes.includes(userId)) {
          // User has previously disagreed, so remove the dislike
          await updateDoc(commentRef, {
            downvotes: arrayRemove(userId),
          });
        } else {
          // User is disagreeing for the first time
          await updateDoc(commentRef, {
            downvotes: arrayUnion(userId),
          });

          // Check if the user previously liked and remove the like
          if (commentData.upvotes.includes(userId)) {
            await updateDoc(commentRef, {
              upvotes: arrayRemove(userId),
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
      const deleteImagePromise = deleteDoc(doc(db, "questions", id)); // Assuming 'petImages' is the collection name for images

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
    <div className=" mx-auto relative md:w-8/12 p-4 mt-24">
      <>
        <h1 className="text-3xl font-semibold mb-4">{selectedImage.title}</h1>
        <p className="text-gray-600 mb-2">
          Author: {selectedImage && selectedImage.writer.name}
        </p>
        <p className="text-gray-400 text-sm mb-2">
          Date:{" "}
          {selectedImage &&
            new Date(selectedImage.createdAt.seconds * 1000).toDateString()}
        </p>
        <p className={`mb-4 text-base lg:text-lg {lato.className}`}>
          {selectedImage && selectedImage.content}
        </p>
        <div className="border-b-2 mb-0"></div>

        <div className="flex items-center my-2 ">
          <button
            onClick={handleAgree}
            className="bg-emerald-100 text-white px-2 py-1 rounded-s text-xl hover:bg-emerald-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
          >
            👍
            {/* {reply.commentData.likes || 0} */}
          </button>
          <button
            onClick={handleDisagree}
            className="bg-pink-100 text-white px-2 py-1 rounded-e text-xl hover:bg-pink-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
          >
            👎
            {/* {discommentData.likes[reply.id] || 0} */}
          </button>
        </div>
      </>
      <div className=" w-fit flex gap-3 md:gap-5 right-2 md:right-0 rounded-l-3xl absolute top-8 z-40  p-4">
        <button
          onClick={() => setUploadpetModalOpen(true)}
          className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
        >
          <span className="text-base md:text-xl"></span>
          <AiOutlineEdit color={"#a9aeb4"} size={24} />
        </button>
        <button
          onClick={removeImage}
          className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
        >
          <span className="text-base md:text-xl"></span>
          <AiFillDelete color={"#a9aeb4"} size={24} />
        </button>
      </div>

      <QuestionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        id={id}
      />
      {/* Answer Area */}

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
              onClick={addAnswer}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-fit hover:bg-blue-600 focus:outline-none"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-xl mt-10 font-semibold">Answers:</h2>

      {/* Answers List */}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
