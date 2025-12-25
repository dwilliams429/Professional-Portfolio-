// src/components/Projects.js

export default function Projects() {
  const githubUsername = "williams429";
  const githubProfile = `https://github.com/${githubUsername}`;

  const projects = [
    {
      title: "AI App (Vercel)",
      tags: ["Auth", "Web App", "Vercel"],
      description:
        "Deployed web app with authentication flow and a hosted login page.",
      bullets: [
        "Built a clean login experience and structured the app for scalability.",
        "Deployed to Vercel and validated behavior in a real hosted environment.",
        "Focused on UX clarity: clear states, layout consistency, and navigation.",
      ],
      demo: "https://ai-app-three-pi.vercel.app/login",
      github: githubProfile, 
      featured: true,
    },
    {
      title: "Runtime Wave (TypeScript)",
      tags: ["React", "TypeScript"],
      description:
        "React + TypeScript sandbox demonstrating typed components and clean structure.",
      bullets: [
        "Used TypeScript to reduce bugs and improve readability.",
        "Built reusable components and practiced maintainable structure.",
        "Focused on UI composition and predictable state handling.",
      ],
      demo: "https://codesandbox.io/p/sandbox/runtime-wave-l2jqxs?file=%2Fsrc%2FApp.tsx",
      github: githubProfile,
    },
    {
      title: "Mystifying Snow (React)",
      tags: ["React", "JavaScript"],
      description: "React sandbox focused on UI composition and app structure.",
      bullets: [
        "Built UI layouts with clean component composition.",
        "Refined structure and styling for a consistent UX.",
        "Practiced iteration: small improvements, fast feedback.",
      ],
      demo: "https://codesandbox.io/p/sandbox/mystifying-snow-7fyzf8?file=%2Fsrc%2FApp.js",
      github: githubProfile,
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <div>
          <h2>Projects</h2>
          <p className="muted">
            Live links to my work. GitHub profile:{" "}
            <a className="link" href={githubProfile} target="_blank" rel="noreferrer">
              {githubUsername}
            </a>
          </p>
        </div>

        <div className="actions">
          <a className="btn" href={githubProfile} target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </div>

      <div className="grid">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`project ${p.featured ? "featured" : ""}`}
          >
            <div className="project-head">
              <h3>{p.title}</h3>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={`${p.title}-${t}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="muted">{p.description}</p>

            <ul className="bullets small">
              {p.bullets.map((b, idx) => (
                <li key={`${p.title}-b-${idx}`}>{b}</li>
              ))}
            </ul>

            <div className="actions">

              <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">
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
