
import React from "react";
import { Hero } from "../components/Hero";
import { Feature } from "../components/Feature";
import { Story } from "../components/Story";
import { MenuPreview } from "../components/MenuPreview";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Story />
      <MenuPreview />
      <Footer />
    </>
  );
}
