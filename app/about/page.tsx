import "./aboutpage.css"

export default function AboutPage() {
  return (
    <section className="page section about-page">
       <h1 className="page-title">About Me</h1>

      <div className="about-layout">
        {/* LEFT SIDE — PROFILE IMAGE */}
        <div className="profile-image-wrapper">
          <img
            src="/images/profile.jpg" // replace with your image path
            alt="Bem Ioryisa"
            className="profile-image"
          />
        </div>

        {/* RIGHT SIDE — TEXT & QUICK FACTS */}
              <div className="about-content">
          <div className="about-text">
            <p>
              Hi! I’m <strong>Benjamin Ioryisa</strong>, a results-driven Full-Stack Developer with a strong focus on building scalable, user-centric web applications. With hands-on experience across modern technologies such as <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Laravel</strong>, <strong>MongoDB</strong>, and <strong>Firebase</strong>, I specialize in turning complex ideas into clean, functional, and high-performance digital products.
            </p>

            <p>
              I am deeply committed to continuous learning and technical excellence. My development approach blends solid engineering principles with thoughtful UI/UX design to create solutions that are not only robust under the hood but also intuitive and visually compelling. I take pride in writing clean, maintainable code and structuring projects for long-term scalability.
            </p>

            <p>
              Beyond implementation, I enjoy <strong>architecting systems from the ground up</strong>—defining workflows, designing APIs, structuring databases, and integrating modern authentication and security practices. I am equally comfortable working on frontend experiences, backend logic, and full product lifecycles.
                      </p>
                      <p>I thrive in environments that demand innovation, precision, and ownership. Whether collaborating in a team or working independently, I bring a disciplined mindset, strong problem-solving skills, and a relentless drive to deliver high-quality outcomes.</p>
                      <p>My goal is to build impactful software products, contribute to meaningful projects, and continue evolving as a world-class software engineer.</p>
          </div>

          {/* Quick Facts */}
          <div className="about-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>🎯 Full-Stack Engineer</li>
              <li>⚡ Next.js / React / Laravel Specialist</li>
              <li>🧠 Product-driven mindset</li>
              <li>🌍 Based in Nigeria</li>
              <li>💻 Work Style: Clean code, scalable architecture</li>
            </ul>
          </div>

          {/* Skill badges */}
          <div className="about-skills">
            <h3>Core Skills</h3>
            <div className="skill-badges">
              {["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "Laravel"].map(
                (skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
