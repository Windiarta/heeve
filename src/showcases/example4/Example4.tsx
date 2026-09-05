import config from "./config.json";
import "./example4.css";
import { Aurora } from "../../components/react-bits/Aurora";
import { BlurText } from "../../components/react-bits/BlurText";
import { TiltedCard } from "../../components/react-bits/TiltedCard";
import { ShowcaseCatalog } from "../../components/ShowcaseCatalog";
import { ShowcaseInfo } from "../../components/ShowcaseInfo";
import { useTheme } from "../../hooks/useTheme";
import type { ShowcaseConfig } from "../../types/showcase";
const data = config as ShowcaseConfig;
export default function Example4({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const t = data.theme[theme];
  return (
    <main
      className="store uber-page"
      style={
        {
          "--bg": t.background,
          "--surface": t.surface,
          "--text": t.text,
          "--muted": t.muted,
          "--primary": t.primary,
        } as React.CSSProperties
      }
    >
      <section className="uber-hero">
        <Aurora />
        <header className="uber-nav">
          <button className="uber-logo" onClick={() => navigate("/")}>
            {data.title}
          </button>
          <button
            className="uber-contact"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.contactPersonName}
          </button>
        </header>
        <div className="uber-hero-grid">
          <div>
            <p className="eyebrow">{data.hero.eyebrow}</p>
            <h1>
              <BlurText>{data.headline}</BlurText>
            </h1>
            <p>{data.content}</p>
            <button
              className="uber-primary"
              onClick={() =>
                document
                  .getElementById("catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {data.hero.primaryAction} ↗
            </button>
          </div>
          <TiltedCard>
            <div className="watch-face">
              <span>{data.showcase.badge}</span>
              <div className="watch-hands" aria-hidden="true">
                <i />
                <b />
              </div>
              <strong>{data.title}</strong>
              <small>{data.showcase.category}</small>
            </div>
          </TiltedCard>
        </div>
      </section>
      <section className="uber-catalog" id="catalog">
        <header>
          <div>
            <p className="eyebrow">{data.showcase.category}</p>
            <h2>{data.subtitle}</h2>
          </div>
          <button
            className="uber-link"
            onClick={() =>
              document
                .getElementById("catalog")
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
          purchaseLabel={data.hero.primaryAction}
          detailLabel={data.hero.secondaryAction}
          variant="editorial"
        />
      </section>
      <ShowcaseInfo config={data} />
    </main>
  );
}
