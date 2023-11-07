import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import ViewClient from "../ViewClient";
import ImageClient from "../ImageClient";
import ActionsClient from "../ActionsClient";
import { isAbsolute } from "path";
import Link from "next/link";
import { fetchComments, getDiscussionsData } from "@/app/api/GerData";

const Discussions = async () => {
  const discussionsData: any = await getDiscussionsData();

  const comms: any = [];
  for (const discussion of discussionsData) {
    const ccc: any = await fetchComments(discussion.id);
    comms.push(ccc);
  }

  const categoryMap: any = {
    1: "Health",
    2: "Training",
    3: "Behavior",
    4: "Adoption",
    5: "Products",
  };

  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6"> Discussions</h2>

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr className="text-xs md:text-base">
            {/* <th className="p-2">Image</th> */}
            <th className="p-2">Title</th>
            <th>User</th>
            <th>Posted</th>
            <th>Participants</th>
            <th className="truncate max-w-[3.2rem] md:max-w-none ">Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {discussionsData &&
            discussionsData?.map((image: any, index: any) => (
              <tr
                key={index}
                className={`text-center border-2 border-slate-300 ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                {/* <ImageClient image={image} index={index} /> */}
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                  <Link
                    href={`community/forums/${Object.keys(
                      image.category
                    ).filter(
                      (key) => categoryMap[key] === image.category
                    )}/discussion/${image.id}`}
                  >
                    {" "}
                    {image.title}
                  </Link>
                </td>
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                  <Link
                    href={`profile/${image.writer.id}`}
                    className="text-center"
                  >
                    {image.writer.name}
                  </Link>
                </td>
                <td className="">{image.createdAt.toDate().toDateString()}</td>
                <td>{image.participants.length}</td>
                <td>
                  {
                    comms
                      .flat()
                      .filter((comm: any) => comm.imageId === image.id).length
                  }
                </td>
                <ActionsClient image={image} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discussions;
