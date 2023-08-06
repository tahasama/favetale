import Image from "next/image";
import HeroSection from "./(HomePages)/HeroSection";
import GallerySection from "./(HomePages)/GallerySection";
import StorySection from "./(HomePages)/StorySection";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <GallerySection />
      <StorySection />
    </main>
  );
}
