import { ArrowRightIcon } from './Icons';
import { useSignup } from '../context/SignupContext';

export default function CTA() {
  const { openSignup } = useSignup();

  return (
    <section id="cta" className="cta">
      <div className="cta__glow" />
      <h2>Pronto para transformar o seu negócio?</h2>
      <p>Junte-se a milhares de empresas que já confiam na Aurora para crescer online.</p>
      <button type="button" className="btn btn--primary btn--lg" onClick={() => openSignup()}>
        Começar agora — é grátis
        <ArrowRightIcon size={18} className="btn__icon" />
      </button>
    </section>
  );
}
