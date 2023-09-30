"use client";
import React, { useEffect, useRef, useState } from "react";

import "react-quill/dist/quill.snow.css"; // Import styles
import "./blog.css";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const BlogModal = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [content, setContent] = useState("");
  const editor = useRef(null);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };
  const [title, setTitle] = useState(""); // State to hold the title
  const [tags, setTags] = useState<string[]>([]); // State to hold tags
  const [newTag, setNewTag] = useState<string>(""); // State for adding new tags

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center justify-center full w-full mb-4 bg-white  h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      BBBBBB
    </div>
  );
};

export default BlogModal;
