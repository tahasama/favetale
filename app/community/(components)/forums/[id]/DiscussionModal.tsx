"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DiscussionModal = ({ isOpen, onClose }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Health");
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [discussionTitle, setDiscussionTitle] = useState("");
  const [discussionContent, setDiscussionContent] = useState("");

  const categoriesToTags: any = {
    Health: ["Wellness", "Diet", "Vaccinations"],
    Training: ["Obedience", "Behavior", "Training Tools"],
    Behavior: ["Aggression", "Anxiety", "Training"],
    Adoption: ["Rescue", "Happy Endings", "Foster Care"],
    "Product Reviews": ["Toys", "Grooming", "Food"],
  };

  const handleCategoryChange = (event: any) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedTags([]); // Reset tags when category changes
  };

  const toggleTag = (tag: any) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    // Handle discussion submission here
    console.log("Category:", selectedCategory);
    console.log("Tags:", selectedTags);
    console.log("Title:", discussionTitle);
    console.log("Content:", discussionContent);

    // Close the modal or perform any other action as needed
    onClose();
  };

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal

      console.log("🚀 ~ file: discussionModal.tsx:48 ~ handleModalClick ~ c:");
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

        {/* Category Dropdown */}
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

        {/* Tags Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {categoriesToTags[selectedCategory].map((tag: any) => (
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

        {/* Discussion Title */}
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

        {/* Discussion Content */}
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

        {/* Submit Button */}
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
          onClick={handleSubmit}
        >
          Create Discussion
        </button>
      </div>
    </div>
  );
};

export default DiscussionModal;
