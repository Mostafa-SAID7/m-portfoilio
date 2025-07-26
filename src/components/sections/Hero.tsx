"use client";

import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Blogs />
      <Contact />
    </main>
  );
}
