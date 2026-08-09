// ============================================================================
// CONFIGURAÇÃO DO SITE — edite estes valores com os dados reais do seu negócio
// ============================================================================

// Número de WhatsApp em formato internacional, SEM "+", espaços ou traços.
// Exemplo Angola: 244923000000
export const WHATSAPP_NUMBER = '244943220360';

// Email para onde o botão "Contacto" do rodapé deve escrever.
export const CONTACT_EMAIL = 'gideaohernandez@gmail.com';

// Endpoint do Formspree (ex: 'https://formspree.io/f/abcd1234').
// Deixe vazio ('') para os pedidos ficarem apenas guardados no navegador
// (modo demonstração). Assim que preencher, os pedidos passam a chegar
// mesmo ao seu email — sem mais nenhuma alteração de código necessária.
// Crie o seu em https://formspree.io (grátis até 50 envios/mês).
export const FORMSPREE_ENDPOINT = '';

// Google Analytics 4 — Measurement ID (ex: 'G-XXXXXXXXXX').
// Pode também ser definido via variável de ambiente VITE_GA_MEASUREMENT_ID
// (ficheiro .env, não commitado) em vez de editar este ficheiro.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

const PLACEHOLDER_WHATSAPP = '244943220360';
const PLACEHOLDER_EMAIL = 'gideaohernandez@gmail.com';

// Avisa alto e bom som na consola, em desenvolvimento, se algum destes
// valores ainda não foi trocado pelos dados reais — para não publicar
// o site sem reparar que os botões de contacto apontam para lugar nenhum.
if (import.meta.env.DEV) {
  if (WHATSAPP_NUMBER === PLACEHOLDER_WHATSAPP) {
    console.warn(
      '[Aurora] WHATSAPP_NUMBER ainda é um valor de exemplo. Edite src/config.ts com o número real antes de publicar.'
    );
  }
  if (CONTACT_EMAIL === PLACEHOLDER_EMAIL) {
    console.warn(
      '[Aurora] CONTACT_EMAIL ainda é um valor de exemplo. Edite src/config.ts com o email real antes de publicar.'
    );
  }
  if (!FORMSPREE_ENDPOINT) {
    console.warn(
      '[Aurora] FORMSPREE_ENDPOINT não está configurado — os pedidos de conta ficam só guardados no navegador do visitante. Veja src/config.ts.'
    );
  }
}

/**
 * Gera um link de "click to chat" do WhatsApp com uma mensagem pré-preenchida.
 * Este link funciona sem qualquer backend — abre a conversa diretamente
 * na app ou no WhatsApp Web.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Gera um link "mailto:" com assunto pré-preenchido.
 */
export function buildMailtoLink(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
