import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckIcon } from './Icons';
import { useSignup } from '../context/SignupContext';
import { buildWhatsAppLink } from '../config';

const plans = [
  {
    name: 'Grátis',
    price: '0 Kz',
    period: '',
    desc: 'Para quem está a começar',
    features: ['1 domínio', '1GB de armazenamento', 'SSL grátis', 'Suporte via email'],
    cta: 'Criar conta grátis',
    highlight: false,
    action: 'signup' as const,
  },
  {
    name: 'Pro',
    price: '15.000 Kz',
    period: '/mês',
    desc: 'Para negócios em crescimento',
    features: [
      '10 domínios',
      '50GB SSD NVMe',
      'CDN global',
      'Suporte prioritário 24/7',
      'Backups diários',
    ],
    cta: 'Assinar Pro',
    highlight: true,
    action: 'signup' as const,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Para grandes operações',
    features: [
      'Domínios ilimitados',
      'Armazenamento dedicado',
      'Gestor de conta dedicado',
      'SLA de 99.99%',
    ],
    cta: 'Falar com vendas',
    highlight: false,
    action: 'whatsapp' as const,
  },
];

function PlanCard({
  plan,
  index,
  onSignup,
}: {
  plan: (typeof plans)[number];
  index: number;
  onSignup: (planName: string) => void;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const handleClick = () => {
    if (plan.action === 'signup') {
      onSignup(plan.name);
    } else {
      window.open(
        buildWhatsAppLink(`Olá! Tenho interesse no plano Enterprise da Aurora Cloud.`),
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <div
      ref={ref}
      className={`plan-card reveal ${plan.highlight ? 'plan-card--highlight' : ''} ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {plan.highlight && <span className="plan-card__badge">Popular</span>}
      <h3>{plan.name}</h3>
      <p className="plan-card__desc">{plan.desc}</p>
      <div className="plan-card__price">
        {plan.price}
        {plan.period && <span>{plan.period}</span>}
      </div>
      <ul className="plan-card__features">
        {plan.features.map((f) => (
          <li key={f}>
            <span className="check">
              <CheckIcon size={13} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`btn ${plan.highlight ? 'btn--primary' : 'btn--outline'} btn--block`}
        onClick={handleClick}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  const { openSignup } = useSignup();

  return (
    <section id="planos" className="section">
      <div className="section__header">
        <span className="eyebrow">Planos</span>
        <h2>Planos Transparentes</h2>
        <p>Escolha o plano ideal para a fase do seu negócio. Sem taxas escondidas.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <PlanCard key={p.name} plan={p} index={i} onSignup={openSignup} />
        ))}
      </div>

      <div className="payment-methods">
        <span>Métodos de pagamento aceites</span>
        <div className="payment-methods__list">
          <span className="payment-chip">Multicaixa Express</span>
          <span className="payment-chip">Unitel Money</span>
          <span className="payment-chip">Visa</span>
          <span className="payment-chip">Mastercard</span>
        </div>
      </div>
    </section>
  );
}
