"use client";
import React, { Suspense, useState } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Forums = () => {
  return (
    <div className=" bg-gradient-to-b from-tealLight to-sky-200 h-screen">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Forums;
