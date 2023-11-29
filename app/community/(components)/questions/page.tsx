import React, { Suspense } from "react";
import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";
import Loading from "./loading";

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
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </>
  );
};

export default Questions;
