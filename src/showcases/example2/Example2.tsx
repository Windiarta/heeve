import config from "./config.json";
import "./example2.css";

import CursorGrid from "../../components/react-bits/CursorGrid";
import TextType from "../../components/react-bits/TextType";
import { BlurText } from "../../components/react-bits/BlurText";
import { ShowcaseCatalog } from "../../components/ShowcaseCatalog";
import { ShowcaseInfo } from "../../components/ShowcaseInfo";
import type { ShowcaseConfig } from "../../types/showcase";
import { useTheme } from "../../hooks/useTheme";
const data = config as ShowcaseConfig;
export default function Example2({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const tokens = data.theme[theme];
  return (
    <main
      className="store netlify-page"
      style={
        {
          "--bg": tokens.background,
          "--surface": tokens.surface,
          "--text": tokens.text,
          "--muted": tokens.muted,
          "--primary": tokens.primary,
          "--cta": "#16d9d9",
          "--cta-text": "#181a1c",
          "--link": "#0e7fe1",
        } as React.CSSProperties
      }
    >
      <section className="netlify-hero">
        <CursorGrid
          className="netlify-cursor-grid"
          cellSize={44}
          color="#16D9D9"
          radius={150}
          falloff="smooth"
          holdTime={350}
          fadeDuration={700}
          lineWidth={1.1}
          maxOpacity={0.48}
          fillOpacity={0}
          gridOpacity={0.04}
          cellRadius={6}
          clickPulse
          pulseSpeed={650}
        />
        <header className="netlify-topbar">
          <button onClick={() => navigate("/")} className="netlify-wordmark">
            {data.title || data.showcase.title}
          </button>
          <button
            className="netlify-outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.contactPersonName || data.owner.name}
          </button>
        </header>
        <div className="netlify-hero-inner">
          <p className="eyebrow">{data.hero.eyebrow}</p>
          <h1>
            <BlurText>
              {data.headline || data.title || data.showcase.title}
            </BlurText>
          </h1>
          <p>{data.content || data.subtitle || data.showcase.description}</p>
          <button
            className="netlify-cta"
            onClick={() =>
              document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.hero.primaryAction} ↗
          </button>
          <div
            className="netlify-status terminal-card"
            aria-label={`${data.showcase.title} terminal preview`}
          >
            <div className="terminal-topbar">
              <span>
                <i />
                <i />
                <i />
              </span>
              <code>{data.slug}/deploy</code>
            </div>
            <div className="terminal-body">
              <p>
                <b>$</b> deploy-goods init
              </p>
              <TextType
                text={data.products.map((product) => `› ${product.name}`)}
                typingSpeed={38}
                deletingSpeed={18}
                pauseDuration={1100}
                cursorCharacter="▋"
                cursorClassName="terminal-cursor"
                textColors={["#16d9d9"]}
              />
              <p className="terminal-success">
                <b>✓</b> Ready to ship digital work.
              </p>
              <small>
                {data.products.length} services · {data.showcase.category}
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="netlify-library" id="catalog">
        <div className="netlify-section-title">
          <p className="eyebrow">{data.showcase.category}</p>
          <h2>{data.subtitle || data.showcase.description}</h2>
          <button
            className="netlify-link"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.hero.secondaryAction} ↗
          </button>
        </div>
        <ShowcaseCatalog
          products={data.products}
          slug={data.slug}
          navigate={navigate}
          whatsapp={data.contactPersonWhatsapp}
          purchaseLabel={data.hero.primaryAction}
          detailLabel={data.hero.secondaryAction}
          variant="masonry"
          searchEnabled
        />
      </section>
      <ShowcaseInfo config={data} />
    </main>
  );
}
