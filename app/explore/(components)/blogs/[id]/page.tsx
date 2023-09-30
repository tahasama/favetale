"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import Link from "next/link";

import {
  FieldValue,
  addDoc,
  collection,
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
  //     id: 3,
  //     title: "Creating a Pet-Friendly Home Environment",
  //     excerpt:
  //       "Transform your living space into a safe and welcoming haven for your pets...",
  //     image: blog3.src,
  //     writer: {
  //       name: "Sarah Williams",
  //       image: user5.src,
  //     },
  //     likes: 56,
  //     content: `
  // When you bring a pet into your home, you're not just providing them with shelter; you're welcoming them into your family. To ensure their well-being and happiness, it's essential to create a pet-friendly home environment. In this article, we'll explore various aspects of making your home the perfect space for your furry friend.

  // ## Safety First

  // Safety is a top priority when it comes to your pets. Start by identifying and securing potential hazards. Remove toxic substances, secure electrical cords, and ensure that your trash cans have lids.

  // ## Comfortable Sleeping Areas

  // Every pet needs a comfortable and cozy place to rest. Whether it's a plush bed for your dog or a warm nook for your cat, these designated sleeping areas should be their safe havens for relaxation.

  // ## Pet-Friendly Furniture

  // Invest in pet-friendly furniture that's resistant to scratches and easy to clean. This allows your pets to share your living space without causing damage.

  // ## Interactive Toys

  // Stimulate your pets' minds and keep them engaged with interactive toys. Look for toys that dispense treats or challenge them mentally. These toys can provide hours of entertainment and mental exercise.

  // ## Designated Play Zones

  // Set up designated play zones where your pets can have fun without restrictions. These areas can include scratching posts, climbing structures, and a variety of toys. These zones encourage play and help your pets burn off excess energy.

  // ## Outdoor Access

  // If you have outdoor space, create a secure area for your pets to enjoy the fresh air. Ensure that the area is escape-proof and offers shade and water. Outdoor access allows your pets to explore and exercise outdoors safely.

  // ## Regular Exercise

  // Exercise is crucial for your pets' physical and mental health. Make time for daily walks, playtime, and activities that cater to their natural instincts. Regular exercise contributes to a happy and healthy pet.

  // ## Love and Attention

  // Above all, your pets crave your love and attention. Spend quality time with them, show affection, and build strong bonds. The love you give is reciprocated in ways that make your home feel complete.

  // In conclusion, creating a pet-friendly home environment is an act of love and care for your furry companions. It's about ensuring their safety, comfort, and happiness within your shared space. By following these tips, you'll provide a loving home that your pets will appreciate and thrive in.

  //           `,
  //     comments: [
  //       {
  //         text: "I never thought about pet-proofing my home. Thanks for the tips!",
  //         user: {
  //           name: "Olivia Rodriguez",
  //           image: user3.src,
  //         },
  //       },
  //       {
  //         text: "My pets love the changes I made to my home after reading this article.",
  //         user: {
  //           name: "Michael Clark",
  //           image: user2.src,
  //         },
  //       },
  //       // More comments for the third blog post
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
  //   {
  //     id: 6,
  //     title: "Preparing for a New Puppy: Tips for First-Time Owners",
  //     excerpt:
  //       "Get ready to welcome a new puppy into your home with these helpful tips...",
  //     image: blog6.src,
  //     writer: {
  //       name: "Laura Anderson",
  //       image: user1.src,
  //     },
  //     likes: 105,
  //     content: `
  // The decision to bring a new puppy into your home is an exciting one, but it also comes with responsibilities and preparations. In this article, we'll provide valuable tips for first-time puppy owners to ensure a smooth transition and a happy, healthy start for your new furry family member.

  // ## Choosing the Right Puppy

  // Before you bring a puppy home, take time to research and choose the right breed for your lifestyle. Consider factors such as size, energy level, and temperament. Visit reputable breeders or rescue organizations to find a puppy that suits your family.

  // ## Puppy-Proofing Your Home

  // Puppies are naturally curious, and they love to explore. Puppy-proof your home by removing hazards like toxic plants, chemicals, and small objects that could be swallowed. Use safety gates to restrict access to certain areas.

  // ## Preparing Supplies

  // Gather essential supplies before your puppy's arrival. These include:

  // - **Crate:** A safe and comfortable space for your puppy to rest and sleep.
  // - **Food and Water Bowls:** Choose stainless steel or ceramic bowls that are easy to clean.
  // - **Quality Puppy Food:** Consult your veterinarian for recommendations.
  // - **Leash and Collar:** Start leash training early for walks.
  // - **Toys:** Provide a variety of toys to keep your puppy mentally and physically engaged.
  // - **Puppy Training Pads:** Helpful for housebreaking.
  // - **Grooming Supplies:** Depending on the breed, you may need brushes, nail clippers, and shampoo.

  // ## Establishing Routine

  // Puppies thrive on routine. Establish a regular schedule for feeding, playtime, bathroom breaks, and sleep. Consistency helps with housebreaking and creates a sense of security for your puppy.

  // ## Socialization and Training

  // Early socialization is crucial for a well-adjusted adult dog. Introduce your puppy to various people, pets, and environments. Enroll in puppy training classes to build essential skills and strengthen your bond.

  // ## Vet Visits

  // Schedule a vet appointment shortly after bringing your puppy home. Your vet will set a vaccination schedule and discuss preventive care. Keep up with regular check-ups and vaccinations to ensure your puppy's health.

  // ## Patience and Love

  // Above all, remember that raising a puppy takes patience and love. Be prepared for occasional challenges, accidents, and puppy behavior. Offer praise and positive reinforcement to encourage good behavior.

  // ## Share Your Experience

  // Are you a seasoned dog owner with tips for first-time puppy parents? Share your insights in the comments below. Together, we can support and guide those embarking on this wonderful journey of puppy parenthood.

  // In conclusion, preparing for a new puppy is an exciting adventure filled with love and joy. With the right preparations, patience, and commitment, you'll provide your new furry friend with a happy and healthy start in your loving home.

  //     `,
  //     comments: [
  //       {
  //         text: "I'm about to get my first puppy, so these tips are invaluable!",
  //         user: {
  //           name: "Noah Garcia",
  //           image: user2.src,
  //         },
  //       },
  //       {
  //         text: "Great article for first-time puppy owners like me. Thanks!",
  //         user: {
  //           name: "Ava Martin",
  //           image: user3.src,
  //         },
  //       },
  //       // More comments for the sixth blog post
  //     ],
  //   },
  //   // You can continue to add more blog posts in the same structure
  // ];

  const { id } = useParams();
  // console.log("🚀 ~ file: page.tsx:453 ~ Blog ~ id:", typeof id);
  const { userx, setSelectedImage, selectedImage } = useCart();

  useEffect(() => {
    const getBlog = async () => {
      const docRef = doc(db, "blogs", String(id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:");
        setSelectedImage({ ...docSnap.data(), id: docSnap.data().id });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getBlog();
  }, [id]);

  // const blogData = blogsData.filter((blog: any) => blog.id === Number(id))[0];

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
          fetchedComments.push({ id: doc.data().id, ...doc.data() });
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

  const handleAddComment = async () => {
    if (newComment) {
      const commentRef = await addDoc(collection(db, "comments"), {
        comment: newComment,
        commenter: userx,
        imageId: id,
        timestamp: Date.now(),
        likes: [],
        dislikes: [],
      });
      // const newCommentId = commentRef.id;
    }
    fetchComments();
    setNewComment("");
  };

  const updateLikes = async () => {
    const likeRef = doc(db, "blogs", String(id));
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
    <div className="max-w-3xl mx-auto p-4 mt-24 bg-white">
      {/* Blog Title */}
      <div className="h-fit">
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
        <div className="my-6 flex items-center space-x-4 text-gray-600">
          <div
            className="flex items-center space-x-0 cursor-pointer group justify-center"
            onClick={updateLikes}
          >
            <span className="text-lg group-active:scale-150 group-hover:scale-125 -mt-1 transition-all duration-300">
              👍
            </span>
            <p>{selectedImage.likes.length}</p>
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

        {/* Blog Image */}
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full rounded-lg mb-6"
        />

        {/* Blog Content */}
        <div className="prose max-w-none">
          <div className="w-full mt-4">
            {parse(selectedImage.content ?? "")}
          </div>
          {/* <ReactMarkdown>{selectedImage.content}</ReactMarkdown> */}
        </div>
      </div>
      {/* Add Comment */}
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

      {/* Comments */}
      <div className="mt-6" ref={commentsSectionRef}>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4">
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
            <p className="mt-2 text-gray-800 indent-4">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
