import type { Product, ShowcaseConfig } from "../../types/showcase";
import ProductGallery from "../../components/ProductGallery";
import "../../components/product-gallery.css";
import "./product-page.css";
import { useTheme } from "../../hooks/useTheme";
export default function ProductPage({
  config,
  product,
  navigate,
}: {
  config: ShowcaseConfig;
  product: Product;
  navigate: (path: string) => void;
}) {
  const { theme } = useTheme();
  const tokens = config.theme[theme];
  const contact = config.contactPersonWhatsapp
    ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(`${product.name} - ${product.variant}`)}`
    : "";
  return (
    <main
      className="showcase-product-page product-page-e2"
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
      <nav>
        <button
          className="product-back"
          onClick={() => navigate(`/showcase/${config.slug}`)}
        >
          ← {config.title}
        </button>
        <code>PRODUCT/{product.number}</code>
      </nav>
      <div className="product-layout">
        <section className="product-info">
          <code>
            {product.category} / {product.unit}
          </code>
          <h1>{product.name}</h1>
          <p className="product-variant">{product.variant}</p>
          <p>{product.description}</p>
          <strong>Rp {product.price.toLocaleString("id-ID")}</strong>
          {contact && !product.stockOut && (
            <a href={contact} target="_blank" rel="noreferrer">
              {config.hero.primaryAction} ↗
            </a>
          )}
        </section>
        <ProductGallery product={product} className="product-visual" />
      </div>
    </main>
  );
}
