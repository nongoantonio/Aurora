import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AuroraLogo, ArrowRightIcon } from './Icons';

export default function LegalPage({ title, updatedAt, children }: { title: string; updatedAt: string; children: ReactNode }) {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <Link to="/" className="navbar__logo">
          <AuroraLogo size={26} />
          Aurora
        </Link>
        <Link to="/" className="legal-page__back">
          <ArrowRightIcon size={14} className="legal-page__back-icon" />
          Voltar ao site
        </Link>
      </header>

      <main className="legal-page__content">
        <span className="eyebrow">Legal</span>
        <h1>{title}</h1>
        <p className="legal-page__updated">Última atualização: {updatedAt}</p>
        <div className="legal-page__body">{children}</div>
      </main>
    </div>
  );
}
