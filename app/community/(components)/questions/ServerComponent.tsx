import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import QuestionCard from "./QuestionCard";

async function getData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "questions");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

const ServerComponent = async () => {
  const questionsData = await getData();

  return (
    <div className="mx-auto flex justify-center items-start min-h-screen bg-gradient-to-b from-tealLight to-yellow-100">
      <div className="flex flex-col w-full md:w-2/3 p-3 mt-10 gap-4">
        {questionsData &&
          questionsData.map((question: any, index: any) => (
            <QuestionCard question={question} index={index} />
          ))}
      </div>
    </div>
  );
};
export default ServerComponent;
