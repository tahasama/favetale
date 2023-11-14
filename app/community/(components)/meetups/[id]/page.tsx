import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";
import ClientComponent from "./ClientComponent";
import { Suspense } from "react";
import ClientBottomComponent from "./ClientBottomComponent";

async function Event({ params: { id } }: any) {
  // const eventsData = [
  //   {
  //     id: 2,
  //     title: "Pet Adoption Fair 2023",
  //     startDate: new Date("2023-09-15"),
  //     endDate: new Date("2023-09-17"),
  //     image: img6.src,
  //     initiator: "Animal Rescue Society",
  //     initiatorImage: user1.src,
  //     location: "City Park",
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
  //     startDate: new Date("2023-10-10"),
  //     endDate: new Date("2023-10-11"),
  //     image: img4.src,
  //     initiator: "Nature Conservancy",
  //     initiatorImage: user2.src,
  //     location: "Nature Center",
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
  //     startDate: new Date("2023-09-22"),
  //     endDate: new Date("2023-09-23"),
  //     image: img11.src,
  //     initiator: "Pawsitive Training Academy",
  //     initiatorImage: user3.src,
  //     location: "Community Center",
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
  //     startDate: new Date("2023-11-05"),
  //     endDate: new Date("2023-11-06"),
  //     image: img9.src,
  //     initiator: "Feline Fanciers Club",
  //     initiatorImage: user4.src,
  //     location: "Convention Center",
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
  //     startDate: new Date("2023-09-30"),
  //     endDate: new Date("2023-10-02"),
  //     image: img7.src,
  //     initiator: "Trail Blazers Equestrian Club",
  //     initiatorImage: user5.src,
  //     location: "Ranch Resort",
  //     hour: "9:00 AM - 5:00 PM",
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
  // const { id } = useParams();

  const res = await getDoc(doc(db, "gatherings", id));
  const event: any = { ...res.data(), id: res.id };

  return (
    <div className="relative  h-full text-black pb-12 ">
      <ClientComponent event={event} id={id} />

      <Suspense fallback={<Loading />}>
        <ServerComponent event={event} />
      </Suspense>
      <ClientBottomComponent event={event} id={id} />
    </div>
  );
}

export default Event;
