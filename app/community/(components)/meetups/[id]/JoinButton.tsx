"use client";

import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react"; // Import useState hook

const JoinButton = ({ newEvent }: any) => {
  const { userx } = useCart();
  const [isJoining, setIsJoining] = useState(false); // State to track join/leave action
  const [event, setEvent] = useState(newEvent);

  useEffect(() => {
    setEvent(newEvent); // Update the event state when newEvent prop changes
  }, [newEvent]);

  const participate = async () => {
    const gatheringRef = doc(db, "gatherings", event.id);
    const participants = event.participants || [];
    const isUserParticipant = participants.includes(userx.id);

    // Optimistically update the UI
    if (isUserParticipant) {
      const updatedParticipants = participants.filter(
        (id: any) => id !== userx.id
      );
      event.participants = updatedParticipants; // Optimistic UI update
    } else {
      event.participants = [...participants, userx.id]; // Optimistic UI update
    }

    setIsJoining(true); // Toggle the button state

    // Make the API call
    try {
      if (isUserParticipant) {
        await updateDoc(gatheringRef, { participants: event.participants });
      } else {
        await updateDoc(gatheringRef, { participants: event.participants });
      }

      // Refetch the updated data
      const res = await getDoc(doc(db, "gatherings", event.id));
      const updatedEvent = { ...res.data(), id: res.id };
      setEvent(updatedEvent);
    } catch (error) {
      // Handle any errors here
    } finally {
      setIsJoining(false); // Toggle the button state back
    }
  };

  return (
    <button
      onClick={participate}
      disabled={isJoining} // Disable the button during the API call
      className={`w-auto ring-2 backdrop-blur-sm backdrop-brightness-50 ring-indigo-500 text-white px-4 py-2 rounded-md hover:animate-bounceZ hover:from-indigo-600 hover:to-indigo-400 transition-colors ${
        isJoining ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isJoining
        ? "Processing..."
        : !event.participants.includes(userx.id)
        ? "Join Meetup"
        : "Leave Meetup"}
    </button>
  );
};

export default JoinButton;
