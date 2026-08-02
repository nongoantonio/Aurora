import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-mark" />
          Aurora
        </a>

        <nav className="navbar__links">
          <button onClick={() => scrollTo('recursos')}>Recursos</button>
          <button onClick={() => scrollTo('planos')}>Planos</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
        </nav>

        <button className="btn btn--primary btn--sm" onClick={() => scrollTo('cta')}>
          Começar agora
        </button>
      </div>
    </header>
  );
}
