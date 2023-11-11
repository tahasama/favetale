import Image from "next/image";
import HeroSection from "./(HomePages)/HeroSection";
import GallerySection from "./(HomePages)/GallerySection";
import StorySection from "./(HomePages)/StorySection";
import CommunitySection from "./(HomePages)/CommunitySection";
import Footer from "./(HomePages)/Footer";
import StoreSection from "./(HomePages)/StoreSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <GallerySection />
      <StoreSection />
      <StorySection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
