import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    q: 'Posso mudar de plano a qualquer momento?',
    a: 'Sim. Pode atualizar ou reduzir o seu plano a qualquer momento diretamente no painel, sem custos de mudança.',
  },
  {
    q: 'Como funciona o período de teste?',
    a: 'Os planos pagos incluem 14 dias de teste grátis, sem necessidade de cartão de crédito para começar.',
  },
  {
    q: 'Que métodos de pagamento são aceites?',
    a: 'Aceitamos Multicaixa Express, Unitel Money, Visa e Mastercard para todos os planos pagos.',
  },
  {
    q: 'Os meus dados estão seguros?',
    a: 'Sim. Usamos encriptação SSL, backups diários automáticos e monitorização de segurança 24/7.',
  },
  {
    q: 'Existe suporte em português?',
    a: 'Sim, a nossa equipa de suporte atende em português, com prioridade para clientes dos planos Pro e Enterprise.',
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`faq-item reveal ${isVisible ? 'is-visible' : ''} ${
        open ? 'faq-item--open' : ''
      }`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <button className="faq-item__question" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="faq-item__icon">+</span>
      </button>
      <div className="faq-item__answer">
        <div className="faq-item__answer-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="section__header">
        <span className="eyebrow">FAQ</span>
        <h2>Perguntas Frequentes</h2>
        <p>Não encontrou o que procurava? Fale com a nossa equipa.</p>
      </div>

      <div className="faq-list">
        {items.map((it, i) => (
          <FaqItem key={it.q} q={it.q} a={it.a} index={i} />
        ))}
      </div>
    </section>
  );
}
