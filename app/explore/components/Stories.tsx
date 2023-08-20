import Link from "next/link";
import story1 from "../../images/stories/story1.jpg";
import story2 from "../../images/stories/story2.jpg";
import story3 from "../../images/stories/story3.jpg";
import story4 from "../../images/stories/story4.jpg";
import story5 from "../../images/stories/story5.jpg";
import story6 from "../../images/stories/story6.jpg";
import story7 from "../../images/stories/story7.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      title: "A Rescue Journey",
      excerpt:
        "Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.",
      image: story1.src,
    },
    {
      id: 2,
      title: "From Stray to Family",
      excerpt:
        "Discover the incredible journey of Max, a stray cat, as he transforms into a beloved family member.",
      image: story2.src,
    },
    {
      id: 3,
      title: "Unbreakable Bond",
      excerpt:
        "Explore the extraordinary bond between Sarah and her service dog, Luna, as they conquer life's challenges together.",
      image: story3.src,
    },
    // ... Add more stories
    {
      id: 10,
      title: "Pawprints of Love",
      excerpt:
        "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
      image: story4.src,
    },
  ];

  return (
    <div className="container">
      <div className="mb-8">
        <div className="bg-cyan-600 p-7 rounded-lg text-left leading-10 ">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Share Your Inspiring Story
          </h2>
          <p className="text-gray-200 mb-4">
            Contribute your unique story to our community and inspire others!
          </p>
          <Link
            href="/write-story"
            className="bg-tealLight hover:text-white px-4 py-3  rounded-md hover:bg-indigo-600 transition-colors"
          >
            Write Your Story
          </Link>
        </div>
      </div>

      {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 gap-6 mb-4">
        {storiesData.map((story, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: index * 100 + 100,
              // transform: "scale(1.1)",
            }} // Initial state (hidden and slightly moved down)
            animate={{
              opacity: 1,
              y: 0,
              // transform: "scale(1)",
            }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
          >
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="block"
            >
              <div
                className={`bg-white rounded-lg shadow-md overflow-hidden  sm:h-60`}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 mt-2">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 mb-2 line-clamp-4">
                        {story.excerpt}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mt-2">story.timestamp</p>
                      <p className="text-tealDark font-semibold">story.user</p>
                    </div>
                  </div>
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="sm:w-1/3 sm:h-auto object-cover w-auto"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
