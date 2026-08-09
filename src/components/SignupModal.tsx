import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon, CheckIcon } from './Icons';
import { submitLead } from '../lib/leads';
import { useToast } from '../context/ToastContext';
import { trackEvent } from '../lib/analytics';

interface SignupModalProps {
  isOpen: boolean;
  plan?: string;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupModal({ isOpen, plan, onClose }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const { showToast } = useToast();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Bloqueia o scroll do fundo, fecha com Escape e mantém o foco preso
  // dentro do modal (Tab/Shift+Tab não saem para o resto da página).
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  // Reinicia o formulário sempre que o modal volta a abrir.
  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setError(null);
      setStatus('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Indique o seu nome completo.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError('Indique um email válido.');
      return;
    }
    setError(null);
    setStatus('submitting');
    try {
      await submitLead({ name: name.trim(), email: email.trim(), plan, createdAt: new Date().toISOString() });
      setStatus('success');
      trackEvent('generate_lead', { plan: plan || 'default' });
      showToast('Pedido recebido — verifique o seu email em breve.');
    } catch {
      setStatus('idle');
      setError('Não foi possível enviar agora. Tente novamente.');
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="signup-title" ref={dialogRef}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          <CloseIcon size={18} />
        </button>

        {status === 'success' ? (
          <div className="modal__success">
            <span className="modal__success-icon">
              <CheckIcon size={22} />
            </span>
            <h3>Pedido recebido!</h3>
            <p>
              Enviámos os próximos passos para <strong>{email}</strong>. Verifique também a pasta de spam.
            </p>
            <button className="btn btn--primary btn--block" onClick={onClose}>
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h3 id="signup-title">{plan ? `Começar com o plano ${plan}` : 'Criar a sua conta'}</h3>
            <p className="modal__subtitle">
              Preencha os seus dados — sem cartão de crédito necessário para começar.
            </p>

            <form className="modal__form" onSubmit={handleSubmit} noValidate>
              <label>
                Nome completo
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="O seu nome"
                  autoComplete="name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@empresa.com"
                  autoComplete="email"
                />
              </label>

              {error && (
                <p className="modal__error" role="alert">
                  {error}
                </p>
              )}

              <button className="btn btn--primary btn--block" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    <span className="spinner" /> A processar…
                  </>
                ) : (
                  'Criar conta grátis'
                )}
              </button>

              <p className="modal__legal">
                Ao continuar, aceita os{' '}
                <Link to="/termos-de-servico" onClick={onClose}>
                  Termos de Serviço
                </Link>{' '}
                e a{' '}
                <Link to="/politica-de-privacidade" onClick={onClose}>
                  Política de Privacidade
                </Link>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
