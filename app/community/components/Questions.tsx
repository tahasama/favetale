import { motion } from "framer-motion";
import React from "react";

const Questions = () => {
  const questionsData = [
    {
      id: 1,
      title: "How to create a responsive layout using CSS Grid?",
      description: "How to create a responsive layout using CSS Grid?",
      author: "John Doe",
      date: "August 10, 2023",
      answers: 5,
      upvotes: 50,
      downvotes: 10,
    },
    {
      id: 2,
      title: "What are the best practices for API authentication?",
      description: "What are the best practices for API authentication?",
      author: "Alice Smith",
      date: "August 15, 2023",
      answers: 8,
      upvotes: 12,
      downvotes: 3,
    },
    {
      id: 3,
      title: "How to optimize website performance for mobile devices?",
      description: "How to optimize website performance for mobile devices?",
      author: "Bob Johnson",
      date: "August 20, 2023",
      answers: 3,
      upvotes: 30,
      downvotes: 5,
    },
    {
      id: 4,
      title: "What is the difference between Flexbox and Grid?",
      description: "What is the difference between Flexbox and Grid?",
      author: "Emily Brown",
      date: "August 25, 2023",
      answers: 6,
      upvotes: 18,
      downvotes: 2,
    },
    {
      id: 5,
      title: "How to implement dark mode in a web application?",
      description: "How to implement dark mode in a web application?",
      author: "David Wilson",
      date: "August 30, 2023",
      answers: 10,
      upvotes: 42,
      downvotes: 8,
    },
    // Add more question objects here
    // ...
  ];

  return (
    <div className="container mx-auto flex justify-center items-start min-h-screen bg-gradient-to-b from-tealLight to-yellow-100">
      <div className="flex flex-col w-full md:w-2/3 p-3 mt-10 gap-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Questions & Answers
        </h2>
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
  );
};

export default Questions;
