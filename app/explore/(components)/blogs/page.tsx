import React, { Suspense } from "react";
import blog1 from "../../../images/blog/blog1.jpg";
import blog2 from "../../../images/blog/blog2.jpg";
import blog3 from "../../../images/blog/blog3.jpg";
import blog4 from "../../../images/blog/blog4.jpg";
import blog5 from "../../../images/blog/blog5.jpg";
import blog6 from "../../../images/blog/blog6.jpg";

import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Blogs = () => {
  return (
    <div className="mt-20 w-full">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Blogs;
