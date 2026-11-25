import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Users, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-cream via-cream to-beige-light/40">
      {/* Subtle organic background decoration */}
      <div className="absolute top-10 right-0 -mr-24 w-96 h-96 bg-sage/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-fresh/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Call-to-Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-5">
              <span className="text-base">🇲🇿</span>
              <span>DIETFIT | ALIMENTAÇÃO REAL PARA MULHERES EM MOÇAMBIQUE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-forest font-semibold leading-[1.18] tracking-tight mb-5 sm:mb-6">
              Imagina perder peso{' '}
              <span className="text-fresh underline decoration-sage/60 decoration-wavy underline-offset-4 font-normal">
                sem passar fome
              </span>
              , sem dietas malucas e sem deixar de comer aquilo que gostas.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed mb-4 max-w-xl">
              Com o Dietfit, vais aprender a alimentar-te melhor durante 7 semanas, usando alimentos simples, naturais e acessíveis que encontras nos mercados locais e na tua própria cozinha em Moçambique.
            </p>

            {/* Elegant highlight callout */}
            <div className="w-full max-w-xl p-3.5 sm:p-4 mb-6 rounded-xl bg-sage/40 border-l-4 border-fresh text-forest text-sm sm:text-base font-medium flex items-center gap-3">
              <span className="text-lg">🌿</span>
              <span>7 semanas para recomeçares a tua relação com o espelho e com a comida de verdade.</span>
            </div>

            {/* Mozambican Community Social Proof Avatars */}
            <div className="flex items-center gap-3 mb-6 p-2 rounded-2xl bg-white/70 border border-forest/10 max-w-md w-full">
              <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                {siteConfig.communityMembers.map((member, i) => (
                  <img
                    key={i}
                    src={member.avatar}
                    alt={`Aluna ${member.name} de ${member.location}`}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-cream object-cover"
                    loading="eager"
                  />
                ))}
              </div>
              <div className="text-xs text-charcoal">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-forest ml-1">4.9/5</span>
                </div>
                <p className="font-medium text-forest/90">
                  <span className="font-bold">+450 mulheres moçambicanas</span> já transformaram os seus hábitos
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="w-full max-w-md flex flex-col gap-2.5 mb-8">
              <a
                href={siteConfig.checkoutUrl}
                className="w-full group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-forest text-cream font-semibold text-base sm:text-lg shadow-premium hover:bg-forest-light hover:shadow-elevated active:scale-[0.99] transition-all text-center"
              >
                <span>QUERO COMEÇAR A MINHA TRANSFORMAÇÃO</span>
                <ArrowRight className="w-5 h-5 text-fresh group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Microcopy */}
              <p className="text-xs sm:text-sm text-charcoal-muted text-center flex items-center justify-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-fresh"></span>
                Recebe os planos completos, receitas e acompanhamento diário no WhatsApp.
              </p>

              {/* Strategic Jump to Social Proof */}
              <a
                href="#provas-sociais"
                className="text-xs text-forest/90 hover:text-fresh font-semibold text-center flex items-center justify-center gap-1.5 transition-colors pt-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-fresh" />
                <span className="underline decoration-fresh underline-offset-2">Ver resultados reais de Antes e Depois das alunas ➔</span>
              </a>
            </div>

            {/* 3 Compact Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-forest/10">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-forest font-medium">
                <div className="w-7 h-7 rounded-full bg-sage/60 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                </div>
                <span>Alimentação simples e da nossa terra</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-forest font-medium">
                <div className="w-7 h-7 rounded-full bg-sage/60 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-forest" />
                </div>
                <span>Sem passar fome nem remédios</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-forest font-medium">
                <div className="w-7 h-7 rounded-full bg-sage/60 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-forest" />
                </div>
                <span>Apoio diário de mulheres como tu</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Lifestyle Photo with Radiant African Woman */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-white bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80"
                  alt="Mulher moçambicana radiante e confiante num estilo de vida saudável"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle dark gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />

                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-card border border-forest/10 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-forest text-cream flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6 text-fresh" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-fresh block">
                      Cozinha & Mercados de Moçambique 🇲🇿
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-medium text-forest">
                      Peixe, ovos, verduras frescas, feijão e batata doce da tua rotina.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating aesthetic pill top-right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-xs font-semibold shadow-premium border border-fresh/30 animate-float">
                <span className="w-2 h-2 rounded-full bg-fresh"></span>
                <span>Autoestima & Leveza Real</span>
              </div>

              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-soft border border-sage-border text-forest text-xs font-medium">
                <span className="text-base">🇲🇿</span>
                <span>Pensado para a mulher em Moçambique</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
