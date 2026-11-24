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
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-fresh/20 rounded-full blur-xl" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-fresh font-semibold block mb-1">
                      Guia Principal
                    </span>
                    <h4 className="font-serif text-base font-semibold leading-tight">
                      Plano Alimentar 6 Semanas
                    </h4>
                  </div>
                  <div className="text-[11px] text-cream/80 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    ✓ Sugestões de almoço e jantar<br />
                    ✓ Ingredientes dos mercados de Moçambique
                  </div>
                </div>
                <p className="text-center text-xs font-medium text-forest mt-2.5">
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
                    <div className="w-6 h-6 rounded-full bg-fresh flex items-center justify-center text-forest font-bold text-[10px]">
                      DF
                    </div>
                    <div>
                      <p className="font-bold text-[11px] text-white leading-none">Dietfit Mulheres</p>
                      <p className="text-[9px] text-fresh">Acompanhamento diário</p>
                    </div>
                  </div>
                  <div className="space-y-2 py-2 text-[11px]">
                    <div className="bg-forest-light/60 p-2 rounded-lg text-cream/90">
                      "Bom dia meninas! Hoje o nosso foco é beber 2L de água e organizar o almoço com feijão e verduras frescas."
                    </div>
                    <div className="bg-white/15 p-2 rounded-lg ml-3 text-right text-fresh-light">
                      "Já preparei a minha marmita com batata doce e peixe grelhado! 💚"
                    </div>
                  </div>
                  <div className="text-center text-[10px] text-cream/60 pt-1 border-t border-white/10">
                    Comunidade Oficial & Lives
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
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-forest/70 font-semibold block mb-1">
                      Livro de Receitas & Bónus
                    </span>
                    <h4 className="font-serif text-base font-semibold leading-tight text-forest">
                      Guia de Jejum & Águas Naturais
                    </h4>
                  </div>
                  <div className="text-[11px] text-forest/90 bg-white/70 p-2 rounded-lg">
                    ✓ Águas aromatizadas refrescantes<br />
                    ✓ Lanches saudáveis sem gastar muito
                  </div>
                </div>
                <p className="text-center text-xs font-medium text-forest mt-2.5">
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
