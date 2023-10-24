import React from "react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ weight: "400", subsets: [] });

const ServerComponent = ({ discussionData }: any) => {
  return (
    <>
      <Link
        href={`/profile/${discussionData.writer.id}`}
        className="capitalize flex items-center gap-3 text-sky-500 underline underline-offset-2 mb-1"
      >
        {discussionData.writer.image ? (
          <img
            src={discussionData.writer.image}
            alt="Your Name"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-sky-300 px-3"></div>
        )}{" "}
        {discussionData.writer.name}
      </Link>
      <p className="text-gray-500 text-sm my-2">
        {new Date(discussionData.createdAt.seconds * 1000).toDateString()}
      </p>
      <h2 className="text-2xl font-semibold mb-4 indent-1">
        {discussionData.title}
      </h2>

      <p className={`mb-4 text-base lg:text-lg indent-3 ${lato.className}`}>
        {discussionData.discussionContent}
      </p>
      <div className="border-b-2 mb-0"></div>
    </>
  );
};

export default ServerComponent;
