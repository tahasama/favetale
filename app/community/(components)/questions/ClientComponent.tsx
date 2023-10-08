"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import QuestionModal from "./[id]/QuestionModal";

const ClientComponent = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <>
      <div className="">
        <div className="bg-amber-500 rounded-br-3xl p-6 sm:p-12 text-left leading-loose tracking-wide">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-5">
            Explore Pet Questions
          </h2>
          <p className="text-slate-100 text-base md:text-lg mb-6 md:mb-8">
            Find answers to common pet-related questions, share your knowledge,
            and engage with our community of pet lovers!
          </p>

          <button
            onClick={() => setUploadpetModalOpen(true)}
            className="bg-tealLight hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-500"
          >
            Ask a Questions
          </button>
        </div>
      </div>
      <QuestionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
      />
    </>
  );
};

export default ClientComponent;
