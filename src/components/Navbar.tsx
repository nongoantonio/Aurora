import { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon, AuroraLogo } from './Icons';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'recursos', label: 'Recursos' },
    { id: 'como-funciona', label: 'Como funciona' },
    { id: 'planos', label: 'Planos' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          <AuroraLogo size={26} />
          Aurora
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <button className="btn btn--primary btn--sm" onClick={() => scrollTo('cta')}>
            Começar agora
          </button>
          <button className="navbar__burger" onClick={() => setOpen((o) => !o)} aria-label="Abrir menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
        <div className="navbar__mobile-theme">
          <span>Tema</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
