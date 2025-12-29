import React from "react";

const PROJECTS = [
  {
    title: "AI Web Application (Production)",
    tags: ["React", "Auth", "Protected Routes", "Vercel"],
    bullets: [
      "Implemented authentication with protected routes",
      "Designed clean UI states for login, loading, and errors",
      "Deployed to Vercel with production configuration",
    ],
    note:
      "Demonstrates real-world authentication patterns, deployment, and UX decisions used in production applications.",
    live: "https://ai-app-three-pi.vercel.app/login",
    github: "https://github.com/dwilliams429",
    featured: true,
  },
  {
    title: "Runtime Wave (TypeScript)",
    tags: ["React", "TypeScript"],
    bullets: [
      "Used TypeScript to enforce type safety and reduce bugs",
      "Designed reusable components with clear boundaries",
      "Focused on predictable state and maintainable structure",
    ],
    live: "https://codesandbox.io/p/sandbox/runtime-wave-l2jqxs?file=%2Fsrc%2FApp.tsx",
    github: "https://github.com/dwilliams429",
  },
  {
    title: "Mystifying Snow (React)",
    tags: ["React", "JavaScript"],
    bullets: [
      "Built UI layouts using clean component composition",
      "Improved structure and styling consistency",
      "Practiced fast iteration and visual refinement",
    ],
    live: "https://codesandbox.io/p/sandbox/mystifying-snow-7fyzf8?file=%2Fsrc%2FApp.js",
    github: "https://github.com/dwilliams429",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Production-style applications with live demos and source code.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className={`project ${p.featured ? "project-featured" : ""}`}
          >
            <h3 className="project-title">{p.title}</h3>

            <div className="tag-row">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <ul className="project-bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {p.note ? <p className="project-note">{p.note}</p> : null}

            <div className="project-actions">
              <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
