import React from "react";
import QuestionCard from "./QuestionCard";
import { getQuestionsData } from "@/app/api/GerData";

const ServerComponent = async () => {
  const questionsData = await getQuestionsData();

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
