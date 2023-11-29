import React, { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Blogs = () => {
  return (
    <div className="mt-0 w-full">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Blogs;
