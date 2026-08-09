import { GA_MEASUREMENT_ID } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/**
 * Carrega o Google Analytics 4, apenas se VITE_GA_MEASUREMENT_ID estiver
 * definido (ver .env.example). Sem essa variável, esta função não faz nada
 * e o site continua a funcionar normalmente — não há analytics "fantasma".
 */
export function initAnalytics(): void {
  if (initialized || !GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

/**
 * Regista um evento de conversão/interação (ex: abertura do modal de
 * inscrição, escolha de plano, clique no WhatsApp). Não faz nada se o
 * Analytics não estiver configurado — seguro para chamar sempre.
 */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

/** Regista uma visualização de página — útil para as rotas legais (SPA). */
export function trackPageView(path: string): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}
