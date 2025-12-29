import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          I’m transitioning into software engineering full-time, bringing strong troubleshooting,
          systems thinking, and execution from high-stakes technical environments.
        </p>
      </div>

      <div className="cards">
        <div className="mini-card">
          <h3>Frontend</h3>
          <p>
            React UI, clean layouts, responsive design, and reusable components.
          </p>
        </div>

        <div className="mini-card">
          <h3>Backend</h3>
          <p>
            Node/Express APIs, authentication flows, MongoDB models, and integration.
          </p>
        </div>

        <div className="mini-card">
          <h3>How I work</h3>
          <p>
            I ship in small steps, test assumptions, debug fast, and keep code readable.
          </p>
        </div>
      </div>
    </section>
  );
}
