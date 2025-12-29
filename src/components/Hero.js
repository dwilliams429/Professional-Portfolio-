import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        {/* LEFT CARD */}
        <div className="hero-card">
          <div className="badge">Full-Stack Software Engineer</div>

          <h1>
            Full-Stack Software Engineer who ships production-ready web applications.
          </h1>

          <p className="lead muted">
            I build scalable React frontends and Node/Express APIs with authentication,
            deployment, and clean architecture — focused on real users, not demos.
          </p>

          <div className="meta">
            <span className="pill">3 Live Production Apps</span>
            <span className="pill">Auth + Protected Routes</span>
            <span className="pill">React / Node</span>
            <span className="pill">Deployed on Vercel</span>
          </div>

          {/* ✅ spacing is handled by .meta margin-bottom in CSS */}
          <div className="actions">
            <a className="btn outline" href="#projects">
              View Projects
            </a>
            <a className="btn primary" href="/01-David-Williams-Resume-2025.docx" download>
              Download Resume
            </a>
            <a className="btn outline" href="#contact">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card">
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: -0.4 }}>What I’m looking for</h2>

          <p style={{ marginTop: 12, color: "rgba(255,255,255,.82)", lineHeight: 1.7 }}>
            Full-stack / frontend roles where I can build features, improve UX, and contribute to
            shipping production apps.
          </p>

          <p style={{ marginTop: 12, color: "rgba(255,255,255,.74)", lineHeight: 1.7 }}>
            Bonus: 12+ years in aerospace/defense taught me discipline, documentation, and reliability.
          </p>

          <div className="actions" style={{ marginTop: 16 }}>
            <a className="btn outline" href="mailto:williamsjr.dmoses@gmail.com">
              Email
            </a>
            <a className="btn outline" href="https://github.com/dwilliams429" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
