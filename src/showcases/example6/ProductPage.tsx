import type { Product, ShowcaseConfig } from "../../types/showcase";
import ProductGallery from "../../components/ProductGallery";
import "../../components/product-gallery.css";
import "./product-page.css";
export default function ProductPage({ config, product, navigate }: { config: ShowcaseConfig; product: Product; navigate: (path: string) => void }) {
  const contact = config.contactPersonWhatsapp ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(`${product.name} - ${product.variant}`)}` : "";
  return <main className="showcase-product-page product-page-e6"><header><button className="product-back" onClick={() => navigate(`/showcase/${config.slug}`)}>← Return to archive</button><span>ARCHIVE NO. {String(product.number).padStart(2, "0")}</span></header><div className="product-layout"><ProductGallery product={product} className="product-visual" /><section className="product-info"><p className="product-kicker">{product.category} · {product.unit}</p><h1>{product.name}</h1><p className="product-variant">{product.variant}</p><p>{product.description}</p><strong>Rp {product.price.toLocaleString("id-ID")}</strong>{contact && !product.stockOut && <a href={contact} target="_blank" rel="noreferrer">Purchase ↗</a>}</section></div></main>;
}
