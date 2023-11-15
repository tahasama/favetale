import ClientComponentPage from "./ClientComponentPage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:flex-row">
      <div className=" order-2 md:order-1">
        <ClientComponentPage />
      </div>
      <div className="flex flex-grow order-1 md:order-2 h-[calc(100vh-11.3rem)] md:h-[calc(100vh-9rem)] min-h-[15rem] flex-col bg-tealLight md:flex-row w-full">
        <main className="flex-grow min-h-[16rem] overflow-y-auto order-1 md:order-2">
          {/* Content related to the selected feature will be displayed here */}
          {children}
        </main>
      </div>
    </section>
  );
}
