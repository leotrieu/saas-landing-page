import Features from "@/components/blocks/Features";
import { Hero } from "@/components/blocks/Hero";
import { Navbar } from "@/components/blocks/Navbar";
import Testimonials from "@/components/blocks/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
