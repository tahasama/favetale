import React from "react";

const ServerComponent = ({ event }: any) => {
  console.log(
    "🚀 ~ file: ServerComponent.tsx:4 ~ ServerComponent ~ event:",
    event
  );
  return (
    <div className="p-2 md:p-6 bg-gradient-to-b h-auto from-tealLight to-blue-300">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-xl font-semibold mb-4">{event && event.title}</p>
          <p className="text-gray-600 md:text-lg mb-2">
            {event && event.description}
          </p>
          <p className="text-gray-600 md:text-lg">
            <span className="font-semibold">Date:</span> {event.startDate} to
            {event.endDate}
          </p>
          <p className="text-gray-600 md:text-lg">
            <span className="font-semibold">Time:</span> From:{event.timeFrom}{" "}
            to: {event.timeTo}
          </p>
          <p className="text-gray-600 md:text-lg">
            <span className="font-semibold">Location:</span>{" "}
            {event && event.location.city}
          </p>
        </div>
        <button className="h-12 md:h-16 w-28 md:w-40  md:text-lg hover:animate-bounceQ bg-gradient-to-r from-indigo-500 to-indigo-300 text-white rounded-md hover:from-indigo-600 hover:to-indigo-400 transition-colors">
          Join Meetup
        </button>
      </div>
    </div>
  );
};

export default ServerComponent;
