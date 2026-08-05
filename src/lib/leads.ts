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
 * Este site é 100% estático (sem servidor próprio), por isso, por agora,
 * o pedido é guardado localmente no navegador do visitante — o suficiente
 * para o formulário validar, responder e dar feedback real ao utilizador.
 *
 * PARA RECEBER OS PEDIDOS A SÉRIO (no seu email/CRM), troque o conteúdo
 * desta função por uma chamada a um serviço real. Duas opções simples,
 * sem precisar de construir um backend:
 *
 * 1) Formspree (grátis até 50 envios/mês) — crie uma conta em
 *    https://formspree.io, crie um formulário e substitua:
 *
 *      await fetch('https://formspree.io/f/SEU_FORM_ID', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 *        body: JSON.stringify(lead),
 *      });
 *
 * 2) Supabase / API própria — faça um POST para o seu endpoint:
 *
 *      await fetch('https://SEU-BACKEND.com/api/leads', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(lead),
 *      });
 */
export async function submitLead(lead: Lead): Promise<void> {
  // Simula a latência de uma chamada de rede real.
  await new Promise((resolve) => setTimeout(resolve, 850));

  try {
    const existing: Lead[] = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(lead);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage indisponível (modo privado, por exemplo) — não é crítico.
  }
}

/** Útil para depuração: devolve todos os pedidos guardados localmente. */
export function getStoredLeads(): Lead[] {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
