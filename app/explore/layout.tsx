import ExploreClient from "./ExploreClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <ExploreClient />
      <main>{children}</main>
    </section>
  );
}
