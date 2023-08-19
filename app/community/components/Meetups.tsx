import React from "react";

const Meetups = () => {
  const meetupData = [
    {
      id: 1,
      title: "Pet Lovers Meetup",
      date: "August 15, 2023",
      location: "Central Park, New York",
      description:
        "Join us for a fun meetup in Central Park to celebrate the joy of having pets.",
    },
    {
      id: 2,
      title: "Dog Playdate Extravaganza",
      date: "September 5, 2023",
      location: "Dog Park, San Francisco",
      description:
        "Bring your furry friends for a playful day at the dog park. Let's have a blast together!",
    },
    {
      id: 3,
      title: "Cat Enthusiast Gathering",
      date: "October 10, 2023",
      location: "Purrfect Cafe, Seattle",
      description:
        "Calling all cat lovers! Enjoy a cozy afternoon at the cat cafe and share your feline stories.",
    },
    {
      id: 4,
      title: "Birdwatching Meetup",
      date: "November 20, 2023",
      location: "Local Park, Chicago",
      description:
        "Let's observe and appreciate our feathered friends in their natural habitat.",
    },
    {
      id: 5,
      title: "Aquarium Enthusiasts Meetup",
      date: "December 8, 2023",
      location: "City Aquarium, Miami",
      description:
        "Connect with fellow aquarium hobbyists and explore the fascinating world of underwater life.",
    },
    {
      id: 6,
      title: "Exotic Pet Owners Meetup",
      date: "January 15, 2024",
      location: "Exotic Pet Sanctuary, Los Angeles",
      description:
        "For those who own and cherish unique and unconventional pets. Share your experiences!",
    },
    {
      id: 7,
      title: "Small Pets Playdate",
      date: "February 5, 2024",
      location: "Community Center, Austin",
      description:
        "Join us for a playdate with small pets like rabbits, guinea pigs, and hamsters.",
    },
    {
      id: 8,
      title: "Horseback Riding Adventure",
      date: "March 18, 2024",
      location: "Equestrian Ranch, Denver",
      description:
        "Experience the thrill of horseback riding while bonding with fellow equestrians.",
    },
    {
      id: 9,
      title: "Reptile Lovers Meetup",
      date: "April 10, 2024",
      location: "Reptile Zoo, Phoenix",
      description:
        "For those fascinated by reptiles! Get up close with snakes, lizards, and more.",
    },
    {
      id: 10,
      title: "Feline Frenzy Meetup",
      date: "May 5, 2024",
      location: "Cat Haven, New Orleans",
      description:
        "A celebration of all things cat-related. Share stories, tips, and purrfect moments.",
    },
  ];

  return (
    <div className="container mx-auto bg-tealLight">
      <h2 className="text-3xl font-semibold mb-6">Meetups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {meetupData.map((meetup) => (
          <div
            key={meetup.id}
            className="bg-white rounded-lg shadow-md overflow-hidden m-2 bg-gradient-to-b from-tealLight to-purple-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src="/images/meetup-placeholder.jpg"
                alt={meetup.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-indigo-500 text-white px-3 py-1 m-4 rounded-md">
                {meetup.date}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{meetup.title}</h3>
              <p className="text-gray-600 mb-2">{meetup.location}</p>
              <p className="text-gray-600">{meetup.description}</p>
              <button className="mt-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md hover:from-indigo-600 hover:to-indigo-400 transition-colors">
                Join Meetup
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetups;
