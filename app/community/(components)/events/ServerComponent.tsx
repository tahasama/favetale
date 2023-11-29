import React from "react";
import { getEventsData } from "@/app/api/GerData";
import CalendarComponent from "./CalendarComponent";

const ServerComponent = async () => {
  const eventsData: any = await getEventsData();

  return <CalendarComponent eventsData={eventsData} />;
};

export default ServerComponent;
