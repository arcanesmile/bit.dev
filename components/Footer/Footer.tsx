import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left */}
        <div className="footer-brand">
          <h3>Bit.dev</h3>
          <p>
            Building modern web and mobile experiences with clean code & thoughtful
            design.
          </p>
        </div>

        {/* Center */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links">
            <Link href="https://github.com/arcanesmile" target="_blank">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/bem-ioryisa-a4447135a" target="_blank">
              LinkedIn
            </Link>
            <Link href="https://twitter.com/arcane_smile1" target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bit.dev — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
