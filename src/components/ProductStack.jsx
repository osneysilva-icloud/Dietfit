import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { BookMockup3D, VipAccessCard3D } from './BookMockup3D';
import { 
  BookOpen, 
  Clock, 
  Gift, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Download
} from 'lucide-react';

export const ProductStack = () => {
  return (
    <section id="conteudo" className="py-16 md:py-24 bg-beige-light/40 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-fresh/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-fresh" />
            Ecossistema Digital Completo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
            Tudo o que precisas para começar está aqui.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/75 leading-relaxed">
            Materiais em alta definição, ilustrados, práticos e adaptados à realidade dos mercados e da culinária de Moçambique.
          </p>
        </div>

        {/* 2 Main Core Products with 3D Presentation */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-forest"></span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
              Os 2 Guias Principais do Programa
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Main Product 01 */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-forest/15 shadow-card hover:shadow-soft transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0 flex justify-center">
                <BookMockup3D 
                  badge="VOLUME PRINCIPAL 01"
                  title="Plano Alimentar 6 Semanas"
                  subtitle="Cardápios estruturados com ingredientes moçambicanos"
                  coverImage="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
                  theme="forest"
                  pages="64 Páginas"
                  format="Ebook 3D Digital • Guia Master"
                  estimatedValue="1.200 MT"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest text-cream text-[10px] font-bold tracking-wider uppercase mb-3">
                    <BookOpen className="w-3 h-3 text-fresh" />
                    <span>MANUAL OFICIAL</span>
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-forest mb-2.5">
                    Plano Alimentar — 6 Semanas
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4">
                    Um guia organizado com sugestões refeição a refeição para te ensinar a fazer escolhas nutritivas com comida de verdade: peixe grelhado, batata doce, ovos, verduras e leguminosas locais.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-forest/10">
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Cardápios práticos para quem tem rotina ocupada</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Alimentos simples sem precisar de comprar produtos caros</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Foco em saciedade e fim do efeito sanfona</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Product 02 */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-forest/15 shadow-card hover:shadow-soft transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0 flex justify-center">
                <BookMockup3D 
                  badge="VOLUME PRINCIPAL 02"
                  title="Guia de Jejum Intermitente"
                  subtitle="Aprende o método de forma segura, natural e gradual"
                  coverImage="https://images.unsplash.com/photo-1770393391946-7d9b658deec3?auto=format&fit=crop&w=600&q=80"
                  theme="midnight"
                  pages="38 Páginas"
                  format="Ebook 3D Digital • Método Passo a Passo"
                  estimatedValue="850 MT"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest text-cream text-[10px] font-bold tracking-wider uppercase mb-3">
                    <Clock className="w-3 h-3 text-fresh" />
                    <span>MÉTODO PRÁTICO</span>
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-forest mb-2.5">
                    Guia de Jejum Intermitente
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4">
                    Compreende o jejum de maneira simples e sem termos médicos complicados. Descobre os protocolos mais seguros, como quebrar o jejum corretamente e como respeitar os sinais do teu corpo.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-forest/10">
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Explicação clara para iniciantes sem passar fome</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Combinação perfeita com os cardápios do programa</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-4 h-4 text-fresh shrink-0" />
                    <span>Dicas para manter a energia alta durante o dia</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Exclusive 3D Bonuses Section */}
        <div className="mb-16">
          
          <div className="rounded-3xl bg-forest p-6 sm:p-10 text-cream mb-10 shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-fresh/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fresh/20 text-fresh-light text-xs font-bold uppercase tracking-wider mb-2">
                  <Gift className="w-4 h-4 text-fresh" />
                  <span>Oferta Especial de Lançamento</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-cream">
                  Bónus Exclusivos em 3D Incluídos no Teu Acesso
                </h3>
                <p className="text-sm sm:text-base text-cream/80 max-w-2xl mt-2">
                  Se fosses comprar cada um destes materiais separadamente, pagarias mais de <span className="text-fresh-light font-bold">2.200 MT</span>. Hoje, todos eles vêm incluídos <span className="underline decoration-fresh font-bold">100% grátis</span> no teu pacote Dietfit.
                </p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0">
                <span className="text-xs text-cream/70 block uppercase tracking-wider">Valor dos 4 Bónus:</span>
                <span className="text-xl font-bold text-fresh/70 line-through">2.200 MT</span>
                <span className="text-xs font-bold bg-fresh text-forest block px-2.5 py-1 rounded-full mt-1 uppercase tracking-wide">
                  100% Grátis no Programa
                </span>
              </div>
            </div>
          </div>

          {/* 3D Bonus Ebooks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Bonus 01: Águas Naturais */}
            <div className="rounded-3xl bg-white p-5 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between">
              <BookMockup3D 
                badge="BÓNUS #01"
                title="Águas Naturais & Sucos Detox"
                subtitle="Bebidas revigorantes e hidratação inteligente com folhas e frutas da terra"
                coverImage="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
                theme="emerald"
                pages="32 Páginas"
                format="Ebook 3D Digital • PDF HD"
                estimatedValue="450 MT"
              />
              <div className="mt-3 pt-3 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Aprende a preparar infusões aromáticas e sucos para desinchar e refrescar os teus dias com ingredientes do mercado.
                </p>
              </div>
            </div>

            {/* Bonus 02: Lanches para Quem Treina */}
            <div className="rounded-3xl bg-white p-5 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between">
              <BookMockup3D 
                badge="BÓNUS #02"
                title="Lanches para Quem Treina"
                subtitle="Energia rápida, prática e económica para o teu dia"
                coverImage="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
                theme="amber"
                pages="28 Páginas"
                format="Ebook 3D Digital • PDF HD"
                estimatedValue="450 MT"
              />
              <div className="mt-3 pt-3 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Ideias rápidas de lanches nutritivos para antes ou depois dos teus treinos ou caminhadas diárias.
                </p>
              </div>
            </div>

            {/* Bonus 03: Receitas Extras Dietfit */}
            <div className="rounded-3xl bg-white p-5 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between">
              <BookMockup3D 
                badge="BÓNUS #03"
                title="Receitas Extras Dietfit"
                subtitle="Pratos moçambicanos adaptados, saudáveis e cheios de sabor"
                coverImage="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                theme="terracotta"
                pages="45 Páginas"
                format="Ebook 3D Master • PDF HD"
                estimatedValue="550 MT"
              />
              <div className="mt-3 pt-3 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Mais de 30 ideias de refeições com ingredientes locais para nunca caíres na monotonia na tua cozinha.
                </p>
              </div>
            </div>

            {/* Bonus 04: VIP WhatsApp Pass */}
            <div className="rounded-3xl bg-white p-5 border border-forest/10 shadow-card hover:shadow-soft transition-all flex flex-col justify-between">
              <VipAccessCard3D 
                badge="BÓNUS #04"
                title="Canal VIP no WhatsApp & Lives"
                subtitle="Acompanhamento diário com a coach, dúvidas em direto e comunidade acolhedora"
                estimatedValue="750 MT"
              />
              <div className="mt-3 pt-3 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  O espaço onde as dúvidas são esclarecidas, recebes incentivo diário e nunca estás sozinha na tua jornada.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* High-Impact CTA Box */}
        <div className="text-center max-w-xl mx-auto">
          <a
            href={siteConfig.checkoutUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-forest text-cream font-bold text-base sm:text-lg hover:bg-forest-light shadow-elevated transition-all group"
          >
            <span>QUERO GARANTIR TODOS OS EBOOKS E BÓNUS</span>
            <ArrowRight className="w-5 h-5 text-fresh group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-charcoal/60 mt-3 flex items-center justify-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-fresh" />
            <span>Download imediato em PDF + Acesso ao WhatsApp após confirmação</span>
          </p>
        </div>

      </div>
    </section>
  );
};
