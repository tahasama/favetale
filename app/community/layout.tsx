import CommunityClient from "./CommunityClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <CommunityClient />
      <main>{children}</main>
    </section>
  );
}
