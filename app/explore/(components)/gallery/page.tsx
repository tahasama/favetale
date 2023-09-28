import Image from "next/image";

import i13 from "../../../images/13.jpg";
import i14 from "../../../images/14.jpg";
import i15 from "../../../images/15.jpg";
import i16 from "../../../images/16.jpg";
import i17 from "../../../images/17.jpg";
import i18 from "../../../images/18.jpg";
import i19 from "../../../images/19.jpg";
import UploadImageModal from "./UploadImageModal";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import { useCart } from "@/app/provider/CartProvider";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import UploadpetModalOpenButton from "./UploadpetModalOpenButton";
import PetImages from "./PetImages";

async function getData() {
  const petImages: any[] = [];
  const imageRef = collection(db, "petImages");

  const snapshot = await getDocs(imageRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    petImages.push({ id: doc.id, ...doc.data() });
  });
  return petImages;
}

const Gallery = async () => {
  const petImages = await getData();

  return (
    <div className="  my-20  w-full">
      <div className="mb-6">
        <div className="bg-yellow-500 p-6 sm:p-12 rounded-lg text-left leading-loose tracking-wide  ">
          <h2 className="text-2xl sm:text-4xl font-semibold text- mb-5">
            Browse Our Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8">
            Find lots and lots of pet moments shared by our beloved community,
          </p>
          <UploadpetModalOpenButton />
        </div>
      </div>
      <UploadImageModal />

      <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
        {petImages &&
          petImages.map((image, index) => (
            <PetImages image={image} index={index} />
          ))}
        <ImageModal />
      </div>
    </div>
  );
};

export default Gallery;
