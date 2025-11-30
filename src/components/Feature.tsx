
import React from "react";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Feature() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Block 1: Image */}
      <div className="relative w-full h-[400px] md:h-[600px] border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden">
         <ImageWithFallback
          src={siteContent.featureBlock.image.src}
          alt={siteContent.featureBlock.image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Block 2: Text Content */}
      <div 
        className="flex flex-col justify-center p-8 md:p-16 border-b-4 md:border-b-0 border-black"
        style={{ backgroundColor: siteContent.colors.highlight }}
      >
        <h2 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tight">
          {siteContent.featureBlock.heading}
        </h2>
        <p className="text-lg md:text-xl font-bold text-black/90 leading-relaxed max-w-xl">
          {siteContent.featureBlock.body}
        </p>
      </div>
    </section>
  );
}
