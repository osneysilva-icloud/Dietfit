import React from 'react';
import { 
  Scale, 
  CalendarCheck, 
  Heart, 
  Zap, 
  Sparkles, 
  Smile, 
  AlertCircle 
} from 'lucide-react';

export const ExpectedResults = () => {
  const benefits = [
    {
      icon: Scale,
      title: "Trabalhar para uma perda de peso gradual e saudável",
      desc: "Sem cortes radicais, permitindo que o teu organismo se adapte e queime gordura de forma contínua."
    },
    {
      icon: CalendarCheck,
      title: "Melhorar a organização alimentar",
      desc: "Adeus à incerteza na hora das refeições; ganhas clareza e previsibilidade no que compras e cozinhas."
    },
    {
      icon: Heart,
      title: "Desenvolver hábitos mais equilibrados",
      desc: "Aprender a fazer da comida boa uma rotina natural e prazerosa, sem sentimento de culpa."
    },
    {
      icon: Zap,
      title: "Sentir mais disposição no dia a dia",
      desc: "Com digestões mais leves e nutrientes certos, sentes menos cansaço e mais energia para trabalhar e cuidar da casa."
    },
    {
      icon: Sparkles,
      title: "Aprender receitas nutritivas",
      desc: "Um repertório de pratos fáceis com sabor de verdade para impressionar a família e variar a tua alimentação."
    },
    {
      icon: Smile,
      title: "Melhorar a relação com a alimentação",
      desc: "Fazer as pazes com o prato e com o espelho, sem ansiedade e sem a sensação de estar sempre em 'castigo'."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-fresh/15 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            O Teu Bem-Estar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Pequenas mudanças podem fazer uma grande diferença.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Mais do que números na balança, o Dietfit foi desenhado para transformar a forma como te sentes no teu próprio corpo todos os dias.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-forest/10 shadow-card hover:shadow-soft hover:border-fresh/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sage/60 text-forest flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent & Honest Results Disclaimer */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-sage/30 border border-forest/15 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-fresh" />
            </div>
            <div className="text-xs sm:text-sm text-charcoal/85 space-y-2">
              <h4 className="font-serif text-base font-bold text-forest">
                Nota de Transparência e Responsabilidade Dietfit
              </h4>
              <p className="leading-relaxed">
                Cada organismo é único. Os resultados individuais variam consoante fatores genéticos, estado de saúde inicial, nível de adesão e estilo de vida.
              </p>
              <p className="leading-relaxed">
                O programa menciona uma faixa possível de perda de peso de <strong>6 a 8 kg ao longo de aproximadamente 7 semanas para algumas participantes</strong>, contudo expressamos com total clareza que <strong>isto não é garantido nem deve ser visto como um resultado típico ou automático</strong> para todas as mulheres. O nosso foco principal é a tua saúde, hábitos alimentares conscientes e consistência a longo prazo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
