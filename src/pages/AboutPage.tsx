export function AboutPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <main className="info-page">
      <p className="eyebrow">About heeve</p>
      <h1>A clearer starting point for your storefront.</h1>
      <p className="info-lede">
        Heeve adalah kumpulan konsep toko digital untuk membantu brand, kreator,
        dan bisnis kecil menemukan arah visual yang tepat.
      </p>
      <button className="primary-button" onClick={() => navigate("/")}>
        Explore the collection
      </button>
      <section className="info-grid">
        <div>
          <span>03</span>
          <p>Distinct storefront directions</p>
        </div>
        <div>
          <span>100%</span>
          <p>Content shaped by config</p>
        </div>
        <div>
          <span>∞</span>
          <p>Room to make it yours</p>
        </div>
      </section>
    </main>
  );
}
