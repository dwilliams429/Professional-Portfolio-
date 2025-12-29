export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        {/* Title + subtitle grouped like other sections */}
        <div>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Full-stack fundamentals focused on shipping real products.
          </p>
        </div>
      </div>

      <div className="cards">
        <div className="mini-card">
          <h3>Frontend</h3>
          <p>
            React, JavaScript, TypeScript (learning), responsive UI, component
            architecture
          </p>
        </div>

        <div className="mini-card">
          <h3>Backend</h3>
          <p>
            Node.js, Express, REST APIs, auth fundamentals, MongoDB (Mongoose)
          </p>
        </div>

        <div className="mini-card">
          <h3>Tools</h3>
          <p>
            Git/GitHub, Vercel, debugging, clean code, basic testing mindset
          </p>
        </div>
      </div>
    </section>
  );
}