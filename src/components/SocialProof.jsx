import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquareQuote,
  ArrowRight
} from 'lucide-react';

// Direct asset imports for 100% reliable Vite bundling
import trans1 from '../assets/transformations/transformation-1.jpg';
import trans2 from '../assets/transformations/transformation-2.jpg';
import trans3 from '../assets/transformations/transformation-3.jpg';
import trans4 from '../assets/transformations/transformation-4.jpg';
import trans5 from '../assets/transformations/transformation-5.jpg';

export const SocialProof = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedPrint, setSelectedPrint] = useState(null);

  const transformations = [
    {
      id: 1,
      image: trans3,
      view: "Vista Frontal",
      title: "Redução Abdominal & Afunilamento de Cintura",
      badge: "-16.1 kg Eliminados",
      quote: "A minha barriga já se foi! Voltei a usar as minhas roupas com orgulho e confiança.",
      story: "Mudança marcante na região do ventre e cintura com refeições simples.",
      weeks: "7 Semanas"
    },
    {
      id: 2,
      image: trans1,
      view: "Vista Lateral (Perfil)",
      title: "Desinchaço Total e Perda de Flancos",
      badge: "Menos Medidas na Cintura",
      quote: "Usei a minha calça de cintura alta sem sufocar depois de tantos meses!",
      story: "Redução drástica da projeção abdominal e melhoria na postura diária.",
      weeks: "7 Semanas"
    },
    {
      id: 3,
      image: trans2,
      view: "Vista Traseira (Costas)",
      title: "Eliminação de Dobras & Firmeza",
      badge: "Costas Lisas & Tonificadas",
      quote: "Com determinação e a orientação da coach, o meu corpo transformou-se sem loucuras.",
      story: "Afunilamento de cintura e redução de gordura localizada nas costas.",
      weeks: "7 Semanas"
    },
    {
      id: 4,
      image: trans5,
      view: "Vista Traseira",
      title: "Redução de Volume Corporal",
      badge: "-11.5 kg Eliminados",
      quote: "Menos dores na coluna e muito mais energia para trabalhar e cuidar de tudo.",
      story: "Harmonização do tronco e pernas com base na reeducação alimentar.",
      weeks: "Programa Dietfit"
    },
    {
      id: 5,
      image: trans4,
      view: "Vista Lateral",
      title: "Fez as Pazes com o Espelho",
      badge: "Autoestima Renovada",
      quote: "Me sinto vencedora! O espelho voltou a transmitir-me confiança e amor-próprio.",
      story: "Evolução lateral consistente, perda de retenção e alívio do cansaço.",
      weeks: "Programa Dietfit"
    }
  ];

  return (
    <section id="provas-sociais" className="py-14 md:py-20 bg-beige-light/40 relative overflow-hidden">
      
      {/* Anchor aliases for smooth navigation */}
      <div id="transformacoes" className="absolute -top-10" />
      <div id="depoimentos" className="absolute -top-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-fresh" />
            Resultados Comprovados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-3">
            Resultados Reais de Mulheres em Moçambique
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Fotos de antes e depois e mensagens espontâneas partilhadas pelas alunas no nosso grupo oficial do WhatsApp.
          </p>
        </div>

        {/* 1. Real Before & After Client Photos Showcase */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-forest/10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
              Transformações Corporais: Antes e Depois
            </h3>
            <span className="text-xs text-charcoal/60 hidden sm:block">
              Clica nas fotos para ampliar
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {transformations.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-forest/10 shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo with ANTES and DEPOIS tags */}
                <div 
                  className="relative cursor-pointer overflow-hidden bg-stone-900 flex items-center justify-center min-h-[300px]"
                  onClick={() => setSelectedPhoto(item)}
                  title="Clica para ampliar o resultado"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 sm:h-80 object-contain group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* ANTES / DEPOIS badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/85 text-white text-[10px] font-black uppercase tracking-wider border border-white/20 shadow z-10">
                    ANTES
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-fresh text-forest text-[10px] font-black uppercase tracking-wider shadow border border-white/40 z-10">
                    DEPOIS
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-cream text-xs font-semibold backdrop-blur-[2px] z-20">
                    <ZoomIn className="w-4 h-4 text-fresh" />
                    <span>Ver ampliado</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-white/90 text-forest text-[9px] font-bold uppercase tracking-wider z-10">
                    {item.view}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-fresh bg-fresh/15 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-fresh" />
                        {item.badge}
                      </span>
                      <span className="text-[10px] text-charcoal/60 uppercase font-semibold">
                        {item.weeks}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-forest mb-1.5 leading-snug">
                      {item.title}
                    </h4>

                    <p className="font-serif italic text-xs text-charcoal/85 leading-relaxed bg-sage/30 p-2 rounded-lg border-l-2 border-fresh">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-forest/10 flex items-center justify-between text-[10px] text-forest/70 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-fresh" />
                      Aluna Dietfit Moçambique 🇲🇿
                    </span>
                    <button 
                      onClick={() => setSelectedPhoto(item)}
                      className="text-fresh hover:text-forest font-bold"
                    >
                      Ampliar ➔
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Secondary 2 Transformations Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            {transformations.slice(3, 5).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="rounded-2xl bg-white p-3 border border-forest/10 hover:border-fresh transition-all flex items-center gap-4 cursor-pointer shadow-sm group"
              >
                <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-stone-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    loading="eager"
                  />
                  <div className="absolute top-1 left-1 px-1 rounded bg-black/80 text-[7px] font-black text-white">ANTES</div>
                  <div className="absolute top-1 right-1 px-1 rounded bg-fresh text-[7px] font-black text-forest">DEPOIS</div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-fresh bg-fresh/15 px-2 py-0.5 rounded-full inline-block mb-1">
                    {item.badge}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-forest leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-charcoal/70 line-clamp-2">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2. Authentic WhatsApp Testimonial Prints */}
        <div>
          <div className="flex items-center gap-2 mb-5 pb-3 border-b border-forest/10">
            <MessageSquareQuote className="w-5 h-5 text-fresh" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
              Mensagens Espontâneas no WhatsApp
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-forest/5">
                    <span className="text-[10px] font-semibold text-forest/70 uppercase tracking-wider">
                      {item.authorLabel}
                    </span>
                    <span className="text-[10px] font-bold text-fresh bg-fresh/15 px-2 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <blockquote className="font-serif italic text-charcoal/90 text-xs sm:text-sm leading-relaxed mb-4">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div
                  onClick={() => setSelectedPrint(item.image)}
                  className="group relative cursor-pointer rounded-xl overflow-hidden border border-forest/15 bg-cream hover:border-fresh transition-all"
                  title="Clica para ampliar o print real"
                >
                  <img
                    src={item.image}
                    alt="Mensagem no WhatsApp"
                    className="w-full max-h-32 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-cream text-[11px] font-semibold">
                    <ZoomIn className="w-3.5 h-3.5 text-cream" />
                    <span>Ver print original</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Full Photo Zoom Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-forest-dark/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-elevated border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center shadow-soft hover:bg-forest-light z-20"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 mb-3 flex items-center justify-center min-h-[300px]">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-contain mx-auto"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/85 text-white text-[10px] font-black uppercase">ANTES</div>
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-fresh text-forest text-[10px] font-black uppercase">DEPOIS</div>
            </div>
            <h4 className="font-serif text-lg font-bold text-forest mb-1">{selectedPhoto.title}</h4>
            <p className="font-serif italic text-xs text-charcoal/80 mb-1">"{selectedPhoto.quote}"</p>
          </div>
        </div>
      )}

      {/* Full Print Zoom Modal */}
      {selectedPrint && (
        <div
          className="fixed inset-0 z-50 bg-forest-dark/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPrint(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl p-3 shadow-elevated border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPrint(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center shadow-soft hover:bg-forest-light"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={selectedPrint} alt="Print WhatsApp" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}

    </section>
  );
};
