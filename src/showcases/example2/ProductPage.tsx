import type { Product, ShowcaseConfig } from "../../types/showcase";
import ProductGallery from "../../components/ProductGallery";
import "../../components/product-gallery.css";
import "./product-page.css";
export default function ProductPage({ config, product, navigate }: { config: ShowcaseConfig; product: Product; navigate: (path: string) => void }) {
  const contact = config.contactPersonWhatsapp ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(`${product.name} - ${product.variant}`)}` : "";
  return <main className="showcase-product-page product-page-e2"><nav><button className="product-back" onClick={() => navigate(`/showcase/${config.slug}`)}>← {config.title}</button><code>PRODUCT/{product.number}</code></nav><div className="product-layout"><section className="product-info"><code>{product.category} / {product.unit}</code><h1>{product.name}</h1><p className="product-variant">{product.variant}</p><p>{product.description}</p><strong>Rp {product.price.toLocaleString("id-ID")}</strong>{contact && !product.stockOut && <a href={contact} target="_blank" rel="noreferrer">{config.hero.primaryAction} ↗</a>}</section><ProductGallery product={product} className="product-visual" /></div></main>;
}
