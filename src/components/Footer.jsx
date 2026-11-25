import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Leaf, Shield, Lock, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-forest-dark text-cream/80 pt-16 pb-12 border-t border-forest">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/10">
          
          {/* Brand Info with Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group">
              <img 
                src="/dietfit-logo-horizontal-white.png" 
                alt="DietFit Moçambique" 
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
            </a>
            <p className="text-xs sm:text-sm text-cream/70 leading-relaxed max-w-sm">
              Um programa prático, acessível, natural e sustentável para mulheres que querem perder peso, sentir-se mais leves e cuidar de si sem extremismos em Moçambique.
            </p>
            <div className="flex items-center gap-4 text-xs text-fresh">
              <span>🇲🇿 Feito para a realidade Moçambicana</span>
              <span>•</span>
              <span>7 Semanas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-sm font-semibold text-cream uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs text-cream/70">
              <li>
                <a href="#" className="hover:text-fresh transition-colors">Início</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-fresh transition-colors">Resultados e Depoimentos</a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-fresh transition-colors">O que está incluído</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-fresh transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Security & Support */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-sm font-semibold text-cream uppercase tracking-wider">
              Segurança e Suporte
            </h3>
            <p className="text-xs text-cream/70 leading-relaxed">
              Pagamentos processados de forma encriptada e segura através da plataforma de checkout Tutora Pay.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-cream/80">
                <Shield className="w-3.5 h-3.5 text-fresh" />
                <span>Dados 100% protegidos com criptografia SSL</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cream/80">
                <Lock className="w-3.5 h-3.5 text-fresh" />
                <span>M-Pesa, E-Mola e Cartões Aceites</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="py-8 border-b border-cream/10 text-[11px] text-cream/60 leading-relaxed space-y-2">
          <p>
            <strong>Aviso Legal de Saúde:</strong> As informações e materiais disponibilizados pelo programa Dietfit têm caráter exclusivamente educativo, informativo e de reeducação de hábitos alimentares. O programa não substitui consultas, diagnósticos ou prescrições médicas e nutricionais individualizadas. Mulheres grávidas, lactantes, pessoas com doenças crónicas ou histórico de transtornos alimentares devem consultar o seu médico assistente antes de qualquer alteração substancial na sua dieta.
          </p>
          <p>
            Os resultados de perda de peso e bem-estar variam de pessoa para pessoa em função do seu metabolismo, ponto de partida, compromisso e estilo de vida. Nenhuma promessa de resultado exato ou cura médica é feita ou garantida.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} DIETFIT. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com carinho para o público feminino</span>
            <Heart className="w-3 h-3 text-fresh inline fill-fresh" />
          </p>
        </div>

      </div>
    </footer>
  );
};
