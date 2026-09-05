import { useEffect, useState, type CSSProperties } from "react";
import type { Product, ShowcaseConfig } from "../../types/showcase";
import AccordionGallery from "../../components/react-bits/AccordionGallery";
import { useTheme } from "../../hooks/useTheme";
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
  const { theme } = useTheme();
  const tokens = config.theme[theme];
  const [galleryOpen, setGalleryOpen] = useState(false);
  const contact = config.contactPersonWhatsapp
    ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(`${product.name} - ${product.variant}`)}`
    : "";
  useEffect(() => {
    if (!galleryOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [galleryOpen]);

  return (
    <main
      className="showcase-product-page product-page-e3"
      style={
        {
          "--bg": tokens.background,
          "--surface": tokens.surface,
          "--text": tokens.text,
          "--muted": tokens.muted,
          "--primary": tokens.primary,
        } as CSSProperties
      }
    >
      <button
        className="product-back"
        onClick={() => navigate(`/showcase/${config.slug}`)}
      >
        ← {config.title}
      </button>
      <div className="product-layout">
        <div className="product-visual">
          <AccordionGallery
            items={product.photoUrls.map((image, index) => ({
              image,
              label: `${product.name} / ${index + 1}`,
              alt: `${product.name} ${index + 1}`,
            }))}
            accentColor={tokens.primary}
            overlayColor={tokens.background}
            height={480}
            radius={4}
            expandRatio={0.58}
            grayscale={false}
            onImageClick={() => setGalleryOpen(true)}
          />
        </div>
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
                Get this game ↗
              </a>
            )}
          </div>
        </section>
      </div>
      {galleryOpen && (
        <div
          className="product-gallery-dialog"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} image gallery`}
          onClick={() => setGalleryOpen(false)}
        >
          <button
            type="button"
            className="product-gallery-dialog__close"
            aria-label="Close image gallery"
            onClick={() => setGalleryOpen(false)}
          >
            ×
          </button>
          <div
            className="product-gallery-dialog__content"
            onClick={(event) => event.stopPropagation()}
          >
            <AccordionGallery
              items={product.photoUrls.map((image, index) => ({
                image,
                label: `${product.name} / ${index + 1}`,
                alt: `${product.name} ${index + 1}`,
              }))}
              accentColor={tokens.primary}
              overlayColor={tokens.background}
              height={Math.min(680, window.innerHeight * 0.72)}
              radius={4}
              expandRatio={0.58}
              grayscale={false}
            />
          </div>
        </div>
      )}
    </main>
  );
}
