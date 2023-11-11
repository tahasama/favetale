import ClientComponentPage from "./ClientComponentPage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-20 ">
      <ClientComponentPage />
      <div className="">{children}</div>
    </section>
  );
}
