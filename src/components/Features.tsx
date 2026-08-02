import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: '⚡',
    tone: 'violet',
    title: 'Alta Performance',
    desc: 'Servidores com SSD NVMe e CDN global para um carregamento instantâneo em qualquer lugar.',
  },
  {
    icon: '🛡️',
    tone: 'blue',
    title: 'Segurança Avançada',
    desc: 'SSL grátis, firewall inteligente e backups automáticos diários para proteger os seus dados.',
  },
  {
    icon: '📊',
    tone: 'amber',
    title: 'Análise em Tempo Real',
    desc: 'Painéis detalhados para acompanhar tráfego, conversões e desempenho ao vivo.',
  },
];

function FeatureCard({ f, index }: { f: (typeof features)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`feature-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`feature-card__icon feature-card__icon--${f.tone}`}>{f.icon}</div>
      <h3>{f.title}</h3>
      <p>{f.desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="recursos" className="section">
      <div className="section__header">
        <span className="eyebrow">Recursos</span>
        <h2>Recursos Poderosos</h2>
        <p>Tudo o que precisa para construir, proteger e escalar a sua presença online.</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <FeatureCard key={f.title} f={f} index={i} />
        ))}
      </div>
    </section>
  );
}
