// ============================================================================
// CONTEÚDO DE MARKETING — TROQUE POR DADOS REAIS ANTES DE PUBLICAR
// ----------------------------------------------------------------------------
// Os números e depoimentos abaixo são placeholders de design, escritos para
// mostrar como o layout fica preenchido. Publicá-los tal como estão seria
// apresentar como factos coisas que a empresa ainda não validou (ex: "12.000
// empresas", depoimentos de pessoas que não existem) — o que é arriscado do
// ponto de vista legal e de confiança da marca.
//
// Antes de publicar:
//   1. Troque STATS por números reais (ou remova a secção, se ainda não os tiver).
//   2. Troque TESTIMONIALS por citações reais de clientes (com autorização deles),
//      ou remova a secção até ter as primeiras.
//   3. Ajuste HERO_TRUST_LABEL para não afirmar uma quantidade de clientes que
//      ainda não tem.
// ============================================================================

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const STATS: StatItem[] = [
  { value: 99.9, suffix: '%', label: 'Uptime garantido', decimals: 1 },
  { value: 50, suffix: 'k+', label: 'Domínios ativos' },
  { value: 2.4, suffix: 'x', label: 'Crescimento médio', decimals: 1 },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Mudámos para a Aurora e o tempo de carregamento da loja caiu para metade. O suporte responde em minutos, não em dias.',
    name: 'Joana Mendes',
    role: 'Fundadora, Loja Kifua',
    initials: 'JM',
    color: '#8b5cf6',
  },
  {
    quote:
      'A configuração que antes levava uma semana com a nossa equipa técnica, agora fazemos em 20 minutos no painel.',
    name: 'Luís Cardoso',
    role: 'CTO, Nexa Tech',
    initials: 'LC',
    color: '#3b82f6',
  },
  {
    quote:
      'Os relatórios em tempo real mudaram como decidimos campanhas. Vemos o impacto no mesmo dia, não no fim do mês.',
    name: 'Ana Silva',
    role: 'Marketing, Grupo Cintra',
    initials: 'AS',
    color: '#f59e0b',
  },
];

// Frase por baixo dos avatares no Hero. Troque ou remova até ter uma base
// de clientes real que sustente a afirmação.
export const HERO_TRUST_LABEL = 'Junte-se a mais de 12.000 empresas já a crescer com a Aurora';
