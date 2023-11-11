import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import ViewClient from "../ViewClient";
import ImageClient from "../ImageClient";
import ActionsClient from "../ActionsClient";
import { isAbsolute } from "path";
import Link from "next/link";
import { fetchComments, getStoriesData } from "@/app/api/GerData";

const Stories = async () => {
  const blogsData: any = await getStoriesData();

  const comms: any = [];
  for (const blog of blogsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }
  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Stories</h2>

      <table className="w-full max-h-[400px] overflow-y-auto border-collapse border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100">
          <tr className="text-xs md:text-base">
            <th className="p-2 border border-gray-300">Image</th>
            <th className="p-2 border border-gray-300">Title</th>
            <th className="p-2 border border-gray-300">User</th>
            <th className="p-2 border border-gray-300">Posted</th>
            <th className="p-2 border border-gray-300">Likes</th>
            <th className="p-2 border border-gray-300 truncate max-w-[3.2rem] md:max-w-none">
              Comments
            </th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {blogsData &&
            blogsData?.map((image: any, index: any) => (
              <tr
                key={index}
                className={`text-center border-2 border-slate-300 ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300">
                  <Link href={`explore/blogs/${image.id}`}>{image.title}</Link>
                </td>
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300">
                  <Link
                    href={`profile/${image.writer.id}`}
                    className="text-center"
                  >
                    {image.writer.name}
                  </Link>
                </td>
                <td className="border border-gray-300">
                  {image.createdAt.toDate().toDateString()}
                </td>
                <td className="border border-gray-300">{image.likes.length}</td>
                <td className="border border-gray-300">
                  {
                    comms
                      .flat()
                      .filter((comm: any) => comm.imageId === image.id).length
                  }
                </td>
                <ActionsClient image={image} collectionName={"storys"} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stories;
