import React, { Suspense } from "react";
import ServerComponent from "./ServerComponent";
import Loading from "@/app/community/(components)/forums/loading";

const UserManagement = () => {
  return (
    <div className="p-4 overflow-auto">
      <h2 className="text-2xl text-center mb-6">User Management:</h2>
      <table className=" w-full border-collapse border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="p-2 hidden md:block border-r">User ID</th>
            <th className="p-2 border-r">Name</th>
            <th className="p-2 border-r">Last Name</th>
            <th className="p-2 border-r">Description</th>
            <th className="p-2 border-r">Join on</th>
            <th className="p-2 border-r">Last visit</th>
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
