// ============================================================================
// CONFIGURAÇÃO DO SITE — edite estes valores com os dados reais do seu negócio
// ============================================================================

// Número de WhatsApp em formato internacional, SEM "+", espaços ou traços.
// Exemplo Angola: 244923000000
export const WHATSAPP_NUMBER = '244943220360';

// Email para onde o botão "Contacto" do rodapé deve escrever.
export const CONTACT_EMAIL = 'gideaohernandez@gmail.com';

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
