import { Suspense } from "react";
import Loading from "./loading";
import ClientComponent from "./ClientComponent";

export default function Layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
