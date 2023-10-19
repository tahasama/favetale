import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import ForumCard from "./ForumCard";

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

const ServerComponent = async () => {
  const discussionsData = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:22 ~ ServerComponent ~ discussionsData:",
    discussionsData
  );

  const forumData = [
    {
      id: 1,
      title: "Pet Health and Care",
      description: "Discuss topics related to pet health and care.",
      category: "Health",
      tags: ["Wellness", "Diet", "Vaccinations"],
    },
    {
      id: 2,
      title: "Training Tips and Tricks",
      description: "Share your training techniques and advice.",
      category: "Training",
      tags: ["Obedience", "Behavior", "Training Tools"],
    },
    {
      id: 3,
      title: "Pet Behavior Issues",
      description: "Seek help and solutions for pet behavior problems.",
      category: "Behavior",
      tags: ["Aggression", "Anxiety", "Training"],
    },
    {
      id: 4,
      title: "Adoption Stories",
      description: "Share heartwarming stories of pet adoptions.",
      category: "Adoption",
      tags: ["Rescue", "Happy Endings", "Foster Care"],
    },
    {
      id: 5,
      title: "Pet Product Reviews",
      description: "Discuss and review various pet products and gadgets.",
      category: "Products",
      tags: ["Toys", "Grooming", "Food"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2">
      {forumData.map((forum) => {
        // Filter discussions for the current forum
        const filteredDiscussions = discussionsData?.filter(
          (discussion) => discussion.category === forum.category
        );

        return (
          <ForumCard
            key={forum.id} // Remember to add a unique key for each item in the map function
            forum={forum}
            discussions={filteredDiscussions}
          />
        );
      })}
    </div>
  );
};
export default ServerComponent;
