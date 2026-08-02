import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    n: '01',
    title: 'Registe o seu domínio',
    desc: 'Escolha o nome do seu negócio e ative-o em segundos, sem burocracia.',
  },
  {
    n: '02',
    title: 'Configure em minutos',
    desc: 'Modelos prontos e um painel simples tratam da parte técnica por si.',
  },
  {
    n: '03',
    title: 'Cresça com confiança',
    desc: 'Acompanhe métricas em tempo real e escale sempre que precisar.',
  },
];

function Step({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`step reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <span className="step__number">{step.n}</span>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <div className="section__header">
        <span className="eyebrow">Processo</span>
        <h2>Do zero ao ar em 3 passos</h2>
        <p>Sem configurações complicadas — comece a operar hoje mesmo.</p>
      </div>

      <div className="steps">
        <div className="steps__line" />
        {steps.map((s, i) => (
          <Step key={s.n} step={s} index={i} />
        ))}
      </div>
    </section>
  );
}
