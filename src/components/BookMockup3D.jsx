import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, Bookmark, Flame } from 'lucide-react';

/**
 * High-End 3D Book & Digital Mockup Component
 * Renders an ultra-realistic 3D hardcover eBook with spine, glossy foil reflections,
 * page layers, and interactive 3D hover physics.
 */
export const BookMockup3D = ({
  badge = "BÓNUS EXCLUSIVO",
  title = "Guia de Receitas",
  subtitle = "Alimentação simples e saudável",
  coverImage,
  theme = "emerald", // 'emerald' | 'amber' | 'terracotta' | 'forest' | 'midnight'
  pages = "32 Páginas",
  format = "Ebook 3D Digital • PDF HD",
  isPopular = false,
  estimatedValue = "500 MT"
}) => {
  // Theme gradients & accent styling
  const themes = {
    emerald: {
      coverBg: 'from-[#0F3826] via-[#174A33] to-[#0A2619]',
      overlayGradient: 'from-[#0A2619] via-[#0F3826]/85 to-transparent',
      badgeBg: 'bg-fresh text-forest font-bold',
      spineBg: 'from-[#0A2619] via-[#174A33] to-[#061B11]',
      glowColor: 'rgba(109, 159, 114, 0.35)',
      goldBorder: 'border-fresh/40'
    },
    amber: {
      coverBg: 'from-[#3D2808] via-[#5C3C0B] to-[#2B1B04]',
      overlayGradient: 'from-[#1C1102] via-[#3D2808]/85 to-transparent',
      badgeBg: 'bg-amber-400 text-stone-900 font-bold',
      spineBg: 'from-[#2B1B04] via-[#4A3008] to-[#1C1102]',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      goldBorder: 'border-amber-400/50'
    },
    terracotta: {
      coverBg: 'from-[#3A1D1A] via-[#522924] to-[#281310]',
      overlayGradient: 'from-[#190B09] via-[#3A1D1A]/85 to-transparent',
      badgeBg: 'bg-orange-400 text-stone-900 font-bold',
      spineBg: 'from-[#281310] via-[#43201C] to-[#190B09]',
      glowColor: 'rgba(234, 88, 12, 0.35)',
      goldBorder: 'border-orange-400/50'
    },
    forest: {
      coverBg: 'from-[#0C2419] via-[#153B2A] to-[#081710]',
      overlayGradient: 'from-[#081710] via-[#0C2419]/85 to-transparent',
      badgeBg: 'bg-emerald-400 text-forest font-bold',
      spineBg: 'from-[#081710] via-[#113123] to-[#040C08]',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      goldBorder: 'border-emerald-400/50'
    },
    midnight: {
      coverBg: 'from-[#111A24] via-[#1A2838] to-[#0B121A]',
      overlayGradient: 'from-[#070B10] via-[#111A24]/85 to-transparent',
      badgeBg: 'bg-cyan-400 text-stone-900 font-bold',
      spineBg: 'from-[#0B121A] via-[#15202E] to-[#070B10]',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      goldBorder: 'border-cyan-400/50'
    }
  };

  const currentTheme = themes[theme] || themes.emerald;

  return (
    <div className="flex flex-col items-center group select-none">
      
      {/* 3D Book Stage */}
      <div className="relative py-4 px-2 w-full max-w-[280px] perspective-book flex justify-center">
        
        {/* Glow behind book on hover */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
          style={{ background: currentTheme.glowColor }}
        />

        {/* The 3D Book Object - Mobile-first responsive orientation */}
        <div className="book-stage-3d relative preserve-3d">
          {/* Main Hardcover Front */}
          <div 
            className={`w-[210px] sm:w-[225px] h-[310px] sm:h-[330px] rounded-r-xl rounded-l-xs bg-gradient-to-br ${currentTheme.coverBg} text-cream p-4 relative overflow-hidden flex flex-col justify-between border-y border-r ${currentTheme.goldBorder}`}
            style={{
              boxShadow: `
                5px 2px 0px #FAF7F0,
                8px 4px 0px #E5DFC8,
                11px 6px 0px #FAF7F0,
                14px 8px 0px #D8D0BA,
                -15px 22px 35px -5px rgba(10, 26, 18, 0.45)
              `
            }}
          >
            {/* FULL COVER PHOTO WITH CINEMATIC LIGHTING (Ultra-Visible on Mobile & Desktop) */}
            {coverImage ? (
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={coverImage} 
                  alt={title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager" 
                  decoding="async"
                />
                {/* Upper dark vignette for top badges readability */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/85 via-black/45 to-transparent z-10" />
                
                {/* Lower gradient for title & typography readability */}
                <div className={`absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t ${currentTheme.overlayGradient} z-10`} />
                
                {/* Subtle contrast tint */}
                <div className="absolute inset-0 bg-black/15 z-5" />
              </div>
            ) : null}

            {/* Hardcover Spine Binding Fold / Crease Shadow on Left */}
            <div className="absolute inset-y-0 left-0 w-6 book-spine-crease z-20 pointer-events-none" />

            {/* Glossy Diagonal Laminate Reflection Sheen */}
            <div className="absolute inset-0 book-gloss-overlay z-20 pointer-events-none" />

            {/* Ribbon Bookmark simulation */}
            <div className="absolute -top-1 right-6 w-3.5 h-10 bg-fresh shadow-md z-30 flex flex-col justify-end">
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[6px] border-b-forest self-center" />
            </div>

            {/* Top Foil Stamp / Brand Watermark with Official Symbol */}
            <div className="relative z-20">
              <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-white/20">
                <span className="text-[9px] font-extrabold tracking-widest uppercase text-white flex items-center gap-1.5 drop-shadow-md">
                  <img src="/dietfit-symbol-white.png" alt="DF" className="w-2.5 h-2.5 object-contain" />
                  DIETFIT • 2026
                </span>
                <span className="text-[8px] font-bold text-white/90 tracking-wider drop-shadow-md">
                  MOÇAMBIQUE 🇲🇿
                </span>
              </div>

              {/* Badge */}
              <div className="mt-2">
                <span className={`inline-block text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-md ${currentTheme.badgeBg}`}>
                  {badge}
                </span>
              </div>
            </div>

            {/* Book Title & Typography */}
            <div className="relative z-20 mt-auto">
              <h4 className="font-serif text-base sm:text-lg font-bold text-cream leading-tight drop-shadow-md mb-1">
                {title}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-cream/90 leading-tight line-clamp-2 drop-shadow-sm font-medium">
                {subtitle}
              </p>

              {/* Bottom Spine details */}
              <div className="mt-2.5 pt-2 border-t border-white/25 flex items-center justify-between text-[9px] text-cream/90 font-semibold drop-shadow-sm">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-fresh" />
                  {pages}
                </span>
                <span className="text-fresh font-bold uppercase tracking-wider">
                  PDF HD
                </span>
              </div>
            </div>

          </div>

          {/* Book Spine (3D Left Edge) */}
          <div 
            className={`absolute top-0 bottom-0 -left-[14px] w-[15px] rounded-l-xs bg-gradient-to-r ${currentTheme.spineBg} border-l border-y border-white/10 flex flex-col justify-between items-center py-4 text-cream/80 text-[7px] font-bold uppercase tracking-widest shadow-inner`}
            style={{
              transform: 'rotateY(-75deg)',
              transformOrigin: 'right center'
            }}
          >
            <span>DF</span>
            <span className="writing-mode-vertical rotate-180 tracking-widest text-[6px] opacity-80">
              DIETFIT DIGITAL
            </span>
            <Bookmark className="w-2.5 h-2.5 text-fresh" />
          </div>

        </div>

      </div>

      {/* Realistic Ground Shadow */}
      <div 
        className="w-48 sm:w-52 h-3 rounded-full blur-md bg-forest-dark/35 transition-all duration-500 group-hover:scale-110 group-hover:opacity-75 -mt-2 mb-4"
      />

      {/* Card Info Below 3D Book */}
      <div className="w-full text-center px-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest/5 text-forest text-[11px] font-semibold mb-1.5">
          <CheckCircle2 className="w-3 h-3 text-fresh" />
          <span>Valor Normal: <del className="text-charcoal/60">{estimatedValue}</del></span>
          <span className="text-fresh font-bold uppercase ml-1">Grátis</span>
        </div>
        <p className="text-xs text-charcoal/70">
          {format}
        </p>
      </div>

    </div>
  );
};

/**
 * 3D VIP Community Access Pass Component for Bonus 04 (WhatsApp & Lives)
 */
export const VipAccessCard3D = ({
  badge = "BÓNUS EXCLUSIVO 04",
  title = "Canal VIP no WhatsApp & Lives",
  subtitle = "Acompanhamento diário com a coach, dúvidas em direto e comunidade acolhedora",
  estimatedValue = "750 MT"
}) => {
  return (
    <div className="flex flex-col items-center group select-none">
      
      {/* 3D Stage */}
      <div className="relative py-4 px-2 w-full max-w-[280px] perspective-book flex justify-center">
        
        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-fresh/30 pointer-events-none -z-10" />

        {/* 3D VIP Card Object - Mobile-first responsive orientation */}
        <div className="book-stage-3d relative preserve-3d">
          <div 
            className="w-[210px] sm:w-[225px] h-[310px] sm:h-[330px] rounded-2xl bg-gradient-to-br from-[#0B261A] via-[#16432E] to-[#071911] text-cream p-4 relative overflow-hidden flex flex-col justify-between border-2 border-fresh/40"
            style={{
              boxShadow: `
                5px 3px 0px rgba(109, 159, 114, 0.4),
                9px 6px 0px rgba(23, 61, 44, 0.6),
                -15px 22px 35px -5px rgba(10, 26, 18, 0.5)
              `
            }}
          >
            {/* Diagonal Gloss Sheen */}
            <div className="absolute inset-0 book-gloss-overlay pointer-events-none" />

            {/* Card Header with Official Symbol */}
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-2 border-b border-white/15">
                <span className="text-[9px] font-extrabold tracking-widest uppercase text-fresh flex items-center gap-1.5">
                  <img src="/dietfit-symbol-green.png" alt="DF" className="w-3 h-3 object-contain" />
                  VIP ACCESS PASS
                </span>
                <span className="text-[8px] bg-fresh/20 text-cream px-1.5 py-0.5 rounded font-mono">
                  #DIETFIT-MZ
                </span>
              </div>

              <div className="mt-2.5">
                <span className="inline-block text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full gold-badge font-bold">
                  {badge}
                </span>
              </div>
            </div>

            {/* Simulating 3D Smart Card / WhatsApp Phone Preview */}
            <div className="relative z-10 my-2 rounded-xl bg-forest-dark/80 p-2.5 border border-fresh/20 shadow-inner">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                <div className="w-6 h-6 rounded-full bg-fresh flex items-center justify-center text-forest font-black text-[10px]">
                  DF
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white leading-none">Dietfit Mulheres 🇲🇿</p>
                  <p className="text-[8px] text-fresh">Acompanhamento ativo</p>
                </div>
              </div>
              
              <div className="space-y-1.5 text-[9px]">
                <div className="bg-forest-light/60 p-1.5 rounded text-cream/90">
                  "Bom dia meninas! Hoje o nosso foco é água e prato colorido! 🥗"
                </div>
                <div className="bg-fresh/20 p-1.5 rounded ml-2 text-right text-fresh-light font-medium">
                  "Já fiz a minha refeição! Obrigada coach! 🙏"
                </div>
              </div>
            </div>

            {/* Card Footer Details */}
            <div className="relative z-10 mt-auto">
              <h4 className="font-serif text-base font-bold text-cream leading-tight mb-1">
                {title}
              </h4>
              <p className="text-[10px] text-cream/75 leading-tight line-clamp-2">
                {subtitle}
              </p>

              <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[9px] text-cream/80">
                <span className="text-fresh font-bold">Acesso Direto</span>
                <span className="text-cream/60">WhatsApp Oficial</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Ground Shadow */}
      <div 
        className="w-48 sm:w-52 h-3 rounded-full blur-md bg-forest-dark/35 transition-all duration-500 group-hover:scale-110 group-hover:opacity-75 -mt-2 mb-4"
      />

      {/* Card Info Below */}
      <div className="w-full text-center px-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest/5 text-forest text-[11px] font-semibold mb-1.5">
          <CheckCircle2 className="w-3 h-3 text-fresh" />
          <span>Valor Normal: <del className="text-charcoal/60">{estimatedValue}</del></span>
          <span className="text-fresh font-bold uppercase ml-1">Grátis</span>
        </div>
        <p className="text-xs text-charcoal/70">
          Acesso Completo às 7 Semanas • Lives & Suporte
        </p>
      </div>

    </div>
  );
};
