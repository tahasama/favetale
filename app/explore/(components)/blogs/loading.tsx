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
          <div className="flex flex-col bg-slate-300 shadow-md overflow-hidden  mb-6">
            <div className="bg-slate-300 h-20 w-20 p-3 smp-6 rounded-lg shadow-md"></div>
          </div>
        </motion.div>;
      })}
    </>
  );
}
