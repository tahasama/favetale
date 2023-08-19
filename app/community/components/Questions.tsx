import React from "react";

const Questions = () => {
  const questionsData = [
    {
      id: 1,
      title: "How to create a responsive layout using CSS Grid?",
      author: "John Doe",
      date: "August 10, 2023",
      answers: 5,
      votes: 50,
    },
    {
      id: 2,
      title: "What are the best practices for API authentication?",
      author: "Alice Smith",
      date: "August 15, 2023",
      answers: 8,
      votes: 12,
    },
    // Add more question objects here
    // ...
  ];

  return (
    <div className="container mx-auto flex justify-center items-center h-full bg-tealLight">
      <div className="flex flex-col w-2/3 p-3 mt-10 gap-6">
        <h2 className="text-3xl font-semibold mb-6">Questions & Answers</h2>
        {questionsData.map((question) => (
          <div
            key={question.id}
            className="bg-white p-6 rounded-lg shadow-md border flex"
          >
            <div className="mr-4 flex flex-col items-center">
              <div className="text-indigo-500 font-semibold">
                votes: {question.votes}
              </div>
              <div className="text-gray-600">{question.answers} Answers</div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
              <p className="text-gray-600 mb-2">
                Asked by {question.author} on {question.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
