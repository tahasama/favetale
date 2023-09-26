"use client";
import Image from "next/image";
import HeroSection from "./(HomePages)/HeroSection";
import GallerySection from "./(HomePages)/GallerySection";
import StorySection from "./(HomePages)/StorySection";
import CommunitySection from "./(HomePages)/CommunitySection";
import Footer from "./(HomePages)/Footer";
import StoreSection from "./(HomePages)/StoreSection";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "./provider/CartProvider";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <GallerySection />
      <StoreSection />
      <StorySection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
