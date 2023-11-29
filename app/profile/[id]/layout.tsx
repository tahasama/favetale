import ServerComponent from "./ServerComponent";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <section className="pt-20 ">
      <ServerComponent id={params.id} />
      {children}
    </section>
  );
}
