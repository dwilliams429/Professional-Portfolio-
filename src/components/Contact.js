import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("Hook up your EmailJS (or backend) send here.");
  }

  return (
    <section className="section" id="contact">
      <div className="section-head">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle section-subtitle-muted">
          Want to hire a full-stack developer? Send a message — I respond quickly.
        </p>
      </div>

      <div className="contact-layout">
        {/* FORM CARD */}
        <div className="contact-card">
          <form onSubmit={onSubmit}>
            <div className="contact-grid-two">
              <div>
                <label className="contact-label">Name</label>
                <input
                  name="from_name"
                  value={form.from_name}
                  onChange={onChange}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="contact-label">Email</label>
                <input
                  name="reply_to"
                  value={form.reply_to}
                  onChange={onChange}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-label">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Job opportunity / project / question"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me what you’re looking for and I’ll reply with next steps."
                rows={7}
              />
            </div>

            <div className="actions" style={{ marginTop: 12, alignItems: "center" }}>
              <button type="submit" className="btn primary">
                Send Message
              </button>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 800 }}>
                Usually replies within 24 hours
              </span>
            </div>
          </form>
        </div>

        {/* DETAILS CARD */}
        <aside className="details-card">
          <h3 style={{ margin: 0, fontSize: 20, letterSpacing: -0.2 }}>Details</h3>
          <p style={{ marginTop: 10, marginBottom: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
            Best way to reach me is email. I’m open to full-stack / frontend / backend roles.
          </p>

          <div className="details-rows">
            <div className="details-row">
              <div className="details-label">Email</div>
              <div className="details-value">
                <a href="mailto:williamsjr.dmoses@gmail.com">williamsjr.dmoses@gmail.com</a>
              </div>
            </div>

            <div className="details-row">
              <div className="details-label">Location</div>
              <div className="details-value">HOUSTON, TX</div>
            </div>
          </div>

          <div className="details-actions">
            <a
              className="btn outline"
              href="https://github.com/dwilliams429"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
