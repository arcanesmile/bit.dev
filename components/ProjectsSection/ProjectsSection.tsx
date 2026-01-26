// components/ProjectsSection/ProjectsSection.tsx
import React from "react";
import projects from "@/data/projectss"; 
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Core Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            data-index={index}
          />
        ))}
      </div>
    </section>
  );
}