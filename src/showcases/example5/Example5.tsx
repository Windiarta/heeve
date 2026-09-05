import config from "./config.json";
import "./example5.css";
import { Aurora } from "../../components/react-bits/Aurora";
import { BlurText } from "../../components/react-bits/BlurText";
import { Masonry } from "../../components/react-bits/Masonry";
import { ShowcaseProductCard } from "../../components/ShowcaseProductCard";
import { ShowcaseInfo } from "../../components/ShowcaseInfo";
import { useTheme } from "../../hooks/useTheme";
import { useMemo, useState } from "react";
import type { ShowcaseConfig } from "../../types/showcase";
const data = config as ShowcaseConfig;
export default function Example5({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const t = data.theme[theme];
  const visibleProducts = useMemo(
    () => data.products.filter((product) => !product.hide),
    [],
  );
  const categories = useMemo(
    () => [...new Set(visibleProducts.map((product) => product.category))],
    [visibleProducts],
  );
  const filteredProducts = visibleProducts.filter((product) => {
    const term = query.trim().toLowerCase();
    const matchesCategory = !category || product.category === category;
    const matchesSearch =
      !term ||
      [
        product.name,
        product.category,
        product.variant,
        product.description,
      ].some((value) => value.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });
  return (
    <main
      className="store canva-page"
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
      <section className="canva-hero">
        <Aurora />
        <nav>
          <button onClick={() => navigate("/")} className="canva-logo">
            {data.title}
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.contactPersonName} ↗
          </button>
        </nav>
        <div className="canva-hero-copy">
          <p className="eyebrow">{data.hero.eyebrow}</p>
          <h1>
            <BlurText>{data.headline}</BlurText>
          </h1>
          <p>{data.content}</p>
          <button
            className="canva-primary"
            onClick={() =>
              document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.hero.primaryAction} ↗
          </button>
        </div>
      </section>
      <section className="canva-collection" id="catalog">
        <header>
          <p className="eyebrow">{data.showcase.badge}</p>
          <h2>{data.subtitle}</h2>
          <button
            className="canva-link"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {data.hero.secondaryAction} ↗
          </button>
        </header>
        <div className="canva-catalog-tools">
          <label className="canva-search">
            <span>Search</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products"
              type="search"
            />
          </label>
          <div
            className="canva-category-filter"
            aria-label="Filter by category"
          >
            <button
              className={!category ? "is-active" : ""}
              onClick={() => setCategory("")}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                className={category === item ? "is-active" : ""}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <Masonry>
          {filteredProducts.map((product, index) => (
            <div className="canva-masonry-item" key={product.number}>
              <ShowcaseProductCard
                product={product}
                index={index}
                slug={data.slug}
                navigate={navigate}
                whatsapp={data.contactPersonWhatsapp}
                purchaseLabel={data.hero.primaryAction}
                detailLabel={data.hero.secondaryAction}
                variant="masonry"
              />
            </div>
          ))}
        </Masonry>
        {!filteredProducts.length && (
          <p className="canva-empty">No products match your search.</p>
        )}
      </section>
      <ShowcaseInfo config={data} />
    </main>
  );
}
