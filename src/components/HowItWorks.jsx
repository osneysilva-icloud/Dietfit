import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { MousePointerClick, DownloadCloud, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Escolhe o Dietfit",
      desc: "Faz a tua inscrição através do botão de adesão e conclui o pagamento seguro via M-Pesa, E-Mola ou Cartão.",
      icon: MousePointerClick
    },
    {
      step: "02",
      title: "Recebe os teus materiais",
      desc: "Acede aos planos, receitas e materiais incluídos no teu telemóvel ou computador logo após a confirmação.",
      icon: DownloadCloud
    },
    {
      step: "03",
      title: "Começa a tua jornada",
      desc: "Organiza as refeições e utiliza o acompanhamento disponível no WhatsApp para esclarecer as tuas dúvidas.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-beige-light/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            Passo a Passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            É simples começar.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80">
            Sem complicações técnicas ou burocracias. Estás a apenas três passos de dar início à tua nova rotina.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-forest/10 shadow-card hover:shadow-soft transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-forest/20">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-sage/60 flex items-center justify-center text-forest">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-forest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest/5 flex items-center gap-2 text-xs font-semibold text-fresh">
                  <span>Passo {idx + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini CTA */}
        <div className="text-center">
          <a
            href={siteConfig.checkoutUrl}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-forest hover:text-fresh transition-colors"
          >
            <span>Quero dar o meu primeiro passo agora</span>
            <ArrowRight className="w-4 h-4 text-fresh" />
          </a>
        </div>

      </div>
    </section>
  );
};
