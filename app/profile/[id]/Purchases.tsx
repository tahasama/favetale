import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import Image from "next/image";
import logo from "../../logo.png";
import PurchaseClient from "./PurchaseClient";

const getData = async (userx: any) => {
  const purchaseData: any[] = [];
  try {
    const snapshot = await getDocs(
      query(collection(db, "purchases"), where("userId", "==", userx))
    );
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    snapshot.forEach((doc: any) => {
      purchaseData.push({ id: doc.id, ...doc.data() });
    });
    return purchaseData;
  } catch (error) {
    console.log("🚀 ~ file: page.tsx:42 ~ getData ~ error:", error);
  }
};
const Purchases = async ({ userx }: any) => {
  const purchaseData: any = await getData(userx);

  return (
    <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 xl:gap-20 mx-4 md:mx-5 lg:mx-7 xl:mx-auto max-w-6xl">
      {purchaseData?.map((purchase: any) => (
        <PurchaseClient purchase={purchase} />
      ))}
    </div>
  );
};

export default Purchases;
