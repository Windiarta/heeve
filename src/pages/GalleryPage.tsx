import { useMemo, useState } from "react";

import Threads from "../components/react-bits/Threads";
import { BlurText } from "../components/react-bits/BlurText";
import { AnimatedContent } from "../components/react-bits/AnimatedContent";
import { ChromaGrid } from "../components/react-bits/ChromaGrid";
import { SpotlightCard } from "../components/react-bits/SpotlightCard";

import { showcaseRegistry } from "../showcases/registry";
import type { ShowcaseConfig } from "../types/showcase";

export function GalleryPage({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const [category, setCategory] = useState("All");

  const entries = Object.entries(showcaseRegistry);
  const categories = useMemo(
    () => [
      "All",
      ...new Set(entries.map(([, entry]) => entry.config.showcase.category)),
    ],
    [entries],
  );
  const visibleEntries =
    category === "All"
      ? entries
      : entries.filter(
          ([, entry]) => entry.config.showcase.category === category,
        );
  const productCount = entries.reduce(
    (total, [, entry]) =>
      total + entry.config.products.filter((product) => !product.hide).length,
    0,
  );

  return (
    <main className="home-page">
      <section className="hero home-hero">
        <Threads
          color={[0.2, 0.35, 0.8]}
          className="home-threads"
          amplitude={0.9}
          distance={0.65}
          enableMouseInteraction
        />
        <div className="hero-copy home-hero-copy">
          <p className="eyebrow">HEEVE / storefront gallery</p>
          <h1>
            <BlurText>Make your shop. Heeve!</BlurText>
          </h1>
          <p>
            Enam storefront siap jelajah. Enam arah visual berbeda untuk
            membantu brand menemukan cara terbaik bercerita dan menjual.
          </p>
          <div className="home-hero-actions">
            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("showcases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Jelajahi showcase <span>↓</span>
            </button>
            <button className="hero-link" onClick={() => navigate("/about")}>
              Tentang heeve <span>↗</span>
            </button>
          </div>
          <div className="home-metrics" aria-label="Gallery statistics">
            <div>
              <strong>{entries.length}</strong>
              <span>directions</span>
            </div>
            <div>
              <strong>{productCount}+</strong>
              <span>products</span>
            </div>
            <div>
              <strong>01</strong>
              <span>starting point</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section home-gallery" id="showcases">
        <div className="section-heading home-section-heading">
          <div>
            <p className="eyebrow">Curated storefront systems</p>
            <h2>
              Pick a point
              <br />
              of view.
            </h2>
          </div>
          <p>
            Setiap showcase adalah template yang bisa kamu isi dengan produk,
            cerita, dan karakter brand sendiri.
          </p>
        </div>
        <div
          className="home-filter"
          role="tablist"
          aria-label="Filter showcase"
        >
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
              role="tab"
              aria-selected={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <ChromaGrid>
          {visibleEntries.map(([slug, { config }], index) => (
            <ShowcaseTile
              key={slug}
              config={config}
              index={index}
              onOpen={() => navigate(`/showcase/${slug}`)}
            />
          ))}
        </ChromaGrid>
        <div className="home-bottom-note">
          <span>HEEVE / 2026</span>
          <span>{visibleEntries.length} showcase ditampilkan</span>
        </div>
      </section>
    </main>
  );
}

function ShowcaseTile({
  config,
  index,
  onOpen,
}: {
  config: ShowcaseConfig;
  index: number;
  onOpen: () => void;
}) {
  const image = config.image;
  return (
    <AnimatedContent>
      <SpotlightCard
        className={`preview-card preview-${config.slug}`}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        role="link"
        tabIndex={0}
      >
        <button
          className="preview-open"
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
          aria-label={`Buka ${config.showcase.title}`}
        >
          <span>0{index + 1}</span>
          <b>↗</b>
        </button>
        <div className={`preview-art ${image ? "has-image" : ""}`}>
          {image && <img src={image} alt="" />}
          <span>{config.showcase.badge}</span>
          <strong>{config.showcase.title}</strong>
          <i />
        </div>
        <div className="preview-content">
          <div className="preview-meta">
            <p className="eyebrow">{config.showcase.category}</p>
            <span>
              {config.products.filter((product) => !product.hide).length} items
            </span>
          </div>
          <h3>{config.hero.title || config.title || config.showcase.title}</h3>
          <p>{config.subtitle || config.showcase.description}</p>
          <small>
            {config.owner.name} · {config.owner.handle}
          </small>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
}
