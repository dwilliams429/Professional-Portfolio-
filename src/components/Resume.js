export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-head">
        <div>
          <h2>Resume</h2>
          <p className="muted">
            Download my resume or review a quick summary tailored for software roles.
          </p>
        </div>
      </div>

      <div className="actions">
        <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
          Download Resume (PDF)
        </a>
      </div>

      <div className="cards">
        <div className="mini-card">
          <h3>Software Focus</h3>
          <p className="muted">
            React frontends • Node/Express APIs • MongoDB • deployment with Vercel •
            strong debugging and documentation habits
          </p>
        </div>

        <div className="mini-card">
          <h3>Education</h3>
          <p className="muted">
            B.S. Computer Science — Westcliff University (Expected Jul 2025, 3.8 GPA)
            <br />
            Cloud Computing/Web Dev — Expected Dec 2025
            <br />
            Ph.D. Machine Learning — Expected Dec 2027
          </p>
        </div>

        <div className="mini-card">
          <h3>Strengths</h3>
          <p className="muted">
            Systems thinking • reliability under pressure • teamwork • rapid troubleshooting •
            process improvement
          </p>
        </div>
      </div>
    </section>
  );
}
