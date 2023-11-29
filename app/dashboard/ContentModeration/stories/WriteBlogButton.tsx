"use client";

import StoryModal from "@/app/explore/(components)/stories/StoryModal";
import { useCart } from "@/app/provider/CartProvider";

const WriteBlogButton = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();
  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <>
      <button
        onClick={() => setUploadpetModalOpen(true)}
        className={buttonStyle}
      >
        Write a Story
      </button>
      <StoryModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
      />
    </>
  );
};

export default WriteBlogButton;
