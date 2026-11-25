import React from 'react';
import { HelpCircle, XCircle, ArrowDown, Heart } from 'lucide-react';

export const EmotionalConnection = () => {
  const painPoints = [
    {
      title: "Começas a dieta, mas não consegues manter a rotina.",
      desc: "O cansaço do dia a dia bate, os afazeres da casa acumulam-se e a dieta restritiva torna-se insustentável ao fim de poucos dias."
    },
    {
      title: "Pensas que para emagrecer precisas de cortar quase tudo.",
      desc: "Deixar de comer o que gostas só gera ansiedade, desejos incontroláveis e aquela sensação amarga de frustração."
    },
    {
      title: "Achas que só terás resultados se pagares um ginásio caro.",
      desc: "Entre as exigências do emprego, dos filhos e dos transportes, pagar e ir ao ginásio todos os dias não encaixa na tua rotina."
    },
    {
      title: "Ficas perdida sem saber o que preparar na cozinha.",
      desc: "Abre-se a geleira à noite sem um plano simples, acabando por comer o que for mais rápido e menos nutritivo."
    },
    {
      title: "Gastas dinheiro em ingredientes caros da internet.",
      desc: "Receitas mirabolantes que pedem produtos importados, suplementos caros e difíceis de encontrar nos mercados de Moçambique."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-beige-light/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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

        {/* Two-Column Grid: Visual Story with African Woman & Relatable Pain Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Authentic African Woman Visual Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border-2 border-white bg-cream">
              <img
                src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=800&q=80"
                alt="Mulher moçambicana serena e confiante na sua rotina e saúde"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-forest/10">
                <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider mb-1">
                  <Heart className="w-3.5 h-3.5 text-fresh fill-fresh" />
                  <span>Para a mulher moçambicana real</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal/85 leading-snug">
                  "Tu não falhaste. Foi o método que tentaste antes que era insustentável para quem tem uma vida real e agitada."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pain Points Checklist */}
          <div className="lg:col-span-7 space-y-3.5">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-forest/10 shadow-card hover:shadow-soft transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-fresh/15 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-semibold text-forest mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Editorial Closing Statement Card */}
        <div className="rounded-3xl bg-forest text-cream p-7 sm:p-10 md:p-12 text-center shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fresh/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-cream mb-6">
              "O problema nunca foi a tua força de vontade. É simplesmente nunca te terem ensinado a organizar a tua alimentação com a comida que já tens em casa em Moçambique."
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
