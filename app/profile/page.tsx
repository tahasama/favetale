import React from "react";
import user from "../images/userf.jpg";

const UserProfile = () => {
  return (
    <div className="bg-teal-50 min-h-screen pt-20">
      {/* User Information */}
      <div className="bg-white mx-6 sm:mx-60 p-6 mt-8  shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2  ">
        {/* Profile Picture */}

        <div className=" grid place-content-around place-items-start">
          {/* Username */}
          <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
          <h2 className="text-md font-light mb-2">join on 2nd August 23</h2>

          {/* Bio */}
          <p className="text-gray-600 mb-4">
            Passionate about pets and animals. Love sharing tips and
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  place-content-center place-items-start">
            {/* Edit Profile Information */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>

            {/* Account Settings */}
            <button className="bg-purple-500 text-white px-4 py-2 -ml-3 rounded-md">
              Account Settings
            </button>
          </div>
        </div>
        <div className="grid place-items-center place-content-center">
          <img
            src={user.src}
            alt="Profile Picture"
            className="rounded-3xl w-[1/12] object-cover bg-sky-500"
            width={400}
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-6 sm:mx-52 p-7 mt-8 max-w-5x">
        {/* My Images Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Images</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Upvoted Images</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/* My Blogs Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Upvoted Blogs</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/*  My Stories Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Stories</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Upvoted Stories</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>
        {/*  My Purshases Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Purshases</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>

        {/*  My events Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Events created</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Events Attended</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/*  My forums Section */}
        <div className="p-4 bg-purple-100 mb-3rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Discussions started</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              discussions participated in
            </h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>

        {/*  My Questions Section */}
        <div className="p-4 bg-purple-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Asked</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Answered</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Upvoted</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
