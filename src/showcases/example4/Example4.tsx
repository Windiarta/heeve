import config from "./config.json";
import "./example4.css";
import { Aurora } from "../../components/react-bits/Aurora";
import { BlurText } from "../../components/react-bits/BlurText";
import { TiltedCard } from "../../components/react-bits/TiltedCard";

import { ShowcaseCatalog } from "../../components/ShowcaseCatalog";
import { ShowcaseInfo } from "../../components/ShowcaseInfo";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";
import type { ShowcaseConfig } from "../../types/showcase";
const data = config as ShowcaseConfig;
export default function Example4({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [moving, setMoving] = useState(false);
  const t = data.theme[theme];
  const featuredProducts = data.products.filter((product) => !product.hide && product.photoUrls[0]);
  const featuredCount = featuredProducts.length;
  const group = (start: number) => Array.from({ length: Math.min(3, featuredCount) }, (_, offset) => featuredProducts[(start + offset + featuredCount) % featuredCount]);
  const currentFeatured = group(featuredIndex);
  const nextFeatured = group(featuredIndex + direction);
  const changeFeatured = (step: 1 | -1) => {
    if (moving || featuredCount < 2) return;
    setDirection(step);
    setMoving(true);
    window.setTimeout(() => {
      setFeaturedIndex((index) => (index + step + featuredCount) % featuredCount);
      setMoving(false);
    }, 680);
  };
  useEffect(() => {
    if (featuredCount < 2) return;
    const timer = window.setInterval(() => changeFeatured(1), 5000);
    return () => window.clearInterval(timer);
  }, [featuredCount, moving]);
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
          <div className="watch-carousel" aria-label="Featured watches">
            {featuredCount > 0 && <div className={`watch-carousel-viewport ${moving ? `is-moving-${direction === 1 ? "next" : "previous"}` : ""}`}><div className="watch-fan-layer watch-fan-current">{currentFeatured.map((product, position) => <TiltedCard key={product.number}><button className={`watch-display watch-display-position-${position}`} onClick={() => navigate(`/showcase/${data.slug}/product/${product.number}`)} aria-label={`View ${product.name}`}><div className="watch-display-image"><img src={product.photoUrls[0]} alt={product.name} /></div><span className="watch-display-category">{product.category}</span><strong>{product.name}</strong><small>{product.variant}</small></button></TiltedCard>)}</div>{moving && <div className="watch-fan-layer watch-fan-next">{nextFeatured.map((product, position) => <TiltedCard key={product.number}><button className={`watch-display watch-display-position-${position}`} onClick={() => navigate(`/showcase/${data.slug}/product/${product.number}`)} aria-label={`View ${product.name}`}><div className="watch-display-image"><img src={product.photoUrls[0]} alt={product.name} /></div><span className="watch-display-category">{product.category}</span><strong>{product.name}</strong><small>{product.variant}</small></button></TiltedCard>)}</div>}</div>}
            {featuredProducts.length > 1 && <div className="watch-carousel-controls"><button type="button" onClick={() => changeFeatured(-1)} aria-label="Previous featured watch">←</button><span>{String((featuredIndex % featuredProducts.length) + 1).padStart(2, "0")} / {String(featuredProducts.length).padStart(2, "0")}</span><button type="button" onClick={() => changeFeatured(1)} aria-label="Next featured watch">→</button></div>}
          </div>
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
