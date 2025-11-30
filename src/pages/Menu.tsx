
import React from "react";
import { siteContent } from "../data/content";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

const fullMenu = {
  starters: [
    { id: 101, name: "Crispy Tofu", price: "$8", desc: "Golden fried tofu with sweet chili peanut sauce.", img: siteContent.menuPreview.items[0].image },
    { id: 102, name: "Spring Rolls", price: "$9", desc: "Glass noodles, cabbage, and carrots in a crispy wrapper.", img: siteContent.storyBlock.images[0].src },
    { id: 103, name: "Satay Skewers", price: "$11", desc: "Grilled marinated chicken with peanut dipping sauce.", img: siteContent.storyBlock.images[1].src },
  ],
  mains: [
    { id: 201, name: "Chicken Massaman", price: "$18", desc: "Slow-cooked chicken in rich coconut curry with potatoes.", img: siteContent.menuPreview.items[1].image },
    { id: 202, name: "Red Curry", price: "$17", desc: "Spicy red curry with bamboo shoots, basil, and choice of protein.", img: siteContent.menuPreview.items[2].image },
    { id: 203, name: "Pad Thai Street Style", price: "$16", desc: "Rice noodles, egg, peanuts, bean sprouts, and tamarind sauce.", img: siteContent.hero.image.src },
    { id: 204, name: "Drunken Noodles", price: "$16", desc: "Wide rice noodles stir-fried with chili, basil, and vegetables.", img: siteContent.featureBlock.image.src },
  ],
  drinks: [
    { id: 301, name: "Thai Iced Tea", price: "$5", desc: "Authentic brewed tea with condensed milk.", img: siteContent.storyBlock.images[2].src },
    { id: 302, name: "Coconut Water", price: "$6", desc: "Fresh young coconut.", img: siteContent.storyBlock.images[0].src },
  ]
};

export function Menu() {
  return (
    <div className="bg-white min-h-screen">
      {/* Menu Hero */}
      <div className="bg-[#2962FF] p-12 md:p-24 border-b-4 border-black text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
          The Menu
        </h1>
        <p className="text-xl font-bold text-white/90 max-w-2xl mx-auto">
          Street food classics reimagined. Bold flavors, fresh ingredients, no compromises.
        </p>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Starters */}
        <section>
            <h2 className="text-4xl font-black uppercase mb-8 border-l-8 border-[#FFEB3B] pl-6 py-2">
                Small Plates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fullMenu.starters.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </section>

        {/* Mains */}
        <section>
            <h2 className="text-4xl font-black uppercase mb-8 border-l-8 border-[#FF5722] pl-6 py-2">
                Bowls & Curries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fullMenu.mains.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </section>

        {/* Drinks */}
        <section>
            <h2 className="text-4xl font-black uppercase mb-8 border-l-8 border-[#2962FF] pl-6 py-2">
                Refreshments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fullMenu.drinks.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function MenuItem({ item }: { item: any }) {
    return (
        <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white flex flex-col">
            <div className="h-48 border-b-4 border-black overflow-hidden relative">
                <ImageWithFallback 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-black text-lg border-l-4 border-b-4 border-white">
                    {item.price}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase mb-2 leading-none">{item.name}</h3>
                <p className="text-gray-600 font-bold text-sm mb-4 flex-grow">{item.desc}</p>
            </div>
        </div>
    )
}
