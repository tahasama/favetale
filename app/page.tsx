import Image from "next/image";
import HeroSection from "./(HomePages)/HeroSection";
import GallerySection from "./(HomePages)/GallerySection";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <GallerySection />
    </main>
  );
}
