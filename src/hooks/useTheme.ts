import { useEffect, useState } from 'react';
export type Theme = 'light' | 'dark';
const preferred = (): Theme => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const readTheme = (): Theme => (localStorage.getItem('theme') as Theme) || preferred();
const themeEvent = 'showcase-theme-change';
export function useTheme() { const [theme, setTheme] = useState<Theme>(readTheme); useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]); useEffect(() => { const sync = (event: Event) => setTheme((event as CustomEvent<Theme>).detail); window.addEventListener(themeEvent, sync); return () => window.removeEventListener(themeEvent, sync); }, []); const toggle = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); window.dispatchEvent(new CustomEvent<Theme>(themeEvent, { detail: next })); }; return { theme, toggle }; }
