"use client";
import React, { useEffect, useRef, useState } from "react";

import "react-quill/dist/quill.snow.css"; // Import styles
import "./blog.css";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useCart } from "@/app/provider/CartProvider";
// import JoditEditor from "jodit-react";

// const JoditEditor = React.lazy(() => import("jodit-react"));

// const MemoizedJoditEditor = React.memo(
//   ({ content, setContent, config }: any) => {
//     const editor = useRef(null);

//     return (
//       <div className="mb-6">
//         <JoditEditor
//           ref={editor}
//           value={content}
//           config={config}
//           onBlur={(newContent: any) => setContent(newContent)}
//         />
//       </div>
//     );
//   }
// );
const BlogModal = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  const { userx, setUploadpetModalOpen } = useCart();
  const [loading, setLoading] = useState(false);

  // const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

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

  const handleTagChange = (e: any) => {
    setNewTag(e.target.value);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const addTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag(""); // Clear the input field after adding a tag
    }
  };

  const publishBlog = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(storage, `blogs/${userx.id}/${Date.now()}.jpg`);

      try {
        await uploadBytes(storageRef, imageFile);
        const res = await getDownloadURL(storageRef);

        const blogData = {
          writer: userx,
          title,
          content,
          tags,
          image: res,
          createdAt: serverTimestamp(),
        };

        await addDoc(collection(db, "blogs"), blogData).then(() => {
          setUploadpetModalOpen(false), setLoading(false);
        });
      } catch (error) {
        console.log("🚀 UploadImageModal.tsx:66 ~ error:", error);
      }
      setImageFile(null);
      setTags([]);
      setContent("");
      setTitle("");
      router.push("/profile");
    }
  };

  const [imageFile, setImageFile] = useState<any>(null);

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
