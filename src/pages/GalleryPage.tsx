import { Aurora } from "../components/react-bits/Aurora";
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
  return (
    <main>
      <section className="hero">
        <Aurora />
        <div className="hero-copy">
          <p className="eyebrow">heeve · storefront inspiration</p>
          <h1>
            <BlurText>Your next storefront starts here.</BlurText>
          </h1>
          <p>
            Explore six ready-to-adapt storefront directions for products,
            collections, and independent brands.
          </p>
          <button
            className="primary-button"
            onClick={() =>
              document
                .getElementById("showcases")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore the collection
          </button>
        </div>
        <div className="hero-orbit">
          ✦<span>03</span>
          <small>
            curated
            <br />
            experiences
          </small>
        </div>
      </section>
      <section className="gallery-section" id="showcases">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Built for better first impressions</p>
            <h2>Find the look your brand deserves.</h2>
          </div>
          <p>
            Compare distinct visual systems, discover a direction, then shape it
            around your own products and story.
          </p>
        </div>
        <ChromaGrid>
          {Object.entries(showcaseRegistry).map(([slug, { config }]) => (
            <ShowcaseTile
              key={slug}
              config={config}
              onOpen={() => navigate(`/showcase/${slug}`)}
            />
          ))}
        </ChromaGrid>
      </section>
    </main>
  );
}
function ShowcaseTile({
  config,
  onOpen,
}: {
  config: ShowcaseConfig;
  onOpen: () => void;
}) {
  return (
    <AnimatedContent>
      <SpotlightCard className={`preview-card preview-${config.slug}`}>
        <div className="preview-art">
          <span>{config.showcase.badge}</span>
          <strong>{config.showcase.title}</strong>
          <i />
        </div>
        <div className="preview-content">
          <p className="eyebrow">{config.showcase.category}</p>
          <h3>{config.hero.title}</h3>
          <p>{config.showcase.description}</p>
          <button className="text-button" onClick={onOpen}>
            Open showcase ↗
          </button>
          <small>
            {config.owner.name} · {config.owner.handle}
          </small>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
}
