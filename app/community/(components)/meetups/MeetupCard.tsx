"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const MeetupCard = ({ meetup }: any) => {
  return (
    <Link href={`/community/meetups/${meetup.id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        key={meetup.id}
        className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden m-2 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative">
          {meetup.image && (
            <Image
              src={meetup.image}
              alt={meetup.name}
              className="w-full h-52 object-cover"
              width={1000}
              height={1000}
            />
          )}
          <div className="absolute bottom-0 left-0 bg-teal-600 text-white px-3 py-1 m-4 rounded-md">
            {meetup.startDate}
          </div>
        </div>
        <div className="p-2 md:p-6  bg-gradient-to-b from-sky-100 to-white ">
          <div className="p-0">
            <h2 className="text-xl font-bold mb-2">{meetup?.title}</h2>
            <p className="text-gray-600 text-base mb-2">
              {meetup?.description}
            </p>

            <div className="text-gray-600 text-lg">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2 text-base">Date:</span>
                <span className="text-red-500 mr-2 text-sm">
                  {meetup?.startDate}{" "}
                </span>{" "}
                to
                <span className="text-red-500 ml-2 text-sm">
                  {meetup?.endDate}{" "}
                </span>
              </div>
              <div className="flex items-center mb-2 ">
                <span className="font-semibold mr-2 text-base">Time:</span>
                <span className="text-sm">
                  {meetup?.timeFrom} - {meetup?.timeTo}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-base">Location:</span>

                <span className="mr-2 text-sm">
                  {meetup?.location.zipcode},{" "}
                </span>

                <span className="mr-2 capitalize text-sm">
                  {meetup?.location.city},{" "}
                </span>

                <span className="uppercase text-sm">
                  {meetup?.location.country}
                </span>
              </div>
            </div>
          </div>

          <button className="mt-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-indigo-400 transition-colors">
            Join Meetup
          </button>
          <button className="mt-3 ml-3 bg-gradient-to-r from-slate-500 to-slate-400 text-white px-4 py-2 rounded-md hover:from-slate-600 hover:to-slate-400 transition-colors">
            {meetup.participants.length} participants
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default MeetupCard;
