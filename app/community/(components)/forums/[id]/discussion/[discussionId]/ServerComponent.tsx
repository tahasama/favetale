import React from "react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ weight: "400", subsets: [] });

const ServerComponent = ({ discussionData }: any) => {
  console.log(
    "🚀 ~ file: ServerComponent.tsx:7 ~ ServerComponent ~ discussionData:",
    discussionData
  );
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">{discussionData.title}</h2>
      Author :&nbsp;
      <Link
        href={`/profile/${discussionData.writer.id}`}
        className="capitalize text-sky-500 underline underline-offset-2 mb-1"
      >
        {discussionData.writer.name}
      </Link>
      <p className="text-gray-400 text-sm my-2">
        Date: {new Date(discussionData.createdAt.seconds * 1000).toDateString()}
      </p>
      <p className={`mb-4 text-base lg:text-lg indent-3 ${lato.className}`}>
        {discussionData.discussionContent}
      </p>
      <div className="border-b-2 mb-0"></div>
    </>
  );
};

export default ServerComponent;
