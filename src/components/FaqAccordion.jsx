import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-fresh" />
            Tira as Tuas Dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80">
            Respostas claras e transparentes para esclareceres tudo antes de começares.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-forest/10 bg-white shadow-card overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-beige-light/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-forest leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-sage/50 flex items-center justify-center shrink-0 text-forest transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-fresh/20 text-fresh' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/85 leading-relaxed border-t border-forest/5 bg-cream/30">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help micro-link */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-charcoal/70">
            Tens alguma pergunta que não está aqui?{' '}
            <a
              href={siteConfig.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest font-semibold underline decoration-fresh hover:text-fresh transition-colors"
            >
              Fala connosco diretamente pelo WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
