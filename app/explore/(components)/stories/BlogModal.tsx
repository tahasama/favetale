"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import "../blogs/blog.css";

import parse from "html-react-parser";
import JoditEditor from "jodit-react";

import Quill from "quill";

const BlogModal = ({ isOpen, onClose, imageSrc }: any) => {
  const [content, setContent] = useState(
    "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />"
  );
  const editor = useRef(null);
  console.log("🚀 ~ file: BlogModal.tsx:13 ~ BlogModal ~ content:", content);

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

  const publishBlog = () => {
    // Placeholder function to publish the blog with title, content, and tags.
    console.log("Publishing blog with title nnnnnnnnnnnn:", title);
    console.log("Content:", content);
    console.log("Tags:", tags);
    console.log("Image:", imageFile);
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
        <h3>Start your blog...</h3>
        <br />
        <br />
        <br />
        <br />
        For quick step back ctrl + Z
      </>`,
  };

  return (
    <div
      className={`linka fixed inset-0 flex flex-col items-center justify-center modal-overlay full w-full mb-4 bg-white  h-screen z-50 backdrop-blur-md backdrop-brightness-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto transition-all duration-300"
          : "opacity-0 pointer-events-none transition-all duration-300"
      }`}
      onClick={handleModalClick}
    >
      <div className=" inset-0 relative flex flex-col justify-start items-end overflow-auto my-1 h-full w-full mb-4 bg-white scrollbar scrollbar-thumb-slate-00 scrollbar-track-gray-0">
        {!preview && (
          <div className="p-4 md:p-6 md:mx-auto rounded-lg  h-screen ">
            <div>
              <h2 className="mb-4">Write a Blog</h2>
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
              <div className="jodit-container mb-6">
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  onBlur={(newContent: any) => setContent(newContent)}
                  className="jodit-container"
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
              <div className="mb-6  flex justify-end space-x-4">
                <button
                  className="ring-1 ring-slate-500 hover:bg-slate-500 hover:text-white transition-colors duration-300 text-slate-500 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={() => setPreview(true)}
                >
                  Preview
                </button>
                <button
                  className="ring-1 ring-pink-500 hover:bg-pink-500 hover:text-white tracking-wide transition-colors duration-300 text-pink-500 py-2 px-2 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={publishBlog}
                >
                  Save/Draft
                </button>

                <button
                  className="ring-1 ring-green-600 hover:bg-green-700 hover:text-white transition-colors duration-300 text-green-600 py-2 px-4 rounded-lg focus:outline-none scale-110 hover:animate-bounceZ"
                  onClick={publishBlog}
                >
                  Publish
                </button>
              </div>
            </div>
            <button
              className="absolute  scale-125 hover:rotate-90 p-1 top-4 right-4  ring-1 ring-gray-300 transition-all duration-500 rounded-full"
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
        )}

        {preview && (
          <div className="absolute inset-0 flex justify-center h-full mx-3">
            <button
              className="absolute left-5 top-5 bg-purple-100 p-5 rounded-lg flex justify-center items-center gap-2 care"
              onClick={() => setPreview(false)}
            >
              <span className="text-xl">⬅️</span> <p>Go back</p>
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

export default BlogModal;
