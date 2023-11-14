import CommunityClient from "./CommunityClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <CommunityClient />
      {/* <main className="flex-grow min-h-[16rem] overflow-y-auto order-1 md:order-2"> */}
      <main>
        {/* Content related to the selected feature will be displayed here */}
        {children}
      </main>
    </section>
  );
}
