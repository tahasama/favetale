"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
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
import BlogModal from "../BlogModal";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
TimeAgo.addDefaultLocale(en);

import en from "javascript-time-ago/locale/en.json";

const Blog = () => {
  // const blogsData = [
  //   {
  //     id: 1,
  //     title: "Tips for Pet Care",
  //     excerpt: "Learn how to provide the best care for your beloved pets...",
  //     image: blog1.src,
  //     writer: {
  //       name: "John Doe",
  //       image: user4.src,
  //     },
  //     likes: 123,
  //     content: `
  // When it comes to caring for your beloved pets, there are a few essential tips that every pet owner should know. In this article, we'll cover some valuable advice to ensure your pets lead healthy and happy lives.

  // Before we dive into the tips, let's meet our writer, John Doe. John is a passionate animal lover and an experienced pet owner. He has dedicated his life to understanding the needs of pets and helping others provide the best care for their furry friends.

  // ---

  // ## Tip #1: Proper Nutrition

  // One of the fundamental aspects of pet care is providing them with a balanced diet. Consult your veterinarian to determine the right type of food for your pet's age, size, and breed. Remember to provide fresh water at all times.

  // ---

  // ## Tip #2: Regular Exercise

  // Pets, just like humans, need regular exercise to stay healthy and happy. Daily walks, playtime, and interactive toys are great ways to keep your pets active and engaged.

  // ---

  // ## Tip #3: Veterinary Care

  // Regular check-ups with the vet are crucial for preventive care. Vaccinations, flea and tick control, and dental health are areas that require professional attention. Keep your pet's vaccinations up to date and consult your vet about any concerns.

  // ---

  // ## Tip #4: Mental Stimulation

  // Pets, especially dogs and cats, need mental stimulation to prevent boredom and destructive behavior. Puzzle toys, treat-dispensing toys, and interactive playtime can keep your pet's mind engaged.

  // ---

  // ## Tip #5: Grooming and Hygiene

  // Proper grooming is essential for some pets. Regular brushing, baths, and nail trimming can help maintain your pet's health and appearance. Be sure to use appropriate grooming tools and techniques.

  // ---

  // We hope you find these tips helpful in providing the best care for your beloved pets. Remember, a happy and healthy pet is a joy to have around!

  //     `,
  //     comments: [
  //       {
  //         text: "Great tips for pet owners!",
  //         user: {
  //           name: "Alice Smith",
  //           image: user1.src,
  //         },
  //       },
  //       {
  //         text: "I found this really helpful. Thanks!",
  //         user: {
  //           name: "Bob Johnson",
  //           image: user3.src,
  //         },
  //       },
  //       {
  //         text: "Nice article! Keep up the good work.",
  //         user: {
  //           name: "Eva Wilson",
  //           image: user2.src,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "The Joy of Adopting a Rescue Pet",
  //     excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
  //     image: blog2.src,
  //     writer: {
  //       name: "Jane Smith",
  //       image: user3.src,
  //     },
  //     likes: 87,
  //     content: `
  // Adopting a rescue pet can be a rewarding experience for both you and your new furry friend. In this article, we'll explore the heartwarming journey of giving a forever home to a pet in need.

  // ---

  // ## Why Adopt a Rescue Pet?

  // Rescue pets come from various backgrounds, but they all share one thing: the need for a loving home. When you adopt a rescue pet, you not only give them a second chance at life but also gain a loyal and grateful companion.

  // ---

  // ## The Adoption Process

  // The process of adopting a rescue pet involves visiting local shelters or rescue organizations, meeting potential pets, and finding the perfect match for your family. It's a heartwarming journey that starts with a simple visit.

  // ---

  // ## The Bond that Forms

  // The bond between you and your rescue pet is unlike any other. These pets often show immense gratitude for their new lease on life, and the love they give in return is immeasurable.

  // ---

  // ## Overcoming Challenges

  // While rescue pets come with their unique challenges, the joy of seeing them transform and thrive in a loving environment is worth every effort. Patience and understanding go a long way in helping your new pet adjust to their forever home.

  // ---

  // ## Stories of Transformation

  // Many rescue pet owners have incredible stories of transformation to share. From shy and scared animals to confident and happy companions, the journey of adopting a rescue pet is filled with heartwarming moments.

  // ---

  // Whether you're considering adopting a rescue pet or have already welcomed one into your home, this article celebrates the joy of providing a second chance at life to a furry friend in need.

  //     `,
  //     comments: [
  //       {
  //         text: "I've always wanted to adopt a rescue pet. This article inspired me!",
  //         user: {
  //           name: "Emily Brown",
  //           image: user5.src,
  //         },
  //       },
  //       {
  //         text: "Rescue pets bring so much joy. Thanks for sharing!",
  //         user: {
  //           name: "Mark Davis",
  //           image: user3.src,
  //         },
  //       },
  //       // More comments for the second blog post
  //     ],
  //   },

  //   {
  //     id: 4,
  //     title: "Exploring the Benefits of Pet Socialization",
  //     excerpt:
  //       "Uncover the positive impact of socializing your pets with others...",
  //     image: blog4.src,
  //     writer: {
  //       name: "Emma Davis",
  //       image: user5.src,
  //     },
  //     likes: 92,
  //     content: `
  // Have you ever wondered why pet socialization is more than just playdates? In this article, we'll delve into the exciting world of pet socialization and discover the numerous benefits it offers to both pets and their owners.

  // ## The Importance of Socialization

  // Socialization is like a passport to the world for your pets. It helps them develop essential social skills, exposes them to different environments, people, and animals, and significantly reduces the likelihood of fear or aggression towards others.

  // But it's not just about mingling. Socialization lays the foundation for a harmonious coexistence between your pets and the world around them.

  // ## Playdates and Interaction

  // Organizing playdates for your pets isn't just about having fun (although it is a blast). It's also about promoting exercise, mental stimulation, and the development of social bonds. Imagine your pets making new friends, running through the grass, and sharing joyful moments—it's a recipe for happiness.

  // ## Overcoming Shyness

  // Is your pet shy or anxious? Socialization can work wonders. Gradual exposure to new experiences can help boost their confidence and reduce fear. It's like giving them the superpower of fearlessness, one adventure at a time.

  // ## Safe Environments

  // Safety is paramount during socialization. Ensure that your pet's social experiences happen in secure and supervised environments. The goal is to build positive associations and avoid overwhelming situations.

  // ## Real Stories, Real Impact

  // Let's hear from pet owners who've embraced pet socialization:

  // - **PetLover789:** "I've seen a remarkable change in my pet's behavior after socialization!"
  // - **AnimalAdvocate23:** "Emma Davis provides valuable insights. My pets love their playdates!"
  // - **HappyPetOwner2:** "I'm convinced that pet socialization is crucial for a happy, well-adjusted pet."

  // ## Join the Conversation

  // We want to hear from you too! Share your experiences with pet socialization or ask questions in the comments below. Let's build a community of pet lovers who understand the power of socialization.

  // In conclusion, pet socialization is more than just a trend—it's a transformative experience for your pets and an opportunity for you to connect with fellow pet enthusiasts. Embrace the benefits, embark on adventures, and watch your pets thrive in the social world!

  //     `,
  //     comments: [
  //       {
  //         text: "Socializing my pet has made a huge difference in their behavior.",
  //         user: {
  //           name: "Daniel Smith",
  //           image: user1.src,
  //         },
  //       },
  //       {
  //         text: "This article convinced me to enroll my pet in a socialization class. Great read!",
  //         user: {
  //           name: "Sophia Lee",
  //           image: user2.src,
  //         },
  //       },
  //       // More comments for the fourth blog post
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "The Healing Power of Pet Companionship",
  //     excerpt:
  //       "Discover how pets can bring comfort and healing to our lives...",
  //     image: blog5.src,
  //     writer: {
  //       name: "David Johnson",
  //       image: user5.src,
  //     },
  //     likes: 76,
  //     content: `
  // In a fast-paced world, pet companionship offers a sanctuary of solace and support. In this article, we'll explore the profound and transformative impact that pets can have on our lives, bringing healing and comfort when we need it most.

  // ## Unconditional Love and Support

  // Pets have an uncanny ability to sense our emotions and provide unwavering support. Their genuine love knows no bounds, offering comfort during life's most challenging moments. Whether it's a gentle purr, a wagging tail, or a loving nuzzle, pets have an innate sense of when we need them most.

  // ## Reducing Stress and Anxiety

  // Studies have shown that spending time with pets can reduce stress, lower blood pressure, and alleviate anxiety. The simple act of petting a dog or cuddling with a cat releases endorphins, our body's natural stress relievers. Having a furry friend by your side can be a source of consistent calm in a chaotic world.

  // ## A Shoulder to Lean On

  // Pet companionship can be especially comforting during times of grief and loss. Pets offer a non-judgmental presence and a safe space to express our emotions. They listen without interruption, providing solace through the power of companionship.

  // ## Fostering Connection

  // Pets are social catalysts, connecting us with like-minded individuals and fostering a sense of community. Whether you're bonding with fellow pet owners at the park or discussing pet-related topics online, pets have a unique way of bringing people together.

  // ## Stories of Healing

  // Let's hear from individuals who have experienced the healing power of pet companionship:

  // - **Grace Morrison:** "After a tough year, adopting my cat was a turning point in my life. Her affection and presence brought light back into my days."

  // - **David Mitchell:** "My dog helped me through some of the darkest days of my life. His unwavering companionship gave me strength when I needed it most."

  // - **Sophia Lee:** "Being part of a pet community has introduced me to incredible people who share my passion. The support and friendships I've found are invaluable."

  // ## Share Your Story

  // We believe in the therapeutic power of pet companionship, and we want to hear your stories. Share your experiences, challenges, and moments of healing in the comments below. Together, we can celebrate the incredible bond between pets and their human companions.

  // In conclusion, the healing power of pet companionship is a testament to the profound impact animals can have on our emotional well-being. May your journey with your beloved pets be filled with love, healing, and shared moments of joy.

  //     `,
  //     comments: [
  //       {
  //         text: "Pets have truly been my source of comfort during difficult times.",
  //         user: {
  //           name: "Isabella Brown",
  //           image: user3.src,
  //         },
  //       },
  //       {
  //         text: "I've experienced the healing power of pet companionship firsthand. Thanks for sharing!",
  //         user: {
  //           name: "Matthew Wilson",
  //           image: user2.src,
  //         },
  //       },
  //       // More comments for the fifth blog post
  //     ],
  //   },

  //   // You can continue to add more blog posts in the same structure
  // ];

  const { id } = useParams();
  const {
    userx,
    setSelectedImage,
    selectedImage,
    uploadpetModalOpen,
    setUploadpetModalOpen,
  } = useCart();

  useEffect(() => {
    const getBlog = async () => {
      const docRef = doc(db, "blogs", String(id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedImage({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("No such document!");
      }
    };
    getBlog();
  }, [id]);

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchComments = async () => {
    try {
      if (id) {
        const q = query(collection(db, "comments"), where("imageId", "==", id));
        const querySnapshot = await getDocs(q);

        const fetchedComments: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedComments.push({ id: doc.id, ...doc.data() });
        });

        setComments(fetchedComments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    id && fetchComments();
  }, [id]);

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
          await updateDoc(doc(db, "blogs", idx), {
            commenters: arrayUnion(userx.id),
          });
        } catch (error) {}
      } else {
        try {
          await updateDoc(doc(db, "comments", updatedComment), {
            comment: newComment,
          });
          setNewComment("");
          setUpdatedComment(null);
        } catch (error) {
          console.log(error);
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
    const likeRef = doc(db, "blogs", String(id));
    const documentSnapshot = await getDoc(likeRef);
    const petImageData = documentSnapshot.data();

    try {
      if (petImageData) {
        const currentLikes = petImageData.likes || [];

        if (currentLikes.includes(userx.id)) {
          const updatedLikes = currentLikes.filter(
            (userId: any) => userId !== userx.id
          );

          setSelectedImage({ ...selectedImage, likes: updatedLikes });
          await updateDoc(likeRef, { likes: updatedLikes });
        } else {
          const updatedLikes = [...currentLikes, userx.id];

          setSelectedImage({ ...selectedImage, likes: updatedLikes });

          await updateDoc(likeRef, { likes: updatedLikes });
        }
      } else {
        console.log("Document not found or data is null.");
      }
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const removeImage = async () => {
    try {
      const deleteCommentPromises: any[] = [];
      comments.forEach((commentDoc: any) => {
        const deleteCommentPromise = deleteDoc(
          doc(db, "comments", commentDoc.id)
        );
        deleteCommentPromises.push(deleteCommentPromise);
      });

      const deleteImagePromise = deleteDoc(doc(db, "blogs", selectedImage.id));

      await Promise.all(deleteCommentPromises);
      await deleteImagePromise;
    } catch (error) {
      console.error("Error deleting image and related comments:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-6 bg-white">
      <div className="h-fit relative">
        <BlogModal
          isOpen={uploadpetModalOpen}
          onClose={() => setUploadpetModalOpen(false)}
          blog={selectedImage}
        />
        <h1 className="text-3xl font-bold mb-4">{selectedImage.title}</h1>

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
          </div>
        </div>
        <p className="text-green-800 indent-4 ">
          {selectedImage.createdAt &&
            selectedImage.createdAt.toDate().toDateString()}
        </p>

        <div className="flex justify-between">
          <div className="my-6 flex items-center space-x-4 text-gray-600">
            <div
              className="flex items-center space-x-0 cursor-pointer group justify-center"
              onClick={updateLikes}
            >
              <span className="text-lg group-active:scale-150 group-hover:scale-125 -mt-1 transition-all duration-300">
                👍
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
          {selectedImage &&
            selectedImage.writer &&
            selectedImage.writer.id === userx.id && (
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

        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full rounded-lg mb-6"
        />

        <div className="prose max-w-none">
          <div className="w-full mt-4">
            {parse(selectedImage.content ?? "")}
          </div>
        </div>
      </div>
      {userx.id && (
        <div className="mt-12">
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
        </div>
      )}

      <div className="mt-6" ref={commentsSectionRef}>
        {comments &&
          comments.map((comment, index) => (
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
                    </Link>{" "}
                    &nbsp;
                    <ReactTimeAgo
                      date={comment.timestamp}
                      className="text-sky-700 text-xs"
                      locale="en-US"
                    />
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
                )}
              </div>
              <p className="mt-2 text-gray-800 indent-4">{comment.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
