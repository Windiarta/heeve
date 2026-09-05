import type { Product, ShowcaseConfig } from "../../types/showcase";
import ProductGallery from "../../components/ProductGallery";
import "../../components/product-gallery.css";
import "./product-page.css";
export default function ProductPage({
  config,
  product,
  navigate,
}: {
  config: ShowcaseConfig;
  product: Product;
  navigate: (path: string) => void;
}) {
  const contact = config.contactPersonWhatsapp
    ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(`${product.name} - ${product.variant}`)}`
    : "";
  return (
    <main className="showcase-product-page product-page-e3">
      <button
        className="product-back"
        onClick={() => navigate(`/showcase/${config.slug}`)}
      >
        ← Back to {config.title}
      </button>
      <div className="product-layout">
        <ProductGallery product={product} className="product-visual" />
        <section className="product-info">
          <p className="product-kicker">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-variant">{product.variant}</p>
          <p>{product.description}</p>
          <div className="product-purchase">
            <strong>
              Rp {product.price.toLocaleString("id-ID")} / {product.unit}
            </strong>
            {contact && !product.stockOut && (
              <a href={contact} target="_blank" rel="noreferrer">
                Contact sales ↗
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
