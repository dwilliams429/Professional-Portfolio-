const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript (learning)", "Responsive UI", "Component architecture"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Auth fundamentals", "MongoDB (Mongoose)"],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Vercel", "Debugging", "Clean code", "Basic testing mindset"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <div>
          <h2>Skills</h2>
          <p className="muted">
            Full-stack fundamentals focused on building real products end-to-end.
          </p>
        </div>
      </div>

      <div className="cards">
        {skillGroups.map((g) => (
          <div className="mini-card" key={g.title}>
            <h3>{g.title}</h3>
            <ul className="bullets small">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
