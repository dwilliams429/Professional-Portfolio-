export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-grid">
        <div>
          <p className="badge">Full-Stack Developer</p>

        <h1>
            Modern UI. Reliable APIs. Shipped fast.
        </h1>


          <p className="muted lead">
            I’m David Williams — a software developer focused on React frontends and Node/Express backends.
            I’m finishing my B.S. in Computer Science and building real projects end-to-end.
          </p>

          <div className="actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>

          <div className="meta">
            <div className="pill">React</div>
            <div className="pill">Node/Express</div>
            <div className="pill">MongoDB</div>
            <div className="pill">Vercel</div>
          </div>
        </div>

        <div className="hero-card">
          <h3>What I’m looking for</h3>
          <p className="muted">
            Full-stack / frontend roles where I can build features, improve UX,
            and contribute to shipping production apps.
          </p>

          <div className="hero-card-actions">
            <a className="btn primary" href="https://github.com/williams429" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="mailto:williamsjr.dmoses@gmail.com">
              Email
            </a>
          </div>

          <p className="hint" style={{ marginTop: 10 }}>
            Bonus: 12+ years in aerospace/defense taught me discipline, documentation, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
