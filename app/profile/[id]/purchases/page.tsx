import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import PurchaseClient from "./PurchaseClient";
import Link from "next/link";

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
    console.log(error);
  }
};
const Purchases = async ({ userx }: any) => {
  const purchaseData: any = await getData(userx);

  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="mt-10 mx-4 md:mx-5 lg:mx-7 xl:mx-auto max-w-6xl relative">
      <Link
        href={"/store/Allproduct"}
        className="absolute right-0 top-0 lg:right-12 pb-2"
      >
        <button className={buttonStyle}>Shop Now</button>
      </Link>
      {purchaseData && purchaseData.length !== 0 && (
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
      )}
    </div>
  );
};

export default Purchases;
