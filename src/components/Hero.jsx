import data from '../data';

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-eyebrow fade-in">
        <span className="dot" />
        <span>{data.available} · {data.location}</span>
      </div>

      <h1 className="fade-in" style={{ animationDelay: '.05s' }}>
        Front-end developer<br />
        building <em>quiet, deliberate</em><br />
        interfaces.
      </h1>

      <p className="hero-lede fade-in" style={{ animationDelay: '.15s' }}>
        Three years shipping React, Next.js and React Native — currently focused on
        production marketplaces and delivery apps used daily across Turkmenistan.
      </p>

      <div className="hero-meta fade-in" style={{ animationDelay: '.25s' }}>
        <div className="meta-item">
          <span className="meta-label">Currently</span>
          <span className="meta-val">Pamador, Gerekli</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Stack</span>
          <span className="meta-val">React · Next · RN</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Email</span>
          <span className="meta-val">
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </span>
        </div>
      </div>
    </section>
  );
}
