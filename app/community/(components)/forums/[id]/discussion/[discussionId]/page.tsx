// "use client";
import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Lato } from "next/font/google";
import { useParams } from "next/navigation";
// import React, { useState } from "react";

const lato = Lato({ weight: "400", subsets: [] });

const Discussion = async ({ params: { discussionId } }: any) => {
  console.log(
    "🚀 ~ file: page.tsx:11 ~ Discussion ~ discussionId:",
    discussionId
  );
  // const forumsData = [
  //   {
  //     id: 1,
  //     title: "Pet Health and Care",
  //     description: "Discuss topics related to pet health and care.",
  //     lastPost: "1 hour ago",
  //     posts: 120,
  //     category: "Health",
  //     tags: ["Wellness", "Diet", "Vaccinations"],
  //     sticky: false,
  //     participants: ["user123", "user456", "user789"],
  //     discussions: [
  //       {
  //         id: 101,
  //         title: "Vaccination Schedules",
  //         author: "user123",
  //         date: "3 hours ago",
  //         tags: ["Wellness", "Vaccinations"],
  //         content:
  //           "Let's discuss the recommended vaccination schedules for pets.",
  //         replies: [
  //           {
  //             id: 1001,
  //             author: "user789",
  //             date: "2 hours ago",
  //             content: "I have a question about puppy vaccinations.",
  //           },
  //           {
  //             id: 1002,
  //             author: "user456",
  //             date: "1 hour ago",
  //             content: "Here's a useful resource about vaccination schedules.",
  //           },
  //         ],
  //       },
  //       {
  //         id: 102,
  //         title: "Dietary Tips",
  //         author: "user456",
  //         date: "5 hours ago",
  //         tags: ["Diet"],
  //         content: "Share your tips on providing a balanced diet for pets.",
  //         replies: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Training Tips and Tricks",
  //     description: "Share your training techniques and advice.",
  //     lastPost: "2 hours ago",
  //     posts: 85,
  //     category: "Training",
  //     tags: ["Obedience", "Behavior", "Training Tools"],
  //     sticky: true,
  //     participants: ["user789", "user234", "user567"],
  //     discussions: [
  //       {
  //         id: 201,
  //         title: "Puppy Obedience Training",
  //         author: "user789",
  //         date: "4 hours ago",
  //         tags: ["Behavior", "Training Tools"],
  //         content:
  //           "Let's discuss effective techniques for puppy obedience training.",
  //         replies: [],
  //       },
  //       {
  //         id: 202,
  //         title: "Behavioral Challenges",
  //         author: "user234",
  //         date: "2 hours ago",
  //         tags: ["Behavior"],
  //         content:
  //           "I'm facing some behavioral challenges with my dog. Any advice?",
  //         replies: [
  //           {
  //             id: 2001,
  //             author: "user567",
  //             date: "1 hour ago",
  //             content: "I had a similar issue. Here's what worked for me...",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Pet Behavior Issues",
  //     description: "Seek help and solutions for pet behavior problems.",
  //     lastPost: "3 hours ago",
  //     posts: 150,
  //     category: "Behavior",
  //     tags: ["Aggression", "Anxiety", "Training"],
  //     sticky: false,
  //     participants: ["user987", "user654", "user321"],
  //     discussions: [],
  //   },
  //   {
  //     id: 4,
  //     title: "Adoption Stories",
  //     description: "Share heartwarming stories of pet adoptions.",
  //     lastPost: "4 hours ago",
  //     posts: 68,
  //     category: "Adoption",
  //     tags: ["Rescue", "Happy Endings", "Foster Care"],
  //     sticky: true,
  //     participants: ["user111", "user222", "user333"],
  //     discussions: [],
  //   },
  //   {
  //     id: 5,
  //     title: "Pet Product Reviews",
  //     description: "Discuss and review various pet products and gadgets.",
  //     lastPost: "5 hours ago",
  //     posts: 45,
  //     category: "Product Reviews",
  //     tags: ["Toys", "Grooming", "Food"],
  //     sticky: false,
  //     participants: ["user999", "user888", "user777"],
  //     discussions: [],
  //   },
  // ];

  // const { id, discussionId } = useParams();

  // const discussionData = forumsData
  //   .filter((forum: any) => forum.id === Number(id))[0]
  //   .discussions.filter(
  //     (discussion: any) => discussion.id === Number(discussionId)
  //   )[0];

  // const [likes, setLikes] = useState<any>({});
  // console.log("🚀 ~ file: page.tsx:139 ~ Discussion ~ likes:", likes);
  // const [dislikes, setDislikes] = useState<any>({});

  // const handleAgree = (replyId: any) => {
  //   if (likes[replyId]) {
  //     // User has previously agreed, so remove the vote
  //     setLikes((prevLikes: any) => ({
  //       ...prevLikes,
  //       [replyId]: prevLikes[replyId] - 1,
  //     }));
  //   } else {
  //     // User is agreeing for the first time
  //     setLikes((prevLikes: any) => ({
  //       ...prevLikes,
  //       [replyId]: (prevLikes[replyId] || 0) + 1,
  //     }));

  //     // Check if the user previously disagreed and adjust dislikes if necessary
  //     if (dislikes[replyId]) {
  //       setDislikes((prevDislikes: any) => ({
  //         ...prevDislikes,
  //         [replyId]: prevDislikes[replyId] - 1,
  //       }));
  //     }
  //   }
  // };

  // const handleDisagree = (replyId: any) => {
  //   if (dislikes[replyId]) {
  //     // User has previously disagreed, so remove the vote
  //     setDislikes((prevDislikes: any) => ({
  //       ...prevDislikes,
  //       [replyId]: prevDislikes[replyId] - 1,
  //     }));
  //   } else {
  //     // User is disagreeing for the first time
  //     setDislikes((prevDislikes: any) => ({
  //       ...prevDislikes,
  //       [replyId]: (prevDislikes[replyId] || 0) + 1,
  //     }));

  //     // Check if the user previously agreed and adjust likes if necessary
  //     if (likes[replyId]) {
  //       setLikes((prevLikes: any) => ({
  //         ...prevLikes,
  //         [replyId]: prevLikes[replyId] - 1,
  //       }));
  //     }
  //   }
  // };

  // const [newComment, setNewComment] = useState("");
  // const [comments, setComments] = useState(discussionData.replies);

  // const handleAddComment = () => {
  //   if (newComment.trim() !== "") {
  //     const newCommentObj = {
  //       id: 1002,
  //       author: "user789",
  //       date: "3 hours ago",
  //       content: newComment,
  //     };
  //     setComments((prevComments: any) => [...prevComments, newCommentObj]);
  //     setNewComment("");
  //   }
  // };

  const res = await getDoc(doc(db, "discussions", discussionId));
  const discussionData: any = res.data();

  const adjustTextareaRows = (textarea: any) => {
    textarea.rows = textarea.value.split("\n").length || 1;
  };

  return (
    <div className="mt-20 bg-tealLight w-full h-full grid place-items-center">
      <div className="px-2 lg:px-0 bg-tealLight w-full lg:w-7/12">
        <br />
        <h2 className="text-2xl font-semibold mb-4">{discussionData.title}</h2>
        <p className="text-gray-600 mb-2">
          Author: {discussionData.writer.name}
        </p>
        <p className="text-gray-400 text-sm mb-2">
          Date: {discussionData.date}
        </p>
        <p className={`mb-4 text-base lg:text-lg ${lato.className}`}>
          {discussionData.discussionContent}
        </p>
        {/* Participation input */}
        <div className="mt-6 mb-4 border px-4 py-5 rounded-lg bg-white shadow-md">
          {/* <textarea
            rows={2}
            placeholder="Participate in the discussion..."
            className="border rounded-lg w-full py-2 px-4 bg-"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
              adjustTextareaRows(e.target);
            }}
          /> */}
          {/* <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button> */}
        </div>
        {/* List of replies to the discussion */}
        {/* <div className="space-y-4 ">
          {comments.map((reply) => (
            <div
              key={reply.id}
              className="border p-4 rounded-lg bg-white shadow-md"
            >
              <p className="text-gray-600 mb-2">Author: {reply.author}</p>
              <p className="text-gray-400 text-sm mb-2">Date: {reply.date}</p>
              <p>{reply.content}</p>

              <div className="flex items-center  mt-4">
                <button
                  onClick={() => handleAgree(reply.id)}
                  className="bg-emerald-100 text-white px-4 py-2 rounded-s text-xl hover:bg-emerald-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
                >
                  👍{likes[reply.id] || 0}
                </button>
                <button
                  onClick={() => handleDisagree(reply.id)}
                  className="bg-pink-100 text-white px-4 py-2 rounded-e text-xl hover:bg-pink-200 hover:scale-105 focus:outline-none transition-all duration-300 ease-linear"
                >
                  👎{dislikes[reply.id] || 0}
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Discussion;
