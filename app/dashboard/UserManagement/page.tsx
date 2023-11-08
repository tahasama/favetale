"use client";
import React, { Suspense, useState } from "react";
import ServerComponent from "./ServerComponent";
import Loading from "@/app/community/(components)/forums/loading";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  function suspendUser(id: any): void {
    throw new Error("Function not implemented.");
  }

  function resetPassword(id: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-tealLight p-4 overflow-auto">
      <h2 className="text-2xl text-center mb-6">User Management:</h2>
      <table className="w-full border border-teal-500 text-xs md:text-sm lg:text-base">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="p-2 hidden md:block">User ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Image</th>
            <th className="p-2">Join on</th>
            <th className="p-2">Last visit</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <Suspense fallback={<Loading />}>
          <ServerComponent />
        </Suspense>
      </table>
    </div>
  );
};

export default UserManagement;
