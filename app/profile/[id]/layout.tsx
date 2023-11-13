import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import UserProfile from "./page";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("🚀 ~ file: layout.tsx:10 ~ params:", params);
  return (
    <section className="pt-20 ">
      <ServerComponent id={params.id} />
      {children}
    </section>
  );
}
