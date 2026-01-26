import projects from "@/data/projectss";
import "./projects.css";

export default function ProjectsPage() {
  return (
    <section className="page section projects-page">
      <h1 className="page-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
