import Image from "next/image";
import HeroSection from "./(HomePages)/HeroSection";
import GallerySection from "./(HomePages)/GallerySection";
import StorySection from "./(HomePages)/StorySection";
import CommunitySection from "./(HomePages)/CommunitySection";
import Footer from "./(HomePages)/Footer";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <GallerySection />
      <StorySection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
