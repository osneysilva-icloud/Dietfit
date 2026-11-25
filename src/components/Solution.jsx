import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  CalendarDays, 
  Utensils, 
  Leaf, 
  ShoppingBag, 
  Footprints, 
  MessageCircle,
  Smartphone,
  Tablet,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const Solution = () => {
  const pillars = [
    {
      icon: CalendarDays,
      title: "Planos alimentares práticos",
      desc: "Menús descomplicados para o dia a dia, para saberes sempre o que preparar sem stress."
    },
    {
      icon: Utensils,
      title: "Refeições saborosas e nutritivas",
      desc: "Comida de verdade, cheia de sabor moçambicano, que alimenta e sacia a família inteira."
    },
    {
      icon: Leaf,
      title: "Ingredientes simples e naturais",
      desc: "Foco no que a terra nos dá: legumes, peixe, ovos, verduras e alimentos não processados."
    },
    {
      icon: ShoppingBag,
      title: "Opções dos mercados moçambicanos",
      desc: "Nada de listas estranhas ou caras: tudo pode ser comprado nos mercados locais da tua cidade."
    },
    {
      icon: Footprints,
      title: "Estratégias sem depender de ginásio",
      desc: "A base de 80% dos resultados está no que comes; o ginásio é uma escolha complementar."
    },
    {
      icon: MessageCircle,
      title: "Orientação e acompanhamento no WhatsApp",
      desc: "Apoio constante para tirares dúvidas, manteres o foco e nunca te sentires sozinha."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-fresh/15 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            A Abordagem Dietfit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-5">
            Conhece uma forma mais simples de cuidar do teu corpo.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            O Dietfit é um programa de alimentação de 7 semanas, desenvolvido para te ajudar a criar hábitos mais saudáveis, controlar melhor a tua alimentação e trabalhar na tua perda de peso sem recorrer a dietas extremas.
          </p>
        </div>

        {/* Product Mockup Showcase: Phone, Tablet & Recipe Book */}
        <div className="mb-16 relative">
          <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-beige-light via-cream to-sage-light border border-forest/10 shadow-premium">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest text-fresh font-bold block mb-1">
                Acesso Digital Imediato
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-forest font-semibold">
                Tudo o que precisas na palma da tua mão
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                Materiais 100% digitais e otimizados para ler no teu telefone, tablet ou imprimir se preferires.
              </p>
            </div>

            {/* Visual Multi-Device Device Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center max-w-4xl mx-auto">
              
              {/* Device 1: Tablet Mockup (Plano Alimentar 6 Semanas) */}
              <div className="rounded-2xl bg-white p-3 shadow-card border border-forest/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between pb-2 border-b border-forest/5 mb-2 text-[10px] text-forest/70 font-medium">
                  <div className="flex items-center gap-1">
                    <Tablet className="w-3.5 h-3.5 text-forest" />
                    <span>Tablet & E-reader</span>
                  </div>
                  <span className="text-fresh font-semibold">PDF Interativo</span>
                </div>
                <div className="h-44 rounded-xl bg-forest p-4 text-cream flex flex-col justify-between relative overflow-hidden">
                  {/* Full cover background photo */}
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
                    alt="Plano Alimentar 6 Semanas"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/70 to-black/60 z-5" />

                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-wider text-fresh font-bold block mb-1 drop-shadow">
                      Guia Principal • 🇲🇿
                    </span>
                    <h4 className="font-serif text-base font-semibold leading-tight drop-shadow-md text-white">
                      Plano Alimentar 6 Semanas
                    </h4>
                  </div>
                  <div className="relative z-10 text-[11px] text-cream/95 bg-black/40 backdrop-blur-xs p-2 rounded-lg border border-white/15">
                    ✓ Sugestões de almoço e jantar<br />
                    ✓ Ingredientes dos mercados de Moçambique
                  </div>
                </div>
                <p className="text-center text-xs font-semibold text-forest mt-2.5">
                  Guia Digital Completo
                </p>
              </div>

              {/* Device 2: Smartphone Mockup (WhatsApp & Acompanhamento) */}
              <div className="rounded-2xl bg-forest p-3 shadow-premium border-2 border-fresh/30 md:-translate-y-3 hover:-translate-y-4 transition-transform text-cream">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2 text-[10px] text-cream/80 font-medium">
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-fresh" />
                    <span>No teu Smartphone</span>
                  </div>
                  <span className="bg-fresh text-forest font-bold px-1.5 py-0.5 rounded text-[9px]">DIRETO NO WHATSAPP</span>
                </div>
                <div className="h-52 rounded-xl bg-[#0b2218] p-3 flex flex-col justify-between text-xs border border-white/10">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=100&q=80" 
                      alt="Coach Dietfit Moçambique"
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-fresh"
                      loading="eager"
                      decoding="async"
                    />
                    <div>
                      <p className="font-bold text-[11px] text-white leading-none">Dietfit Mulheres Moçambique 🇲🇿</p>
                      <p className="text-[9px] text-fresh">+450 participantes ativas</p>
                    </div>
                  </div>
                  <div className="space-y-2 py-1.5 text-[11px]">
                    <div className="bg-forest-light/60 p-2 rounded-lg text-cream/90">
                      <span className="text-[9px] text-fresh block font-bold">Coach Dietfit</span>
                      "Bom dia meninas de Maputo, Beira e Matola! Hoje o foco é água com limão e o nosso peixe grelhado com couve! 🌿"
                    </div>
                    <div className="bg-white/15 p-2 rounded-lg ml-2 text-right text-fresh-light">
                      <span className="text-[9px] text-cream/70 block">Amina (Maputo)</span>
                      "Já preparei a minha marmita com batata doce e feijão! Menos 4kg este mês! 💚"
                    </div>
                  </div>
                  <div className="text-center text-[10px] text-cream/70 pt-1 border-t border-white/10">
                    Comunidade Oficial & Encontros ao Vivo
                  </div>
                </div>
                <p className="text-center text-xs font-semibold text-cream mt-2.5">
                  Acompanhamento no Teu Bolso
                </p>
              </div>

              {/* Device 3: Recipe Book Guide (Bónus & Jejum) */}
              <div className="rounded-2xl bg-white p-3 shadow-card border border-forest/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between pb-2 border-b border-forest/5 mb-2 text-[10px] text-forest/70 font-medium">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-forest" />
                    <span>Livro de Receitas</span>
                  </div>
                  <span className="text-fresh font-semibold">Prático & Colorido</span>
                </div>
                <div className="h-44 rounded-xl bg-beige p-4 text-forest flex flex-col justify-between relative overflow-hidden border border-beige-dark">
                  {/* Full cover background photo */}
                  <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                    alt="Receitas Extras Moçambique"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 z-5" />

                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-wider text-fresh font-bold block mb-1 drop-shadow">
                      Livro de Receitas & Bónus
                    </span>
                    <h4 className="font-serif text-base font-semibold leading-tight text-white drop-shadow-md">
                      Guia de Jejum & Águas Naturais
                    </h4>
                  </div>
                  <div className="relative z-10 text-[11px] text-cream bg-black/45 backdrop-blur-xs p-2 rounded-lg border border-white/15">
                    ✓ Águas aromatizadas refrescantes<br />
                    ✓ Lanches saudáveis sem gastar muito
                  </div>
                </div>
                <p className="text-center text-xs font-semibold text-forest mt-2.5">
                  Receitário Especial
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-forest/10 shadow-card hover:shadow-soft hover:border-fresh/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sage/60 flex items-center justify-center text-forest mb-4">
                    <Icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle CTA transition to offer */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.checkoutUrl}
            className="inline-flex items-center gap-2 text-forest font-semibold hover:text-fresh transition-colors text-sm sm:text-base group"
          >
            <span>Ver tudo o que está incluído no programa</span>
            <ArrowRight className="w-4 h-4 text-fresh group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
