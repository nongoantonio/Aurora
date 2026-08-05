import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import SignupModal from '../components/SignupModal';

interface SignupContextValue {
  openSignup: (plan?: string) => void;
}

const SignupContext = createContext<SignupContextValue | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>(undefined);

  const openSignup = useCallback((p?: string) => {
    setPlan(p);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SignupContext.Provider value={{ openSignup }}>
      {children}
      <SignupModal isOpen={isOpen} plan={plan} onClose={close} />
    </SignupContext.Provider>
  );
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error('useSignup deve ser usado dentro de <SignupProvider>');
  return ctx;
}
