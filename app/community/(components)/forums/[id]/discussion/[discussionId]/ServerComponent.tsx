import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: [] });

const ServerComponent = ({ discussionData }: any) => {
  console.log(
    "🚀 ~ file: ServerComponent.tsx:7 ~ ServerComponent ~ discussionData:",
    discussionData
  );
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">{discussionData.title}</h2>
      <p className="text-gray-600 mb-2">Author: {discussionData.writer.name}</p>
      <p className="text-gray-400 text-sm mb-2">
        Date: {new Date(discussionData.createdAt.seconds * 1000).toDateString()}
      </p>
      <p className={`mb-4 text-base lg:text-lg ${lato.className}`}>
        {discussionData.discussionContent}
      </p>
    </>
  );
};

export default ServerComponent;
