import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Apoio ao cliente" className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Tooltip greeting (dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-premium border border-forest/10 text-xs text-forest animate-fade-in">
          <span>Tens dúvidas? Fala com a equipa no WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal/40 hover:text-charcoal transition-colors ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.whatsapp.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Contactar suporte Dietfit através do WhatsApp"
      >
        {/* Pulsing status indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fresh opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-fresh border-2 border-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 text-white fill-white group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
