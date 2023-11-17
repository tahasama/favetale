"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import Link from "next/link";

import {
  FieldValue,
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useCart } from "@/app/provider/CartProvider";

import parse from "html-react-parser";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import StoryModal from "../StoryModal";

function Story() {
  // Sample story data (replace with your own)
  // const storiesData = [
  //   {
  //     id: 1,
  //     title: "My Rescue Journey with Bella",
  //     excerpt:
  //       "Read about my heartwarming journey with Bella, a shelter dog, as she found her forever home.",
  //     image: story1.src,
  //     writer: {
  //       name: "Bella's Best Friend",
  //       image: user1.src,
  //     },
  //     likes: 56,
  //     content: `
  // My journey with Bella, the shelter dog, began with a visit to our local animal shelter. I had heard about her through a friend and was instantly drawn to her story.

  // Bella was a beautiful soul, patiently waiting for a loving family to come into her life. Her eyes told a story of resilience and hope. I knew I had to be the one to give her a forever home.

  // The day I brought Bella home marked the start of a transformation, not just for her but for both of us. She went from being a shelter dog to becoming an integral part of my life. Our bond grew stronger with each passing day.

  // Bella's happiness radiated throughout our home. She enjoyed long walks in the park, cuddles on the couch, and a warm bed to sleep in every night. It was a journey filled with love and joy.

  // Bella's story is a testament to the power of adoption and the incredible transformation that can occur when a shelter pet finds a loving family. She reminds me every day that every shelter animal deserves a chance at happiness.

  // Join me in celebrating Bella's rescue journey, and may her story inspire others to open their hearts and homes to shelter pets in need.
  //     `,
  //     comments: [
  //       {
  //         text: "What a heartwarming story! Bella is so lucky to have found a loving family.",
  //         user: {
  //           name: "AnimalLover42",
  //           image: user2.src,
  //         },
  //       },
  //       {
  //         text: "Bella's story brought tears to my eyes. It's amazing how love can transform lives.",
  //         user: {
  //           name: "PetRescuer",
  //           image: user3.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Max's Journey: From Stray to My Family",
  //     excerpt:
  //       "Discover my incredible journey with Max, a stray cat, as he transformed into a beloved family member.",
  //     image: story2.src,
  //     writer: {
  //       name: "Max's Proud Owner",
  //       image: user4.src,
  //     },
  //     likes: 78,
  //     content: `
  // Max's journey from stray to family member is a story that I'm privileged to share. It all began when I spotted Max on the streets, a stray cat surviving on his own.

  // My heart went out to Max, and I knew I had to make a difference in his life. I brought him home, and that marked the beginning of an incredible transformation.

  // Max, once a wary and cautious stray, blossomed into a loving and affectionate cat. He found comfort in a warm home, delicious meals, and the gentle touch of our family.

  // The bond between Max and me grew stronger with each passing day. He became more than just a pet; he became a cherished family member. Max's journey is a reminder that even a stray cat can become an integral part of a family.

  // Today, Max continues to inspire us with his resilience and love. His story showcases the power of second chances and the magic of transformation. Max is living proof that love can heal and bring happiness.

  // Join me in celebrating Max's journey from stray to family, and may his story encourage others to rescue animals in need.
  //     `,
  //     comments: [
  //       {
  //         text: "Max's story is a beautiful reminder that every stray deserves a loving home. Thank you for sharing.",
  //         user: {
  //           name: "CatLover88",
  //           image: user5.src,
  //         },
  //       },
  //       {
  //         text: "I'm in awe of Max's transformation. It just goes to show how love can heal and bring happiness.",
  //         user: {
  //           name: "RescueAdvocate",
  //           image: user1.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "My Unbreakable Bond with Luna",
  //     excerpt:
  //       "Explore the extraordinary bond between me and my service dog, Luna, as we conquer life's challenges together.",
  //     image: story3.src,
  //     writer: {
  //       name: "Luna's Companion",
  //       image: user3.src,
  //     },
  //     likes: 92,
  //     content: `
  // My journey with Luna, my beloved service dog, is a testament to the unbreakable bond between humans and their furry companions. Luna came into my life during a time of need, and she has since become my greatest source of strength and support.

  // Luna isn't just a service dog; she's my confidante, my protector, and my best friend. Together, we've faced life's challenges with unwavering determination. Her loyalty and devotion are a constant source of inspiration.

  // Luna has been trained to assist me with various tasks, but her role in my life goes beyond her training. She provides emotional support and an incredible sense of companionship. With Luna by my side, I've been able to overcome obstacles I never thought possible.

  // Our adventures together are filled with laughter, joy, and the kind of companionship that words can't fully capture. Luna has touched my heart in ways I never imagined, and I'm grateful for every moment we share.

  // Luna's story is a reminder of the profound impact that service animals can have on the lives of individuals with disabilities. She has not only made my life better but also brighter.

  // Join me in celebrating the unbreakable bond between Luna and me, and may her story inspire others to appreciate the incredible role that service animals play in our lives.
  //     `,
  //     comments: [
  //       {
  //         text: "Your bond with Luna is truly remarkable. She's an amazing companion.",
  //         user: {
  //           name: "ServiceDogHero",
  //           image: user4.src,
  //         },
  //       },
  //       {
  //         text: "Luna's story touched my heart. Thank you for sharing your journey with us.",
  //         user: {
  //           name: "InspiredReader",
  //           image: user1.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Pawprints of Love: Celebrating Our Moments",
  //     excerpt:
  //       "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
  //     image: story4.src,
  //     writer: {
  //       name: "FurryFriendLover",
  //       image: user3.src,
  //     },
  //     likes: 124,
  //     content: `
  // "Pawprints of Love" is a collection of heartwarming stories and cherished moments shared by pet owners and their furry companions. These stories are a testament to the love, joy, and special bond that exists between humans and animals.

  // Each story in this collection showcases the unique and beautiful relationships that have formed between pets and their owners. From the mischievous antics of kittens to the unwavering loyalty of dogs, these tales are a tribute to the extraordinary experiences that come with sharing our lives with animals.

  // We invite you to read these stories and join us in celebrating the furry friends who bring so much happiness into our lives. Whether it's a playful kitten, a loyal dog, or a cuddly rabbit, every pet leaves pawprints of love on our hearts.

  // As you explore these stories, you'll witness the magic of companionship, the healing power of love, and the joy that comes from having a furry friend by your side. Each story is a reminder of the beauty of the bond between humans and animals.

  // So, take a moment to read, smile, and perhaps shed a tear of happiness as you immerse yourself in the heartwarming tales of "Pawprints of Love."
  //     `,
  //     comments: [
  //       {
  //         text: "These stories warmed my heart. Pets truly bring so much joy into our lives.",
  //         user: {
  //           name: "PetLoverForever",
  //           image: user5.src,
  //         },
  //       },
  //       {
  //         text: "I loved reading these heartwarming stories. Pets are family!",
  //         user: {
  //           name: "AnimalAdmirer",
  //           image: user2.src,
  //         },
  //       },
  //     ],
  //   },
  // ];

  const { id } = useParams();
  // console.log("🚀 ~ file: page.tsx:453 ~ Story ~ id:", typeof id);
  const {
    userx,
    setSelectedImage,
    selectedImage,
    setImageModalOpen,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  useEffect(() => {
    const getStory = async () => {
      const docRef = doc(db, "storys", String(id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:");
        setSelectedImage({ ...docSnap.data(), id: docSnap.id });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getStory();
  }, [id]);

  // const StoryData = StorysData.filter((Story: any) => Story.id === Number(id))[0];

  // State to handle adding comments
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to add a new comment
  // const handleAddComment = () => {
  //   if (newComment.trim() !== "") {
  //     const newCommentObj = {
  //       text: newComment,
  //       user: {
  //         name: "Your Name",
  //         image: "/path/to/your/image.jpg",
  //       },
  //     };
  //     setComments((prevComments) => [...prevComments, newCommentObj]);
  //     setNewComment("");
  //   }
  // };
  const fetchComments = async () => {
    try {
      if (id) {
        // Check if selectedImage.id is defined
        const q = query(collection(db, "comments"), where("imageId", "==", id));
        const querySnapshot = await getDocs(q);

        const fetchedComments: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });

        setComments(fetchedComments);
        console.log(
          "🚀 ~ file: page.tsx:512 ~ fetchComments ~ fetchedComments:",
          fetchedComments
        );
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    id && fetchComments();
  }, [id]);

  const removeImage = async () => {
    console.log("lets delete", comments);
    try {
      // Step 2: Iterate through the comments and delete each comment document
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });
      console.log(
        "🚀 ~ file: page.tsx:598 ~ comments.forEach ~ deleteCommentPromises:"
      );

      // Step 3: Delete the selected image document
      const deleteImagePromise = deleteDoc(doc(db, "storys", selectedImage.id)); // Assuming 'petImages' is the collection name for images

      // Wait for all comment deletions to complete
      await Promise.all(deleteCommentPromises);

      // After all comments are deleted, delete the image
      await deleteImagePromise;

      // Optionally, you can handle success or show a message here
      console.log("Image and related comments deleted successfully.");
    } catch (error) {
      console.error("Error deleting image and related comments:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment) {
      if (updatedComment === null) {
        const commentRef = await addDoc(collection(db, "comments"), {
          comment: newComment,
          commenter: userx,
          imageId: id,
          timestamp: Date.now(),
          likes: [],
          dislikes: [],
        });
        let idx: any = id;
        try {
          await updateDoc(doc(db, "storys", idx), {
            commenters: arrayUnion(userx.id),
          });
        } catch (error) {
          console.log(
            "🚀 ~ file: ImageModal.tsx:106 ~ handleAddComment ~ error:",
            error
          );
        }
      } else {
        try {
          await updateDoc(doc(db, "comments", updatedComment), {
            comment: newComment,
          });
          setNewComment("");
          setUpdatedComment(null);
        } catch (error) {
          console.log("🚀 ~ file: page.tsx:236 ~ addAnswer ~ error:", error);
        }
      }
    }
    fetchComments();
    setNewComment("");
    setUpdatedComment(null);
  };

  const [updatedComment, setUpdatedComment] = useState<any>(null);

  const updateComment = async (reply: any) => {
    setNewComment(reply.comment);
    setUpdatedComment(reply.id);
  };

  const updateLikes = async () => {
    const likeRef = doc(db, "storys", String(id));
    const documentSnapshot = await getDoc(likeRef);
    const petImageData = documentSnapshot.data();

    try {
      // Get the current document data

      if (petImageData) {
        const currentLikes = petImageData.likes || [];
        console.log(
          "🚀 ~ file: page.tsx:561 ~ updateLikes ~ currentLikes:",
          currentLikes
        );

        // Check if userToAdd is already in the array
        if (currentLikes.includes(userx.id)) {
          // Remove the user from the array on the client side
          const updatedLikes = currentLikes.filter(
            (userId: any) => userId !== userx.id
          );

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, likes: updatedLikes });

          // Update the document on Firestore in the background
          await updateDoc(likeRef, { likes: updatedLikes });

          console.log("Like removed successfully.");
        } else {
          // Add the user to the array on the client side
          const updatedLikes = [...currentLikes, userx.id];

          // Update the local data immediately
          setSelectedImage({ ...selectedImage, likes: updatedLikes });

          // Update the document on Firestore in the background
          await updateDoc(likeRef, { likes: updatedLikes });

          console.log("Like added successfully.");
        }
      } else {
        console.log("Document not found or data is null.");
      }
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 bg-white">
      {/* Story Title */}
      <div className="h-fit">
        <StoryModal
          isOpen={uploadpetModalOpen}
          onClose={() => setUploadpetModalOpen(false)}
          story={selectedImage}
        />
        <h1 className="text-3xl font-bold mb-4">{selectedImage.title}</h1>

        {/* Writer's Information */}
        <div className="flex items-center mb-4 gap-2">
          {selectedImage.writer && selectedImage.writer.image ? (
            <Image
              src={selectedImage.writer.image}
              alt={selectedImage.writer.name}
              className="w-12 h-12 rounded-full mr-2 object-cover"
              width={500}
              height={500}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-sky-300"></div>
          )}
          <div className="flex flex-col">
            <span className="text-gray-600 scale-105 ">
              {selectedImage.writer && selectedImage.writer.name}
            </span>

            {/* <span className="text-green-900">26 July 2023</span> */}
          </div>
        </div>
        <p className="text-green-800 indent-4 ">
          {/* {new Date(
                selectedImage.createdAt.seconds * 1000
              ).toLocaleString()} */}
          {selectedImage.createdAt &&
            selectedImage.createdAt.toDate().toDateString()}
        </p>

        {/* Likes and Comments */}
        <div className="flex justify-between">
          <div className="my-6 flex items-center space-x-4 text-gray-600">
            <div
              className="flex items-center space-x-0 cursor-pointer group justify-center"
              onClick={updateLikes}
            >
              <span className="text-lg group-active:scale-150 group-hover:scale-125 -mt-1 transition-all duration-300">
                ❤️
              </span>
              <p>{selectedImage.likes && selectedImage.likes.length}</p>
            </div>
            <div
              className="flex items-center space-x-1 cursor-pointer group"
              onClick={scrollToComments}
            >
              <span className="text-lg group-active:scale-150 group-hover:scale-125 transition-all duration-300">
                💬
              </span>
              <p>{comments.length} Comments</p>
            </div>
          </div>

          {selectedImage && selectedImage?.writer?.id === userx.id && (
            <div className=" w-fit flex gap-3 md:gap-5 right-2 md:right-4">
              <button
                onClick={() => setUploadpetModalOpen(true)}
                className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
              >
                <span className="text-slate-300 text-base md:text-xl"></span>
                <AiOutlineEdit color={"#94a3b8"} size={24} />
              </button>
              <button
                onClick={removeImage}
                className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
              >
                <span className="text-slate-300 text-base md:text-xl"></span>
                <AiFillDelete color={"#94a3b8"} size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Story Image */}
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full rounded-lg mb-6"
        />

        {/* Story Content */}
        <div className="prose max-w-none">
          <div className="w-full mt-4">
            {parse(selectedImage.content ?? "")}
          </div>
          {/* <ReactMarkdown>{selectedImage.content}</ReactMarkdown> */}
        </div>
      </div>
      {/* Add Comment */}
      <div className="mt-12">
        {userx.id && (
          <div className="flex items-start space-x-4">
            {userx.image ? (
              <Link href="/profile" target="_blank" rel="noopener noreferrer">
                <img
                  src={userx.image}
                  alt="Your Name"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            ) : (
              <div className="w-12 h-12 rounded-full bg-sky-300 px-3"></div>
            )}
            <div className="flex flex-col  space-y-4 w-full">
              <textarea
                className="flex-grow border rounded-lg px-4 py-2  focus:outline-none focus:ring focus:border-blue-300"
                rows={3}
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
                onClick={handleAddComment}
              >
                Add Comment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comments */}
      <div className="mt-6" ref={commentsSectionRef}>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                {comment.commenter.image ? (
                  <Link
                    href={`/profile/${comment.commenter.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={comment.commenter.image}
                      alt={comment.commenter.name}
                      className="w-10 h-10 rounded-full object-cover"
                      width={500}
                      height={500}
                    />
                  </Link>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-emerald-300 px-3"></div>
                )}
                <span className="text-gray-600">
                  <Link
                    href={`/profile/${comment.commenter.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {comment.commenter.name}
                  </Link>
                </span>
              </div>
              {comment.commenter.id === userx.id && (
                <div className=" w-fit flex gap-3 md:gap-5 z-30 h-fit">
                  <button
                    onClick={() => updateComment(comment)}
                    className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                  >
                    <span className="text-base md:text-xl"></span>
                    <AiOutlineEdit color={"#a9aeb4"} size={24} />
                  </button>
                  <button
                    onClick={async () => {
                      await deleteDoc(doc(db, "comments", comment.id)).then(
                        () => fetchComments()
                      );
                    }}
                    className="text-xl md:text-3xl hover:scale-105 active:scale-110 transition-all duration-300"
                  >
                    <span className="text-base md:text-xl"></span>
                    <AiFillDelete color={"#a9aeb4"} size={24} />
                  </button>
                </div>
              )}{" "}
            </div>
            <p className="mt-2 text-gray-800 indent-4">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
