export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech?: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Petra Ict Hub",
    duration: "Jan 2023 - Present",
    description:
      "Developed scalable web applications using React, Next.js, and Node.js. Collaborated closely with design and backend teams to deliver pixel-perfect, accessible, and performant applications.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Creative Labs",
    duration: "Jun 2024 - Dec 2024",
    description:
      "Built responsive, accessible, and modern web interfaces. Optimized web performance and improved UI/UX for multiple client projects.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Software Engineering Intern",
    company: "Innovate Tech LTD",
    duration: "2023",
    description:
      "Worked on internal tools, automated workflows, and assisted in developing frontend components for client dashboards.",
    tech: ["React", "Git", "Figma"],
  },
];

export default experiences;
