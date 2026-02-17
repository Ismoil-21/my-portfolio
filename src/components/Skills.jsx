import React from "react";
import ProjectCard from "./ProjectCard";

const Skills = () => {
  const coreSkills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"];

  const frameworks = [
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
  ];

  const specializations = [
    "UI Design to Code",
    "Landing Pages",
    "Mobile-First Development",
    "Animation & Transitions",
    "Performance Optimization",
    "Cross-Browser Compatible",
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="text-accent-cyan">02.</span> Skills
          </h2>
        </div>

        {/* Core Technologies */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-2xl mb-6 text-accent-green">
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-6 py-3 bg-dark-700 border-2 border-accent-cyan rounded-lg font-mono text-accent-cyan font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-2xl mb-6 text-accent-purple">
            Frameworks & Tools
          </h3>
          <div className="flex flex-wrap gap-4">
            {frameworks.map((skill, index) => (
              <span
                key={index}
                className="skill-tag px-6 py-3 bg-dark-700 border-2 border-accent-purple rounded-lg font-mono text-accent-purple font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
