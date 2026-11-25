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

        {/* Medical, Medication & Allergy Legal Disclaimer */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-white/5 border border-cream/15 text-xs text-cream/75 leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-fresh font-bold uppercase tracking-wider text-xs">
            <Shield className="w-4 h-4 text-fresh shrink-0" />
            <span>Aviso de Responsabilidade Médica, Medicação & Alergias Alimentares</span>
          </div>
          
          <p>
            <strong>1. O Menu Não Substitui Orientações Médicas:</strong> Os materiais, cardápios e planos disponibilizados pelo programa Dietfit têm finalidade exclusivamente educativa e de reeducação de hábitos alimentares saudáveis. Não substituem consultas, diagnósticos, tratamentos nem prescrições médicas ou nutricionais individualizadas.
          </p>

          <p>
            <strong>2. Tratamentos e Medicação Sob Orientação Médica:</strong> Caso esteja a realizar algum tratamento médico recomendado ou a tomar medicamentos prescritos pelo seu médico, <strong>deve continuar rigorosamente o seu tratamento e nunca suspender nem alterar as suas medicações</strong> sem expressa autorização e orientação do seu médico assistente.
          </p>

          <p>
            <strong>3. Atenção Rigorosa a Alergias Alimentares:</strong> Cada participante é responsável por verificar os ingredientes sugeridos nas refeições e <strong>evitar todo e qualquer alimento ao qual tenha alergia ou intolerância conhecida</strong>. Tenha atenção especial a mariscos ou frutos do mar em caso de receitas ou produtos que contenham algas marinhas, assim como a amendoim e oleaginosas caso tenha alergia a amendoim. Os cardápios são sugestões flexíveis: faça sempre substituições seguras por outros alimentos locais simples permitidos.
          </p>

          <p className="text-[11px] text-cream/60 pt-1 border-t border-cream/10">
            Mulheres grávidas, lactantes, pessoas com doenças crónicas ou histórico de transtornos alimentares devem obrigatoriamente consultar o seu médico assistente antes de iniciar qualquer mudança substancial na sua alimentação ou rotina de jejum. Os resultados individuais variam consoante o metabolismo e a consistência de cada participante.
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
