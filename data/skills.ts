import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiWeb3Dotjs,
    SiSolidity,
    SiPhp,
} from "react-icons/si";

import { IconType } from "react-icons";

export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "framework" | "backend" | "library";
  icon: IconType;
};

const skills: Skill[] = [
  // ===== Frontend Languages =====
  { name: "HTML", level: 90, category: "frontend", icon: FaHtml5 },
  { name: "CSS / SCSS", level: 85, category: "frontend", icon: FaCss3Alt },
  { name: "JavaScript", level: 88, category: "frontend", icon: FaJs },
  { name: "TypeScript", level: 80, category: "frontend", icon: SiTypescript },

  // ===== Frameworks =====
  { name: "React", level: 85, category: "framework", icon: FaReact },
  { name: "Next.js", level: 88, category: "framework", icon: SiNextdotjs },
  { name: "Tailwind CSS", level: 75, category: "framework", icon: SiTailwindcss },
  { name: "Laravel", level: 82, category: "framework", icon: FaLaravel },
  { name: "Express.js", level: 78, category: "framework", icon: SiExpress },

  // mobile
  { name: "React Native", level: 85, category: "framework", icon: FaReact },
  { name: "Expo", level: 80, category: "framework", icon: SiNextdotjs },

  // ===== Backend =====
   { name: "PHP", level: 80, category: "backend", icon: SiPhp },
  { name: "Node.js", level: 80, category: "backend", icon: FaNodeJs },
  { name: "MongoDB", level: 85, category: "backend", icon: SiMongodb },
  { name: "MySQL", level: 75, category: "backend", icon: SiMysql },
  { name: "PostgreSQL", level: 70, category: "backend", icon: SiPostgresql },
    { name: "Firebase", level: 70, category: "backend", icon: SiFirebase },
  

  // ===== Libraries & Tools =====
  { name: "GitHub", level: 88, category: "library", icon: FaGithub },
  { name: "Postman", level: 75, category: "library", icon: SiPostman },
  { name: "Web3.js", level: 65, category: "library", icon: SiWeb3Dotjs },
  { name: "Solidity", level: 55, category: "library", icon: SiSolidity },
];

export default skills;
