export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <div>
          <h2>About</h2>
          <p className="muted">
            I’m transitioning into software engineering full-time, bringing strong troubleshooting,
            systems thinking, and execution from high-stakes technical environments.
          </p>
        </div>
      </div>

      <div className="cards">
        <div className="mini-card">
          <h3>Frontend</h3>
          <p className="muted">
            React UI, clean layouts, responsive design, and reusable components.
          </p>
        </div>

        <div className="mini-card">
          <h3>Backend</h3>
          <p className="muted">
            Node/Express APIs, basic authentication flows, MongoDB models, and integration.
          </p>
        </div>

        <div className="mini-card">
          <h3>How I work</h3>
          <p className="muted">
            I ship in small steps, test assumptions, debug fast, and keep code readable.
          </p>
        </div>
      </div>
    </section>
  );
}
