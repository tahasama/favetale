import React, { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Layout from "./layout";
import Loading from "./loading";

const Gallery = () => {
  return (
    <>
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </>
  );
};

export default Gallery;
