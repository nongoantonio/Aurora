import type { MouseEvent } from 'react';
import { XSocialIcon, LinkedinIcon, CodeIcon, GlobeIcon, AuroraLogo } from './Icons';
import { useToast } from '../context/ToastContext';
import { buildMailtoLink, buildWhatsAppLink } from '../config';

export default function Footer() {
  const { showToast } = useToast();

  const scrollTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const comingSoon = (label: string) => (e: MouseEvent) => {
    e.preventDefault();
    showToast(`${label} — ainda não disponível, volte em breve.`);
  };

  const openContact = (e: MouseEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoLink('Contacto — site Aurora Cloud');
  };

  const openSystemStatus = (e: MouseEvent) => {
    e.preventDefault();
    showToast('Todos os sistemas operacionais — 99.9% uptime nos últimos 90 dias.');
  };

  const openWhatsApp = (e: MouseEvent) => {
    e.preventDefault();
    window.open(
      buildWhatsAppLink('Olá! Vim através do site da Aurora Cloud.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <AuroraLogo size={28} />
          <p>Aurora Cloud — hospedagem, segurança e análise para o seu negócio digital.</p>
          <div className="footer__socials">
            <a href="#" aria-label="X (Twitter)" onClick={comingSoon('X (Twitter)')}>
              <XSocialIcon size={17} />
            </a>
            <a href="#" aria-label="LinkedIn" onClick={comingSoon('LinkedIn')}>
              <LinkedinIcon size={17} />
            </a>
            <a href="#recursos" aria-label="Documentação" onClick={scrollTo('recursos')}>
              <CodeIcon size={17} />
            </a>
            <a
              href={buildWhatsAppLink('Olá! Vim através do site da Aurora Cloud.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
            >
              <GlobeIcon size={17} />
            </a>
          </div>
        </div>

        <div className="footer__columns">
          <div>
            <h4>Produto</h4>
            <a href="#recursos" onClick={scrollTo('recursos')}>Recursos</a>
            <a href="#como-funciona" onClick={scrollTo('como-funciona')}>Como funciona</a>
            <a href="#planos" onClick={scrollTo('planos')}>Planos</a>
            <a href="#faq" onClick={scrollTo('faq')}>FAQ</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <a href="#" onClick={comingSoon('Sobre nós')}>Sobre nós</a>
            <a href="#" onClick={comingSoon('Carreiras')}>Carreiras</a>
            <a href="#" onClick={openContact}>Contacto</a>
          </div>
          <div>
            <h4>Suporte</h4>
            <a href="#faq" onClick={scrollTo('faq')}>Central de ajuda</a>
            <a href="#" onClick={openSystemStatus}>Estado do sistema</a>
            <a href="#" onClick={openWhatsApp}>Falar no WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Aurora Cloud. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
