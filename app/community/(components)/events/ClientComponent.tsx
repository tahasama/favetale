import Link from "next/link";
import React from "react";

const ClientComponent = () => {
  const handleScrollToSection = (e: any, sectionId: any) => {
    e.preventDefault(); // Prevent the default link behavior

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Use smooth scrolling animation
        block: "start", // Scroll to the top of the section
      });
    }
  };
  return (
    <div className="mb-6">
      <div className="bg-green-600 p-6 sm:p-12 rounded-br-3xl text-left leading-loose tracking-wide">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-5">
          Explore Pet Events
        </h2>
        <p className="text-slate-100 text-base md:text-lg mb-6 md:mb-8">
          Discover exciting pet-related events happening in your area and
          beyond. Don't miss out on the fun and opportunities to learn and
          connect!
        </p>
        <Link
          href="#pet-events" // Points to the anchor element with id "pet-questions"
          onClick={(e: any) => handleScrollToSection(e, "pet-events")}
        >
          <button className="hover:animate-buttonHover bg-tealLight hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-500">
            View Upcoming Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClientComponent;
