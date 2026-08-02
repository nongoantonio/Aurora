import { useScrollReveal } from '../hooks/useScrollReveal';
import { ZapIcon, ShieldIcon, ChartIcon } from './Icons';

const features = [
  {
    icon: ZapIcon,
    tone: 'violet',
    title: 'Alta Performance',
    desc: 'Servidores com SSD NVMe e CDN em mais de 40 pontos do globo para um carregamento instantâneo, onde quer que o seu cliente esteja.',
  },
  {
    icon: ShieldIcon,
    tone: 'blue',
    title: 'Segurança Avançada',
    desc: 'Certificado SSL grátis, firewall inteligente com deteção de ameaças e backups automáticos diários guardados fora do servidor.',
  },
  {
    icon: ChartIcon,
    tone: 'amber',
    title: 'Análise em Tempo Real',
    desc: 'Painéis detalhados de tráfego, conversões e desempenho, atualizados ao segundo — sem esperar por relatórios do mês seguinte.',
  },
];

function FeatureCard({ f, index }: { f: (typeof features)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = f.icon;
  return (
    <div
      ref={ref}
      className={`feature-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`feature-card__icon feature-card__icon--${f.tone}`}>
        <Icon size={22} />
      </div>
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
