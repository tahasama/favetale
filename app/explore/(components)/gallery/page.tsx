import React, { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Layout from "./layout";
import Loading from "./loading";
import Category from "./Category";

export const revalidate = 10;
const Gallery = () => {
  return (
    <>
      <ClientComponent />
      <Category />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </>
  );
};

export default Gallery;
