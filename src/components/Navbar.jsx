import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Leaf, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-soft py-3 border-b border-forest/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center text-cream shadow-sm group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-fresh" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest leading-none">
              DIET<span className="text-fresh font-light">FIT</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-charcoal/70 font-semibold mt-0.5 hidden xs:block">
              Moçambique
            </span>
          </div>
        </a>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex items-center gap-5 text-xs font-semibold text-forest">
          <a href="#conteudo" className="hover:text-fresh transition-colors">O Programa</a>
          <a href="#provas-sociais" className="hover:text-fresh transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/50 border border-sage-border">
            <span className="w-2 h-2 rounded-full bg-fresh"></span>
            <span>Resultados & Provas</span>
          </a>
          <a href="#oferta" className="hover:text-fresh transition-colors">Como Participar</a>
        </div>

        {/* Primary Header CTA & Mobile Navigation */}
        <div className="flex items-center gap-2">
          <a
            href="#provas-sociais"
            className="md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-sage/60 text-[11px] font-bold text-forest border border-sage-border"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-fresh"></span>
            <span>Resultados</span>
          </a>

          <a
            href={siteConfig.checkoutUrl}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-forest text-cream text-xs sm:text-sm font-semibold tracking-wide hover:bg-forest-light hover:shadow-soft active:scale-95 transition-all"
          >
            <span>Quero Começar</span>
            <ArrowRight className="w-3.5 h-3.5 text-fresh" />
          </a>
        </div>
      </div>
    </header>
  );
};
