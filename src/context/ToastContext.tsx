import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface ToastContextValue {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [key, setKey] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setKey((k) => k + 1);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setMessage(null), 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-viewport" aria-live="polite">
        {message && (
          <div className="toast" key={key}>
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast deve ser usado dentro de <ToastProvider>');
  return ctx;
}
