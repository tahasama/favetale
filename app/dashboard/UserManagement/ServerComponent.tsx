import { auth, db } from "@/firebase";
import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React from "react";

async function getData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "users");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

const ServerComponent = async () => {
  const usersData: any = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:23 ~ ServerComponent ~ usersData:",
    usersData[0]
  );

  const suspendUser = async (uid: any) => {
    const userRef = doc(db, "users", uid);

    try {
      await updateDoc(userRef, {
        suspended: true,
      });
      console.log(`User with UID ${uid} is suspended.`);
    } catch (error) {
      console.error(`Error suspending user with UID ${uid}:`, error);
    }
  };

  const unSuspendUser = async (uid: any) => {
    console.log(
      "🚀 ~ file: ServerComponent.tsx:38 ~ unSuspendUser ~ uid:",
      uid
    );
    const userRef = doc(db, "users", uid);

    try {
      await updateDoc(userRef, {
        suspended: false,
      });
      console.log(`User with UID ${uid} is suspended.`);
    } catch (error) {
      console.error(`Error suspending user with UID ${uid}:`, error);
    }
  };

  return (
    <tbody>
      {usersData.map((user: any) => (
        <tr key={user.id} className="border-b border-teal-500">
          <td className="p-2">{user.id}</td>
          <td className="p-2">{user.name}</td>
          <td className="p-2">{user.lastName}</td>
          <td className="p-2">{user.description}</td>
          <td className="p-2">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <div className="h-10 w-10 bg-indigo-500 rounded-full"></div>
            )}
          </td>
          <td className="p-2">{user.creationTime.slice(0, 16)}</td>
          <td className="p-2">{user.lastSignInTime.slice(0, 16)}</td>
          <td className="p-2">
            {!user.suspended ? (
              <button
                className="bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded"
                onClick={() => suspendUser(user.id)}
              >
                Suspend
              </button>
            ) : (
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white py-1 px-3 rounded"
                onClick={() => unSuspendUser(user.id)}
              >
                Unsuspend
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ServerComponent;
