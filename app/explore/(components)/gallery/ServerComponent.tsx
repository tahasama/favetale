import React, { useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import PetImages from "./PetImages";
import ImageModal from "./ImageModal";
import { getGalleryData } from "@/app/api/GerData";

const ServerComponent = async () => {
  const petImages = await getGalleryData();

  return (
    <div className="mt-10 pb-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
      {petImages &&
        petImages
          .filter((images: any) => !images.flag)
          .map((image, index) => <PetImages image={image} index={index} />)}
      <ImageModal />
    </div>
  );
};
export default ServerComponent;
