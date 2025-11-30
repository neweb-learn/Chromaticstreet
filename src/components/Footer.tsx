
import React from "react";
import { siteContent } from "../data/content";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "Instagram": return <Instagram size={24} />;
      case "Facebook": return <Facebook size={24} />;
      case "Twitter": return <Twitter size={24} />;
      default: return null;
    }
  };

  return (
    <footer id="contact" className="grid grid-cols-1 md:grid-cols-2 border-black">
      {/* Left: Newsletter (Yellow) */}
      <div 
        className="p-12 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-black"
        style={{ backgroundColor: siteContent.colors.highlight }}
      >
        <h3 className="text-4xl font-black mb-6 uppercase tracking-tight text-black">
          {siteContent.footer.newsletterHeading}
        </h3>
        <p className="font-bold mb-6 text-black text-lg">
          Sign up for drops, secret menu items, and spicy news.
        </p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="YOUR EMAIL" 
            className="flex-grow bg-white border-4 border-black p-4 font-bold placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-black/20 uppercase"
          />
          <button className="bg-black text-white px-8 py-4 font-black border-4 border-black uppercase hover:bg-white hover:text-black transition-colors">
            Join
          </button>
        </form>
      </div>

      {/* Right: Info (White) */}
      <div className="bg-white p-12 md:p-16 flex flex-col justify-between">
        <div className="mb-8">
          <h4 className="text-2xl font-black uppercase mb-4 underline decoration-4 decoration-[#FF5722] underline-offset-4">Location</h4>
          <p className="text-xl font-bold leading-relaxed text-black/80">
            {siteContent.footer.address}
          </p>
        </div>
        
        <div className="mb-8">
          <h4 className="text-2xl font-black uppercase mb-4 underline decoration-4 decoration-[#2962FF] underline-offset-4">Hours</h4>
          <p className="text-xl font-bold leading-relaxed text-black/80">
            {siteContent.footer.hours}
          </p>
        </div>

        <div className="flex gap-4 mb-8">
            {siteContent.footer.socials && siteContent.footer.socials.map((social, idx) => (
                <a 
                    key={idx} 
                    href={social.url} 
                    className="p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all bg-white text-black hover:bg-[#FF5722] hover:text-white"
                >
                    {getIcon(social.platform)}
                </a>
            ))}
        </div>

        <div className="mt-4 pt-8 border-t-4 border-gray-100">
           <p className="text-sm font-bold text-gray-400 uppercase">
             © {new Date().getFullYear()} The Chromatic Street.
           </p>
        </div>
      </div>
    </footer>
  );
}
