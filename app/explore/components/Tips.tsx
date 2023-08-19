import Link from "next/link";
import React, { useRef } from "react";
import veterinary from "../../images/coverImages/veterinary.jpg";
import food from "../../images/coverImages/food.jpg";
import sport from "../../images/coverImages/sport3.jpg";
import grooming from "../../images/coverImages/grooming.jpg";
import training from "../../images/coverImages/training.jpg";
import social from "../../images/coverImages/social.jpg";
import safe from "../../images/coverImages/safe2.jpg";
import care from "../../images/coverImages/care.jpg";
import para from "../../images/coverImages/para3.jpg";
import time from "../../images/coverImages/time.jpg";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
// import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ tip }: { tip: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);

  return (
    <section className="h-screen w-fit flex items-center justify-center snap-center">
      <motion.div
        className="relative mb-8 "
        initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly moved down)
        animate={{ opacity: 1, y: 85 }} // Animation state (visible and at normal position)
        transition={{ duration: 1 }} // Animation duration
      >
        <div ref={ref} className=" w-fit flex items-center justify-center">
          <img
            src={tip.coverImage}
            alt="A London skyscraper"
            className="max-h-[79vh] w-auto rounded-md"
          />
        </div>
        <motion.h2
          style={{ y }}
          className="bg-white bg-opacity-80 rounded-lg shadow-md -mt-7 sm:-mt-32 p-6 w-full sm:w-auto transition-all duration-200 absolute sm:right-5"
        >
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 lg:mb-4">
            <span className="text-2xl md:text-3xl lg:text-4xl">
              {tip.emoji}
            </span>{" "}
            {tip.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            {tip.description}
          </p>
          <button className="mt-2 md:mt-3 lg:mt-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 sm:shadow-xl md:shadow-lg lg:shadow-xl rounded-lg">
            <Link href={`/tips/${tip.id}`}>Read More</Link>
          </button>
        </motion.h2>
      </motion.div>
    </section>
  );
}
const TipsPage = () => {
  const tipsData = [
    {
      id: 1,
      title: "Regular Veterinary Check-ups",
      description:
        "Consistent veterinary check-ups are fundamental to your pet's well-being.",
      emoji: "🏥",
      coverImage: veterinary.src,
    },
    {
      id: 2,
      title: "Balanced Diet and Nutrition",
      description:
        "Provide a balanced diet that meets the nutritional needs of your pet.",
      emoji: "🍎",
      coverImage: food.src,
    },
    {
      id: 3,
      title: "Daily Exercise and Play",
      description:
        "Engage your pet in daily exercise and play href maintain physical and mental health.",
      emoji: "🏃‍♂️",
      coverImage: sport.src,
    },
    {
      id: 4,
      title: "Regular Grooming",
      description:
        "Practice regular grooming href keep your pet's coat and skin healthy.",
      emoji: "🛁",
      coverImage: grooming.src,
    },
    {
      id: 5,
      title: "Positive Reinforcement Training",
      description:
        "Use positive reinforcement methods href train and encourage good behavior in your pet.",
      emoji: "🐕",
      coverImage: training.src,
    },
    {
      id: 6,
      title: "Socialization Opportunities",
      description:
        "Expose your pet href various environments and socialization experiences.",
      emoji: "🐶",
      coverImage: social.src,
    },
    {
      id: 7,
      title: "Safe Environment",
      description: "Create a safe and secure environment for your pet at home.",
      emoji: "🏠",
      coverImage: safe.src,
    },
    {
      id: 8,
      title: "Regular Dental Care",
      description:
        "Prioritize dental care by brushing your pet's teeth and providing dental treats.",
      emoji: "🦷",
      coverImage: care.src,
    },
    {
      id: 9,
      title: "Prevent Parasites",
      description:
        "Protect your pet from parasites with regular preventive measures.",
      emoji: "🐛",
      coverImage: para.src,
    },
    {
      id: 10,
      title: "Quality Time together",
      description:
        "Spend quality time bonding with your pet to strengthen your relationship.",
      emoji: "🌺",
      coverImage: time.src,
    },
  ];

  const { scrollY } = useScroll();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex items-center justify-center flex-col">
      {/* <h2 className="text-3xl font-semibold mb-6">Advice & Tips</h2> */}
      {tipsData.map((tip, index) => (
        <Image tip={tip} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};

export default TipsPage;
