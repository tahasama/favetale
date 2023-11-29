"use client";

import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const JoinButton = ({ newEvent }: any) => {
  const { userx } = useCart();
  const [isJoining, setIsJoining] = useState(false);
  const [event, setEvent] = useState(newEvent);

  useEffect(() => {
    setEvent(newEvent);
  }, [newEvent]);

  const participate = async () => {
    const gatheringRef = doc(db, "gatherings", event.id);
    const participants = event.participants || [];
    const isUserParticipant = participants.includes(userx.id);

    if (isUserParticipant) {
      const updatedParticipants = participants.filter(
        (id: any) => id !== userx.id
      );
      event.participants = updatedParticipants;
    } else {
      event.participants = [...participants, userx.id];
    }

    setIsJoining(true);

    try {
      if (isUserParticipant) {
        await updateDoc(gatheringRef, { participants: event.participants });
      }

      const res = await getDoc(doc(db, "gatherings", event.id));
      const updatedEvent = { ...res.data(), id: res.id };
      setEvent(updatedEvent);
    } catch (error) {
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <button
      onClick={participate}
      disabled={isJoining}
      className={`w-auto ring-2 backdrop-blur-sm backdrop-brightness-50 ring-indigo-500 text-white px-4 py-2 rounded-md hover:animate-bounceZ hover:from-indigo-600 hover:to-indigo-400 transition-colors ${
        isJoining ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isJoining
        ? "Processing..."
        : !event.participants.includes(userx.id)
        ? "Join event"
        : "Leave event"}
    </button>
  );
};

export default JoinButton;
