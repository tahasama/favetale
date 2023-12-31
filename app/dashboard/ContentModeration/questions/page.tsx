import React from "react";
import ActionsClient from "../ActionsClient";
import Link from "next/link";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { fetchComments, getQuestionsData } from "@/app/api/GerData";
import WriteQuestionButton from "./WriteQuestionButton";

const Questions = async () => {
  const blogsData: any = await getQuestionsData();

  const comms: any = [];
  for (const blog of blogsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }

  return (
    <div className="bg-tealLight px-0">
      <div className="flex justify-between items-center">
        <h2 className="text-center py-6 w-10a/12">Questions</h2>
        <WriteQuestionButton />
      </div>

      <table className="w-full max-h-[400px] overflow-y-auto border-collapse border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100">
          <tr className="text-xs md:text-base">
            <th className="p-2 border border-gray-300">Title</th>
            <th className="p-2 border border-gray-300">Tags</th>
            <th className="p-2 border border-gray-300">Date</th>
            <th className="p-2 border border-gray-300">
              <span className="flex items-center">
                <IoMdArrowUp /> votes
              </span>
            </th>
            <th className="p-2 border border-gray-300">
              <span className="flex items-center">
                <IoMdArrowDown /> votes
              </span>
            </th>
            <th className="p-2 border border-gray-300">Answers</th>
            <th className="p-2 border border-gray-300">Actions</th>
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
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300">
                  <Link
                    href={`community/questions/${question.id}`}
                    className="max-w-3xl line-clamp-2"
                  >
                    {question.title}
                  </Link>
                </td>
                <td className="border border-gray-300">
                  {question.tags.length}
                </td>
                <td className="border border-gray-300">
                  {new Date(
                    question.createdAt.seconds * 1000
                  ).toLocaleDateString()}
                </td>
                <td className="border border-gray-300">
                  {question.upvotes.length}
                </td>
                <td className="border border-gray-300">
                  {question.downvotes.length}
                </td>
                <td className="border border-gray-300">
                  {
                    comms
                      .flat()
                      .filter((comm: any) => comm.imageId === question.id)
                      .length
                  }
                </td>
                <ActionsClient image={question} collectionName={"questions"} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Questions;
