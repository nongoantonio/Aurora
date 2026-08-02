import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
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

function TestimonialCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`testimonial reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
      <div className="testimonial__author">
        <span className="testimonial__avatar" style={{ background: t.color }}>
          {t.initials}
        </span>
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="section__header">
        <span className="eyebrow">Depoimentos</span>
        <h2>Quem usa, recomenda</h2>
        <p>Histórias reais de negócios que aceleraram com a Aurora.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
