import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const Differentiation = () => {
  const highlights = [
    { text: "Não precisas de comprar alimentos caros." },
    { text: "Não precisas de comer apenas saladas." },
    { text: "Não precisas de passar fome." },
    { text: "Não precisas obrigatoriamente de frequentar um ginásio." },
    { text: "Podes organizar refeições com ingredientes que já tens em casa." },
  ];

  const localIngredients = [
    {
      name: "Batata Doce & Tubérculos",
      desc: "Energia sustentável, rica em fibras e acessível em qualquer banca de Moçambique.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Peixe Fresco e Grelhado",
      desc: "Proteína leve, saborosa e abundante no nosso país, perfeita para saciar.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ovos e Proteínas Naturais",
      desc: "Práticos, versáteis e rápidos de preparar para qualquer pequeno-almoço ou jantar.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Feijões e Leguminosas",
      desc: "A base aconchegante da nossa culinária, rica em nutrientes e saciedade.",
      image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Verduras e Folhas Frescas",
      desc: "Couve, espinafre, matapa leve e saladas coloridas cheias de vitalidade.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Frutas Tropicais Locais",
      desc: "Mamão, manga, abacate e citrinos doces da época para sobremesas e lanches naturais.",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-fresh" />
            Por que o Dietfit é Diferente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Não precisas de uma cozinha sofisticada para começares a cuidar de ti.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            O Dietfit não te vai pedir receitas complicadas de países distantes nem pós mágicos. O segredo está em aprender a organizar os alimentos que já fazem parte da cultura e dos mercados de Moçambique.
          </p>
        </div>

        {/* Core Differences Bullet Box */}
        <div className="rounded-3xl bg-sage-light border border-sage-border p-6 sm:p-8 mb-16 shadow-soft">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest mb-6">
            O Que Fica de Fora vs. A Realidade do Dietfit:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/90 border border-forest/10"
              >
                <div className="w-6 h-6 rounded-full bg-forest text-fresh flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-forest leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Gallery of Real Mozambican Ingredients */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest">
              Comida de verdade, natural e ao teu alcance
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1.5">
              Alimentos nutritivos e saborosos que compras no mercado central, nas feiras locais e no teu bairro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localIngredients.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white border border-forest/10 shadow-card hover:shadow-soft transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-md bg-forest/80 backdrop-blur-sm">
                    {item.name}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {item.desc}
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
