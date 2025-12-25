import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS keys in .env");
      }

      // IMPORTANT: your EmailJS template must include:
      // from_name, reply_to, subject, message
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, { publicKey });

      e.currentTarget.reset();
      setStatus({ type: "success", message: "✅ Message sent! I’ll reply soon." });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "❌ Failed to send. Check EmailJS keys + template variables: from_name, reply_to, subject, message.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-top">
        <div>
          <h2>Contact</h2>
          <p className="muted">
            Want to hire a full-stack developer? Send a message — I respond quickly.
          </p>
        </div>

        <div className="contact-quick">
          <a className="btn" href="mailto:williamsjr.dmoses@gmail.com">Email</a>
          <a className="btn" href="https://github.com/williams429" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="row">
            <label>
              Name
              <input name="from_name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input name="reply_to" type="email" placeholder="you@email.com" required />
            </label>
          </div>

          <label>
            Subject
            <input name="subject" placeholder="Job opportunity / project / question" />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me what you’re looking for and I’ll reply with next steps."
              required
            />
          </label>

          <div className="actions">
            <button className="btn primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            <a className="btn ghost" href="#projects">View Projects</a>
          </div>

          {/* Always reserved space so layout doesn't jump */}
          <div className={`statusBox ${status.type ? "show" : ""} ${status.type}`}>
            {status.message || " "}
          </div>

          <p className="hint">
            EmailJS vars required: <b>from_name</b>, <b>reply_to</b>, <b>subject</b>, <b>message</b>
          </p>
        </form>

        <aside className="contact-aside">
          <h3>Details</h3>
          <p className="muted">
            Best way to reach me is email. I’m open to full-stack / frontend / backend roles.
          </p>

          <div className="contact-lines">
            <div>
              <div className="contact-label">Email</div>
              <a className="link" href="mailto:williamsjr.dmoses@gmail.com">
                williamsjr.dmoses@gmail.com
              </a>
            </div>

            <div>
              <div className="contact-label">GitHub</div>
              <a className="link" href="https://github.com/williams429" target="_blank" rel="noreferrer">
                github.com/williams429
              </a>
            </div>

            <div>
              <div className="contact-label">Location</div>
              <div className="muted">Corona, CA</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
