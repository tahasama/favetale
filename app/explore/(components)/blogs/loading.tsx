export default function Loading() {
  const blogs = [1, 2, 3];
  return (
    <>
      {blogs.map((blog: any, index: any) => {
        <div className="bg-slate-300 h-20 w-20 p-3 smp-6 rounded-lg shadow-md"></div>;
      })}
    </>
  );
}
