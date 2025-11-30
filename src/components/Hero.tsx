
import React from "react";
import { Link } from "wouter";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      {/* Left: Content Block */}
      <div 
        className="flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 border-b-4 md:border-b-0 md:border-r-4 border-black"
        style={{ backgroundColor: siteContent.colors.primary }}
      >
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-8 tracking-tighter uppercase drop-shadow-sm">
          {siteContent.hero.headline}
        </h1>
        
        <Link href={siteContent.hero.cta.link}>
          <a className="inline-block px-8 py-4 bg-white text-black text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all uppercase">
            {siteContent.hero.cta.label}
          </a>
        </Link>
      </div>

      {/* Right: Image Block */}
      <div className="relative w-full h-[50vh] md:h-auto overflow-hidden">
        <ImageWithFallback
          src={siteContent.hero.image.src}
          alt={siteContent.hero.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
