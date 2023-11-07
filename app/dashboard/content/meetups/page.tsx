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

  const comms: any = [];
  for (const blog of MeetupsData) {
    const ccc: any = await fetchComments(blog.id);
    comms.push(ccc);
  }

  return (
    <div className="bg-tealLight px-0">
      <h2 className="text-center py-6">Meetups</h2>

      <table className="w-full max-h-[400px] overflow-y-auto">
        <thead>
          <tr className="text-xs md:text-base">
            <th className="p-2">Title</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Time</th>
            <th>Description</th>
            <th>Actions</th>
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
                <td className="max-w-[5rem] text-sky-600 underline cursor-pointer">
                  <Link href={`explore/Meetups/${meetup.id}`}>
                    {meetup.title}
                  </Link>
                </td>
                <td>{`${meetup.location.city}, ${meetup.location.country}`}</td>
                <td>{meetup.startDate}</td>
                <td>{meetup.endDate}</td>
                <td>{`${meetup.timeFrom} - ${meetup.timeTo}`}</td>
                <td>{meetup.description}</td>
                <ActionsClient image={meetup} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetups;
