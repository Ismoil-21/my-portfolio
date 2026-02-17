import React from "react";

const ProjectCard = ( { project } ) => {
  return (
    <div className="project-card bg-dark-800 border rounded-xl overflow-hidden">
      <div
        className={`h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center`}
      >
        <span className="text-6xl">{project.emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-2xl mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-dark-700 text-${project.accentColor} text-sm rounded-full font-mono`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            className={`flex-1 z-1 px-4 py-2 bg-${project.accentColor} text-dark-900 font-semibold cursor-pointer rounded-lg hover:bg-white hover:text-black border transition-all duration-300 text-center`}
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className={`px-4 py-2 z-1 border border-${project.accentColor} text-${project.accentColor} cursor-pointer font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
