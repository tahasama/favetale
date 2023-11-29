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
      description: `# Regular Veterinary Check-ups for Your Pet

When it comes to the well-being of your beloved pet, consistent veterinary check-ups are absolutely crucial. These regular visits to the veterinarian are not just for times when your pet is visibly unwell; they are a fundamental aspect of responsible pet ownership. Here's why these check-ups matter and what they involve:

## Why Regular Check-ups Are Essential

1. **Preventive Care:** Veterinary check-ups are not just about treating illness; they are primarily focused on preventing health issues. Veterinarians can identify early signs of illness, enabling them to take prompt action and prevent more severe problems down the road.

2. **Vaccinations:** Many pets require vaccinations to safeguard them against common diseases. During check-ups, veterinarians administer these vaccinations, ensuring your pet remains protected.

3. **Dental Health:** Dental problems are common in pets. Regular check-ups include dental examinations and cleanings, ensuring your pet's teeth and gums stay in good condition.

4. **Parasite Control:** Effective parasite control is vital for your pet's well-being. Veterinarians can recommend and prescribe the appropriate preventive measures.

5. **Nutritional Guidance:** Your veterinarian can offer valuable advice on your pet's diet, taking into account factors such as their age, breed, and any underlying medical conditions.

## What Happens During a Veterinary Visit

1. **Comprehensive Physical Examination:** During each visit, the veterinarian conducts a thorough physical examination. This examination covers aspects such as your pet's body condition, coat, eyes, ears, nose, mouth, and more.

2. **Vaccination Administration:** If your pet requires vaccinations or booster shots, they will be administered during the visit.

3. **Parasite Prevention and Treatment:** Your veterinarian discusses and prescribes parasite prevention tailored to your pet's specific needs.

4. **Dental Assessment:** Your pet's dental health is assessed, and recommendations may be provided for at-home dental care or professional cleaning.

5. **Blood Tests:** Older pets or those with specific health concerns may require blood tests to assess organ function and overall health.

6. **Discussion:** You'll have the opportunity to discuss any concerns or changes in your pet's behavior, appetite, or habits with the veterinarian.

7. **Treatment Plans:** If your pet has any health issues, your veterinarian will create a treatment plan and offer guidance on medications or follow-up care.

8. **Preventive Measures:** Your veterinarian will advise you on preventive measures, including nutrition and exercise.

## Keeping a Health Record

Maintaining a detailed health record for your pet is invaluable. Record vaccination dates, medication history, and any changes in your pet's health between visits. This record helps both you and your veterinarian track your pet's health history effectively.

By committing to regular veterinary check-ups, you are demonstrating your dedication to your pet's health and ensuring they lead a happy and healthy life by your side.
`,

      emoji: "🏥",
      coverImage: veterinary.src,
    },
    {
      id: 2,
      title: "Balanced Diet and Nutrition",
      description: `## Balanced Diet and Nutrition for Pets

Ensuring your pet receives a balanced diet and proper nutrition is crucial for their health and well-being. Just like humans, pets require the right nutrients to thrive and lead healthy lives. In this article, we'll explore the importance of providing your furry friend with a well-rounded diet.

### The Essentials of Pet Nutrition

A balanced diet for pets includes a mix of essential nutrients such as:

- **Proteins:** These are the building blocks for strong muscles and tissues.
- **Carbohydrates:** A source of energy for daily activities.
- **Fats:** Necessary for a shiny coat and overall health.
- **Vitamins and Minerals:** Essential for various bodily functions.
- **Water:** Always keep fresh water available to prevent dehydration.

### Consult Your Veterinarian

Every pet is unique, and their nutritional needs can vary based on factors like age, breed, size, and activity level. To ensure your pet gets the right nutrients in the right amounts, consult your veterinarian. They can recommend suitable foods and feeding schedules tailored to your pet's specific requirements.

### Quality Matters

Choose high-quality pet food that meets your pet's nutritional needs. Look for reputable brands that list real meat, whole grains, and essential nutrients on the ingredient label. Avoid foods with excessive fillers or artificial additives.

### Conclusion

A balanced diet and proper nutrition are essential for your pet's health and happiness. By consulting with your veterinarian and selecting quality food, you can ensure that your furry companion enjoys a long and vibrant life.
`,
      emoji: "🍎",
      coverImage: food.src,
    },
    {
      id: 3,
      title: "Daily Exercise and Play",
      description: `## Daily Exercise and Play for Pets

Exercise is essential for keeping your furry friends healthy and happy. Just like humans, pets benefit greatly from regular physical activity. Here are some tips for ensuring your pets get the exercise they need:

- **Daily Walks:** Taking your dog for a daily walk is an excellent way to provide exercise and mental stimulation. It's also a great bonding activity for you and your furry companion.

- **Interactive Play:** Engage your pets in interactive playtime with toys like fetch balls, feather wands, or laser pointers for cats. These activities keep them active and mentally stimulated.

- **Dedicated Playtime:** Set aside dedicated playtime each day. Cats enjoy chasing toys or laser dots, while dogs love tug-of-war or playing catch.

- **Social Interaction:** Arrange playdates with other pets if possible. Socialization is crucial for your pet's emotional well-being.

- **Rotate Toys:** To prevent boredom, rotate your pet's toys every so often. This keeps their interest alive and ensures they don't get tired of the same toys.

Remember that the specific exercise needs may vary depending on your pet's age, breed, and size. Always consult your veterinarian for personalized recommendations.

Regular exercise not only maintains your pet's physical health but also reduces the risk of behavioral issues. It's an essential component of a happy and healthy pet's life.
`,
      emoji: "🏃‍♂️",
      coverImage: sport.src,
    },
    {
      id: 4,
      title: "Regular Grooming",
      description: `# Regular Grooming for Pets

Proper grooming is more than just a beauty routine for your furry friends; it's a vital aspect of their health and well-being. Regular grooming offers numerous advantages for your pets:

- **Healthy Skin and Fur:** Regular grooming, including brushing and cleaning, keeps your pet's skin clean and their coat free from mats and tangles. This promotes a healthy, shiny coat.

- **Early Problem Detection:** Grooming sessions provide an opportunity to spot potential health issues early. You may notice changes in your pet's skin, fur, or overall condition that require attention from a veterinarian.

- **Preventing Discomfort:** Regular grooming helps prevent discomfort from issues like matted fur, which can pull on your pet's skin. Trimming their nails also ensures they don't experience pain from overgrown claws.

- **Bonding Time:** Grooming your pet can be a bonding experience. It's a moment of care and attention that can strengthen the emotional connection between you and your beloved companion.

- **Reduced Shedding:** Brushing your pet regularly helps remove loose fur, reducing shedding around your home. This can be especially beneficial if you or a family member has allergies.

- **Hairball Prevention:** For cats, grooming helps reduce the ingestion of loose fur, decreasing the likelihood of hairballs.

Grooming needs vary based on your pet's breed, coat type, and individual characteristics. Consult with your veterinarian or a professional groomer to establish the best grooming routine for your pet's specific requirements.

By prioritizing regular grooming, you're not only keeping your pet looking their best but also contributing to their overall health and happiness.
`,
      emoji: "🛁",
      coverImage: grooming.src,
    },
    {
      id: 5,
      title: "Positive Reinforcement Training",
      description: `# Positive Reinforcement Training for Pets

Positive reinforcement training is a gentle and effective way to teach your pets new behaviors and reinforce existing ones. This method relies on rewarding desirable actions rather than punishing undesirable ones. Here's why positive reinforcement training is highly recommended:

- **Builds Trust and Bond:** Positive reinforcement fosters trust between you and your pet. When you reward good behavior with treats, praise, or affection, your pet associates you with positive experiences and is more likely to follow your cues.

- **Encourages Confidence:** Pets trained with positive reinforcement tend to be more confident and less anxious. They are eager to learn and are less likely to exhibit fear-based behaviors.

- **Promotes Mental Stimulation:** Learning through positive reinforcement engages your pet's mind, providing mental stimulation that can prevent boredom and related behavior problems.

- **Creates Lasting Habits:** Pets learn behaviors better when they are motivated by positive rewards. This helps establish lasting habits that improve their quality of life and your relationship with them.

- **Versatile Training Tool:** Positive reinforcement can be used to teach a wide range of commands, from basic obedience to complex tricks. It's suitable for pets of all ages, from puppies and kittens to senior animals.

Here are some key tips for successful positive reinforcement training:

- Use high-value treats: Find out what treats your pet loves the most, and reserve them for training sessions to keep your pet motivated.

- Be consistent: Consistency in commands and rewards helps your pet understand what's expected of them.

- Keep sessions short and fun: Training sessions should be enjoyable for both you and your pet. Short, frequent sessions are often more effective than long, repetitive ones.

- Patience is key: Remember that learning takes time. Be patient with your pet and avoid punishment-based training methods that can harm the trust you've built.

- Seek professional guidance: If you're new to positive reinforcement training or encountering challenges, consider consulting a professional dog trainer or animal behaviorist for guidance.

Positive reinforcement training not only teaches your pet valuable skills but also enhances your relationship by promoting a positive and rewarding environment. It's a win-win for both you and your furry friend.
`,
      emoji: "🐕",
      coverImage: training.src,
    },
    {
      id: 6,
      title: "Socialization Opportunities",
      description: `# Socialization Opportunities for Pets

Socialization is a vital aspect of your pet's development, particularly for puppies and kittens. It involves exposing your pet to various people, animals, environments, and experiences in a positive and controlled manner. Here's why socialization is crucial for pets and some ideas for providing them with socialization opportunities:

- **Builds Confidence:** Early socialization helps pets develop confidence and resilience. They become more adaptable and less likely to develop fear or aggression issues later in life.

- **Enhances Behavior:** Properly socialized pets are more likely to exhibit desirable behaviors, such as being well-mannered and less prone to anxiety or stress.

- **Strengthens the Human-Pet Bond:** Socialization experiences often involve interaction with their owners, strengthening the bond between pets and their caregivers.

- **Prevents Behavior Problems:** Pets that are well-socialized are less likely to develop behavioral problems, including aggression, separation anxiety, and destructive behavior.

Now, let's explore some socialization opportunities for your pets:

- **Playdates:** Arrange playdates with other pets, either in your home or at a dog park. Ensure that the interactions are safe and supervised.

- **Training Classes:** Enroll your pet in puppy or kitten training classes. These classes provide structured socialization experiences and help them learn essential commands.

- **Outdoor Adventures:** Take your pet on regular outings to expose them to different environments, sights, and sounds. This can include trips to the park, the beach, or even pet-friendly stores.

- **Visits to Friends and Family:** If your friends or family members have well-behaved pets, consider arranging visits so that your pet can interact with other animals.

- **Meet and Greets:** Attend pet-friendly events or gatherings where your pet can meet new people and other animals in a controlled environment.

- **Pet-Friendly Cafes:** Some cafes or restaurants offer pet-friendly seating areas. Take advantage of these locations for a relaxed socialization experience.

- **Exposure to Various Sounds:** Gradually expose your pet to different sounds, such as vacuum cleaners, car rides, and doorbells, to help them become accustomed to everyday noises.

- **Gentle Handling:** Teach your pet to be comfortable with gentle handling, including nail trimming and grooming. This is essential for their overall well-being.

Remember that socialization should always be positive and gradual. Pay attention to your pet's comfort level, and don't force interactions. Every pet is unique, so tailor socialization experiences to their individual needs and preferences.

By providing your pet with diverse socialization opportunities, you'll be setting them up for a happy, confident, and well-adjusted life as a cherished member of your family.
`,
      emoji: "🐶",
      coverImage: social.src,
    },
    {
      id: 7,
      title: "Safe Environment",
      description: `# Creating a Safe Environment for Your Pet

Ensuring a safe environment for your pet is paramount to their well-being. A secure and hazard-free space not only prevents accidents but also contributes to your pet's overall health and happiness. Here are some essential tips for creating a safe environment for your furry companion:

## Indoor Safety

1. **Pet-Proof Your Home:** Just as you would child-proof your home for a baby, pet-proofing is essential. Secure toxic substances, sharp objects, and small items that could be swallowed or choked on.

2. **Electrical Cords:** Hide or secure electrical cords to prevent chewing, which can lead to electrical shocks or other injuries.

3. **Plants:** Remove toxic plants from your home or place them out of your pet's reach.

4. **Secure Trash Bins:** Use pet-proof trash bins or secure them with lids to prevent your pet from rummaging through and ingesting harmful items.

5. **Chemicals and Cleaning Products:** Store household chemicals and cleaning products in locked cabinets or high shelves.

6. **Crate Training:** If you have a puppy or a pet that needs containment while you're away, consider crate training for their safety.

## Outdoor Safety

1. **Fencing:** Ensure your yard is securely fenced to prevent your pet from wandering off and to keep out potential dangers.

2. **Supervision:** Always supervise your pet during outdoor playtime to prevent them from encountering wild animals, traffic, or toxic plants.

3. **Poisons and Chemicals:** Be cautious with lawn and garden chemicals. Keep your pet away from recently treated areas.

4. **Weather Considerations:** Protect your pet from extreme weather conditions, including providing shade and water in hot weather and warmth in cold weather.

5. **Parasite Control:** Keep your pet up-to-date on parasite prevention to ward off fleas, ticks, and mosquitoes.

## Pet-Specific Safety

1. **Collar and ID:** Ensure your pet wears a collar with an ID tag that includes your contact information.

2. **Microchipping:** Consider microchipping your pet as a permanent form of identification.

3. **Proper Containment:** Use carriers or safety restraints when traveling with your pet in a vehicle.

4. **Supervise Play:** Always supervise playtime with toys, ensuring they don't present choking hazards.

5. **Secure Food and Medications:** Keep pet food and medications out of reach, as some pets may be tempted to ingest them.

6. **Pet-Proof Doors and Gates:** Use baby gates or pet-proof door latches to restrict access to certain areas of your home.

Remember that every pet is unique, and their safety needs may vary. Regularly assess your pet's environment for potential risks, and consult with your veterinarian if you have specific safety concerns or questions. By taking proactive measures to create a safe environment, you'll provide your pet with the security and well-being they deserve.
`,
      emoji: "🏠",
      coverImage: safe.src,
    },
    {
      id: 8,
      title: "Regular Dental Care",
      description: `# Regular Dental Care for Your Pet

Oral health is a critical component of your pet's overall well-being. Just like humans, pets can develop dental issues that, if left untreated, can lead to discomfort, pain, and other health problems. Here are some important considerations for maintaining your pet's dental health:

## Dental Check-ups

1. **Schedule Regular Check-ups:** Consult your veterinarian for regular dental check-ups, typically at least once a year for most pets. These check-ups are crucial for early detection of dental problems.

2. **Professional Cleanings:** Veterinarians can perform professional dental cleanings when necessary. These cleanings involve the removal of plaque and tartar, which can lead to gum disease and tooth decay.

3. **Assess Dental Health:** During check-ups, your vet will evaluate your pet's teeth, gums, and overall oral health. They can identify issues like gingivitis, loose teeth, or dental infections.

## At-Home Dental Care

1. **Brushing:** Brushing your pet's teeth regularly with a pet-specific toothbrush and toothpaste is the gold standard for dental care. Start slowly, and be patient, as some pets may need time to get used to this routine.

2. **Dental Chews and Toys:** There are dental-specific chews and toys available that can help reduce plaque and tartar buildup. Look for products approved by veterinarians.

3. **Special Diets:** Some pet foods are designed to promote dental health by reducing tartar and promoting gum health. Ask your vet for recommendations.

4. **Oral Rinses and Gels:** Your veterinarian may recommend oral rinses or gels that can be applied to your pet's teeth and gums to help prevent dental issues.

## Signs of Dental Problems

1. **Bad Breath:** Persistent bad breath can be a sign of dental issues and should be evaluated by a vet.

2. **Difficulty Eating:** If your pet is having trouble chewing or eating, it may be due to dental pain.

3. **Excessive Drooling:** Increased drooling or pawing at the mouth can indicate oral discomfort.

4. **Swollen or Bleeding Gums:** Inflamed or bleeding gums are a sign of gingivitis or other oral problems.

5. **Changes in Behavior:** Behavioral changes such as irritability or aggression can sometimes be linked to dental pain.

6. **Visible Dental Issues:** If you notice broken or loose teeth, discolored teeth, or growths in the mouth, consult your vet.

Remember that dental care is an essential aspect of your pet's overall health, and neglecting it can lead to more significant health problems. Always consult with your veterinarian for guidance on your pet's specific dental care needs and the best practices for maintaining their oral health.
      `,
      emoji: "🦷",
      coverImage: care.src,
    },
    {
      id: 9,
      title: "Prevent Parasites",
      description: `# Preventing Parasites in Your Pet

Parasites can pose a significant threat to your pet's health. They come in various forms, including fleas, ticks, worms, and more. Preventing parasites is essential for maintaining your pet's well-being and preventing potentially serious health issues. Here are some steps you can take to keep your pet parasite-free:

## Regular Veterinary Check-ups

1. **Parasite Control Plan:** Consult your veterinarian to establish a comprehensive parasite control plan tailored to your pet's needs. They can recommend the appropriate preventive medications.

2. **Year-Round Protection:** Parasite prevention should be a year-round effort, even in colder months. Many parasites can still thrive in indoor environments.

## Fleas and Ticks

1. **Topical Treatments:** Your vet can recommend topical treatments that you apply directly to your pet's skin to prevent fleas and ticks.

2. **Oral Medications:** There are oral medications available that can provide protection against fleas and ticks. Follow your vet's prescription.

3. **Regular Inspections:** Check your pet's fur for signs of fleas or ticks regularly, especially after outdoor activities.

## Heartworm

1. **Heartworm Preventives:** Administer heartworm preventive medication as prescribed by your veterinarian. This is crucial, as heartworm disease can be fatal.

2. **Annual Testing:** Have your pet tested for heartworm annually to ensure early detection and treatment if necessary.

## Intestinal Worms

1. **Regular Deworming:** Follow your vet's recommendations for regular deworming treatments. These treatments can help prevent intestinal worms in your pet.

## External Parasites

1. **Grooming:** Regular grooming and bathing can help remove external parasites like mites.

2. **Clean Living Spaces:** Keep your pet's living spaces clean and free of potential parasite breeding grounds.

## Signs of Parasites

1. **Scratching:** Excessive scratching, biting, or licking may indicate the presence of parasites.

2. **Lethargy:** Parasite infestations can lead to fatigue and a lack of energy.

3. **Weight Loss:** Some parasites can cause weight loss and a decrease in appetite.

4. **Visible Worms:** In cases of intestinal worms, you may notice worms in your pet's feces or around the anal area.

5. **Changes in Coat:** Dull, dry, or patchy fur can sometimes be linked to parasitic infestations.

Remember that prevention is key when it comes to parasites. Regular veterinary check-ups, a tailored prevention plan, and awareness of potential signs of infestation are essential for keeping your beloved pet parasite-free and in good health.
`,
      emoji: "🐛",
      coverImage: para.src,
    },
    {
      id: 10,
      title: "Quality Time together",
      description: `# Quality Time Together with Your Pet

Building a strong bond with your pet involves more than just providing for their physical needs. Spending quality time together is vital for your pet's emotional well-being and your relationship with them. Here are some tips for creating memorable moments with your furry friend:

## Daily Interaction

1. **Playtime:** Dedicate a portion of your day to interactive play with your pet. Whether it's a game of fetch, hide and seek, or simply chasing a feather toy, engaging in play helps your pet stay mentally and physically active.

2. **Training Sessions:** Training isn't just about teaching commands; it's also a way to strengthen your communication and bond. Spend short, positive reinforcement training sessions teaching new tricks or reinforcing existing ones.

## Outdoor Adventures

1. **Nature Walks:** Take your dog for nature walks in the park or nearby trails. The sights, sounds, and smells of the outdoors are enriching for your pet's senses.

2. **Dog Parks:** If your dog enjoys socializing, visit dog parks where they can interact with other dogs and burn off energy.

3. **Cat Exploration:** For indoor cats, create a safe outdoor space or use a leash and harness to allow supervised outdoor exploration.

## Relaxation Time

1. **Cuddle Sessions:** Many pets enjoy snuggling on the couch or in bed. Take some time each day to relax together and enjoy each other's company.

2. **Petting and Grooming:** Brushing your pet not only keeps their coat healthy but also provides a soothing and bonding experience.

## Special Treats

1. **Homemade Treats:** Bake homemade pet treats together. There are plenty of simple and healthy recipes available.

2. **Occasional Indulgence:** Surprise your pet with special treats or toys occasionally to keep things exciting.

## Mindful Moments

1. **Meditation:** Practicing mindfulness or meditation with your pet can deepen your connection. Simply sit together in a quiet space and focus on your breathing.

## Explore New Activities

1. **Pet-Friendly Events:** Check out pet-friendly events or gatherings in your community. These can be a great way for both you and your pet to meet new friends.

2. **Hobbies:** Consider taking up pet-friendly hobbies such as agility training, hiking, or even pet photography.

Remember that the quality of time you spend with your pet matters more than the quantity. Each pet is unique, so pay attention to their preferences and interests. Whether it's an adventurous outing or a cozy evening indoors, cherishing these moments together strengthens the bond you share with your beloved pet.
`,
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
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div>
      <div
        className="mt-0 relative grid  place-items-center overflow-hidden  w-full h-[71vh]"
        ref={ref}
      >
        <motion.p
          className="font-semibold tracking-wider back text-4xl lg:text-6xl  z-10 absolute  text-slate-200"
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
      <div className="prose max-w-none flex justify-center mt-12">
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
