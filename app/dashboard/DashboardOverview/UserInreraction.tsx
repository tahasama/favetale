import { fetchComments } from "@/app/api/GerData";
import React from "react";

const UserInreraction = async () => {
  const commentsData: any = await fetchComments("");

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(commentsData && commentsData.length) || 0}
    </p>
  );
};

export default UserInreraction;
