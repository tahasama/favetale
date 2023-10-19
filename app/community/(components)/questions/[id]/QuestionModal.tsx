"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useCart } from "@/app/provider/CartProvider";

const QuestionModal = ({ isOpen, onClose, id }: any) => {
  const { userx, setUploadpetModalOpen, selectedImage, setSelectedImage } =
    useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(""); // State to hold the title
  const [tags, setTags] = useState<string[]>([]); // State to hold tags
  const [newTag, setNewTag] = useState<string>(""); // State for adding new tags

  useEffect(() => {
    if (id && selectedImage) {
      setTitle(selectedImage.title || "");
      setTags(selectedImage.tags || []);
      setContent(selectedImage.content || "");
    }
  }, [id, selectedImage]);

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

  const getQuestion = async () => {
    const docRef = doc(db, "questions", String(id));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:");
      setSelectedImage({ ...docSnap.data(), id: docSnap.id });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!!!!");
    }
  };
  const SendQuestion = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      const questionsCollection = collection(db, "questions");

      if (selectedImage) {
        // If the question has an ID, it's an update
        if (imageFile) {
          const storage = getStorage();
          const storageRef = ref(
            storage,
            `questions/${userx.id}/${Date.now()}.jpg`
          );

          await uploadBytes(storageRef, imageFile);
          const res = await getDownloadURL(storageRef);

          const updatedQuestionData = {
            writer: userx,
            title,
            content,
            tags,
            image: res,
          };

          // Update the question in Firestore
          const questionRef = doc(db, "questions", selectedImage.id);
          await updateDoc(questionRef, updatedQuestionData);
          getQuestion();
        } else {
          const updatedQuestionData = {
            writer: userx,
            title,
            content,
            tags,
          };

          // Update the question in Firestore without changing the image
          const questionRef = doc(db, "questions", selectedImage.id);
          await updateDoc(questionRef, updatedQuestionData);
          getQuestion();
        }
      } else {
        // It's a new question
        if (imageFile) {
          const storage = getStorage();
          const storageRef = ref(
            storage,
            `questions/${userx.id}/${Date.now()}.jpg`
          );

          await uploadBytes(storageRef, imageFile);
          const res = await getDownloadURL(storageRef);

          const newQuestionData = {
            writer: userx,
            title,
            content,
            tags,
            image: res,
            createdAt: serverTimestamp(),
            upvotes: [],
            downvotes: [],
          };

          // Create a new question in Firestore
          const question = await addDoc(questionsCollection, newQuestionData);
          router.push(`/community/questions/${question.id}`);
        } else {
          const newQuestionData = {
            writer: userx,
            title,
            content,
            tags,
            createdAt: serverTimestamp(),
            upvotes: [],
            downvotes: [],
          };

          // Create a new question in Firestore without an image
          const question = await addDoc(questionsCollection, newQuestionData);
          router.push(`/community/questions/${question.id}`);
        }
      }

      setUploadpetModalOpen(false);
      setLoading(false);
      setImageFile(null);
      setTags([]);
      setContent("");
      setTitle("");
    } catch (error) {
      console.log("Error sending or updating question: ", error);
    }
  };

  const [imageFile, setImageFile] = useState<any>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const adjustTextareaRows = (textarea: any) => {
    textarea.rows = textarea.value.split("\n").length || 14;
  };

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center justify-center full w-full mb-4 bg-white  h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div
        className={` inset-0 relative flex flex-col justify-start  lg:overflow-auto my-1 h-full w-full lg:w-7/12
        mb-4 bg-white scrollbar scrollbar-thumb-slate-00 scrollbar-track-gray-0`}
      >
        <div className="md:p-6 py-4 px-1.5 rounded-lg  h-full ">
          <div className="flex flex-col gap-4">
            <h2 className="mb-4">Ask a Question</h2>
            <div className="flex items-center mb-4 gap-3">
              <label htmlFor="title">Add title: </label>
              <input
                type="text"
                placeholder="Add title..."
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="py-2 px-3 lg:w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Select an image if needed:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
              />
              <p className="mt-1.5">
                <span className="text-red-400">Note:</span> you could also copy
                and paste an image from the web
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Add tags..."
                  value={newTag}
                  onChange={handleTagChange}
                  className="py-2 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={addTag}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Add Tag
                </button>
              </div>
              <div className="mt-2 space-x-2">
                {((id && selectedImage?.tags) || tags).map(
                  (tag: any, index: any) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="mb-6">
              <textarea
                rows={2}
                placeholder="Add a question..."
                className="border lg:rounded h-40  w-full rounded-2xl px-2 py-1 mr-2 flex-grow"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  adjustTextareaRows(e.target);
                }}
              />
            </div>
            <div className="mb-6  flex justify-center lg:justify-end space-x-5 lg:space-x-4">
              <button
                type="submit"
                className="ring-1 ring-green-600 hover:bg-green-700 group hover:text-white transition-colors duration-300 text-green-600 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                onClick={SendQuestion}
              >
                {!loading ? (
                  "Send Question"
                ) : (
                  <span className="flex">
                    Loading
                    <div className="flex justify-center ml-0.5 mt-1.5">
                      <div className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                      <div
                        className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-700 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </span>
                )}
              </button>
            </div>
          </div>
          <button
            className="absolute  scale-125 hover:rotate-90 p-1 top-4 right-3  ring-1 ring-gray-300 transition-all duration-500 rounded-full"
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
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
