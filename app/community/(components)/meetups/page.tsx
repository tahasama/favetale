import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Meetups = () => {
  // const meetups = [
  //   {
  //     id: 2,
  //     title: "Pet Adoption Fair 2023",
  //     startDate: "2023-09-15",
  //     endDate: "2023-09-17",
  //     image: img6.src,
  //     initiator: "Animal Rescue Society",
  //     initiatorImage: user1.src,
  //     location: {
  //       country: "USA",
  //       city: "Los Angeles",
  //       zipCode: "90001",
  //     },
  //     hour: "10:00 AM - 4:00 PM",
  //     description: "Find your new furry friend at our adoption fair.",
  //     images: [img1.src, img2.src, img3.src],
  //     likes: [8, 12, 24, 36],
  //     comments: [
  //       {
  //         text: "I adopted the sweetest cat from here last year!",
  //         user: {
  //           name: "Sarah Brown",
  //           image: user4.src,
  //         },
  //       },
  //       {
  //         text: "Thank you for helping animals in need!",
  //         user: {
  //           name: "Michael Davis",
  //           image: user5.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Wildlife Conservation Seminar",
  //     startDate: "2023-10-10",
  //     endDate: "2023-10-11",
  //     image: img4.src,
  //     initiator: "Nature Conservancy",
  //     initiatorImage: user2.src,
  //     location: {
  //       country: "USA",
  //       city: "Los Angeles",
  //       zipCode: "90001",
  //     },
  //     hour: "9:00 AM - 3:00 PM",
  //     description:
  //       "Learn about efforts to protect wildlife and their habitats.",
  //     images: [img4.src, img5.src, img6.src],
  //     likes: [15, 19, 27, 42],
  //     comments: [
  //       {
  //         text: "These animals deserve our protection!",
  //         user: {
  //           name: "Emma Wilson",
  //           image: user1.src,
  //         },
  //       },
  //       {
  //         text: "I'm excited to attend this event!",
  //         user: {
  //           name: "David Green",
  //           image: user2.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Dog Training Workshop",
  //     startDate: "2023-09-22",
  //     endDate: "2023-09-23",
  //     image: img11.src,
  //     initiator: "Pawsitive Training Academy",
  //     initiatorImage: user3.src,
  //     location: {
  //       country: "USA",
  //       city: "Los Angeles",
  //       zipCode: "90001",
  //     },
  //     hour: "11:00 AM - 2:00 PM",
  //     description: "Enhance your dog's behavior and obedience skills.",
  //     images: [img7.src, img8.src, img9.src],
  //     likes: [10, 14, 22, 31],
  //     comments: [
  //       {
  //         text: "This workshop transformed my dog's behavior!",
  //         user: {
  //           name: "Lisa Anderson",
  //           image: user3.src,
  //         },
  //       },
  //       {
  //         text: "I recommend this to all dog owners!",
  //         user: {
  //           name: "Jason Smith",
  //           image: user4.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Cat Show Competition 2023",
  //     startDate: "2023-11-05",
  //     endDate: "2023-11-06",
  //     image: img9.src,
  //     initiator: "Feline Fanciers Club",
  //     initiatorImage: user4.src,
  //     location: {
  //       country: "USA",
  //       city: "Los Angeles",
  //       zipCode: "90001",
  //     },
  //     hour: "10:00 AM - 6:00 PM",
  //     description: "Witness the beauty and grace of various cat breeds.",
  //     images: [img10.src, img11.src, img12.src],
  //     likes: [7, 11, 18, 25],
  //     comments: [
  //       {
  //         text: "These cats are so elegant!",
  //         user: {
  //           name: "Olivia Johnson",
  //           image: user5.src,
  //         },
  //       },
  //       {
  //         text: "I can't wait to see the Maine Coon cats!",
  //         user: {
  //           name: "Lucas Clark",
  //           image: user1.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Horseback Riding Retreat",
  //     startDate: "2023-09-30",
  //     endDate: "2023-10-02",
  //     image: img7.src,
  //     initiator: "Trail Blazers Equestrian Club",
  //     initiatorImage: user5.src,

  //     hour: "9:00 AM - 5:00 PM",
  //     location: {
  //       country: "USA",
  //       city: "New York",
  //       zipCode: "10001",
  //     },
  //     date: "2023-09-15",
  //     time: "6:00 PM",
  //     description:
  //       "Experience the joy of horseback riding in a beautiful setting.",
  //     images: [img1.src, img3.src, img5.src],
  //     likes: [9, 13, 21, 28],
  //     comments: [
  //       {
  //         text: "Horseback riding is so therapeutic!",
  //         user: {
  //           name: "Sophie Adams",
  //           image: user1.src,
  //         },
  //       },
  //       {
  //         text: "I'm bringing my kids to this event. They love horses!",
  //         user: {
  //           name: "Mark Roberts",
  //           image: user2.src,
  //         },
  //       },
  //     ],
  //   },
  // ];

  // const [uploadModalOpen, setUploadModalOpen] = useState(false);
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [address, setAddress] = useState("");
  // const [date, setDate] = useState("");
  // const [searchResults, setSearchResults] = useState<any[]>(meetups);

  // const [error, setError] = useState("");

  // const handleSearch = () => {
  //   const filteredMeetups = meetups.filter((meetup) => {
  //     const meetupLocation = meetup.location;
  //     const criteriaMatch =
  //       (!country ||
  //         meetupLocation.country
  //           .toLowerCase()
  //           .includes(country.toLowerCase())) &&
  //       (!city ||
  //         meetupLocation.city.toLowerCase().includes(city.toLowerCase())) &&
  //       (!zipCode ||
  //         meetupLocation.zipCode.toLowerCase().includes(zipCode.toLowerCase()));
  //     return criteriaMatch;
  //   });

  //   setSearchResults(filteredMeetups);
  // };

  return (
    <div className=" bg-tealLight">
      <ClientComponent />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-1 p-6">
        <div>
          <label
            htmlFor="country"
            className="text-gray-600 font-semibold block"
          >
            Country:
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter Country"
            className="border rounded py-2 px-3 w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="city" className="text-gray-600 font-semibold block">
            City:
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            className="border rounded py-2 px-3 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="text-gray-600 font-semibold block"
          >
            ZIP Code:
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Enter ZIP Code"
            className="border rounded py-2 px-3 w-full"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-gray-600 font-semibold block"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            className="border rounded py-2 px-3 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date" className="text-gray-600 font-semibold block">
            Date:
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter Date"
            className="border rounded py-2 px-3 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-span-full">
          <button
            onClick={handleSearch}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded w-full"
          >
            Search
          </button>
        </div>
      </div> */}
      {/* Search Results */}
      {/* Display search results here */}
      {/* Error Handling */}
      {/* {error && (
        <div id="error-message" className="text-red-600 mt-4">
          {error}
        </div>
      )} */}
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Meetups;
