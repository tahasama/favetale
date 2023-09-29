import React from "react";
import ClientComponent from "./ClientComponent";
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
