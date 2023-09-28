import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }: any) {
  return (
    <>
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
}
