import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero-section">
      <div>
        <h1>Ioryisa Benjamin</h1>
        <h2>Full-Stack software Engineer</h2>

        <p>
          I build accessible, scalable, and pixel-perfect digital experiences
          for the web using modern technologies.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="btn-outline">
            View Work
          </a>

          <a href="/contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href="https://github.com/arcanesmile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/bem-ioryisa-a4447135a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={28} />
                  </a>
                  <a
                    href="https://twitter.com/arcane_smile1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaTwitter size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/arcane_smile_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaInstagram size={28} />
                  </a>
        </div>
      </div>
    </section>
  );
}
