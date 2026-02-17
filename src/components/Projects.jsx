import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      emoji: "💰",
      title: "Pay Api",
      description:
        "Pay API ilovasi. Banking, vaqtlar bilan interaktiv UI/UX. Foydalanuvchilar uchun responsive dizayn",
      technologies: ["React"],
      gradient: "from-accent-cyan to-accent-purple",
      accentColor: "accent-cyan",
      demoLink: "https://loyiha-portfolio.netlify.app/",
      githubLink: "https://github.com/Ismoil-21?tab=repositories",
    },
    {
      emoji: "📱",
      title: "Online magazine",
      description:
        "bu do'konda barcha Apple qurilmalarini xarid qilishingiz va har xil qurilmani ishlatib ko'rishingiz mumkin.",
      technologies: ["React"],
      gradient: "from-accent-purple to-accent-green",
      accentColor: "accent-purple",
      demoLink: "https://onlinemagazine-imarket.netlify.app/",
      githubLink: "https://github.com/Ismoil-21?tab=repositories",
    },
    {
      emoji: "💼",
      title: "Verifix",
      description:
        "Siz bu saytda harhil ishchilarni ishga qabul qilishingiz va qabul qilingan ishchilarning ma'lumotlarini ko'rib chiqishingiz mumkin.",
      technologies: ["React"],
      gradient: "from-accent-green to-accent-cyan",
      accentColor: "accent-green",
      demoLink: "https://verifix-beta.vercel.app/login",
      githubLink: "https://github.com/Ismoil-21?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="text-accent-cyan">03.</span> Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
