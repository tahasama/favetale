"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import ReactMarkdown from "react-markdown";
import grayMatter from "gray-matter";
import remarkGfm from "remark-gfm";
import parse from "html-react-parser";
import { Montserrat, Roboto, Lato, Open_Sans } from "next/font/google";

import Quill from "quill";
import dynamic from "next/dynamic";
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
// import JoditEditor from "jodit-react";

// const JoditEditor = React.lazy(() => import("jodit-react"));

// const MemoizedJoditEditor = React.memo(
//   ({ content, setContent, config }: any) => {
//     const editor = useRef(null);

//     return (
//
//     );
//   }
// );
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const StoryModal = ({ isOpen, onClose, story }: any) => {
  console.log("🚀 ~ file: storyModal.tsx:34 ~ storyModal ~ story:", story);
  const router = useRouter();

  const { userx, setUploadpetModalOpen, setSelectedImage } = useCart();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [content, setContent] = useState(story ? story.content : "");
  const editor = useRef(null);

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Call the onClose function to close the modal
    }
  };
  const [title, setTitle] = useState(""); // State to hold the title

  const [tags, setTags] = useState<string[]>([]); // State to hold tags
  const [newTag, setNewTag] = useState<string>(""); // State for adding new tags
  const [error, setError] = useState("");

  useEffect(() => {
    story && (setTitle(story.title), setTags(story.tags));
  }, [story]);

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

  const removeTag = (index: any) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const getStory = async (storyId: any) => {
    const docRef = doc(db, "storys", String(storyId));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:");
      setSelectedImage({ ...docSnap.data(), id: docSnap.id });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const publishstory = async (e: any, isDraft: boolean) => {
    isDraft ? setLoading(true) : setLoading2(true);
    e.preventDefault();

    if (imageFile || content || title) {
      const updateData: any = {};

      if (isDraft) {
        // Logic to save as a draft
        // For example, you can add/update the draft property in your storyData
        updateData.draft = true;
      } else {
        // Logic to publish
        updateData.draft = false; // Set draft to false for publishing
      }

      const storage = getStorage();
      const storageRef = ref(storage, `storys/${userx.id}/${Date.now()}.jpg`);

      try {
        if (imageFile) {
          await uploadBytes(storageRef, imageFile);
        }

        const imageUrl = imageFile
          ? await getDownloadURL(storageRef)
          : story?.image;

        if (story?.id) {
          // If updating an existing story post
          const storyRef = doc(db, "storys", story.id);

          if (title) {
            updateData.title = title;
          }

          if (content) {
            updateData.content = content;
          }

          if (tags.length !== 0) {
            updateData.tags = tags;
          }

          if (imageUrl) {
            updateData.image = imageUrl;
          }

          await updateDoc(storyRef, updateData);
          router.push(`/explore/stories/${story.id}`);
          getStory(story.id);
        } else {
          // If creating a new story post
          const storyData = {
            writer: userx,
            title,
            content,
            tags,
            image: imageUrl,
            draft: isDraft,
            createdAt: serverTimestamp(),
            likes: [],
            ...updateData, // Add the draft property
          };

          const story = await addDoc(collection(db, "storys"), storyData);
          router.push(`/explore/stories/${story.id}`);
        }

        setUploadpetModalOpen(false);
        setLoading(false);
        setLoading2(false);
        setImageFile(null);
        setTags([]);
        setContent("");
        setTitle("");
        setError("");
      } catch (error) {
        console.log("🚀 UploadImageModal.tsx:66 ~ error:", error);
        setLoading(false);
        setLoading2(false);
      }
    }
  };

  const [imageFile, setImageFile] = useState<any>(null);

  const [preview, setPreview] = useState(false);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const config: any = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: `
        <h3>Start your story...</h3>
      `,
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
        className={` inset-0 relative flex flex-col justify-start  lg:overflow-auto my-1 h-full w-full lg:${
          preview ? "w-9/12" : "w-7/12"
        } mb-4 bg-white scrollbar scrollbar-thumb-slate-00 scrollbar-track-gray-0`}
      >
        {!preview ? (
          <div className="md:p-6 py-4 px-1.5 rounded-lg  h-full ">
            <div>
              <h2 className="mb-4"> Write a story</h2>
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
                  Select an image:
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
                />
                <p className="mt-1.5">
                  <span className="text-red-400">Note:</span> you could also
                  copy and paste an image from the web
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
                <div className="mt-3 space-x-2">
                  {tags.map((tag: any, index: any) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md relative"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(index)}
                        className="absolute -top-2 bg-sky-700 -right-2 px-1.5 text-white rounded-full cursor-pointer"
                      >
                        x
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6  flex justify-center lg:justify-end space-x-5 lg:space-x-4">
                <button
                  className="ring-1 ring-slate-500 hover:bg-slate-500 hover:text-white transition-colors duration-300 text-slate-500 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={() => setPreview(true)}
                >
                  Preview
                </button>
                <button
                  type="submit"
                  className="ring-1 ring-pink-500 hover:bg-pink-500 group hover:text-white transition-colors duration-300 text-pink-600 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={(e) => publishstory(e, true)}
                >
                  {!loading ? (
                    "Save/Draft"
                  ) : (
                    <span className="flex">
                      Loading
                      <div className="flex justify-center ml-0.5 mt-1.5">
                        <div className="w-1 h-1 bg-pink-600 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"></div>
                        <div
                          className="w-1 h-1 bg-pink-600 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-pink-600 group-hover:bg-white rounded-full animate-bounceQ1 mx-0.5"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </span>
                  )}
                </button>

                <button
                  type="submit"
                  className="ring-1 ring-green-600 hover:bg-green-700 group hover:text-white transition-colors duration-300 text-green-600 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={(e) => publishstory(e, false)}
                >
                  {!loading2 ? (
                    "Publish"
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

              <div className="mb-6">
                <JoditEditor
                  ref={editor}
                  value={story ? story.content : content}
                  config={config}
                  onBlur={(newContent: any) => setContent(newContent)}
                />
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
        ) : (
          <div className="absolute inset-0 flex justify-center h-full mx-3">
            <button
              className="absolute left-0 lg:left-3 top-2 lg:top-5 lg:bg-purple-100 lg:p-5 rounded-lg flex justify-center items-center gap-2 care"
              onClick={() => setPreview(false)}
            >
              <span className="lg:text-xl text-3xl">⬅️</span>{" "}
              <p className="hidden lg:block">Go back</p>
            </button>
            <div className="m-1 w-[45.5%] ">
              <h1 className="text-center capitalize my-5">{title}</h1>
              <div className="w-full flex justify-center items-center">
                {imageFile && (
                  <Image
                    src={URL.createObjectURL(imageFile)}
                    alt="dddd"
                    width={1000}
                    height={800}
                    className="w-auto max-h-[calc(100vh-200px)] rounded "
                  />
                )}
              </div>
              <div className="w-full mt-4">{parse(content)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryModal;
