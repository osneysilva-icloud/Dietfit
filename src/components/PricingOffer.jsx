import React from 'react';
import trans1 from '../assets/transformations/transformation-1.jpg';
import { siteConfig } from '../config/siteConfig';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Smartphone, 
  Gift 
} from 'lucide-react';

export const PricingOffer = () => {
  const includes = [
    "Volume 01: Plano Alimentar Prático de 6 Semanas (Ebook 3D Digital)",
    "Volume 02: Guia de Jejum Intermitente Passo a Passo (Ebook 3D Digital)",
    "Bónus 01: Guia de Águas Naturais & Sucos Detox Moçambicanos (Ebook 3D)",
    "Bónus 02: Manual de Lanches Práticos para Quem Treina (Ebook 3D)",
    "Bónus 03: O Livro de Receitas Extras da Cozinha Moçambicana (Ebook 3D)",
    "Bónus 04: VIP Pass — Canal Exclusivo no WhatsApp & Encontros ao Vivo",
    "Receitas adaptadas 100% aos ingredientes e mercados locais de Moçambique"
  ];

  return (
    <section id="oferta" className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-fresh" />
            Inscrição Oficial
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-3">
            O teu próximo passo começa com uma decisão.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80">
            Começa hoje a construir hábitos alimentares mais saudáveis com o Dietfit.
          </p>
        </div>

        {/* Visually Dominant Premium Pricing Card in Deep Forest Green & Cream */}
        <div className="rounded-3xl bg-forest text-cream p-7 sm:p-10 md:p-14 shadow-elevated border-2 border-forest-light relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-fresh/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-cream/15 relative z-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-fresh font-bold block mb-1">
                Acesso Imediato • Edição Moçambique
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream">
                Programa Completo Dietfit
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-fresh/20 border border-fresh/40 text-cream text-xs font-semibold">
              7 Semanas de Orientação + Acompanhamento
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 relative z-10">
            
            {/* Checklist of Everything Included */}
            <div className="lg:col-span-7 space-y-3.5">
              <p className="text-xs font-bold uppercase tracking-wider text-cream/70 mb-2">
                Tudo o que recebes no teu acesso:
              </p>
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-fresh/25 text-fresh flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-cream/95 leading-snug">
                    {item}
                  </span>
                </div>
              ))}

              {/* Mini Proof Badge with Real Transformation Link */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3 bg-white/5 p-3 rounded-2xl">
                <a 
                  href="#transformacoes" 
                  className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-900 shrink-0 relative border border-fresh/40 group/thumb block"
                  title="Clica para ver as transformações"
                >
                  <img
                    src={trans1}
                    alt="Antes e depois de aluna Dietfit"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                    loading="eager"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-fresh text-forest text-[8px] font-black text-center">
                    REAL
                  </span>
                </a>
                <div>
                  <p className="text-xs font-semibold text-cream">
                    Resultados reais documentados em fotos
                  </p>
                  <a 
                    href="#transformacoes" 
                    className="text-[11px] text-fresh-light hover:text-white font-medium underline transition-colors"
                  >
                    Vê as 5 fotos de Antes e Depois completas ➔
                  </a>
                </div>
              </div>
            </div>

            {/* Price Box & CTA Button */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md text-center flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-wider text-fresh font-semibold mb-1">
                Acesso Completo às 7 Semanas
              </span>
              
              {/* Discreet price display */}
              <div className="my-2 flex flex-col items-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-cream tracking-tight">
                  397 MT
                </div>
                <span className="text-[11px] text-cream/75 mt-1 font-medium">
                  Pagamento único • Sem mensalidades surpresa
                </span>
              </div>

              {/* Dominant Purchase CTA Button */}
              <a
                href={siteConfig.checkoutUrl}
                className="w-full group mt-4 py-4 px-6 rounded-xl bg-fresh text-forest font-bold text-base sm:text-lg shadow-lg hover:bg-fresh-light active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-center"
              >
                <span>GARANTIR A MINHA VAGA</span>
                <ArrowRight className="w-5 h-5 text-forest group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Microcopy below button */}
              <p className="text-xs text-cream/80 mt-3 italic leading-relaxed">
                Um passo de cada vez. A tua transformação começa com escolhas conscientes.
              </p>

              {/* Supported payment methods in Mozambique */}
              <div className="mt-5 pt-4 border-t border-white/10 w-full text-center">
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-cream/75 mb-1.5">
                  <Lock className="w-3.5 h-3.5 text-fresh" />
                  <span>Pagamento 100% Seguro via Tutora Pay</span>
                </div>
                <p className="text-[10px] text-cream/60">
                  Aceita M-Pesa • E-Mola • Cartão Visa / Mastercard
                </p>
              </div>

            </div>

          </div>

          {/* Compact Verified Delivery Note */}
          <div className="mt-8 pt-6 border-t border-cream/15 text-xs text-cream/80 flex items-start sm:items-center gap-3 relative z-10">
            <div className="w-7 h-7 rounded-full bg-fresh/20 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4 text-fresh" />
            </div>
            <p className="leading-relaxed">
              <strong>Como recebes o teu acesso:</strong> Imediatamente após a confirmação do pagamento, recebes os ficheiros digitais por email e o link de acesso direto para entrar no canal oficial de acompanhamento do WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
