// "use client";
// import { useParams, useRouter } from "next/navigation";
// import React, { useRef, useState } from "react";
import DiscussionModal from "./DiscussionModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Suspense } from "react";
import Loading from "./loading";
import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponentButtons";
import ClientComponentButtuns from "./ClientComponentButtons";

const Forum = async ({ params: { id } }: any) => {
  // const router = useRouter();

  // const { id } = useParams();

  // State to handle adding comments
  // const [newComment, setNewComment] = useState("");
  // //   const [comments, setComments] = useState(forumData.comments);

  // const [liked, setLiked] = useState(false);
  // //   const [likesCount, setLikesCount] = useState(forumData.likes);

  // const commentsSectionRef = useRef<any>(null);

  // const scrollToComments = () => {
  //   commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  // };

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
  const forumData = forumsData.filter(
    (forum: any) => forum.id === Number(id)
  )[0];

  return (
    <div className=" bg-tealLight flex justify-center w-full h-auto">
      <div className="mx-5  mt-20 lg:mt-40 bg-tealLight lg:w-7/12 ">
        <span className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <h2 className="text-2xl font-semibold mb-4">{forumData.title}</h2>

          <ClientComponentButtuns id={id} />
        </span>
        <p className="text-gray-600 mb-4 text-base">{forumData.description}</p>
        <div className="text-gray-400 text-sm mb-4">
          Category:{" "}
          <span className="px-2 py-1 bg-slate-400 border-slate-400 border-2 text-white rounded-xl">
            {forumData.category}
          </span>
        </div>
        <ServerComponent id={id} />
      </div>
    </div>
  );
};

export default Forum;
