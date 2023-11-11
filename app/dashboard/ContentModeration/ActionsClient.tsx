"use client";

import { db } from "@/firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiFillDelete, AiOutlineFlag, AiTwotoneFlag } from "react-icons/ai";

const ActionsClient = ({ image, collectionName }: any) => {
  const [deleted, setDeleted] = useState(false);
  const [flagClient, setFlagClient] = useState(
    // client: image.id,
    image.flag
  );
  console.log(
    "🚀 ~ file: ActionsClient.tsx:13 ~ ActionsClient ~ flagClient:",
    flagClient
  );

  const updateFlag = async () => {
    const likeRef = doc(db, collectionName, image.id); // Assuming 'db' is your Firestore instance
    const documentSnapshot = await getDoc(likeRef);
    const petImageData: any = documentSnapshot.data();

    try {
      // Get the current document data

      // Update the document on Firestore in the background
      petImageData.flag
        ? await updateDoc(likeRef, { flag: false }).then(() =>
            setFlagClient(!petImageData.flag)
          )
        : await updateDoc(likeRef, { flag: true }).then(() =>
            setFlagClient(!petImageData.flag)
          );
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const deletImage = async () => {
    const likeRef = doc(db, collectionName, image.id); // Assuming 'db' is your Firestore instance
    await deleteDoc(likeRef).then(() => setDeleted(true));
  };

  return (
    <td className="p-3 text-center">
      <button
        onClick={() => deletImage()}
        disabled={deleted && true}
        className={`text-xl md:text-2xl ${
          deleted ? "text-slate-400 " : "text-red-400 "
        } m-2 hover:scale-110`}
      >
        <AiFillDelete />
      </button>

      <button
        onClick={() => updateFlag()}
        className="text-xl md:text-2xl text-fuchsia-400 m-2 hover:scale-110"
      >
        {flagClient ? <AiTwotoneFlag /> : <AiOutlineFlag />}
      </button>
    </td>
  );
};

export default ActionsClient;
