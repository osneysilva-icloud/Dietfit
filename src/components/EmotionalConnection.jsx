import React from 'react';
import { HelpCircle, XCircle, ArrowDown } from 'lucide-react';

export const EmotionalConnection = () => {
  const painPoints = [
    {
      title: "Começas a dieta, mas não consegues manter a disciplina.",
      desc: "A rotina aperta, o cansaço bate e a dieta restritiva torna-se insustentável ao fim de poucos dias."
    },
    {
      title: "Pensas que para emagrecer precisas de deixar de comer quase tudo.",
      desc: "Cortar tudo o que gostas só gera ansiedade, desejos incontroláveis e a sensação de frustração."
    },
    {
      title: "Achas que só vais conseguir resultados se pagares ginásio.",
      desc: "Entre as exigências do trabalho e da família, pagar e ir ao ginásio todos os dias parece uma meta inalcançável."
    },
    {
      title: "Ficas perdida sem saber o que preparar para comer.",
      desc: "Abre-se a geleira ao final do dia sem um plano claro, acabando por comer o que for mais rápido e menos nutritivo."
    },
    {
      title: "Gastas dinheiro em alimentos caros que nem fazem parte da tua rotina.",
      desc: "Receitas da internet que pedem ingredientes importados, caros e difíceis de encontrar nos mercados locais."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-beige-light/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-fresh" />
            Identificas-te com isto?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest font-semibold leading-tight">
            Quantas vezes já começaste uma dieta e acabaste por desistir?
          </h2>
          <div className="w-16 h-1 bg-fresh mx-auto mt-4 rounded-full" />
        </div>

        {/* Editorial Grid of Relatable Situations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-white border border-forest/10 shadow-card hover:shadow-soft transition-all flex items-start gap-4 ${
                idx === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-fresh/15 flex items-center justify-center shrink-0 mt-0.5">
                <XCircle className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-forest mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Closing Statement Card */}
        <div className="rounded-3xl bg-forest text-cream p-7 sm:p-10 md:p-12 text-center shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fresh/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-cream mb-6">
              "O problema não é falta de força de vontade. Muitas vezes, é simplesmente não saberes como organizar a tua alimentação de uma forma que consigas manter."
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fresh/20 border border-fresh/30 text-fresh-light text-sm sm:text-base font-semibold">
              <span>É exatamente aqui que entra o Dietfit.</span>
              <ArrowDown className="w-4 h-4 text-fresh animate-bounce" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
