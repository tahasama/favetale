import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Questions = () => {
  const questionsData = [
    {
      id: 1,
      title:
        "What's the best way to introduce a new pet to your existing pets?",
      description:
        "I'm considering getting a new pet and I want to make sure the introduction goes smoothly. Any tips?",
      author: "PetLover123",
      date: "September 5, 2023",
      answers: 8,
      upvotes: 20,
      downvotes: 2,
    },
    {
      id: 2,
      title: "Where can I find local pet-friendly events and meetups?",
      description:
        "I'd love to connect with other pet owners in my area. Are there any upcoming pet-friendly events?",
      author: "PawsAndFriends",
      date: "September 10, 2023",
      answers: 5,
      upvotes: 12,
      downvotes: 1,
    },
    {
      id: 3,
      title: "What are some must-have items for a new puppy?",
      description:
        "I'm getting a new puppy soon and want to make sure I have everything I need to welcome them home. Any recommendations?",
      author: "DogLover123",
      date: "September 15, 2023",
      answers: 12,
      upvotes: 25,
      downvotes: 0,
    },
    {
      id: 4,
      title: "How do you handle separation anxiety in pets?",
      description:
        "My pet gets anxious when I leave the house. What strategies have worked for you to help alleviate separation anxiety?",
      author: "PetParent567",
      date: "September 20, 2023",
      answers: 6,
      upvotes: 15,
      downvotes: 3,
    },
    {
      id: 5,
      title: "What are the benefits of adopting a pet from a shelter?",
      description:
        "I'm considering adopting a pet from a shelter, but I'd like to know more about the advantages. Can you share your experiences?",
      author: "AdoptAPet",
      date: "September 25, 2023",
      answers: 10,
      upvotes: 18,
      downvotes: 1,
    },
  ];

  return (
    <>
      <div className="">
        <div className="bg-amber-500 p-12 rounded-lg text-left leading-loose tracking-wide">
          <h2 className="text-4xl font-semibold text-white mb-5">
            Explore Pet Questions
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Find answers to common pet-related questions, share your knowledge,
            and engage with our community of pet lovers!
          </p>
          <Link
            href={"/question"}
            className="bg-tealLight hover:text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors duration-500"
          >
            Ask a Questions
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-start min-h-screen bg-gradient-to-b from-tealLight to-yellow-100">
        <div className="flex flex-col w-full md:w-2/3 p-3 mt-10 gap-4">
          {questionsData.map((question, index) => (
            <motion.div
              initial={{ opacity: 0, y: index * 50 + 100 }} // Initial state (hidden and slightly moved down)
              animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
              transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
              key={question.id}
              className="bg-white cursor-pointer hover:animate-bounceQ p-7 rounded-lg shadow-md x flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="mb-4 md:mb-0 md:mr-4 flex flex-col items-start md:items-center">
                <div className="flex items-center mb-1">
                  <button className="text-indigo-500 font-semibold mr-2">
                    <span role="img" aria-label="Upvote">
                      👍
                    </span>{" "}
                    {question.upvotes}
                  </button>
                  <button className="text-red-500 font-semibold">
                    <span role="img" aria-label="Downvote">
                      👎
                    </span>{" "}
                    {question.downvotes}
                  </button>
                </div>
                <div className="text-gray-600">{question.answers} Answers</div>
              </div>
              <div className="hidden md:block">
                <hr className="border-r border-gray-300 h-12 mx-6" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
                <h4 className="text-md mb-2">{question.description}</h4>
                <p className="text-gray-600 mb-2">
                  Asked by {question.author} on {question.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
