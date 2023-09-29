import { Suspense } from "react";
import Loading from "./loading";
import ClientComponent from "./ClientComponent";

export default function Layout({ children }: any) {
  return (
    <>
      <main>
        <ClientComponent />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
}
