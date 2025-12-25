import "./NavbarShell.css";

export default function NavbarShell() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="nav-logo" href="#top">David Williams</a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
