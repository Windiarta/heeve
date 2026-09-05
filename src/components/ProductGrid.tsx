import { useMemo, useState } from "react";
import { AnimatedContent } from "./react-bits/AnimatedContent";
import { SpotlightCard } from "./react-bits/SpotlightCard";
import type { Product } from "../types/showcase";

export function ProductGrid({
  products,
  slug,
  navigate,
}: {
  products: Product[];
  slug: string;
  navigate: (path: string) => void;
}) {
  const [category, setCategory] = useState("");
  const visible = products.filter((product) => !product.hide);
  const categories = useMemo(
    () => [...new Set(visible.map((product) => product.category))],
    [visible],
  );
  const filtered = category
    ? visible.filter((product) => product.category === category)
    : visible;
  return (
    <div className="catalog">
      <div className="catalog-toolbar">
        <div>
          <span className="catalog-count">{filtered.length}</span>
        </div>
        <div className="category-filter" aria-label="Product category filter">
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
      <div className="product-grid">
        {filtered.map((product, index) => (
          <AnimatedContent key={`${product.number}-${product.name}`}>
            <SpotlightCard>
              <div
                className="product-art"
                style={
                  {
                    "--accent": `hsl(${(index * 83) % 360} 70% 55%)`,
                  } as React.CSSProperties
                }
              >
                {product.photoUrls[0] ? (
                  <img src={product.photoUrls[0]} alt={product.name} />
                ) : (
                  <>
                    <b>{String(product.number).padStart(2, "0")}</b>
                    <span>✦</span>
                  </>
                )}
                <em className={product.stockOut ? "sold-out" : ""}>
                  {product.stockOut ? String(product.stockOut) : "✓"}
                </em>
              </div>
              <div className="product-meta">
                <p className="eyebrow">
                  {product.category} · {product.unit}
                </p>
                <h3>{product.name}</h3>
                {product.variant && (
                  <small className="product-variant">{product.variant}</small>
                )}
                <p className="product-description">{product.description}</p>
                <div className="product-buy">
                  <strong>Rp {product.price.toLocaleString("id-ID")}</strong>
                  <span> / {product.unit}</span>
                  <button
                    onClick={() =>
                      navigate(`/showcase/${slug}/product/${product.number}`)
                    }
                    aria-label={product.name}
                  >
                    {product.stockOut ? "↗" : "→"}
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
