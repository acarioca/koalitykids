"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past 85vh (the hero)
      const heroHeight = window.innerHeight * 0.85;
      setVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100 bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-bold text-text-primary">
          Koality<span className="gradient-text">Kids</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</a>
        </div>
        <a
          href="#download"
          className="gradient-bg hover:gradient-bg-hover text-white text-sm font-medium px-5 py-2 rounded-pill transition-all"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}
