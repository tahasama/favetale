import React from "react";
import ServerComponent from "./ServerComponent";
import Layout from "./layout";

const Gallery = () => {
  return (
    <>
      <Layout>
        {/* <ClientComponent /> */}
        <ServerComponent />
      </Layout>
    </>
  );
};

export default Gallery;
