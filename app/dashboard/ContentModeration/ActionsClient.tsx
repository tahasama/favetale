"use client";

import { db } from "@/firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiFillDelete, AiOutlineFlag, AiTwotoneFlag } from "react-icons/ai";

const ActionsClient = ({ image, collectionName }: any) => {
  const [deleted, setDeleted] = useState(false);
  const [flagClient, setFlagClient] = useState(
    image.flag !== undefined ? image.flag : false
  );

  const updateFlag = async () => {
    const likeRef = doc(db, collectionName, image.id);
    const documentSnapshot = await getDoc(likeRef);
    const petImageData: any = documentSnapshot.data();

    try {
      const currentFlagValue =
        petImageData && petImageData.flag !== undefined
          ? petImageData.flag
          : false;

      await updateDoc(likeRef, { flag: !currentFlagValue }).then(() => {
        setFlagClient(!currentFlagValue);
      });
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  const deletImage = async () => {
    const likeRef = doc(db, collectionName, image.id);
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
        onClick={updateFlag}
        className="text-xl md:text-2xl text-fuchsia-400 m-2 hover:scale-110 active:scale-125"
      >
        {flagClient ? <AiTwotoneFlag /> : <AiOutlineFlag />}
      </button>
    </td>
  );
};

export default ActionsClient;
