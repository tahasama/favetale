"use client";

import MeetupsModal from "@/app/community/(components)/meetups/MeetupsModal";
import { useCart } from "@/app/provider/CartProvider";

const WriteMeetupButton = () => {
  const { meetupModalOpen, setMeetupModalOpen } = useCart();
  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <>
      <button onClick={() => setMeetupModalOpen(true)} className={buttonStyle}>
        Create a Gathering
      </button>
      <MeetupsModal
        isOpen={meetupModalOpen}
        onClose={() => setMeetupModalOpen(false)}
      />
    </>
  );
};

export default WriteMeetupButton;
