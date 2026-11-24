import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Calendar, Compass, Info } from 'lucide-react';

export const TimelineJourney = () => {
  return (
    <section className="py-16 md:py-24 bg-beige-light/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-fresh" />
            A Tua Evolução Passo a Passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Sete semanas para construíres uma nova rotina.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Uma jornada de aprendizagem prática para mudares a tua relação com a comida de forma gradual, respeitosa e duradoura.
          </p>
        </div>

        {/* Educational Disclaimer Banner */}
        <div className="max-w-2xl mx-auto mb-12 p-3.5 rounded-xl bg-white border border-forest/10 flex items-center gap-3 text-xs sm:text-sm text-charcoal/80 shadow-card">
          <Info className="w-4 h-4 text-fresh shrink-0" />
          <span>
            <strong>Jornada Educacional:</strong> Cada corpo responde ao seu próprio ritmo. Este cronograma representa a progressão dos teus novos hábitos e conhecimentos alimentares.
          </span>
        </div>

        {/* DESKTOP TIMELINE: Clean horizontal flow with cards */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal Line connecting nodes */}
            <div className="absolute top-7 left-8 right-8 h-1 bg-sage-border -z-0" />
            
            <div className="grid grid-cols-7 gap-3 relative z-10">
              {siteConfig.timeline.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Step Circle */}
                  <div className="w-14 h-14 rounded-full bg-forest text-cream font-serif font-bold text-base flex items-center justify-center border-4 border-white shadow-soft mb-4 hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  {/* Card Content */}
                  <div className="w-full p-3.5 rounded-xl bg-white border border-forest/10 shadow-card flex flex-col justify-between min-h-[190px]">
                    <div>
                      <span className="text-[10px] font-bold text-fresh uppercase tracking-wider block mb-1">
                        {step.week}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-forest mb-2 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-charcoal/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET TIMELINE: Elegant vertical layout */}
        <div className="lg:hidden">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-fresh/40 space-y-6 sm:space-y-8 ml-3 sm:ml-4">
            {siteConfig.timeline.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Number Circle attached to line */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-forest text-cream font-serif font-bold text-xs sm:text-sm flex items-center justify-center border-4 border-white shadow-soft">
                  {step.number}
                </div>

                {/* Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-forest/10 shadow-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-fresh uppercase tracking-wider">
                      {step.week}
                    </span>
                    <Calendar className="w-3.5 h-3.5 text-forest/40" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-forest mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
