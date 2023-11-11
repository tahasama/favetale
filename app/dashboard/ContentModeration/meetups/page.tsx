import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import ViewClient from "../ViewClient";
import ImageClient from "../ImageClient";
import ActionsClient from "../ActionsClient";
import { isAbsolute } from "path";
import Link from "next/link";
import { fetchComments, getGatheringsData } from "@/app/api/GerData";

const Meetups = async () => {
  const MeetupsData: any = await getGatheringsData();
  console.log("🚀 ~ file: page.tsx:13 ~ Meetups ~ MeetupsData:", MeetupsData);

  const comms: any = [];
  for (const blog of MeetupsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }

  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Meetups</h2>

      <table className="w-full max-h-[400px] overflow-y-auto border-collapse border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100">
          <tr className="text-xs md:text-base">
            <th className="p-2 border border-gray-300">Title</th>
            <th className="p-2 border border-gray-300">Location</th>
            <th className="p-2 border border-gray-300">Start Date</th>
            <th className="p-2 border border-gray-300">End Date</th>
            <th className="p-2 border border-gray-300">Time</th>
            <th className="p-2 border border-gray-300">Description</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="mt-10 text-xs md:text-base">
          {MeetupsData &&
            MeetupsData?.map((meetup: any, index: any) => (
              <tr
                key={index}
                className={`text-center border-2 border-slate-300 ${
                  index % 2 !== 0 ? "bg-white" : "bg-teal-50"
                }`}
              >
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer border border-gray-300">
                  <Link href={`explore/Meetups/${meetup.id}`}>
                    {meetup.title}
                  </Link>
                </td>
                <td className="border border-gray-300">{`${meetup.location.city}, ${meetup.location.country}`}</td>
                <td className="border border-gray-300">{meetup.startDate}</td>
                <td className="border border-gray-300">{meetup.endDate}</td>
                <td className="border border-gray-300">{`${meetup.timeFrom} - ${meetup.timeTo}`}</td>
                <td className="border border-gray-300">{meetup.description}</td>
                <ActionsClient image={meetup} collectionName={"gatherings"} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetups;
