import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { getEventsData, getGatheringsData } from "@/app/api/GerData";
import CalendarComponent from "./CalendarComponent";

const ServerComponent = async () => {
  const eventsData: any = await getEventsData();

  return <CalendarComponent eventsData={eventsData} />;
};

export default ServerComponent;
