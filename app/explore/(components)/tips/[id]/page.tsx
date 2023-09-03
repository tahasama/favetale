"use client";
import React, { useRef } from "react";

import veterinary from "../../../../images/coverImages/veterinary.jpg";
import food from "../../../../images/coverImages/food.jpg";
import sport from "../../../../images/coverImages/sport3.jpg";
import grooming from "../../../../images/coverImages/grooming.jpg";
import training from "../../../../images/coverImages/training.jpg";
import social from "../../../../images/coverImages/social.jpg";
import safe from "../../../../images/coverImages/safe2.jpg";
import care from "../../../../images/coverImages/care.jpg";
import para from "../../../../images/coverImages/para3.jpg";
import time from "../../../../images/coverImages/time.jpg";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useTransform, useScroll } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Tip = () => {
  const tipsData = [
    {
      id: 1,
      title: "Regular Veterinary Check-ups",
      description: `## Consistent Veterinary Check-ups: Ensuring Your Pet's Well-being

Consistent veterinary check-ups are fundamental to your pet's well-being. Just like humans, pets require regular medical attention to maintain good health and prevent potential issues. In this article, we'll explore the importance of these check-ups and why they should be a priority for every pet owner.

---

### Early Detection of Health Issues

Regular visits to the veterinarian allow for the early detection of health problems in your pet. Many illnesses and conditions can be asymptomatic in the early stages, meaning your pet may not display any obvious signs of discomfort or distress. A veterinarian, through thorough examination and diagnostic tests, can identify these issues before they escalate into more serious and potentially life-threatening conditions.

---

### Preventive Care

Veterinarians not only treat existing health problems but also provide preventive care. This includes vaccinations, flea and tick prevention, heartworm testing and prevention, and dental care. Preventive measures are crucial in ensuring your pet's long-term health and happiness. Your veterinarian can create a customized preventive care plan tailored to your pet's specific needs and lifestyle.

---

### Tailored Nutrition and Diet

Proper nutrition is a cornerstone of pet health. During veterinary check-ups, your veterinarian can assess your pet's nutritional needs based on factors such as age, breed, and activity level. They can recommend an appropriate diet to keep your pet at a healthy weight and address any dietary concerns or restrictions. Nutrition plays a significant role in your pet's overall well-being, and expert guidance ensures they receive the best possible care.

---

### Dental Health

Oral health is often overlooked but is critical to your pet's overall health. Dental problems can lead to pain, difficulty eating, and even systemic health issues. During check-ups, veterinarians can assess your pet's dental health and recommend dental cleanings or other treatments as needed. This proactive approach to dental care can prevent serious dental problems in the future.

---

### Behavior and Socialization

Veterinary check-ups also provide an opportunity to discuss your pet's behavior and socialization. If you have concerns about your pet's behavior or need advice on training and socializing, your veterinarian can offer guidance and recommend resources to address these issues. A well-adjusted and happy pet is less likely to develop behavior problems.

---

### Conclusion

Consistent veterinary check-ups are an essential part of responsible pet ownership. They not only ensure that your pet receives timely medical attention but also contribute to their overall quality of life. Remember to schedule regular appointments with your veterinarian and maintain open communication about your pet's health and well-being. By prioritizing these check-ups, you're taking a proactive approach to caring for your beloved companion and helping them live a longer, healthier life.
`,

      emoji: "🏥",
      coverImage: veterinary.src,
    },
    {
      id: 2,
      title: "Balanced Diet and Nutrition",
      description:
        "Provide a balanced diet that meets the nutritional needs of your pet.",
      emoji: "🍎",
      coverImage: food.src,
    },
    {
      id: 3,
      title: "Daily Exercise and Play",
      description:
        "Engage your pet in daily exercise and play href maintain physical and mental health.",
      emoji: "🏃‍♂️",
      coverImage: sport.src,
    },
    {
      id: 4,
      title: "Regular Grooming",
      description:
        "Practice regular grooming href keep your pet's coat and skin healthy.",
      emoji: "🛁",
      coverImage: grooming.src,
    },
    {
      id: 5,
      title: "Positive Reinforcement Training",
      description:
        "Use positive reinforcement methods href train and encourage good behavior in your pet.",
      emoji: "🐕",
      coverImage: training.src,
    },
    {
      id: 6,
      title: "Socialization Opportunities",
      description:
        "Expose your pet href various environments and socialization experiences.",
      emoji: "🐶",
      coverImage: social.src,
    },
    {
      id: 7,
      title: "Safe Environment",
      description: "Create a safe and secure environment for your pet at home.",
      emoji: "🏠",
      coverImage: safe.src,
    },
    {
      id: 8,
      title: "Regular Dental Care",
      description:
        "Prioritize dental care by brushing your pet's teeth and providing dental treats.",
      emoji: "🦷",
      coverImage: care.src,
    },
    {
      id: 9,
      title: "Prevent Parasites",
      description:
        "Protect your pet from parasites with regular preventive measures.",
      emoji: "🐛",
      coverImage: para.src,
    },
    {
      id: 10,
      title: "Quality Time together",
      description:
        "Spend quality time bonding with your pet to strengthen your relationship.",
      emoji: "🌺",
      coverImage: time.src,
    },
  ];

  const { id } = useParams();

  const tipData = tipsData.filter((tip: any) => tip.id === Number(id))[0];

  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Adjust the range and values for text
  return (
    <div>
      <div
        className="mt-20 relative grid  place-items-center overflow-hidden  w-full h-[60vh]"
        ref={ref}
      >
        <motion.p
          className="font-semibold tracking-wider text-6xl  z-10 absolute top-1/2 left-1/3 text-white"
          style={{ y: textTranslateY }}
        >
          {tipData.title}
        </motion.p>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${tipData.coverImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundTranslateY,
          }}
        />

        <Image
          src={tipData.coverImage}
          alt={tipData.title}
          width={2000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="prose max-w-none flex justify-center ">
        <ReactMarkdown
          children={tipData.description}
          remarkPlugins={[remarkGfm]}
          className="max-w-3xl"
        />
      </div>
    </div>
  );
};

export default Tip;
