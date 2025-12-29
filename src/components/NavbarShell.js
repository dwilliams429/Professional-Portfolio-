import React, { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function NavbarShell() {
  const [activeId, setActiveId] = useState("about");

  const ids = useMemo(() => NAV_ITEMS.map((x) => x.id), []);

  useEffect(() => {
    // Set from hash on load
    const hash = window.location.hash?.replace("#", "");
    if (hash && ids.includes(hash)) setActiveId(hash);

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);

  const onNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#about" onClick={onNavClick("about")}>
          <span className="nav-name">David Williams</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavClick(item.id)}
              className={`nav-link ${activeId === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}

          {/* "Resume" word fixed: no purple blob, just a subtle pill like the rest */}
          <a
            href="#resume"
            onClick={onNavClick("resume")}
            className={`nav-link nav-cta ${activeId === "resume" ? "is-active" : ""}`}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
