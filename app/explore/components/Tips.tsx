import Link from "next/link";
import React from "react";

const TipsPage = () => {
  const tipsData = [
    {
      id: 1,
      title: "Regular Veterinary Check-ups",
      description:
        "Consistent veterinary check-ups are fundamental to your pet's well-being.",
      emoji: "🏥",
      coverImage: "",
    },
    {
      id: 2,
      title: "Balanced Diet and Nutrition",
      description:
        "Provide a balanced diet that meets the nutritional needs of your pet.",
      emoji: "🍎",
      coverImage: "",
    },
    {
      id: 3,
      title: "Daily Exercise and Play",
      description:
        "Engage your pet in daily exercise and play to maintain physical and mental health.",
      emoji: "🏃‍♂️",
      coverImage: "",
    },
    {
      id: 4,
      title: "Regular Grooming",
      description:
        "Practice regular grooming to keep your pet's coat and skin healthy.",
      emoji: "🛁",
      coverImage: "",
    },
    {
      id: 5,
      title: "Positive Reinforcement Training",
      description:
        "Use positive reinforcement methods to train and encourage good behavior in your pet.",
      emoji: "🐕",
      coverImage: "",
    },
    {
      id: 6,
      title: "Socialization Opportunities",
      description:
        "Expose your pet to various environments and socialization experiences.",
      emoji: "🐶",
      coverImage: "",
    },
    {
      id: 7,
      title: "Safe Environment",
      description: "Create a safe and secure environment for your pet at home.",
      emoji: "🏠",
      coverImage: "",
    },
    {
      id: 8,
      title: "Regular Dental Care",
      description:
        "Prioritize dental care by brushing your pet's teeth and providing dental treats.",
      emoji: "🦷",
      coverImage: "",
    },
    {
      id: 9,
      title: "Prevent Parasites",
      description:
        "Protect your pet from parasites with regular preventive measures.",
      emoji: "🐛",
      coverImage: "",
    },
    {
      id: 10,
      title: "Quality Time Together",
      description:
        "Spend quality time bonding with your pet to strengthen your relationship.",
      emoji: "🌺",
      coverImage: "",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6">Advice & Tips</h2>
      {tipsData.map((tip) => (
        <div key={tip.id} className="relative mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url(${tip.coverImage})` }}
          ></div>
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 relative">
            <h3 className="text-xl font-semibold mb-3">
              {tip.emoji} {tip.title}
            </h3>
            <p className="text-gray-600">{tip.description}</p>
            <Link
              href={`/tips/${tip.id}`}
              className="text-indigo-500 hover:underline mt-3 block"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TipsPage;
