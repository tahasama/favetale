import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import ClientComponent from "./ClientComponent";

const getBlog = async (idx: any) => {
  console.log("🚀 ~ file: page.tsx:3700000 ~ getBlog ~ idx:", idx);
  const docRef = doc(db, "users", String(idx));
  console.log("🚀 ~ file: ClientComponent.tsx:29 ~ getBlog ~ idx:");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:");
    return { ...docSnap.data(), idx: docSnap.id };
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

const ServerComponent = async ({ id }: any) => {
  const userProfile = await getBlog(id);

  return <ClientComponent idx={id} userProfile={userProfile} />;
};

export default ServerComponent;
