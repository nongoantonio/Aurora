import { FORMSPREE_ENDPOINT } from '../config';

export interface Lead {
  name: string;
  email: string;
  plan?: string;
  createdAt: string;
}

const STORAGE_KEY = 'aurora-leads';

/**
 * Processa um novo pedido de conta / contacto de vendas.
 *
 * Se FORMSPREE_ENDPOINT estiver preenchido em src/config.ts, o pedido é
 * enviado a sério (chega ao seu email/painel do Formspree). Caso contrário,
 * fica em modo demonstração: guardado apenas no navegador do visitante —
 * o suficiente para o formulário validar, responder e dar feedback real.
 *
 * Quer usar outro serviço (Supabase, backend próprio, etc.)? Substitua o
 * bloco "if (FORMSPREE_ENDPOINT)" abaixo por um fetch para o seu endpoint:
 *
 *   await fetch('https://SEU-BACKEND.com/api/leads', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(lead),
 *   });
 */
export async function submitLead(lead: Lead): Promise<void> {
  if (FORMSPREE_ENDPOINT) {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!response.ok) {
      throw new Error(`Formspree respondeu com o estado ${response.status}`);
    }
    return;
  }

  // Modo demonstração — sem FORMSPREE_ENDPOINT configurado.
  await new Promise((resolve) => setTimeout(resolve, 850)); // simula latência de rede
  try {
    const existing: Lead[] = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(lead);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage indisponível (modo privado, por exemplo) — não é crítico.
  }
}

/** Útil para depuração: devolve todos os pedidos guardados localmente (modo demonstração). */
export function getStoredLeads(): Lead[] {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
