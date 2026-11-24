import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight, Heart } from 'lucide-react';

export const FinalCta = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-forest text-cream">
      {/* Background Image with warm editorial styling */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80"
          alt="Mulher confiante e serena"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Heart icon badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fresh/20 border border-fresh/30 text-fresh-light text-xs font-semibold uppercase tracking-widest mb-6">
          <Heart className="w-3.5 h-3.5 fill-fresh text-fresh" />
          <span>O Teu Momento é Agora</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream font-semibold leading-tight mb-6">
          Não esperes pelo momento perfeito para começares a cuidar de ti.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-cream/85 leading-relaxed max-w-2xl mx-auto mb-10">
          Não precisas de mudar tudo de uma vez. Começa com pequenas escolhas, aprende a alimentar-te melhor e constrói uma rotina que respeita o teu corpo.
        </p>

        {/* Big High-Conversion CTA */}
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <a
            href={siteConfig.checkoutUrl}
            className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-fresh text-forest font-bold text-base sm:text-lg shadow-elevated hover:bg-fresh-light active:scale-[0.98] transition-all text-center"
          >
            <span>SIM, QUERO COMEÇAR COM O DIETFIT</span>
            <ArrowRight className="w-5 h-5 text-forest group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Microcopy below button */}
          <p className="text-xs sm:text-sm text-cream/80 mt-4 font-serif italic">
            7 semanas de orientação alimentar. Um novo compromisso contigo mesma.
          </p>
        </div>

      </div>
    </section>
  );
};
