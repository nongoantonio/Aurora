import { ArrowRightIcon } from './Icons';

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta__glow" />
      <h2>Pronto para transformar o seu negócio?</h2>
      <p>Junte-se a milhares de empresas que já confiam na Aurora para crescer online.</p>
      <a href="#planos" className="btn btn--primary btn--lg">
        Começar agora — é grátis
        <ArrowRightIcon size={18} className="btn__icon" />
      </a>
    </section>
  );
}
