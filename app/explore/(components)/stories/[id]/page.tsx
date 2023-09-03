"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import user1 from "../../../../images/users/user1.jpg";
import user2 from "../../../../images/users/user2.jpg";
import user3 from "../../../../images/users/user3.jpg";
import user4 from "../../../../images/users/user4.jpg";
import user5 from "../../../../images/users/user5.jpg";

import story1 from "../../../../images/stories/story1.jpg";
import story2 from "../../../../images/stories/story2.jpg";
import story3 from "../../../../images/stories/story3.jpg";
import story4 from "../../../../images/stories/story4.jpg";
import story5 from "../../../../images/stories/story5.jpg";
import story6 from "../../../../images/stories/story6.jpg";
import story7 from "../../../../images/stories/story7.jpg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Story() {
  // Sample story data (replace with your own)
  const storiesData = [
    {
      id: 1,
      title: "My Rescue Journey with Bella",
      excerpt:
        "Read about my heartwarming journey with Bella, a shelter dog, as she found her forever home.",
      image: story1.src,
      writer: {
        name: "Bella's Best Friend",
        image: user1.src,
      },
      likes: 56,
      content: `
  My journey with Bella, the shelter dog, began with a visit to our local animal shelter. I had heard about her through a friend and was instantly drawn to her story.

  Bella was a beautiful soul, patiently waiting for a loving family to come into her life. Her eyes told a story of resilience and hope. I knew I had to be the one to give her a forever home.

  The day I brought Bella home marked the start of a transformation, not just for her but for both of us. She went from being a shelter dog to becoming an integral part of my life. Our bond grew stronger with each passing day.

  Bella's happiness radiated throughout our home. She enjoyed long walks in the park, cuddles on the couch, and a warm bed to sleep in every night. It was a journey filled with love and joy.

  Bella's story is a testament to the power of adoption and the incredible transformation that can occur when a shelter pet finds a loving family. She reminds me every day that every shelter animal deserves a chance at happiness.

  Join me in celebrating Bella's rescue journey, and may her story inspire others to open their hearts and homes to shelter pets in need.
      `,
      comments: [
        {
          text: "What a heartwarming story! Bella is so lucky to have found a loving family.",
          user: {
            name: "AnimalLover42",
            image: user2.src,
          },
        },
        {
          text: "Bella's story brought tears to my eyes. It's amazing how love can transform lives.",
          user: {
            name: "PetRescuer",
            image: user3.src,
          },
        },
      ],
    },
    {
      id: 2,
      title: "Max's Journey: From Stray to My Family",
      excerpt:
        "Discover my incredible journey with Max, a stray cat, as he transformed into a beloved family member.",
      image: story2.src,
      writer: {
        name: "Max's Proud Owner",
        image: user4.src,
      },
      likes: 78,
      content: `
  Max's journey from stray to family member is a story that I'm privileged to share. It all began when I spotted Max on the streets, a stray cat surviving on his own.

  My heart went out to Max, and I knew I had to make a difference in his life. I brought him home, and that marked the beginning of an incredible transformation.

  Max, once a wary and cautious stray, blossomed into a loving and affectionate cat. He found comfort in a warm home, delicious meals, and the gentle touch of our family. 

  The bond between Max and me grew stronger with each passing day. He became more than just a pet; he became a cherished family member. Max's journey is a reminder that even a stray cat can become an integral part of a family.

  Today, Max continues to inspire us with his resilience and love. His story showcases the power of second chances and the magic of transformation. Max is living proof that love can heal and bring happiness.

  Join me in celebrating Max's journey from stray to family, and may his story encourage others to rescue animals in need.
      `,
      comments: [
        {
          text: "Max's story is a beautiful reminder that every stray deserves a loving home. Thank you for sharing.",
          user: {
            name: "CatLover88",
            image: user5.src,
          },
        },
        {
          text: "I'm in awe of Max's transformation. It just goes to show how love can heal and bring happiness.",
          user: {
            name: "RescueAdvocate",
            image: user1.src,
          },
        },
      ],
    },
    {
      id: 3,
      title: "My Unbreakable Bond with Luna",
      excerpt:
        "Explore the extraordinary bond between me and my service dog, Luna, as we conquer life's challenges together.",
      image: story3.src,
      writer: {
        name: "Luna's Companion",
        image: user3.src,
      },
      likes: 92,
      content: `
  My journey with Luna, my beloved service dog, is a testament to the unbreakable bond between humans and their furry companions. Luna came into my life during a time of need, and she has since become my greatest source of strength and support.

  Luna isn't just a service dog; she's my confidante, my protector, and my best friend. Together, we've faced life's challenges with unwavering determination. Her loyalty and devotion are a constant source of inspiration.

  Luna has been trained to assist me with various tasks, but her role in my life goes beyond her training. She provides emotional support and an incredible sense of companionship. With Luna by my side, I've been able to overcome obstacles I never thought possible.

  Our adventures together are filled with laughter, joy, and the kind of companionship that words can't fully capture. Luna has touched my heart in ways I never imagined, and I'm grateful for every moment we share.

  Luna's story is a reminder of the profound impact that service animals can have on the lives of individuals with disabilities. She has not only made my life better but also brighter.

  Join me in celebrating the unbreakable bond between Luna and me, and may her story inspire others to appreciate the incredible role that service animals play in our lives.
      `,
      comments: [
        {
          text: "Your bond with Luna is truly remarkable. She's an amazing companion.",
          user: {
            name: "ServiceDogHero",
            image: user4.src,
          },
        },
        {
          text: "Luna's story touched my heart. Thank you for sharing your journey with us.",
          user: {
            name: "InspiredReader",
            image: user1.src,
          },
        },
      ],
    },
    {
      id: 4,
      title: "Pawprints of Love: Celebrating Our Moments",
      excerpt:
        "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
      image: story4.src,
      writer: {
        name: "FurryFriendLover",
        image: user3.src,
      },
      likes: 124,
      content: `
  "Pawprints of Love" is a collection of heartwarming stories and cherished moments shared by pet owners and their furry companions. These stories are a testament to the love, joy, and special bond that exists between humans and animals.

  Each story in this collection showcases the unique and beautiful relationships that have formed between pets and their owners. From the mischievous antics of kittens to the unwavering loyalty of dogs, these tales are a tribute to the extraordinary experiences that come with sharing our lives with animals.

  We invite you to read these stories and join us in celebrating the furry friends who bring so much happiness into our lives. Whether it's a playful kitten, a loyal dog, or a cuddly rabbit, every pet leaves pawprints of love on our hearts.

  As you explore these stories, you'll witness the magic of companionship, the healing power of love, and the joy that comes from having a furry friend by your side. Each story is a reminder of the beauty of the bond between humans and animals.

  So, take a moment to read, smile, and perhaps shed a tear of happiness as you immerse yourself in the heartwarming tales of "Pawprints of Love."
      `,
      comments: [
        {
          text: "These stories warmed my heart. Pets truly bring so much joy into our lives.",
          user: {
            name: "PetLoverForever",
            image: user5.src,
          },
        },
        {
          text: "I loved reading these heartwarming stories. Pets are family!",
          user: {
            name: "AnimalAdmirer",
            image: user2.src,
          },
        },
      ],
    },
  ];

  const { id } = useParams();

  const storyData = storiesData.filter(
    (blog: any) => blog.id === Number(id)
  )[0];

  // State to handle adding comments
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(storyData.comments);

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(storyData.likes);

  const commentsSectionRef = useRef<any>(null);

  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        text: newComment,
        user: {
          name: "Your Name",
          image: user1.src,
        },
      };
      setComments((prevComments: any) => [...prevComments, newCommentObj]);
      setNewComment("");
    }
  };

  const toggleLike = () => {
    if (liked) {
      // Unlike
      setLikesCount(likesCount - 1);
    } else {
      // Like
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-24 bg-white">
      {/* Story Title */}
      <h1 className="text-3xl font-bold mb-4">{storyData.title}</h1>

      {/* Author and Date */}
      <div className="flex items-center mb-4 gap-2">
        <Image
          src={storyData.writer.image}
          alt={storyData.writer.name}
          className="w-12 h-12 rounded-full mr-2 object-cover"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <span className="text-gray-600 scale-105">
            {storyData.writer.name}
          </span>
          <span className="text-green-900">26 July 2023</span>
        </div>
      </div>

      {/* Likes and Comments */}
      <div className="my-6 flex items-center space-x-4 text-gray-600">
        <div
          className="flex items-center space-x-2 cursor-pointer group justify-center"
          onClick={toggleLike}
        >
          <span className="text-lg group-active:scale-150 group-hover:translate-x-1 -mt-1 transition-all duration-300">
            ❤️
          </span>
          <p>{likesCount}</p>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={scrollToComments}
        >
          <span className="text-lggroup-active:scale-150 group-hover:translate-x-1 transition-all duration-300">
            💬
          </span>
          <p>{comments.length} Comments</p>
        </div>
      </div>

      {/* Story Image */}
      <div className="relative w-full h-[300px] md:h-[500px] mt-7">
        <Image
          src={storyData.image}
          alt={storyData.title}
          className="w-full h-full object-cover rounded-lg"
          width={2000}
          height={700}
        />
      </div>

      {/* Story Content */}
      <div className="prose max-w-none mt-8 indent-5">
        <ReactMarkdown
          children={storyData.content}
          remarkPlugins={[remarkGfm]}
        />
      </div>

      {/* Add Comment */}
      <div className="mt-6">
        <div className="flex space-x-4 items-center">
          <Image
            src={user1.src}
            alt="Your Name"
            className="w-14 h-14 rounded-full object-cover"
            width={500}
            height={500}
          />
          <div className="flex-grow">
            <textarea
              className="w-full border rounded-lg px-4 py-1.5 focus:outline-none focus:ring focus:border-blue-300"
              rows={3}
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-7 -mt-1.5 rounded"
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>
      </div>

      {/* Comments */}
      <div
        className="mt-8 border-t border-gray-300 pt-4"
        ref={commentsSectionRef}
      >
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex space-x-4">
              <Image
                src={comment.user.image}
                alt={comment.user.name}
                className="w-12 h-12 rounded-full object-cover"
                width={500}
                height={500}
              />
              <div className="flex flex-col">
                <Link
                  href={`/profile/${comment.user.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-600 font-medium">
                    {comment.user.name}
                  </span>
                </Link>
                <p className="text-gray-800">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
