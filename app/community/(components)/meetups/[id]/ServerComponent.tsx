import React from "react";

const ServerComponent = ({ event }: any) => {
  console.log(
    "🚀 ~ file: ServerComponent.tsx:4 ~ ServerComponent ~ event:",
    event
  );
  return (
    <div className="p-2 md:p-6 bg-gradient-to-b h-auto from-blue-200 to-white">
      <div className="event-card bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{event?.title}</h1>
        <p className="text-gray-600 text-lg mb-2">{event?.description}</p>

        <div className="text-gray-600 text-lg">
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Date:</span>
            <span>
              {event?.startDate} to {event?.endDate}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Time:</span>
            <span>
              {event?.timeFrom} - {event?.timeTo}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Location:</span>

            <span className="mr-2">{event?.location.zipcode}, </span>

            <span className="mr-2 capitalize">{event?.location.city}, </span>

            <span className="uppercase">{event?.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerComponent;
