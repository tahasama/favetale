"use client";
import Forums from "./(components)/forums/page";
import Meetups from "./(components)/meetups/page";
import Events from "./(components)/events/page";
import Questions from "./(components)/questions/page";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";

const CommunityPage = () => {
  return (
    <div className="mt-0">
      <Forums />
    </div>
  );
};

export default CommunityPage;
