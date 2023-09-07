"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import "./blog.css";
import ReactMarkdown from "react-markdown";
import grayMatter from "gray-matter";
import remarkGfm from "remark-gfm";
import parse from "html-react-parser";
import { Montserrat, Roboto, Lato, Open_Sans } from "next/font/google";

import Quill from "quill";

const BlogModal = ({ isOpen, onClose, imageSrc }: any) => {
  const [content, setContent] = useState<string>("<p><br></p>".repeat(10));
  console.log("🚀 ~ file: BlogModal.tsx:13 ~ BlogModal ~ content:", content);
  const parseContent = parse(content);

  console.log(
    "🚀 ~ file: BlogModal.tsx:16 ~ BlogModal ~ parseContent:",
    parseContent
  );
  // Define the modules for React-Quill with Markdown-style bold
  const modules = {
    toolbar: [
      [
        {
          font: [],
        },
      ],
      [{ header: [1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],

      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link", "video"],
      ["clean"],
    ],
  };

  const handleContentChange = (newContent: any) => {
    setContent(newContent);
  };

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
    console.log(
      "🚀 ~ file: BlogModal.tsx:66 ~ handleTitleChange ~ newTitle:",
      newTitle
    );
    setTitle(newTitle);
  };

  const addTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag(""); // Clear the input field after adding a tag
    }
  };

  const publishBlog = () => {
    // Placeholder function to publish the blog with title, content, and tags.
    console.log("Publishing blog with title nnnnnnnnnnnn:", title);
    console.log("Content:", content);
    console.log("Tags:", tags);
    console.log("Image:", imageFile);
  };

  const [imageFile, setImageFile] = useState<any>(null);
  console.log(
    "🚀 ~ file: BlogModal.tsx:85 ~ BlogModal ~ imageFile:",
    imageFile
  );
  const [preview, setPreview] = useState(false);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center justify-center modal-overlay h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className=" inset-0 relative flex flex-col justify-start items-end  my-1 h-screen w-screen bg-white ">
        {!preview && (
          <div className="p-4 md:p-6 md:mx-auto rounded-lg  h-screen ">
            <div>
              <h1 className="mb-4">Write a Blog</h1>
              <div className="flex items-center mb-4 gap-3">
                <label htmlFor="title">Add title: </label>
                <input
                  type="text"
                  placeholder="Add title..."
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="py-2 px-3 w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-12">
                <ReactQuill
                  value={content}
                  onChange={handleContentChange}
                  modules={modules}
                  className="h-fit lg:h-80"
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
                  required
                  className="w-full bg-indigo-100 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
                />
                <p>
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
                <div className="mt-2 space-x-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 focus:outline-none text-lg"
                onClick={publishBlog}
              >
                Publish
              </button>
            </div>
            <button
              className="absolute bg-sky-600 scale-125 hover:rotate-90 p-1 top-4 right-4  ring-2 ring-gray-300 transition-all duration-500 rounded-full"
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
            <button onClick={() => setPreview(true)}>Preview</button>
          </div>
        )}

        {preview && (
          <div className="absolute inset-0 flex justify-center h-full overflow-y-auto mx-3">
            <button
              className="absolute left-5 top-5 bg-purple-100 p-5 rounded-lg flex justify-center items-center gap-2 care"
              onClick={() => setPreview(false)}
            >
              <span className="text-xl">⬅️</span> <p>Go back</p>
            </button>
            <div className="m-1 w-5/12 ">
              <h1 className="text-center capitalize my-5">{title}</h1>
              <div className="w-full flex justify-center items-center">
                {imageFile && (
                  <Image
                    src={URL.createObjectURL(imageFile)}
                    alt="dddd"
                    width={500}
                    height={400}
                    className="w-auto max-h-[calc(100vh-200px)]"
                  />
                )}
              </div>
              <div className="w-full">{parse(content)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogModal;
