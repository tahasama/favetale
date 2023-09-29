import React from "react";
import Gallery from "./page";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import PetImages from "./PetImages";
import ImageModal from "./ImageModal";

async function getData() {
  const petImages: any[] = [];
  const imageRef = collection(db, "petImages");

  const snapshot = await getDocs(imageRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    petImages.push({ id: doc.id, ...doc.data() });
  });
  return petImages;
}

const ServerComponent = async () => {
  const petImages = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:23 ~ ServerComponent ~ petImages:",
    petImages
  );

  return (
    <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
      {petImages &&
        petImages.map((image, index) => (
          <PetImages image={image} index={index} />
        ))}
      <ImageModal />
    </div>
  );
};
export default ServerComponent;
