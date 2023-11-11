"use client";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const SuspendedClient = ({ user }: any) => {
  const [suspended, setSuspended] = useState(user.suspended);
  const suspendUser = async (uid: any) => {
    const userRef = doc(db, "users", uid);

    try {
      await updateDoc(userRef, {
        suspended: true,
      }).then(() => setSuspended(!suspended));
      console.log(`User with UID ${uid} is suspended.`);
    } catch (error) {
      console.error(`Error suspending user with UID ${uid}:`, error);
    }
  };

  const unSuspendUser = async (uid: any) => {
    const userRef = doc(db, "users", uid);

    try {
      await updateDoc(userRef, {
        suspended: false,
      }).then(() => setSuspended(!suspended));
      console.log(`User with UID ${uid} is unsuspended.`);
    } catch (error) {
      console.error(`Error suspending user with UID ${uid}:`, error);
    }
  };
  return (
    <>
      {" "}
      {!suspended ? (
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded  w-28"
          onClick={() => suspendUser(user.id)}
        >
          Suspend
        </button>
      ) : (
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded w-28"
          onClick={() => unSuspendUser(user.id)}
        >
          Unsuspend
        </button>
      )}
    </>
  );
};

export default SuspendedClient;
