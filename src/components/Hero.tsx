export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__content">
        <span className="badge">🚀 Nova versão 3.0 disponível</span>

        <h1 className="hero__title">
          Evolua a sua presença digital com <span className="text-gradient">inteligência</span>
        </h1>

        <p className="hero__subtitle">
          A plataforma completa para hospedar, proteger e analisar o crescimento do seu
          negócio online — tudo num só lugar.
        </p>

        <div className="hero__actions">
          <a href="#planos" className="btn btn--primary">
            Começar agora
          </a>
          <a href="#recursos" className="btn btn--ghost">
            Ver recursos
          </a>
        </div>
      </div>
    </section>
  );
}
