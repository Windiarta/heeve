import type { ShowcaseConfig } from '../types/showcase';

const socialEntries = (config: ShowcaseConfig) => [
  config.instagram,
  config.facebook,
  config.twitterX,
  config.tokopedia,
  config.tiktok,
  config.shopee,
  config.lazada,
  ...(config.others ?? []),
].filter((url): url is string => Boolean(url)).map(url => [url, url] as [string, string]);

export function ShowcaseInfo({ config }: { config: ShowcaseConfig }) {
  const socials = socialEntries(config);
  return <>
    <section className="brand-story" id="about">
      <div className="story-heading"><p className="eyebrow">{config.showcase.badge}</p><h2>{config.title ?? config.showcase.title}</h2><p>{config.subtitle ?? config.showcase.description}</p></div>
      <div className="story-copy"><p>{config.content ?? config.showcase.description}</p><div className="owner-signature"><strong>{config.owner.name}</strong><span>{config.owner.handle}</span></div></div>
    </section>
    <footer className="store-footer" id="contact">
      <div className="footer-brand"><strong>{config.title ?? config.showcase.title}</strong><span>{config.companyAddress}</span></div>
      <div className="footer-column">{config.companyEmail && <a href={`mailto:${config.companyEmail}`}>{config.companyEmail}</a>}{config.companyPhone && <a href={`tel:${config.companyPhone}`}>{config.companyPhone}</a>}</div>
      <div className="footer-column">{config.contactPersonName && <strong>{config.contactPersonName}</strong>}{config.contactPersonEmail && <a href={`mailto:${config.contactPersonEmail}`}>{config.contactPersonEmail}</a>}{config.contactPersonPhone && <a href={`tel:${config.contactPersonPhone}`}>{config.contactPersonPhone}</a>}{config.contactPersonWhatsapp && <a href={`https://wa.me/${config.contactPersonWhatsapp}`} target="_blank" rel="noreferrer">{config.contactPersonWhatsapp}</a>}</div>
      {socials.length > 0 && <div className="footer-socials">{socials.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
    </footer>
  </>;
}
