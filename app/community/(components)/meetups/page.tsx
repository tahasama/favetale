import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Meetups = () => {
  return (
    <div className=" bg-tealLight">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Meetups;
