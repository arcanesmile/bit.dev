import skills from "@/data/skills";
import "./SkillsSection.css";

const categories = [
  { key: "frontend", title: "Frontend Languages" },
  { key: "framework", title: "Frameworks" },
  { key: "backend", title: "Backend" },
  { key: "library", title: "Libraries & Tools" },
] as const;

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      {categories.map((cat) => {
        const filtered = skills.filter(
          (skill) => skill.category === cat.key
        );

        return (
          <div key={cat.key} className="skills-group">
            <h3 className="skills-group-title">{cat.title}</h3>

            <div className="skills-list">
              {filtered.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-header">
                      <div className="skill-left">
                        <Icon className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
