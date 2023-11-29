import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import ClientComponent from "./ClientComponent";

const getBlog = async (idx: any) => {
  const docRef = doc(db, "users", String(idx));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), idx: docSnap.id };
  } else {
    console.log("No such document!");
  }
};

const ServerComponent = async ({ id }: any) => {
  const userProfile = await getBlog(id);

  return <ClientComponent idx={id} userProfile={userProfile} />;
};

export default ServerComponent;
