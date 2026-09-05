import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import type { Product, ShowcaseConfig } from "../types/showcase";

export function ProductPage({
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
  const photos = product.photoUrls.filter(Boolean);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const message = `Halo, saya tertarik dengan ${product.name}${product.variant ? ` (${product.variant})` : ""}. Harga: Rp ${product.price.toLocaleString("id-ID")} / ${product.unit}.`;
  const contact = config.contactPersonWhatsapp
    ? `https://wa.me/${config.contactPersonWhatsapp}?text=${encodeURIComponent(message)}`
    : config.contactPersonEmail
      ? `mailto:${config.contactPersonEmail}`
      : config.companyEmail
        ? `mailto:${config.companyEmail}`
        : "";

  useEffect(() => {
    if (!activePhoto) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activePhoto]);

  return (
    <main
      className={`product-page product-page-${config.slug}`}
      style={
        {
          "--bg": tokens.background,
          "--surface": tokens.surface,
          "--text": tokens.text,
          "--muted": tokens.muted,
          "--primary": tokens.primary,
        } as React.CSSProperties
      }
    >
      <div className="product-breadcrumb">
        <button className="back-button" onClick={() => navigate(`/showcase/${config.slug}`)}>
          <span aria-hidden="true">←</span> {config.showcase.title}
        </button>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail">
        <section className="detail-gallery" aria-label={`${product.name} gallery`}>
          {photos.length ? (
            <>
              <figure
                className="detail-image detail-image-featured"
                onClick={() => setActivePhoto(photos[photoIndex])}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActivePhoto(photos[photoIndex]);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Enlarge ${product.name} image ${photoIndex + 1}`}
              >
                <img src={photos[photoIndex]} alt={`${product.name} ${photoIndex + 1}`} />
                {photos.length > 1 && (
                  <>
                    <button
                      className="gallery-arrow gallery-arrow-prev"
                      onClick={(event) => {
                        event.stopPropagation();
                        setPhotoIndex((index) => (index - 1 + photos.length) % photos.length);
                      }}
                      aria-label="Previous product image"
                    >
                      ←
                    </button>
                    <button
                      className="gallery-arrow gallery-arrow-next"
                      onClick={(event) => {
                        event.stopPropagation();
                        setPhotoIndex((index) => (index + 1) % photos.length);
                      }}
                      aria-label="Next product image"
                    >
                      →
                    </button>
                    <div className="gallery-dots" aria-label="Product images">
                      {photos.map((photo, index) => (
                        <button
                          className={index === photoIndex ? "active" : ""}
                          key={photo}
                          onClick={(event) => {
                            event.stopPropagation();
                            setPhotoIndex(index);
                          }}
                          aria-label={`Show image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </figure>
              {photos.length > 1 && (
                <div className="detail-thumbnails">
                  {photos.map((photo, index) => (
                    <button
                      className={index === photoIndex ? "active" : ""}
                      key={photo}
                      onClick={() => setPhotoIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <img src={photo} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div
              className="detail-art"
              style={{ background: `linear-gradient(135deg, ${tokens.primary}, ${tokens.background})` }}
            >
              <span>{String(product.number).padStart(2, "0")}</span>
            </div>
          )}
        </section>

        <section className="detail-copy">
          <div className="detail-kicker">
            <span>{product.category}</span>
            <span className={product.stockOut ? "sold-out" : "in-stock"}>
              {product.stockOut ? "Stock out" : "Available"}
            </span>
          </div>
          <h1>{product.name}</h1>
          {product.variant && <p className="product-variant">{product.variant}</p>}
          <p className="detail-description">{product.description}</p>

          <div className="detail-purchase">
            <div>
              <span className="detail-price-label">Price per {product.unit}</span>
              <strong className="detail-price">Rp {product.price.toLocaleString("id-ID")}</strong>
            </div>
            <span className="detail-number">No. {String(product.number).padStart(2, "0")}</span>
          </div>

          {contact && !product.stockOut && (
            <a className="primary-button contact-action" href={contact} target="_blank" rel="noreferrer">
              Purchase via WhatsApp <span aria-hidden="true">↗</span>
            </a>
          )}
          {product.stockOut && <p className="sold-out-message">This object is currently unavailable.</p>}

          <div className="detail-note">
            <span aria-hidden="true">✦</span>
            <p>Contact {config.contactPersonName ?? config.owner.name} for availability, shipping, and object history.</p>
          </div>
        </section>
      </div>
      {activePhoto && (
        <div
          className="image-lightbox"
          role="presentation"
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="image-lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close enlarged image"
          >
            ×
          </button>
          <img
            src={activePhoto}
            alt={product.name}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
