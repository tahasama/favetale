"use client";

import React, { useRef, useState } from "react";

import q from "../../../../images/question/q.jpg";
import w from "../../../../images/question/w.jpg";
import e from "../../../../images/question/e.jpg";
import r from "../../../../images/question/r.jpg";
import t from "../../../../images/question/t.jpg";

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

function question() {
  const questionsData = [
    {
      id: 1,
      title:
        "What's the best way to introduce a new pet to your existing pets?",
      description:
        "I'm considering getting a new pet and I want to make sure the introduction goes smoothly. Any tips?",
      author: {
        id: 1,
        name: "PetLover123",
        image: "pet_lover_123.jpg",
      },
      date: "September 5, 2023",
      answers: [
        {
          id: 1,
          date: "September 5, 2023",
          text: "Start with a slow introduction in a neutral space.",
          author: {
            id: 2,
            name: "ExpertPetOwner",
            image: "expert_pet_owner.jpg",
          },
          likes: [2, 3],
          dislikes: [4],
        },
        {
          id: 2,
          text: "Make sure to supervise their interactions at first.",
          date: "September 5, 2023",
          author: {
            id: 3,
            name: "PetEnthusiast456",
            image: "pet_enthusiast_456.jpg",
          },
          likes: [1],
          dislikes: [],
        },
      ],
      likes: [1, 3],
      dislikes: [],
    },
    {
      id: 2,
      title: "Where can I find local pet-friendly events and meetups?",
      description:
        "I'd love to connect with other pet owners in my area. Are there any upcoming pet-friendly events?",
      author: {
        id: 5,
        name: "PawsAndFriends",
        image: "paws_and_friends.jpg",
      },
      date: "September 10, 2023",
      answers: [
        {
          id: 3,
          text: "Check local pet stores and community bulletin boards.",
          author: {
            id: 6,
            name: "EventExplorer789",
            image: "event_explorer_789.jpg",
          },
          date: "September 5, 2023",
          likes: [],
          dislikes: [7],
        },
        {
          id: 4,
          text: "Join online pet owner groups on social media for event updates.",
          author: {
            id: 8,
            name: "SocialPetLover",
            image: "social_pet_lover.jpg",
          },
          date: "September 5, 2023",
          likes: [5],
          dislikes: [],
        },
      ],
      likes: [],
      dislikes: [],
    },
    {
      id: 3,
      title: "What are some essential items for a new puppy?",
      description:
        "I'm getting a new puppy soon and want to make sure I have everything I need to welcome them home. Any recommendations?",
      author: {
        id: 9,
        name: "PuppyParent101",
        image: "puppy_parent_101.jpg",
      },
      date: "September 15, 2023",
      answers: [],
      likes: [],
      dislikes: [],
    },
    {
      id: 4,
      title: "How do you manage separation anxiety in pets?",
      description:
        "My pet gets anxious when I leave the house. What strategies have worked for you to help alleviate separation anxiety?",
      author: {
        id: 10,
        name: "CaringPetOwner",
        image: "caring_pet_owner.jpg",
      },
      date: "September 20, 2023",
      answers: [
        {
          id: 5,
          text: "Gradually increase the time you're away to desensitize your pet.",
          author: {
            id: 11,
            name: "PetCareExpert",
            image: "pet_care_expert.jpg",
          },
          date: "September 5, 2023",
          likes: [12],
          dislikes: [],
        },
      ],
      likes: [],
      dislikes: [],
    },
    {
      id: 5,
      title: "What are the benefits of adopting a pet from a shelter?",
      description:
        "I'm considering adopting a pet from a shelter, but I'd like to know more about the advantages. Can you share your experiences?",
      author: {
        id: 13,
        name: "ShelterAdvocate",
        image: "shelter_advocate.jpg",
      },
      date: "September 25, 2023",
      answers: [],
      likes: [],
      dislikes: [],
    },
  ];

  const { id } = useParams();
  console.log("🚀 ~ file: page.tsx:195 ~ question ~ id:", id);

  const question = questionsData.filter(
    (blog: any) => blog.id === Number(id)
  )[0];
  console.log("🚀 ~ file: page.tsx:197 ~ question ~ question:", question);

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
  const [likesCount, setLikesCount] = useState(question.likes.length);

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

  // Function to add a new answer
  const addAnswer = () => {
    // Implement adding answers here
  };
  return (
    <div className=" mx-auto  md:w-9/12 p-4 mt-24">
      <div className="mb-8">
        <h1 className="text-xl md:text-4xl font-semibold">{question.title}</h1>
        <p className="text-gray-600 text-sm mt-2">
          Posted on {question.date} by {question.author.name}
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-800">
          {question.description}
        </p>
      </div>

      {/* Answer Area */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Your Answer:</h2>
        <textarea
          className="w-full mt-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Write your answer here..."
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        ></textarea>
        <button
          onClick={() => addAnswer()}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Answer
        </button>
      </div>

      <h2 className="text-xl mt-10 font-semibold">Answers:</h2>

      {/* Answers List */}
      <ul className="mt-4 space-y-6 list-none">
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <div className="flex items-start space-x-4">
              <img
                src={answer.author.image}
                alt={answer.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center space-x-2">
                  <span className="font-semibold md:text-lg text-gray-800">
                    {answer.author.name}
                  </span>
                  <span className="text-sm text-gray-600">{answer.date}</span>
                </div>
                <p className="mt-2 text-gray-800">{answer.text}</p>
                {/* Upvote and Downvote Buttons */}
                <div className="flex items-center mt-3 space-x-3">
                  <button
                    onClick={() => handleUpvote(answer.id)}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Upvote
                  </button>
                  <button
                    onClick={() => handleDownvote(answer.id)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Downvote
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default question;
