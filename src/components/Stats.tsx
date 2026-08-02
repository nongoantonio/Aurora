import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 99.9, suffix: '%', label: 'Uptime garantido', decimals: 1 },
  { value: 50, suffix: 'k+', label: 'Domínios ativos' },
  { value: 2.4, suffix: 'x', label: 'Crescimento médio', decimals: 1 },
];

function Counter({
  value,
  suffix,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, value]);

  return (
    <span className="stat__value">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="stats">
      <div ref={ref} className={`stats__panel reveal ${isVisible ? 'is-visible' : ''}`}>
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} start={isVisible} />
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
