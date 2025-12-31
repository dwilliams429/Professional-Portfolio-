import React from "react";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-head">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle section-subtitle-muted">
          Let’s connect — email, GitHub, or send a quick message.
        </p>
      </div>

      <div className="contact-layout">
        {/* LEFT: FORM */}
        <div className="contact-card">
          <form>
            <div className="contact-grid-two">
              <div className="contact-field">
                <label className="contact-label">Name</label>
                <input placeholder="Your name" />
              </div>

              <div className="contact-field">
                <label className="contact-label">Email</label>
                <input placeholder="you@example.com" />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-label">Message</label>
              <textarea placeholder="Tell me what you're working on..." />
            </div>

            <div style={{ marginTop: 18 }}>
              <button className="btn primary" type="submit">
                Send Message
              </button>

              <p className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                Usually responds within 24hrs
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="details-card">
          <h3 className="details-title">Details</h3>

          {/* ✅ Two-line description */}
          <p className="details-desc">
            The best way to reach me is by email.
          </p>
          <p className="details-desc">
            I’m open to full-stack · frontend · backend roles.
          </p>

          <div className="details-rows">
            <div className="details-row">
              <div className="details-label">Email</div>
              <div className="details-value">
                <a href="mailto:williamsjr.dmoses@gmail.com">
                  williamsjr.dmoses@gmail.com
                </a>
              </div>
            </div>
            <div className="details-row">
              <div className="details-label">Location</div>
              <div className="details-value">Houston, TX</div>
            </div>
          </div>

          {/* ✅ GitHub button restored */}
          <div className="details-actions">
            <a
              className="btn outline"
              href="https://github.com/dwilliams429"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
