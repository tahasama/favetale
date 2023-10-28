"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useCart } from "@/app/provider/CartProvider";
import { db } from "@/firebase";

const DiscussionModal = ({ isOpen, onClose, discussion }: any) => {
  const router = useRouter();

  const { userx, setUploadpetModalOpen } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    discussion ? discussion.category : "Health"
  );
  const [selectedTags, setSelectedTags] = useState<any[]>(
    discussion ? discussion.tags : []
  );
  const [discussionTitle, setDiscussionTitle] = useState(
    discussion ? discussion.title : ""
  );
  const [discussionContent, setDiscussionContent] = useState(
    discussion ? discussion.discussionContent : ""
  );
  const [loading, setLoading] = useState(false);

  const categoriesToTags: any = {
    Health: ["Wellness", "Diet", "Vaccinations"],
    Training: ["Obedience", "Behavior", "Training Tools"],
    Behavior: ["Aggression", "Anxiety", "Training"],
    Adoption: ["Rescue", "Happy Endings", "Foster Care"],
    Products: ["Toys", "Grooming", "Food"],
  };

  const handleCategoryChange = (event: any) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedTags([]);
  };

  const toggleTag = (tag: any) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = async () => {
    try {
      const discussionData = {
        writer: userx,
        category: selectedCategory,
        tags: selectedTags,
        title: discussionTitle,
        discussionContent: discussionContent,
        createdAt: serverTimestamp(),
        participants: [],
      };

      if (discussion?.id) {
        const discussionRef = doc(db, "discussions", discussion.id);
        const updateData = { ...discussionData };

        await updateDoc(discussionRef, updateData);
        router.refresh();
      } else {
        const discussion = await addDoc(
          collection(db, "discussions"),
          discussionData
        );
        router.push(
          `/community/forums/${
            Object.keys(categoriesToTags).indexOf(discussionData.category) + 1
          }/discussion/${discussion.id}`
        );
      }

      setUploadpetModalOpen(false);
      setLoading(false);

      setSelectedCategory("");
      setSelectedTags([]);
      setDiscussionTitle("");
      setDiscussionContent("");

      onClose();
    } catch (error) {
      console.log("🚀 UploadImageModal.tsx:66 ~ error:", error);
    }
  };

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };
  return (
    <div
      className={` fixed inset-0 flex items-center justify-center modal-overlay z-50 backdrop-brightness-50 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className="p-6 mx-1 lg:mx-0 w-full lg:w-4/12 rounded-lg relative bg-indigo-100 border-2 border-slate-300 shadow-xl">
        <button
          className="text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 absolute top-1 right-0.5 transition-all duration-500 rounded-full"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="close"
          >
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Start a Discussion</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {Object.keys(categoriesToTags).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose your Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {categoriesToTags &&
              categoriesToTags[selectedCategory] &&
              categoriesToTags[selectedCategory].map((tag: any) => (
                <button
                  key={tag}
                  className={`${
                    selectedTags.includes(tag)
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } px-2 py-1 rounded-md text-xs cursor-pointer`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={discussionTitle}
            onChange={(e) => setDiscussionTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={discussionContent}
            onChange={(e) => setDiscussionContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          ></textarea>
        </div>

        <div className="w-full flex justify-center mt-1">
          <button
            onClick={handleSubmit}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none text-lg"
          >
            {!loading ? (
              "Create Discussion"
            ) : (
              <span className="flex justify-center px-1">
                Loading
                <div className="flex justify-center ml-0.5 mt-2.5">
                  <div className="w-1 h-1 bg-white group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                  <div
                    className="w-1 h-1 bg-white group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-white group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionModal;
