"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Discussion = () => {
  const forumsData = [
    {
      id: 1,
      title: "Pet Health and Care",
      description: "Discuss topics related to pet health and care.",
      lastPost: "1 hour ago",
      posts: 120,
      category: "Health",
      tags: ["Wellness", "Diet", "Vaccinations"],
      sticky: false,
      participants: ["user123", "user456", "user789"],
      discussions: [
        {
          id: 101,
          title: "Vaccination Schedules",
          author: "user123",
          date: "3 hours ago",
          tags: ["Wellness", "Vaccinations"],
          content:
            "Let's discuss the recommended vaccination schedules for pets.",
          replies: [
            {
              id: 1001,
              author: "user789",
              date: "2 hours ago",
              content: "I have a question about puppy vaccinations.",
            },
            {
              id: 1002,
              author: "user456",
              date: "1 hour ago",
              content: "Here's a useful resource about vaccination schedules.",
            },
          ],
        },
        {
          id: 102,
          title: "Dietary Tips",
          author: "user456",
          date: "5 hours ago",
          tags: ["Diet"],
          content: "Share your tips on providing a balanced diet for pets.",
          replies: [],
        },
      ],
    },
    {
      id: 2,
      title: "Training Tips and Tricks",
      description: "Share your training techniques and advice.",
      lastPost: "2 hours ago",
      posts: 85,
      category: "Training",
      tags: ["Obedience", "Behavior", "Training Tools"],
      sticky: true,
      participants: ["user789", "user234", "user567"],
      discussions: [
        {
          id: 201,
          title: "Puppy Obedience Training",
          author: "user789",
          date: "4 hours ago",
          tags: ["Behavior", "Training Tools"],
          content:
            "Let's discuss effective techniques for puppy obedience training.",
          replies: [],
        },
        {
          id: 202,
          title: "Behavioral Challenges",
          author: "user234",
          date: "2 hours ago",
          tags: ["Behavior"],
          content:
            "I'm facing some behavioral challenges with my dog. Any advice?",
          replies: [
            {
              id: 2001,
              author: "user567",
              date: "1 hour ago",
              content: "I had a similar issue. Here's what worked for me...",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Pet Behavior Issues",
      description: "Seek help and solutions for pet behavior problems.",
      lastPost: "3 hours ago",
      posts: 150,
      category: "Behavior",
      tags: ["Aggression", "Anxiety", "Training"],
      sticky: false,
      participants: ["user987", "user654", "user321"],
      discussions: [],
    },
    {
      id: 4,
      title: "Adoption Stories",
      description: "Share heartwarming stories of pet adoptions.",
      lastPost: "4 hours ago",
      posts: 68,
      category: "Adoption",
      tags: ["Rescue", "Happy Endings", "Foster Care"],
      sticky: true,
      participants: ["user111", "user222", "user333"],
      discussions: [],
    },
    {
      id: 5,
      title: "Pet Product Reviews",
      description: "Discuss and review various pet products and gadgets.",
      lastPost: "5 hours ago",
      posts: 45,
      category: "Product Reviews",
      tags: ["Toys", "Grooming", "Food"],
      sticky: false,
      participants: ["user999", "user888", "user777"],
      discussions: [],
    },
  ];

  const [participationInput, setParticipationInput] = useState("");

  const { id, discussionId } = useParams();

  const discussionData = forumsData
    .filter((forum: any) => forum.id === Number(id))[0]
    .discussions.filter(
      (discussion: any) => discussion.id === Number(discussionId)
    )[0];

  const handleParticipate = () => {
    // Handle participation logic here
    // You can use this function to implement your participation feature
  };

  const handleAgree = (replyId: any) => {
    // Handle agree logic for the specific reply
    // You can use this function to implement your agree feature for each reply
  };

  const handleDisagree = (replyId: any) => {
    // Handle disagree logic for the specific reply
    // You can use this function to implement your disagree feature for each reply
  };

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(discussionData.replies);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: 1002,
        author: "user789",
        date: "3 hours ago",
        content: newComment,
      };
      setComments((prevComments: any) => [...prevComments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-24 mx-5 mb-5">
      <h2 className="text-2xl font-semibold mb-4">{discussionData.title}</h2>
      <p className="text-gray-600 mb-2">Author: {discussionData.author}</p>
      <p className="text-gray-400 text-sm mb-2">Date: {discussionData.date}</p>
      <p className="mb-4">{discussionData.content}</p>

      {/* List of replies to the discussion */}
      <div className="space-y-4">
        {comments.map((reply) => (
          <div key={reply.id} className="border p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Author: {reply.author}</p>
            <p className="text-gray-400 text-sm mb-2">Date: {reply.date}</p>
            <p>{reply.content}</p>

            {/* Agree and Disagree buttons for each reply */}
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={() => handleAgree(reply.id)}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Agree 👍
              </button>
              <button
                onClick={() => handleDisagree(reply.id)}
                className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Disagree 👎
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Participation input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Participate in the discussion..."
          className="border rounded-lg w-full py-2 px-4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Discussion;
