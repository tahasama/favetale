"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import user1 from "../../../../images/users/user1.jpg";
import user2 from "../../../../images/users/user2.jpg";
import user3 from "../../../../images/users/user3.jpg";
import user4 from "../../../../images/users/user4.jpg";
import user5 from "../../../../images/users/user5.jpg";

import story1 from "../../../../images/stories/story1.jpg";
import story2 from "../../../../images/stories/story2.jpg";
import story3 from "../../../../images/stories/story3.jpg";
import story4 from "../../../../images/stories/story4.jpg";
import story5 from "../../../../images/stories/story5.jpg";
import story6 from "../../../../images/stories/story6.jpg";
import story7 from "../../../../images/stories/story7.jpg";

function Story() {
  // Sample story data (replace with your own)
  const storyData = {
    title: "The Adventure of a Lifetime",
    author: "Alice Johnson",
    date: "August 15, 2023",
    image: story4.src,
    content: `
    Once upon a time in a faraway land...
    (Story content goes here)
    
    Once upon a time in a faraway land...
    (Story content goes here)


    
    `,
    comments: [
      {
        user: { name: "Alice Smith", image: user4.src },
        text: "Great story!",
      },
      {
        user: { name: "Bob Johnson", image: user2.src },
        text: "I found this really helpful. Thanks!",
      },
      {
        user: { name: "Eva Wilson", image: user5.src },
        text: "Nice article! Keep up the good work.",
      },
    ],
  };

  // Sample comments data (replace with your own)
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    // Add your comment adding logic here
    // After adding the comment, you can update the comments state.
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-24 bg-white">
      {/* Story Title */}
      <h1 className="text-3xl font-bold mb-4">{storyData.title}</h1>

      {/* Author and Date */}
      <div className="flex items-center mb-4 gap-2">
        <Image
          src={user1.src}
          alt={storyData.author}
          className="w-12 h-12 rounded-full mr-2 object-cover"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <span className="text-gray-600 scale-105">{storyData.author}</span>
          <span className="text-green-900">{storyData.date}</span>
        </div>
      </div>

      {/* Story Image */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src={storyData.image}
          alt={storyData.title}
          className="w-full h-full object-cover rounded-lg"
          width={2000}
          height={700}
        />
      </div>

      {/* Story Content */}
      <div className="prose max-w-none mt-4">
        <p>{storyData.content}</p>
      </div>

      {/* Add Comment */}
      <div className="mt-6">
        <div className="flex space-x-4 items-center">
          <Image
            src={user1.src}
            alt="Your Name"
            className="w-14 h-14 rounded-full object-cover"
            width={500}
            height={500}
          />
          <div className="flex-grow">
            <textarea
              className="w-full border rounded-lg px-4 py-1.5 focus:outline-none focus:ring focus:border-blue-300"
              rows={3}
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-7 -mt-1.5 rounded"
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-8 border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {storyData.comments.map((comment, index) => (
            <div key={index} className="flex space-x-4">
              <Image
                src={comment.user.image}
                alt={comment.user.name}
                className="w-12 h-12 rounded-full object-cover"
                width={500}
                height={500}
              />
              <div className="flex flex-col">
                <Link
                  href={`/profile/${comment.user.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-600 font-medium">
                    {comment.user.name}
                  </span>
                </Link>
                <p className="text-gray-800">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
