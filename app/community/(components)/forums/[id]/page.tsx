// "use client";
// import { useParams, useRouter } from "next/navigation";
// import React, { useRef, useState } from "react";
import DiscussionModal from "./DiscussionModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import DiscussionCard from "./DiscussionCard";
import { Suspense } from "react";
import Loading from "./loading";

async function getData() {
  const discussionsData: any[] = [];
  const discussionRef = collection(db, "discussions");
  const snapshot = await getDocs(discussionRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    discussionsData.push({ id: doc.id, ...doc.data() });
  });
  return discussionsData;
}

const Forum = async ({ params: { id } }: any) => {
  console.log("🚀 ~ file: page.tsx:9 ~ Discussion ~ forumId:", id);
  const discussionsData = await getData();
  const categoryMap: any = {
    1: "Health",
    2: "Training",
    3: "Behavior",
    4: "Adoption",
  };
  const discussionsDataFiltered: any = discussionsData?.filter(
    (discussionFiltered: any) =>
      discussionFiltered.category === (categoryMap[id] || "Product")
  );
  console.log(
    "🚀 ~ file: page.tsx:35 ~ Forum ~ discussionsDataFiltered:",
    discussionsDataFiltered
  );

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
  // const router = useRouter();

  // const { id } = useParams();

  const forumData = forumsData.filter((blog: any) => blog.id === Number(id))[0];

  // State to handle adding comments
  // const [newComment, setNewComment] = useState("");
  // //   const [comments, setComments] = useState(forumData.comments);

  // const [liked, setLiked] = useState(false);
  // //   const [likesCount, setLikesCount] = useState(forumData.likes);

  // const commentsSectionRef = useRef<any>(null);

  // const scrollToComments = () => {
  //   commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const [selectedTag, setSelectedTag] = useState(null);

  // Filter discussions based on the selected tag
  // const filteredDiscussions = selectedTag
  //   ? forumData.discussions.filter((discussion: any) =>
  //       discussion.tags.includes(selectedTag)
  //     )
  //   : forumData.discussions;

  // const [showModal, setShowModal] = useState(false);

  // // Function to toggle the create discussion modal
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  // Function to create a new discussion (you can customize this)
  const createDiscussion = () => {
    // Implement logic to create a new discussion
    // For example, you can send a request to your server
    // to create the discussion and then close the modal.
    // After creating the discussion, you can redirect
    // the user to the newly created discussion page.
    // For now, let's just close the modal.
    // toggleModal();
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (pet: any) => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className=" bg-tealLight grid place-items-center w-full h-full">
      <Suspense fallback={<Loading />}>
        <div className="mx-5 pt-5 mt-16 lg:mt-0 bg-tealLight lg:w-8/12 ">
          {/* <span className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4">{forumData.title}</h2>
          <button
            onClick={openModal}
            className="mb-4 bg-indigo-500 text-white py-2 px-4 text-base lg:text-lg sm:py-3 sm:px-5 rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Start a discussion
          </button>
        </span>
        <DiscussionModal isOpen={isModalOpen} onClose={closeModal} /> */}
          <p className="text-gray-600 mb-4 text-base">
            {forumData.description}
          </p>
          <div className="text-gray-400 text-sm mb-4">
            Category:{" "}
            <span className="px-2 py-1 bg-slate-400 border-slate-400 border-2 text-white rounded-xl">
              {forumData.category}
            </span>
          </div>
        </div>
        <div>
          {discussionsDataFiltered.map((discussion: any) => (
            <DiscussionCard discussion={discussion} />
          ))}

          {/* Display tags for the selected forum */}
          {/* <div className="mb-4">
          {discussionsDataFiltered.tags &&
            discussionsDataFiltered?.tags.map((tag: any) => (
              <button
                key={tag}
                // className={`${
                //   selectedTag === tag
                //     ? "bg-indigo-500 text-white"
                //     : "bg-gray-200 text-gray-700"
                // } px-2 py-1 rounded-md text-xs mr-2 cursor-pointer`}
                // onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))} */}
          {/*  <button
            className={`${
              !selectedTag
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            } px-2 py-1 rounded-md text-xs`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
        </div> */}
          {/* List of discussions within the selected forum */}
          <div className="space-y-4">
            {/* {filteredDiscussions.map((discussion: any) => (
            <div
              key={discussion.id}
              className="border p-4 rounded-lg cursor-pointer shadow-md transition bg-white duration-300 ease-in-out  hover:translate-x-[1px] hover:translate-y-[1px]"
              onClick={() =>
                router.push(
                  `/community/forums/${id}/discussion/${discussion.id}`
                )
              }
            >
              <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
              <p className="text-gray-600 mb-2">{discussion.author}</p>
              <p className="text-gray-400 text-sm mb-2">{discussion.date}</p>
              <p>{discussion.content}</p>
              <div className="text-gray-600 mt-2">
                Tags:{" "}
                {discussion.tags.map((tag: any) => (
                  <span key={tag} className="text-indigo-500 mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))} */}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Forum;
