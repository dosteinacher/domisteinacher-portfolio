'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'en' | 'de';

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    // One-time read of a browser-only preference post-mount; SSR always
    // starts 'en' to avoid a hydration mismatch, so this can't be lazy state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === 'de') setLang('de');
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === 'en' ? 'de' : 'en';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
