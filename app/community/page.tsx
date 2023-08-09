import Link from "next/link";
import React from "react";

const CommunityPage = () => {
  return (
    <section className="py-12 mt-20">
      <div className="container mx-auhref text-center">
        <h2 className="text-3xl font-semibold mb-8">Community</h2>
        <div className="flex flex-col items-center space-y-4">
          <Link
            href="/community/forums"
            className="text-indigo-500 hover:underline"
          >
            Forums
          </Link>
          <Link
            href="/community/meetups"
            className="text-indigo-500 hover:underline"
          >
            Meetups
          </Link>
          <Link
            href="/community/user-shrefries"
            className="text-indigo-500 hover:underline"
          >
            User Shrefries
          </Link>
          <Link
            href="/community/events"
            className="text-indigo-500 hover:underline"
          >
            Events
          </Link>
          <Link
            href="/community/questions"
            className="text-indigo-500 hover:underline"
          >
            Questions
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
