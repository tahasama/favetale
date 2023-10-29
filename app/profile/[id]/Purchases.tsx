import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import Image from "next/image";
import logo from "../../logo.png";
import PurchaseClient from "./PurchaseClient";
// import { table } from "console";

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
    <div className="mt-10 mx-4 md:mx-5 lg:mx-7 xl:mx-auto max-w-6xl">
      <table className="w-full border border-collapse">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-tealDark text-white font-semibold">
              Email
            </th>
            <th className="py-3 px-6 bg-tealDark text-white font-semibold">
              Date
            </th>
            <th className="py-3 px-6 bg-tealDark text-white font-semibold">
              Number of Items
            </th>
            <th className="py-3 px-6 bg-tealDark text-white font-semibold">
              Total
            </th>
            <th className="py-3 px-6 bg-tealDark text-white font-semibold">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {purchaseData?.map((purchase: any) => (
            <PurchaseClient purchase={purchase} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
