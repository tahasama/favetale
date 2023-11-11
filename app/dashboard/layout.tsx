import ClientComponentPage from "./ClientComponentPage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <ClientComponentPage />
      {children}
    </section>
  );
}
