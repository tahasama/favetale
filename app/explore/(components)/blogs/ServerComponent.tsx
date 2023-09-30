import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const ServerComponent = async () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 sm:mx-6 mx-1 pb-4 ">
      Hello
    </div>
  );
};
export default ServerComponent;
