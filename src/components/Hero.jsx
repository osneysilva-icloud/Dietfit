import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Star,
  BookOpen,
  Flame,
  Smartphone
} from 'lucide-react';

// Direct transformation imports for maximum conversion proof
import trans3 from '../assets/transformations/transformation-3.jpg';
import trans1 from '../assets/transformations/transformation-1.jpg';

export const Hero = () => {
  const [activeCase, setActiveCase] = useState(0);

  const transformationCases = [
    {
      id: 0,
      image: trans3,
      label: "Caso 1 • Frontal",
      badge: "-16.1 kg Eliminados",
      subtitle: "Aluna Real • Cintura & Abdómen",
      duration: "7 Semanas"
    },
    {
      id: 1,
      image: trans1,
      label: "Caso 2 • Lateral",
      badge: "Redução Total de Flancos",
      subtitle: "Aluna Real • Perfil & Postura",
      duration: "7 Semanas"
    }
  ];

  const currentCase = transformationCases[activeCase];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-cream via-cream to-beige-light/40">
      {/* Subtle organic background decoration */}
      <div className="absolute top-10 right-0 -mr-24 w-96 h-96 bg-sage/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-fresh/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Direct-Response Copy & Call-to-Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Eyebrow badge with Official Logo Symbol */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-5">
              <img src="/dietfit-symbol-green.png" alt="DietFit Símbolo" className="w-4 h-4 object-contain" />
              <span>DIETFIT | ALIMENTAÇÃO REAL PARA MULHERES EM MOÇAMBIQUE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-[1.18] tracking-tight mb-5 sm:mb-6">
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
            <div className="flex items-center gap-3 mb-6 p-2 rounded-2xl bg-white/70 border border-forest/10 max-w-md w-full shadow-xs">
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

          {/* Right Column: High-Converting Showcase — O Método ao Lado do Resultado Real */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Master Card Frame */}
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-elevated border-2 border-forest/15 overflow-hidden">
                
                {/* Header Banner */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-forest/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-fresh animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-forest">
                      O Método + O Resultado Comprovado
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-forest bg-sage/50 px-2.5 py-1 rounded-full border border-forest/10">
                    <span>🇲🇿</span>
                    <span>Moçambique</span>
                  </div>
                </div>

                {/* Split Dual-Panel: Left is Transformation, Right is the Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
                  
                  {/* SUB-CARD 1: RESULTADO REAL (ANTES & DEPOIS) */}
                  <div className="flex flex-col justify-between rounded-2xl bg-cream border border-forest/15 p-3 shadow-soft">
                    <div>
                      {/* Sub-header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-forest tracking-wider uppercase flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          Resultado Real
                        </span>
                        <span className="text-[10px] font-bold text-fresh-dark bg-fresh/20 px-2 py-0.5 rounded-full">
                          {currentCase.duration}
                        </span>
                      </div>

                      {/* Photo Frame with High-Contrast Badges */}
                      <div className="relative rounded-xl overflow-hidden border border-forest/10 bg-black/10 aspect-square sm:aspect-[4/5] shadow-inner">
                        <img
                          src={currentCase.image}
                          alt={currentCase.subtitle}
                          className="w-full h-full object-cover object-top"
                          loading="eager"
                        />

                        {/* Top Badges: ANTES / DEPOIS */}
                        <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-black tracking-wider uppercase shadow-md border border-white/20">
                          Antes
                        </div>
                        <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-fresh text-white text-[10px] font-black tracking-wider uppercase shadow-md border border-white/20">
                          Depois
                        </div>

                        {/* Floating result tag at bottom of photo */}
                        <div className="absolute bottom-2 inset-x-2 p-2 rounded-lg bg-forest/95 backdrop-blur-md text-cream shadow-md text-center border border-fresh/30">
                          <span className="text-xs sm:text-sm font-bold text-fresh block tracking-tight">
                            {currentCase.badge}
                          </span>
                          <span className="text-[10px] text-cream/80 block font-medium">
                            {currentCase.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Switcher Tabs to view Frontal & Lateral Cases */}
                    <div className="flex gap-1.5 mt-2.5 pt-2 border-t border-forest/10">
                      {transformationCases.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveCase(idx)}
                          className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold tracking-tight transition-all cursor-pointer ${
                            activeCase === idx
                              ? 'bg-forest text-cream shadow-xs scale-[1.02]'
                              : 'bg-white text-forest/70 hover:bg-forest/5 border border-forest/10'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SUB-CARD 2: O MÉTODO DIETFIT (GUIA 3D + WHATSAPP) */}
                  <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-forest via-[#133F2B] to-[#0A2619] text-cream p-3.5 sm:p-4 shadow-soft border border-fresh/30 relative overflow-hidden">
                    {/* Background subtle radial glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-fresh/20 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      {/* Sub-header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-cream/15">
                        <span className="text-[11px] font-bold text-fresh tracking-wider uppercase flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-fresh" />
                          O Método Dietfit
                        </span>
                        <span className="text-[10px] font-bold text-cream/90 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                          7 Semanas
                        </span>
                      </div>

                      {/* 3D Hardcover Book Representation with Full-Bleed Cover Image */}
                      <div className="relative my-2 py-1 flex justify-center">
                        <div 
                          className="book-stage-3d w-[150px] sm:w-[160px] h-[205px] sm:h-[220px] rounded-r-xl rounded-l-xs text-cream p-3 relative overflow-hidden flex flex-col justify-between border-y border-r border-fresh/50 shadow-card"
                          style={{
                            boxShadow: '4px 2px 0px #FAF7F0, 7px 4px 0px #C7BEA5, 10px 6px 0px #FAF7F0, -10px 16px 26px rgba(0,0,0,0.5)'
                          }}
                        >
                          {/* Full cover background photo */}
                          <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
                              alt="Método Dietfit Cardápios"
                              className="w-full h-full object-cover object-center"
                              loading="eager"
                              decoding="async"
                            />
                            {/* Top & bottom readability gradients */}
                            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/85 via-black/45 to-transparent z-10" />
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A2619] via-[#0F3826]/90 to-transparent z-10" />
                            <div className="absolute inset-0 bg-forest/20 z-5" />
                          </div>

                          {/* Book spine crease & gloss sheen */}
                          <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-black/50 via-white/15 to-transparent z-20 pointer-events-none" />
                          <div className="absolute inset-0 book-gloss-overlay z-20 pointer-events-none" />

                          {/* Ribbon bookmark simulation */}
                          <div className="absolute -top-1 right-3 w-2.5 h-6 bg-fresh shadow-sm z-30 flex flex-col justify-end">
                            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[4px] border-b-forest self-center" />
                          </div>

                          <div className="relative z-20">
                            <div className="text-[8px] font-extrabold text-white tracking-widest uppercase pb-1 border-b border-white/20 flex items-center justify-between drop-shadow">
                              <span className="flex items-center gap-1">
                                <img src="/dietfit-symbol-white.png" alt="DF" className="w-3 h-3 object-contain" />
                                <span className="text-fresh">DIETFIT</span>
                              </span>
                              <span>🇲🇿 MZ</span>
                            </div>
                          </div>

                          <div className="relative z-20 mt-auto">
                            <h4 className="font-serif text-xs font-bold text-cream leading-tight drop-shadow-md">
                              MÉTODO DIETFIT
                            </h4>
                            <p className="text-[8px] text-fresh-light font-medium drop-shadow-xs">
                              7 Semanas de Transformação
                            </p>

                            <div className="mt-1.5 py-0.5 px-1.5 rounded bg-black/45 backdrop-blur-xs border border-white/20 text-center">
                              <span className="text-[7.5px] text-fresh font-bold block">
                                Peixe • Feijão • Ovos
                              </span>
                            </div>

                            <div className="mt-1 pt-1 border-t border-white/20 flex items-center justify-between text-[7px] text-cream/90 font-medium">
                              <span>Edição 2026</span>
                              <span className="text-fresh font-bold">PDF HD</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* What's Inside the Method */}
                      <div className="space-y-1.5 mt-3 pt-2.5 border-t border-cream/15 text-[11px] text-cream/90">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fresh shrink-0" />
                          <span>Cardápios com comida dos nossos mercados</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fresh shrink-0" />
                          <span>Acompanhamento diário no WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fresh shrink-0" />
                          <span>Sem passar fome nem remédios</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct-response reassurance footer inside method */}
                    <div className="mt-3 pt-2 border-t border-cream/15 flex items-center justify-between text-[10px] text-cream/85">
                      <span className="flex items-center gap-1 font-semibold text-fresh">
                        <Smartphone className="w-3.5 h-3.5 text-fresh" />
                        100% no Telemóvel
                      </span>
                      <span className="text-cream/70 font-medium">Acesso Imediato</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Trust Ribbon */}
                <div className="mt-3.5 pt-3 border-t border-forest/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-forest font-medium">
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-fresh" />
                    Feito para a rotina da mulher em Moçambique
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-forest">
                    <Users className="w-4 h-4 text-fresh" />
                    +450 moçambicanas transformadas
                  </span>
                </div>

              </div>

              {/* Floating aesthetic pill top-right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-xs font-semibold shadow-premium border border-fresh/30 animate-float">
                <span className="w-2 h-2 rounded-full bg-fresh"></span>
                <span>Método + Prova Real</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
