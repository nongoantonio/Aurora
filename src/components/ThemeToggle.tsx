import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  const saved = window.localStorage.getItem('aurora-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('aurora-theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
    >
      <span className={`theme-toggle__track ${theme === 'light' ? 'theme-toggle__track--light' : ''}`}>
        <span className="theme-toggle__thumb">
          {theme === 'dark' ? <MoonIcon size={13} /> : <SunIcon size={13} />}
        </span>
      </span>
    </button>
  );
}
