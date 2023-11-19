import Image from "next/image";
import Link from "next/link";
import ActionsClient from "../ContentModeration/ActionsClient";
const MeetupTable = ({ searchResults }: any) => {
  return (
    <table className="table-fixed w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 border-r text-center">Title</th>
          <th className="p-3 border-r text-center">Description</th>
          <th className="p-3 border-r text-center">Start Date</th>
          <th className="p-3 border-r text-center">End Date</th>
          <th className="p-3 border-r text-center">Time</th>
          <th className="p-3 border-r text-center">Location</th>
          <th className="p-3 border-r text-center">Participants</th>
          <th className="p-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {searchResults?.map((meetup: any, index: any) => (
          <tr
            key={index}
            className={`border-b ${meetup?.official && "bg-sky-300"} `}
          >
            <td className="p-3 border-r text-center">
              <Link href={`/community/events/${meetup.id}`}>
                {meetup?.title}
              </Link>
            </td>
            <td className="p-3 border-r text-center">{meetup?.description}</td>
            <td className="p-3 border-r text-center">{meetup?.startDate}</td>
            <td className="p-3 border-r text-center">{meetup?.endDate}</td>
            <td className="p-3 border-r text-center">
              {meetup?.timeFrom} - {meetup?.timeTo}
            </td>
            <td className="p-3 border-r text-center">
              {meetup?.location.zipcode}, {meetup?.location.city},{" "}
              {meetup?.location.country}
            </td>
            <td className="p-3 border-r text-center">
              {meetup.participants.length}
            </td>

            <ActionsClient image={meetup} collectionName={"event"} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeetupTable;
