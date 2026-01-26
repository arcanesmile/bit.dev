// components/ProjectCard/ProjectCard.tsx"
"use client";

import React from "react";
import "./ProjectCard.css";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="project-card"
    >
      {/* Add proper image loading with fallback */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          onError={(e) => {
            // Fallback image if URL is broken
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x250/112240/64ffda?text=Project+Image";
          }}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}