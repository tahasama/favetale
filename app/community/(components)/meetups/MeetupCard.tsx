"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MeetupsModal from "./MeetupsModal";
const MeetupCard = ({ meetup }: any) => {
  return (
    <Link href={`community/meetups/${meetup.id}`}>
      <motion.div
        initial={{ opacity: 0 }} // Initial state (hidden and slightly moved down)
        animate={{ opacity: 1 }} // Animation state (visible and at normal position)
        transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
        key={meetup.id}
        className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden m-2 bg-gradient-to-b from-tealLight to-purple-100 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative">
          {meetup.image && (
            <Image
              src={meetup.image}
              alt={meetup.name}
              className="w-full h-40 object-cover"
              width={1000}
              height={1000}
            />
          )}
          <div className="absolute bottom-0 left-0 bg-teal-600 text-white px-3 py-1 m-4 rounded-md">
            {meetup.startDate}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{meetup.name}</h3>
          <p className="text-gray-600 mb-2">{meetup.location.country}</p>
          <p className="text-gray-600 mb-2">{meetup.location.city}</p>
          <p className="text-gray-600 mb-2">{meetup.location.zipCode}</p>
          <p className="text-gray-600 mb-2">
            {" "}
            From <span className="text-red-600">
              {meetup.startDate}
            </span> to <span className="text-red-600">{meetup.endDate}</span>
          </p>
          <p className="text-gray-600">{meetup.description}</p>
          <button className="mt-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-indigo-400 transition-colors">
            Join Meetup
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default MeetupCard;
