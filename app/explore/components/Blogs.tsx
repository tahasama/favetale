import Link from "next/link";
import React from "react";
import blog1 from "../../images/blog/blog1.jpg";
import blog2 from "../../images/blog/blog2.jpg";
import blog3 from "../../images/blog/blog3.jpg";
import blog4 from "../../images/blog/blog4.jpg";
import blog5 from "../../images/blog/blog5.jpg";
import blog6 from "../../images/blog/blog6.jpg";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Tips for Pet Care",
      excerpt: "Learn how to provide the best care for your beloved pets...",
      image: blog1.src,
    },
    {
      id: 2,
      title: "The Joy of Adopting a Rescue Pet",
      excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
      image: blog2.src,
    },
    {
      id: 3,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt:
        "Transform your living space into a safe and welcoming haven for your pets...",
      image: blog3.src,
    },
    {
      id: 4,
      title: "Exploring the Benefits of Pet Socialization",
      excerpt:
        "Uncover the positive impact of socializing your pets with others...",
      image: blog4.src,
    },
    {
      id: 5,
      title: "The Healing Power of Pet Companionship",
      excerpt:
        "Discover how pets can bring comfort and healing to our lives...",
      image: blog5.src,
    },
    {
      id: 6,
      title: "Preparing for a New Puppy: Tips for First-Time Owners",
      excerpt:
        "Get ready to welcome a new puppy into your home with these helpful tips...",
      image: blog6.src,
    },
    // Add more blog data here
  ];

  return (
    <div className="container  mt-10  w-full">
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>

      {/* Prominent Call-to-Action */}
      <div className="mb-6  mx-4">
        <div className="bg-gray-200 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-3">Share Your Story</h3>
          <p className="text-gray-600 mb-6">
            Have a pet-related story or experience to share? Contribute to our
            blog community and inspire others!
          </p>
          <Link
            href="/write-blog"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Write a Blog
          </Link>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 mx-6">
        {blogsData.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="flex flex-col bg-white shadow-md overflow-hidden  mb-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
