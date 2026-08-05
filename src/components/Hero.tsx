import { useRef } from 'react';
import { SparkleIcon, ArrowRightIcon, ZapIcon } from './Icons';
import { useSignup } from '../context/SignupContext';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { openSignup } = useSignup();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const node = heroRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    node.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="top" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero__spotlight" />
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__grid">
        <div className="hero__content">
          <span className="badge badge--anim">
            <SparkleIcon size={14} />
            Nova versão 3.0 disponível
          </span>

          <h1 className="hero__title">
            Evolua a sua presença digital com <span className="text-gradient">inteligência</span>
          </h1>

          <p className="hero__subtitle">
            A plataforma completa para hospedar, proteger e analisar o crescimento do seu
            negócio online — tudo num só lugar, com a simplicidade que o seu tempo merece.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => openSignup()}>
              Começar agora
              <ArrowRightIcon size={16} className="btn__icon" />
            </button>
            <a href="#recursos" className="btn btn--ghost">
              Ver recursos
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__avatars">
              <span style={{ background: '#8b5cf6' }}>JM</span>
              <span style={{ background: '#3b82f6' }}>LC</span>
              <span style={{ background: '#f59e0b' }}>AS</span>
              <span style={{ background: '#22c55e' }}>+</span>
            </div>
            <p>Junte-se a mais de 12.000 empresas já a crescer com a Aurora</p>
          </div>
        </div>

        <div className="hero__mockup" aria-hidden="true">
          <div className="mockup-card">
            <div className="mockup-card__header">
              <div className="mockup-card__dots">
                <span /><span /><span />
              </div>
              <span className="mockup-card__title">painel-aurora.com</span>
            </div>

            <div className="mockup-card__body">
              <div className="mockup-stat">
                <span className="mockup-stat__label">Visitantes hoje</span>
                <span className="mockup-stat__value">8.412</span>
              </div>

              <svg viewBox="0 0 280 90" className="mockup-chart">
                <polyline
                  points="0,70 35,55 70,60 105,35 140,42 175,20 210,28 245,10 280,18"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mockup-chart__line"
                />
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="mockup-card__footer">
                <span className="mockup-pill mockup-pill--up">↑ 24% este mês</span>
                <span className="mockup-pill mockup-pill--online">
                  <span className="mockup-dot" /> Todos os sistemas online
                </span>
              </div>
            </div>
          </div>

          <div className="mockup-float mockup-float--one">
            <ZapIcon size={16} />
            Deploy em 8s
          </div>
          <div className="mockup-float mockup-float--two">99.9% uptime</div>
        </div>
      </div>
    </section>
  );
}
