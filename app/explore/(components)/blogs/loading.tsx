"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const blogs = [1, 2, 3];
  return (
    <>
      {blogs.map((blog: any, index: any) => {
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
          animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
          transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
        >
          <div className="flex flex-col bg-white shadow-md overflow-hidden  mb-6">
            <div className="bg-white p-3 smp-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.excerpt}</p>
            </div>
          </div>
        </motion.div>;
      })}
    </>
  );
}
