import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import FilterComponent from "./FilterComponent";
import { getGatheringsData } from "@/app/api/GerData";

const ServerComponent = async () => {
  const meetupsData = await getGatheringsData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 w-full">
      <FilterComponent meetupsData={meetupsData} />
    </div>
  );
};

export default ServerComponent;
