import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageSquareQuote, ZoomIn, X, CheckCircle2 } from 'lucide-react';

export const SocialProof = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-beige-light/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-fresh" />
            Vozes Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Cada jornada é única. A tua também pode começar hoje.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Mensagens espontâneas partilhadas por participantes que decidiram dar o primeiro passo com a orientação do programa Dietfit.
          </p>
        </div>

        {/* Real WhatsApp Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header info with neutral label and key highlight badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-forest/5">
                  <span className="text-[11px] font-semibold text-forest/70 uppercase tracking-wider">
                    {item.authorLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-fresh bg-fresh/15 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-fresh" />
                    {item.highlight}
                  </span>
                </div>

                {/* Direct verified quote */}
                <blockquote className="font-serif italic text-charcoal/90 text-sm sm:text-base leading-relaxed mb-5">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Verified WhatsApp Screenshot Preview with Click-to-Zoom */}
              <div className="pt-2">
                <div
                  onClick={() => setSelectedImage(item.image)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-forest/15 bg-cream hover:border-fresh transition-all"
                  title="Clica para ampliar o print real"
                >
                  <img
                    src={item.image}
                    alt="Mensagem real enviada no WhatsApp por participante do Dietfit"
                    className="w-full max-h-36 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-cream text-xs font-semibold">
                    <ZoomIn className="w-4 h-4 text-cream" />
                    <span>Ver print original</span>
                  </div>
                </div>
                <p className="text-[11px] text-charcoal/60 text-center mt-2 flex items-center justify-center gap-1">
                  <span>💬 Mensagem real enviada via WhatsApp</span>
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs text-charcoal/70">
            * Mensagens autênticas autorizadas de participantes do programa. Não utilizamos relatos fabricados nem resultados garantidos. Cada organismo responde ao seu ritmo e consistência.
          </p>
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot Inspection */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-forest-dark/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl p-3 shadow-elevated border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center shadow-soft hover:bg-forest-light"
              aria-label="Fechar visualização"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-1">
              <img
                src={selectedImage}
                alt="Print original do WhatsApp"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>
            <p className="text-center text-xs text-charcoal/70 mt-2 font-medium">
              Captura de ecrã real de mensagem no WhatsApp • Dietfit
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
