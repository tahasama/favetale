import Link from "next/link";
import React from "react";
import {
  IoIosEye,
  IoIosCreate,
  IoIosLock,
  IoIosChatboxes,
  IoIosPeople,
  IoIosHelpCircle,
} from "react-icons/io";

function ContentModeration() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        Content Moderation
      </h2>

      {/* Gallery Section */}
      <section className="mb-8 p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover:bg-indigo-50 transition duration-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Gallery
          </h3>
        </div>
        <p className="text-gray-600 mb-4">
          Explore and moderate the gallery of beautiful images submitted by
          users.
        </p>
        <div className="flex justify-between">
          <Link
            href={"/dashboard/content/gallery"}
            className="flex px-4 items-center gap-2 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800 transition duration-300 focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <IoIosEye className="text-indigo-100" size={24} />
            Gallery
          </Link>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="mb-8 p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover:bg-indigo-50 transition duration-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Blogs
          </h3>
          <IoIosCreate className="text-indigo-400" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Review, edit, and publish blogs submitted by our community members.
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-700 text-white rounded hover-bg-indigo-800 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            View Blogs
          </button>
          <button className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded hover-bg-indigo-100 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Edit Blogs
          </button>
        </div>
      </section>

      {/* Stories Section */}
      <section className="mb-8 p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover-bg-indigo-50 transition duration-300 focus-ring-2 focus-ring-indigo-300 focus-outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Stories
          </h3>
          <IoIosLock className="text-indigo-400" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Manage the security and access controls of user-submitted stories.
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-700 text-white rounded hover-bg-indigo-800 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Access Control
          </button>
          <button className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded hover-bg-indigo-100 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Security Settings
          </button>
        </div>
      </section>

      {/* Forums Section */}
      <section className="mb-8 p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover-bg-indigo-50 transition duration-300 focus-ring-2 focus-ring-indigo-300 focus-outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Forums
          </h3>
          <IoIosChatboxes className="text-indigo-400" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Engage with forum discussions and manage content in the community
          forums.
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-700 text-white rounded hover-bg-indigo-800 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Join Discussions
          </button>
          <button className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded hover-bg-indigo-100 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Content Management
          </button>
        </div>
      </section>

      {/* Meetups Section */}
      <section className="mb-8 p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover-bg-indigo-50 transition duration-300 focus-ring-2 focus-ring-indigo-300 focus-outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Meetups
          </h3>
          <IoIosPeople className="text-indigo-400" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Organize and manage community meetups and events.
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-700 text-white rounded hover-bg-indigo-800 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            View Upcoming Meetups
          </button>
          <button className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded hover-bg-indigo-100 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Event Management
          </button>
        </div>
      </section>

      {/* Questions Section */}
      <section className="p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-indigo-50 bg-white hover-bg-indigo-50 transition duration-300 focus-ring-2 focus-ring-indigo-300 focus-outline-none">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-indigo-700 border-b-2 border-indigo-500 pb-2">
            Questions
          </h3>
          <IoIosHelpCircle className="text-indigo-400" size={24} />
        </div>
        <p className="text-gray-600 mb-4">
          Review and answer questions from the community.
        </p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-indigo-700 text-white rounded hover-bg-indigo-800 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            View Questions
          </button>
          <button className="px-4 py-2 border border-indigo-700 text-indigo-700 rounded hover-bg-indigo-100 transition duration-300 focus-ring focus-ring-indigo-300 focus-outline-none">
            Answer Questions
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContentModeration;
