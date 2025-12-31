import React from "react";

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="section-head">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle section-subtitle-muted">
          Download my resume or view it in a new tab.
        </p>
      </div>

      <div className="grid-3">
        <div className="mini-card">
          <h3>Software Focus</h3>
          <p className="muted" style={{ margin: 0, lineHeight: 1.75 }}>
            Production React applications, REST APIs with Node/Express, MongoDB data models,
            authentication, and deployment with Vercel.
          </p>
        </div>

        <div className="mini-card">
          <h3>Education</h3>
          <p className="muted" style={{ margin: 0, lineHeight: 1.75 }}>
            B.S. Computer Science — Westcliff University (3.8 GPA)
            <br />
            Cloud Computing / Web Dev — Dec 2025
            <br />
            M.S.C.S. Engineering Management — Expected Dec 2026
          </p>
        </div>

        <div className="mini-card">
          <h3>Strengths</h3>
          <p className="muted" style={{ margin: 0, lineHeight: 1.75 }}>
            Debugging production issues, breaking down complex problems, and writing maintainable
            code teams can build on.
          </p>
        </div>
      </div>

      <div className="actions" style={{ marginTop: 18 }}>
        <a className="btn primary" href="/01-David-Williams-Resume-2025.docx" download>
          Download Resume
        </a>

        {/* ✅ EXACT same look as Download Resume */}
        <a
          className="btn primary"
          href="/01-David-Williams-Resume-2025.docx"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
