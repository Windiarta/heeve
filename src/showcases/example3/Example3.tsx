import config from "./config.json";
import "./example3.css";
import { BlurText } from "../../components/react-bits/BlurText";
import { ShowcaseCatalog } from "../../components/ShowcaseCatalog";
import { ShowcaseInfo } from "../../components/ShowcaseInfo";
import type { ShowcaseConfig } from "../../types/showcase";
import { useTheme } from "../../hooks/useTheme";
const data = config as ShowcaseConfig;
export default function Example3({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const tokens = data.theme[theme];
  return (
    <main
      className="store stripe-page"
      style={
        {
          "--bg": tokens.background,
          "--surface": tokens.surface,
          "--text": tokens.text,
          "--muted": tokens.muted,
          "--primary": tokens.primary,
        } as React.CSSProperties
      }
    >
      <section className="stripe-hero">
        <div className="stripe-gradient" />
        <nav className="stripe-nav">
          <button onClick={() => navigate("/")} className="stripe-logo">
            {data.title || data.showcase.title}
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.contactPersonName || data.owner.name} ↗
          </button>
        </nav>
        <div className="stripe-hero-grid">
          <div className="stripe-hero-copy">
            <p className="eyebrow">{data.hero.eyebrow}</p>
            <h1>
              <BlurText>
                {data.headline || data.title || data.showcase.title}
              </BlurText>
            </h1>
            <p>{data.content || data.subtitle || data.showcase.description}</p>
            <button
              className="stripe-cta"
              onClick={() =>
                document
                  .getElementById("catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {data.hero.primaryAction} ↗
            </button>
          </div>
          <div className="stripe-preview">
            <span>{data.showcase.badge}</span>
            <strong>{data.title || data.showcase.title}</strong>
            <small>
              {data.companyEmail || data.companyPhone || data.owner.handle}
            </small>
          </div>
        </div>
      </section>
      <section className="stripe-toolkit" id="catalog">
        <header>
          <div>
            <p className="eyebrow">{data.showcase.category}</p>
            <h2>{data.subtitle || data.showcase.description}</h2>
          </div>
          <button
            className="stripe-link"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.hero.secondaryAction} ↗
          </button>
        </header>
        <ShowcaseCatalog
          products={data.products}
          slug={data.slug}
          navigate={navigate}
          whatsapp={data.contactPersonWhatsapp}
          variant="circular"
        />
      </section>
      <ShowcaseInfo config={data} />
    </main>
  );
}
