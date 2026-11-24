import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  BookOpen, 
  Clock, 
  Droplets, 
  Dumbbell, 
  UtensilsCrossed, 
  MessageCircle, 
  Gift, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const ProductStack = () => {
  const bonusIcons = {
    Droplets: Droplets,
    Dumbbell: Dumbbell,
    UtensilsCrossed: UtensilsCrossed,
    MessageCircle: MessageCircle,
  };

  return (
    <section className="py-16 md:py-24 bg-beige-light/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            O Conteúdo Completo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Tudo o que precisas para começar está aqui.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/75">
            Um ecossistema prático e sem complicações para transformares a tua rotina com apoio diário.
          </p>
        </div>

        {/* 2 Main Core Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Main Product 01 */}
          <div className="rounded-3xl bg-white p-7 sm:p-9 border border-forest/15 shadow-card hover:shadow-soft transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-cream text-[11px] font-bold tracking-wider uppercase mb-5">
                <BookOpen className="w-3.5 h-3.5 text-fresh" />
                <span>PRODUTO PRINCIPAL 01</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-4">
                Plano Alimentar — 6 Semanas
              </h3>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-6">
                Um guia organizado com sugestões de refeições para te ajudar a planear a tua alimentação, fazer escolhas melhores e manter uma rotina alimentar equilibrada.
              </p>
            </div>
            <div className="pt-5 border-t border-forest/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-forest font-medium">
                <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                <span>Cardápios práticos com ingredientes moçambicanos</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-forest font-medium">
                <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                <span>Foco em saciedade e alimentação sem restrições loucas</span>
              </div>
            </div>
          </div>

          {/* Main Product 02 */}
          <div className="rounded-3xl bg-white p-7 sm:p-9 border border-forest/15 shadow-card hover:shadow-soft transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fresh/15 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-cream text-[11px] font-bold tracking-wider uppercase mb-5">
                <Clock className="w-3.5 h-3.5 text-fresh" />
                <span>PRODUTO PRINCIPAL 02</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mb-4">
                Guia de Jejum Intermitente
              </h3>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-6">
                Um guia introdutório com informações e orientações para compreenderes o jejum intermitente e avaliares se esta abordagem é adequada para ti.
              </p>
            </div>
            <div className="pt-5 border-t border-forest/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-forest font-medium">
                <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                <span>Explicação passo a passo e sem complicações</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-forest font-medium">
                <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                <span>Orientação para respeitares sempre os sinais do teu corpo</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Exclusive Bonuses Stack */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-fresh/20 flex items-center justify-center">
              <Gift className="w-4 h-4 text-forest" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest">
              Bónus Exclusivos Incluídos no Programa
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.products.bonuses.map((bonus, idx) => {
              const Icon = bonusIcons[bonus.icon] || Gift;
              return (
                <div
                  key={bonus.id}
                  className="rounded-2xl bg-white/90 p-5 sm:p-6 border border-forest/10 shadow-card hover:shadow-soft hover:border-fresh/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold tracking-wider text-forest/70 uppercase bg-sage/50 px-2.5 py-1 rounded-full">
                        {bonus.badge}
                      </span>
                      <Icon className="w-5 h-5 text-fresh" />
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-forest mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-forest/5 flex items-center gap-1.5 text-xs text-fresh font-semibold">
                    <span>Incluído com o programa</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner CTA to Offer */}
        <div className="text-center">
          <a
            href={siteConfig.checkoutUrl}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-forest text-cream font-semibold text-sm sm:text-base hover:bg-forest-light shadow-soft transition-all"
          >
            <span>Garantir Todos Estes Materiais</span>
            <ArrowRight className="w-4 h-4 text-fresh" />
          </a>
        </div>

      </div>
    </section>
  );
};
