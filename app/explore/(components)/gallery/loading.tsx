"use client";
import { motion } from "framer-motion";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const petImages = [1, 2, 3];
  return (
    <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
      {petImages &&
        petImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-8"
            initial={{ opacity: 0, y: index * 100 + 100 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="w-full h-40 lg:h-[55vh]  object-cover cursor-pointer bg-slate-300 animate-pulse" />
            </div>
          </motion.div>
        ))}
    </div>
  );
}
