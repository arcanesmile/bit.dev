// components/Experience.tsx
import React from "react";
import experiences from "@/data/experience";
import "./Experience.css"

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
            {exp.tech && (
              <div className="tech-stack">
                {exp.tech.map((tech) => (
                  <span key={tech} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
