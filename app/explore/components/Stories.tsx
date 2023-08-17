import Link from "next/link";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      title: "A Rescue Journey",
      excerpt:
        "Read the heartwarming story of how Bella, a shelter dog, found her forever home.",
      image: "/images/stories/story1.jpg",
    },
    {
      id: 2,
      title: "From Stray to Family",
      excerpt:
        "Discover the incredible journey of Max, a stray cat, as he transforms into a beloved family member.",
      image: "/images/stories/story2.jpg",
    },
    {
      id: 3,
      title: "Unbreakable Bond",
      excerpt:
        "Explore the extraordinary bond between Sarah and her service dog, Luna, as they conquer life's challenges together.",
      image: "/images/stories/story3.jpg",
    },
    // ... Add more stories
    {
      id: 10,
      title: "Pawprints of Love",
      excerpt:
        "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
      image: "/images/stories/story10.jpg",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6">Stories</h2>

      {/* Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Prominent Story */}
        <Link href={`/stories/${storiesData[0].id}`} className="block">
          <div className="bg-tealDark p-6 rounded-lg shadow-md">
            <img
              src={storiesData[0].image}
              alt={storiesData[0].title}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2 text-white">
              {storiesData[0].title}
            </h3>
            <p className="text-gray-300">{storiesData[0].excerpt}</p>
          </div>
        </Link>

        {/* Other Stories */}
        {storiesData.slice(1).map((story) => (
          <Link key={story.id} href={`/stories/${story.id}`} className="block">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={story.image}
                alt={story.title}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stories;
