
import React from "react";
import { Link } from "wouter";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Story() {
  return (
    <section id="story" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Text Block */}
      <div 
        className="flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b-4 lg:border-b-0 lg:border-r-4 border-black min-h-[500px]"
        style={{ backgroundColor: siteContent.colors.secondary }}
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
          {siteContent.storyBlock.heading}
        </h2>
        <p className="text-xl text-white font-medium leading-relaxed max-w-lg mb-8">
          {siteContent.storyBlock.body}
        </p>
        <Link href={siteContent.storyBlock.cta.link}>
            <a className="inline-block w-fit px-8 py-4 bg-black text-white text-lg font-black border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all uppercase">
                {siteContent.storyBlock.cta.label}
            </a>
        </Link>
      </div>

      {/* Image Collage */}
      <div className="bg-white p-4 md:p-8 grid grid-cols-2 gap-4 content-center">
        <div className="col-span-2 md:col-span-1 h-64 md:h-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
            <ImageWithFallback
                src={siteContent.storyBlock.images[0].src}
                alt={siteContent.storyBlock.images[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4 h-full">
            <div className="h-64 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
                <ImageWithFallback
                    src={siteContent.storyBlock.images[1].src}
                    alt={siteContent.storyBlock.images[1].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="h-64 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
                <ImageWithFallback
                    src={siteContent.storyBlock.images[2].src}
                    alt={siteContent.storyBlock.images[2].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
