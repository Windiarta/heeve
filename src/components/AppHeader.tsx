import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
export function AppHeader({
  onHome,
  onAbout,
}: {
  onHome: () => void;
  onAbout: () => void;
}) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return (
      <button
        className="app-header-show"
        onClick={() => setHidden(false)}
        aria-label="Show header"
      >
        +
      </button>
    );
  }

  return (
    <header className="app-header">
      <button className="brand" onClick={onHome}>
        HEEVE
      </button>
      <nav>
        <button onClick={onHome}>Explore</button>
        <button onClick={onAbout}>About</button>
        <ThemeToggle />
        <button
          className="app-header-hide"
          onClick={() => setHidden(true)}
          aria-label="Hide header"
        >
          −
        </button>
      </nav>
    </header>
  );
}
