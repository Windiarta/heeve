import { ThemeToggle } from './ThemeToggle';
export function AppHeader({ onHome, onAbout }: { onHome: () => void; onAbout: () => void }) { return <header className="app-header"><button className="brand" onClick={onHome}>HEEVE</button><nav><button onClick={onHome}>Explore</button><button onClick={onAbout}>About</button><ThemeToggle /></nav></header>; }
