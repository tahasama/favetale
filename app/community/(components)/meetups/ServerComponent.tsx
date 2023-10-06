import React from "react";
import MeetupCard from "./MeetupCard";

const ServerComponent = ({ searchResults }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6">
      {searchResults.map((meetup: any, index: any) => (
        <MeetupCard meetup={meetup} />
      ))}
    </div>
  );
};

export default ServerComponent;
