import { getUsersData } from "@/app/api/GerData";
import { auth, db } from "@/firebase";
import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import SuspendedClient from "./SuspendedClient";

const ServerComponent = async () => {
  const usersData: any = await getUsersData();

  return (
    <tbody className="">
      {usersData &&
        usersData.map((user: any) => (
          <tr
            key={user.id}
            className="border-b bg-gray-300 text-center md:contents"
          >
            <td className="p-2 md:p-2 md:flex md:items-center md:justify-center hidden h-14 border-r">
              {user.id}
            </td>
            <td className="p-2 border-r text-sky-700 hover:underline underline-offset-2 cursor-pointer">
              <div className="flex justify-center items-center gap-2">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-10 w-10 rounded-full ml-5 object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 bg-indigo-500 rounded-full"></div>
                )}
                <Link href={`/profile/${user.id}`}>{user.name}</Link>
              </div>
            </td>
            <td className="p-2 border-r">{user.lastName}</td>
            <td className="p-2 border-r">{user.description}</td>
            <td className="p-2 border-r">{user.creationTime.slice(0, 16)}</td>
            <td className="p-2 border-r">{user.lastSignInTime.slice(0, 16)}</td>
            <td className="p-2">
              <SuspendedClient user={user} />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default ServerComponent;
