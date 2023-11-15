import Gallery from "./gallery/page";

function ContentModeration() {
  return (
    <div className="flex h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] min-h-[15rem] flex-col bg- md:flex-row w-full">
      <main className="flex-grow min-h-[16rem] overflow-y-auto order-1 md:order-2">
        {/* Content related to the selected feature will be displayed here */}
        <Gallery />
      </main>
    </div>
  );
}

export default ContentModeration;
