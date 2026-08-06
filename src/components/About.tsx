import { useScrollReveal } from '../hooks/useScrollReveal';
import { ShieldIcon, ChartIcon, CloudLockIcon, PeopleIcon } from './Icons';
import type { ComponentType } from 'react';

interface Pillar {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
}

const pillars: Pillar[] = [
  { icon: ShieldIcon, title: 'Segurança e Proteção' },
  { icon: ChartIcon, title: 'Inteligência de Dados' },
  { icon: CloudLockIcon, title: 'Tecnologia Confiável' },
  { icon: PeopleIcon, title: 'Focado em Resultados' },
];

function PillarItem({ pillar, index }: { pillar: Pillar; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = pillar.icon;
  return (
    <div
      ref={ref}
      className={`pillar reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Icon size={24} />
      <span>{pillar.title}</span>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="section about">
      <div className="section__header">
        <span className="eyebrow">Sobre nós</span>
        <h2>Feita por quem já sentiu a dor de crescer sem as ferramentas certas</h2>
      </div>

      <div ref={ref} className={`about__body reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="about__text">
          <p>
            A Aurora nasceu de uma frustração simples: hospedar e fazer crescer um negócio
            online envolvia ferramentas soltas, suporte lento e preços pouco transparentes.
            Decidimos construir a plataforma que gostaríamos de ter tido desde o início —
            rápida, segura e sem letras miúdas.
          </p>
          <p>
            Hoje ajudamos milhares de empresas, de pequenos lojistas a operações Enterprise,
            a hospedar, proteger e analisar a sua presença digital num único painel — com
            suporte humano, em português, sempre que precisam.
          </p>
        </div>

        <div className="about__mission">
          <span className="about__mission-label">A nossa missão</span>
          <p>
            Dar a qualquer negócio, independentemente do tamanho, as mesmas ferramentas que
            as grandes empresas usam para crescer online.
          </p>
        </div>
      </div>

      <div className="pillars">
        {pillars.map((p, i) => (
          <PillarItem key={p.title} pillar={p} index={i} />
        ))}
      </div>
    </section>
  );
}
