import React from "react";
import Purchases from "../../../success/Purshase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const PurchaseDetail = async ({ params: { id } }: any) => {
  const res = await getDoc(doc(db, "purchases", id));
  const purchase: any = { ...res.data(), id: res.id };
  return <Purchases purchase={purchase} />;
};

export default PurchaseDetail;
