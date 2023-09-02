"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blog = () => {
  const blogsData = [
    {
      id: 1,
      title: "Tips for Pet Care",
      excerpt: "Learn how to provide the best care for your beloved pets...",
      image: "/path/to/your/image1.jpg",
      writer: {
        name: "John Doe",
        image: "/path/to/writer1/image.jpg",
      },
      likes: 123,
      content: `
# Tips for Pet Care

![Pet Care](/path/to/your/image1.jpg)

When it comes to caring for your beloved pets, there are a few essential tips that every pet owner should know. In this article, we'll cover some valuable advice to ensure your pets lead healthy and happy lives.

## Meet Our Writer: John Doe

![John Doe](/path/to/writer1/image.jpg)

Before we dive into the tips, let's meet our writer, John Doe. John is a passionate animal lover and an experienced pet owner. He has dedicated his life to understanding the needs of pets and helping others provide the best care for their furry friends.

// Rest of the content (similar structure as the previous post)
      `,
      comments: [
        {
          text: "Great tips for pet owners!",
          user: {
            name: "Alice Smith",
            image: "/path/to/user1/image.jpg",
          },
        },
        {
          text: "I found this really helpful. Thanks!",
          user: {
            name: "Bob Johnson",
            image: "/path/to/user2/image.jpg",
          },
        },
        {
          text: "Nice article! Keep up the good work.",
          user: {
            name: "Eva Wilson",
            image: "/path/to/user3/image.jpg",
          },
        },
      ],
    },
    {
      id: 2,
      title: "The Joy of Adopting a Rescue Pet",
      excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
      image: "/path/to/your/image2.jpg",
      writer: {
        name: "Jane Smith",
        image: "/path/to/writer2/image.jpg",
      },
      likes: 87,
      content: `
# The Joy of Adopting a Rescue Pet
    
![Adopting a Rescue Pet](/path/to/your/image2.jpg)
    
Adopting a rescue pet is a heartwarming journey that not only changes the life of the pet but also brings immeasurable joy to the adopter. In this article, we'll explore the wonderful world of rescue pets and the transformative experiences of their adoptive families.
    
## Meet Our Writer: Emily White
    
![Emily White](/path/to/writer2/image.jpg)
    
Let's introduce our writer, Emily White, a passionate advocate for animal welfare. Emily has spent years volunteering at animal shelters and has firsthand experience with the incredible bonds that form between rescue pets and their new families.
    
## The Decision to Adopt
    
Deciding to adopt a rescue pet is a significant choice that can have a profound impact on your life. It's a decision to provide a loving home to an animal in need. Many people find that rescue pets bring a unique kind of joy and gratitude into their homes.
    
## The Journey Begins
    
The journey of adopting a rescue pet often starts with a visit to a local animal shelter or rescue organization. There, you'll meet animals of all sizes, breeds, and backgrounds, each with their own unique story.
    
## The Bond That Forms
    
The bond between a rescue pet and their adoptive family is a special one. Many adopters find that their rescue pet seems to understand that they've been given a second chance at life. The love and loyalty that rescue pets offer are truly heartwarming.
    
## Challenges and Rewards
    
While adopting a rescue pet can be incredibly rewarding, it's essential to understand that rescue animals may have experienced trauma or neglect in the past. Patience, training, and love are key to helping them adjust to their new home.
    
## Likes and Comments
    
This article has received 84 likes from our readers. Here are some comments from our community:
    
1. PetRescuer123: "Thank you for shedding light on the importance of rescue pets!"
2. AnimalLover99: "I adopted my dog from a shelter, and it's been the best decision I've ever made."
3. NewPetOwner45: "I'm about to adopt a rescue cat. This article has given me confidence."
      
We hope this article inspires you to consider adopting a rescue pet and experiencing the joy it can bring to your life.
    
      `,
      comments: [
        {
          text: "I've always wanted to adopt a rescue pet. This article inspired me!",
          user: {
            name: "Emily Brown",
            image: "/path/to/user4/image.jpg",
          },
        },
        {
          text: "Rescue pets bring so much joy. Thanks for sharing!",
          user: {
            name: "Mark Davis",
            image: "/path/to/user5/image.jpg",
          },
        },
        // More comments for the second blog post
      ],
    },
    // Repeat the structure for the remaining blog posts
    {
      id: 3,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt:
        "Transform your living space into a safe and welcoming haven for your pets...",
      image: "/path/to/your/image3.jpg",
      writer: {
        name: "Sarah Williams",
        image: "/path/to/writer3/image.jpg",
      },
      likes: 56,
      content: `
# Creating a Pet-Friendly Home Environment
# Hello, *world*!

![Pet-Friendly Home](/path/to/your/image3.jpg)

Your home is not just your space; it's your pet's space too. Creating a pet-friendly home environment ensures that your furry friends can roam freely and safely while enjoying every corner of your abode.

## Meet Our Writer: Sarah Williams

![Sarah Williams](/path/to/writer3/image.jpg)

Before we embark on the journey of creating a pet-friendly home, let's get to know our writer, Sarah Williams. Sarah is an interior designer with a passion for incorporating pet-friendly elements into home decor.

## Safety First

The safety of your pets is a top priority. Remove or secure any hazards that could harm them, such as toxic plants, chemicals, or small objects that can be swallowed. Consider installing safety gates to restrict access to certain areas.

## Comfortable Zones

Create comfortable zones where your pets can relax and enjoy their time. Provide cozy beds, cushions, or blankets for them to lounge on. Cats often appreciate elevated perches, while dogs may prefer a comfy spot by the window.

## Pet-Friendly Furniture

Invest in pet-friendly furniture that can withstand wear and tear. Choose materials that are easy to clean and resist scratching. Leather, microfiber, and certain outdoor fabrics are excellent choices.

## Playtime and Exercise

Dedicate space for playtime and exercise. Cats love climbing structures and interactive toys, while dogs need room to run and play. Ensure there's ample space for your pets to stay active.

## Likes and Comments

This article has received 56 likes from our readers. Here are some comments from our community:

1. PetLover456: "I've been thinking about pet-proofing my home. These tips are fantastic!"
2. AnimalEnthusiast: "Creating a pet-friendly home environment is essential for their well-being."
3. HappyPetOwner1: "Sarah Williams has some great insights. I'm revamping my home now!"

We hope these tips help you create a welcoming and pet-friendly home environment that both you and your pets will love.

      `,
      comments: [
        {
          text: "I never thought about pet-proofing my home. Thanks for the tips!",
          user: {
            name: "Olivia Rodriguez",
            image: "/path/to/user6/image.jpg",
          },
        },
        {
          text: "My pets love the changes I made to my home after reading this article.",
          user: {
            name: "Michael Clark",
            image: "/path/to/user7/image.jpg",
          },
        },
        // More comments for the third blog post
      ],
    },
    {
      id: 4,
      title: "Exploring the Benefits of Pet Socialization",
      excerpt:
        "Uncover the positive impact of socializing your pets with others...",
      image: "/path/to/your/image4.jpg",
      writer: {
        name: "Emma Davis",
        image: "/path/to/writer4/image.jpg",
      },
      likes: 92,
      content: `
# Exploring the Benefits of Pet Socialization

![Pet Socialization](/path/to/your/image4.jpg)

Socializing your pets is more than just playdates; it's an essential aspect of their well-being. In this article, we'll delve into the numerous benefits of pet socialization and how it can positively impact your furry companions.

## Meet Our Writer: Emma Davis

![Emma Davis](/path/to/writer4/image.jpg)

Before we explore the world of pet socialization, let's meet our writer, Emma Davis. Emma is a certified pet behaviorist with a passion for helping pet owners foster positive relationships between their pets and others.

## The Importance of Socialization

Socialization helps pets develop critical social skills. It exposes them to different environments, people, and animals, reducing the likelihood of fear or aggression towards others.

## Playdates and Interaction

Organize playdates for your pets with other well-behaved animals. These interactions promote exercise, mental stimulation, and the development of social bonds.

## Overcoming Shyness

For shy or anxious pets, socialization can be transformative. Gradual exposure to new experiences can boost their confidence and reduce fear.

## Safe Environments

Ensure that socialization occurs in safe and supervised environments. Gradually introduce your pets to new situations to avoid overwhelming them.

## Likes and Comments

This article has received 92 likes from our readers. Here are some comments from our community:

1. PetLover789: "I've seen a remarkable change in my pet's behavior after socialization!"
2. AnimalAdvocate23: "Emma Davis provides valuable insights. My pets love their playdates!"
3. HappyPetOwner2: "I'm convinced that pet socialization is crucial for a happy, well-adjusted pet."

We hope this article encourages you to explore the benefits of pet socialization and enhance the lives of your beloved pets.
    
      `,
      comments: [
        {
          text: "Socializing my pet has made a huge difference in their behavior.",
          user: {
            name: "Daniel Smith",
            image: "/path/to/user8/image.jpg",
          },
        },
        {
          text: "This article convinced me to enroll my pet in a socialization class. Great read!",
          user: {
            name: "Sophia Lee",
            image: "/path/to/user9/image.jpg",
          },
        },
        // More comments for the fourth blog post
      ],
    },
    {
      id: 5,
      title: "The Healing Power of Pet Companionship",
      excerpt:
        "Discover how pets can bring comfort and healing to our lives...",
      image: "/path/to/your/image5.jpg",
      writer: {
        name: "David Johnson",
        image: "/path/to/writer5/image.jpg",
      },
      likes: 76,
      content: `
      # The Healing Power of Pet Companionship
    
      ![Pet Companionship](/path/to/your/image5.jpg)
    
      There's a profound connection between humans and their pets that goes beyond words. In this article, we'll explore the incredible healing power of pet companionship and how it can bring comfort to our lives.
    
      ## Meet Our Writer: David Johnson
    
      ![David Johnson](/path/to/writer5/image.jpg)
    
      Before we delve into the healing power of pet companionship, let's meet our writer, David Johnson. David is a therapist who often incorporates pet therapy into his sessions, witnessing firsthand the positive effects it has on individuals.
    
      ## A Source of Comfort
    
      Pets have an innate ability to provide comfort to their owners. Their presence alone can reduce stress, anxiety, and feelings of loneliness.
    
      ## Unconditional Love
    
      The unconditional love and companionship of pets can be particularly healing during difficult times, providing emotional support and a sense of purpose.
    
      ## A Listening Ear
    
      Pets are excellent listeners. Talking to them can be therapeutic, allowing individuals to express their thoughts and feelings without judgment.
    
      ## Mind-Body Connection
    
      Studies have shown that petting or cuddling with a pet can release oxytocin, a hormone associated with bonding and reduced stress.
    
      ## Likes and Comments
    
      This article has received 76 likes from our readers. Here are some comments from our community:
    
      1. PetTherapist1: "I've witnessed the healing power of pet therapy in my practice. It's incredible!"
      2. AnimalLover4567: "My pet has been my rock during challenging times. This article resonates with me."
      3. HopefulHeart22: "David Johnson's insights are enlightening. Pets truly have a healing presence."
    
      We hope this article sheds light on the remarkable healing power of pet companionship and encourages you to cherish the bond with your own pets.
    
      `,
      comments: [
        {
          text: "Pets have truly been my source of comfort during difficult times.",
          user: {
            name: "Isabella Brown",
            image: "/path/to/user10/image.jpg",
          },
        },
        {
          text: "I've experienced the healing power of pet companionship firsthand. Thanks for sharing!",
          user: {
            name: "Matthew Wilson",
            image: "/path/to/user11/image.jpg",
          },
        },
        // More comments for the fifth blog post
      ],
    },
    {
      id: 6,
      title: "Preparing for a New Puppy: Tips for First-Time Owners",
      excerpt:
        "Get ready to welcome a new puppy into your home with these helpful tips...",
      image: "/path/to/your/image6.jpg",
      writer: {
        name: "Laura Anderson",
        image: "/path/to/writer6/image.jpg",
      },
      likes: 105,
      content: `
      # Preparing for a New Puppy: Tips for First-Time Owners
    
      ![New Puppy](/path/to/your/image6.jpg)
    
      The anticipation of bringing home a new puppy is incredibly exciting. In this article, we'll provide valuable tips for first-time puppy owners to ensure a smooth and joyful transition.
    
      ## Meet Our Writer: Laura Anderson
    
      ![Laura Anderson](/path/to/writer6/image.jpg)
    
      Before we dive into preparing for a new puppy, let's meet our writer, Laura Anderson. Laura is a seasoned dog trainer and breeder who specializes in helping new puppy owners navigate the early stages of puppyhood.
    
      ## Puppy-Proofing Your Home
    
      Puppy-proofing is crucial to ensure your new family member's safety. Remove hazards, secure cords, and designate a safe space for your puppy to explore.
    
      ## Essential Supplies
    
      Stock up on essential puppy supplies, including food, bowls, a crate, leash, collar, toys, and grooming tools.
    
      ## House Training
    
      Prepare for house training by establishing a routine, setting up a designated potty area, and using positive reinforcement.
    
      ## Socialization
    
      Early socialization is key to a well-adjusted adult dog. Introduce your puppy to various people, animals, and environments.
    
      ## Likes and Comments
    
      This article has received 105 likes from our readers. Here are some comments from our community:
    
      1. NewPuppyOwner123: "I'm bringing home a new puppy soon. These tips are a lifesaver!"
      2. DogLover7890: "Laura Anderson's expertise shines through in this article. Thanks for sharing your knowledge!"
      3. ExcitedPuppyParent: "I had no idea how much preparation goes into bringing home a new puppy. This article has been eye-opening."
    
      We hope these tips help you prepare for the arrival of your new puppy and set the foundation for a loving and fulfilling companionship.
    
      `,
      comments: [
        {
          text: "I'm about to get my first puppy, so these tips are invaluable!",
          user: {
            name: "Noah Garcia",
            image: "/path/to/user12/image.jpg",
          },
        },
        {
          text: "Great article for first-time puppy owners like me. Thanks!",
          user: {
            name: "Ava Martin",
            image: "/path/to/user13/image.jpg",
          },
        },
        // More comments for the sixth blog post
      ],
    },
    // You can continue to add more blog posts in the same structure
  ];

  const { id } = useParams();
  console.log("🚀 ~ file: page.tsx:406 ~ Blog ~ id:", id);

  const blogData = blogsData.filter((blog: any) => blog.id === Number(id))[0];
  console.log("🚀 ~ file: page.tsx:407 ~ Blog ~ post:", blogData);

  return (
    <div className="max-w-3xl mx-auto p-4 mt-24 bg-white">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>

      {/* Writer's Information */}
      <div className="flex items-center mb-4">
        <img
          src={blogData.writer.image}
          alt={blogData.writer.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-gray-600">{blogData.writer.name}</span>
      </div>

      {/* Blog Image */}
      <img
        src={blogData.image}
        alt={blogData.title}
        className="w-full rounded-lg mb-6"
      />

      {/* Blog Content */}
      <div className="prose max-w-none">
        <ReactMarkdown
          children={blogData.content}
          remarkPlugins={[remarkGfm]}
        />
      </div>

      {/* Likes and Comments */}
      <div className="mt-6 flex items-center space-x-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>{blogData.likes}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>{blogData.comments.length} Comments</span>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-6">
        {blogData.comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={comment.user.image}
                alt={comment.user.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-600">{comment.user.name}</span>
            </div>
            <p className="mt-2 text-gray-800">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
