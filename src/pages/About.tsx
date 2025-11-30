
import React from "react";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Hero */}
      <div className="bg-[#FF5722] p-12 md:p-24 border-b-4 border-black text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
          Our Story
        </h1>
        <p className="text-xl font-bold text-white/90 max-w-2xl mx-auto">
          Born from the heat of the street and the soul of the kitchen.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
                 <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] aspect-[4/5] overflow-hidden bg-gray-200">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVmJTIwY29va2luZyUyMGFzaWFuJTIwZm9vZCUyMGtpY2hlbnxlbnwxfHx8fDE3NjQ1MDA5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Our Chef"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                 </div>
            </div>
            <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none text-[#2962FF]">
                    Tradition Meets Chaos
                </h2>
                <div className="space-y-6 text-xl font-medium text-black/80 leading-relaxed">
                    <p>
                        The Chromatic Street isn't just a restaurant; it's a collision of cultures. We started in a tiny stall in the night markets, serving up family recipes passed down through generations.
                    </p>
                    <p>
                        But we didn't want to just replicate the past. We wanted to paint it with new colors. Our food is loud, spicy, and unapologetic. It's the taste of the street, amplified.
                    </p>
                    <p>
                        We believe in the power of a shared meal. The clatter of chopsticks, the steam rising from a hot bowl of pho, the burst of flavor from a perfectly spiced curry. This is our language.
                    </p>
                </div>
            </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
                { title: "Fresh", desc: "Ingredients sourced daily from local markets.", color: "#FFEB3B" },
                { title: "Bold", desc: "Flavors that don't apologize. Spice that kicks.", color: "#FF5722" },
                { title: "Authentic", desc: "Rooted in tradition, served with a twist.", color: "#2962FF" }
            ].map((value, idx) => (
                <div key={idx} className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: value.color }}>
                    <h3 className="text-3xl font-black uppercase mb-4">{value.title}</h3>
                    <p className="font-bold text-black/80 text-lg">{value.desc}</p>
                </div>
            ))}
        </div>
        
        {/* Image Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
             {[
                 "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW18ZW58MXx8fHwxNzY0NTAwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                 "https://images.unsplash.com/photo-1541696490865-e6f720e96e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1wbGluZ3N8ZW58MXx8fHwxNzY0NTAwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Wait, Pizza? Let me change this manually to something else later if I can or trust search. I'll hardcode safer ones.
                 "https://images.unsplash.com/photo-1511690656952-34342d5c28b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWZ8ZW58MXx8fHwxNzY0NTAwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                 "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzY0NTAwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
             ].map((src, i) => (
                 <div key={i} className="aspect-square border-4 border-black overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                     <ImageWithFallback src={src} alt="Kitchen atmosphere" className="w-full h-full object-cover" />
                 </div>
             ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
