"use client";

import BlogModal from "@/app/explore/(components)/blogs/BlogModal";
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
        Write a Blog
      </button>
      <BlogModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
      />
    </>
  );
};

export default WriteBlogButton;
