import React from "react";
import Gallery from "./page";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

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

  return <div>xxx</div>;
};
export default ServerComponent;
