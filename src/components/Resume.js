import React from "react";

export default function Resume() {
  const resumeFile = "/01-David Williams Resume 2025.docx";

  return (
    <section id="resume" className="section">
      <div className="section-head">
        <div>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Download my resume or view it in a new tab.
          </p>
        </div>
      </div>

      <div className="cards">
        <div className="mini-card">
          <h3>Software Focus</h3>
          <p className="muted">
            Production React applications, REST APIs with Node/Express, MongoDB data models, authentication, and deployment with Vercel.
          </p>
        </div>

        <div className="mini-card">
          <h3>Education</h3>
          <p className="muted">
            B.S. Computer Science — Westcliff University (3.8 GPA)
            <br />
            Cloud Computing / Web Dev — Dec 2025
            <br />
            M.S.C.S. Engineering Managment— Expected Dec 2026
          </p>
        </div>

        <div className="mini-card">
          <h3>Strengths</h3>
          <p className="muted">
            Debugging production issues, breaking down complex problems, and writing maintainable code teams can build on.
          </p>
        </div>
      </div>

      <div className="actions" style={{ marginTop: 16 }}>
        <a className="btn primary" href={resumeFile} download>
          Download Resume
        </a>
        <a className="btn" href={resumeFile} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </div>
    </section>
  );
}
