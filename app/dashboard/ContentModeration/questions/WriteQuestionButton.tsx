"use client";

import QuestionModal from "@/app/community/(components)/questions/[id]/QuestionModal";
import { useCart } from "@/app/provider/CartProvider";

const WriteQuestionButton = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <>
      <button
        onClick={() => setUploadpetModalOpen(true)}
        className={buttonStyle}
      >
        Ask a Questions
      </button>
      <QuestionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
      />
    </>
  );
};

export default WriteQuestionButton;
