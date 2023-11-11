import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import ViewClient from "../ViewClient";
import ImageClient from "../ImageClient";
import ActionsClient from "../ActionsClient";
import { isAbsolute } from "path";
import Link from "next/link";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { fetchComments, getQuestionsData } from "@/app/api/GerData";

const Questions = async () => {
  const blogsData: any = await getQuestionsData();

  const comms: any = [];
  for (const blog of blogsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }

  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Questions</h2>

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr className="text-xs md:text-base">
            <th className="p-2">Title</th>
            <th>Tags</th>
            <th>Date</th>
            <th>
              <span className="flex items-center">
                <IoMdArrowUp /> votes
              </span>
            </th>
            <th>
              <span className="flex items-center">
                <IoMdArrowDown /> votes
              </span>
            </th>
            <th>Answers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {blogsData &&
            blogsData?.map((question: any, index: any) => (
              <tr
                key={index}
                className={`text-center border-2 border-slate-300 ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                  <Link
                    href={`community/questions/${question.id}`}
                    className="max-w-3xl line-clamp-2"
                  >
                    {question.title}
                  </Link>
                </td>
                <td>{question.tags.length}</td>
                <td>
                  {new Date(
                    question.createdAt.seconds * 1000
                  ).toLocaleDateString()}
                </td>

                <td>{question.upvotes.length}</td>
                <td>{question.downvotes.length}</td>
                <td>
                  {" "}
                  {
                    comms
                      .flat()
                      .filter((comm: any) => comm.imageId === question.id)
                      .length
                  }
                </td>
                <ActionsClient image={question} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Questions;
