import { useMemo, useState } from "react";
import type { Product } from "../types/showcase";
import { AnimatedContent } from "./react-bits/AnimatedContent";
import { ShowcaseProductCard } from "./ShowcaseProductCard";
export function ShowcaseCatalog({
  products,
  slug,
  navigate,
  whatsapp,
  purchaseLabel,
  detailLabel,
  variant,
  searchEnabled = false,
}: {
  products: Product[];
  slug: string;
  navigate: (path: string) => void;
  whatsapp: string | undefined;
  purchaseLabel?: string;
  detailLabel?: string;
  variant: "editorial" | "masonry" | "circular";
  searchEnabled?: boolean;
}) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const visible = products.filter((product) => !product.hide);
  const categories = useMemo(
    () => [...new Set(visible.map((product) => product.category))],
    [visible],
  );
  const filtered = category
    ? visible.filter((product) => product.category === category)
    : visible;
  const searched = search.trim()
    ? filtered.filter((product) =>
        `${product.name} ${product.category} ${product.variant} ${product.description}`
          .toLowerCase()
          .includes(search.trim().toLowerCase()),
      )
    : filtered;
  return (
    <div className={`showcase-catalog catalog-${variant}`}>
      <div className="catalog-toolbar">
        <span className="catalog-count">{searched.length} Services</span>
        {searchEnabled && (
          <label className="catalog-search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search services"
              aria-label="Search services"
            />
          </label>
        )}
        <div className="category-filter">
          <button
            className={!category ? "active" : ""}
            onClick={() => setCategory("")}
          >
            ⌘
          </button>
          {categories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className={`showcase-catalog-grid ${variant}`}>
        {searched.map((product, index) => (
          <AnimatedContent key={product.number}>
            <ShowcaseProductCard
              product={product}
              index={index}
              slug={slug}
              navigate={navigate}
              whatsapp={whatsapp}
              purchaseLabel={purchaseLabel}
              detailLabel={detailLabel}
              variant={variant}
            />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
