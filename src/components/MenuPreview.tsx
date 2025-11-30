
import React from "react";
import { Link } from "wouter";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MenuPreview() {
  return (
    <section className="py-20 px-4 border-b-4 border-black" style={{ backgroundColor: siteContent.colors.primary }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-md">
            {siteContent.menuPreview.heading}
          </h2>
          <Link href={siteContent.menuPreview.cta.link}>
             <a className="inline-block mt-6 px-8 py-3 bg-white text-black font-black text-lg uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all">
               {siteContent.menuPreview.cta.label}
             </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.menuPreview.items.map((item, index) => (
            <div key={index} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full transition-transform hover:-translate-y-2">
              <div className="aspect-square w-full border-b-4 border-black overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-2 uppercase">{item.name}</h3>
                <p className="text-black font-medium mb-4 flex-grow">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
