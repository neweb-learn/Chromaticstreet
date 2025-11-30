
import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { siteContent } from "../data/content";
import { cn } from "../lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-yellow-400 selection:text-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-black tracking-tighter uppercase">
              The Chromatic Street
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 font-bold">
            {siteContent.navigation.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn("hover:text-[#FF5722] transition-colors uppercase", location === item.path ? "text-[#FF5722]" : "text-black")}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b-4 border-black p-4 flex flex-col space-y-4 font-bold shadow-xl">
            {siteContent.navigation.map((item) => (
              <Link key={item.path} href={item.path}>
                <a 
                  className="text-black hover:text-[#FF5722] uppercase" 
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </header>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
    </div>
  );
}
