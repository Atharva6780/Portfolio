import React from "react";

const Work = () => {
  const projects = [
    {
      title: "CollagePrep",
      description:
        "A platform to help college students prepare with notes, textbooks, question papers, and resources semester-wise.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      image: "🚀",
      link: "https://github.com/Atharva6780/CollagePrep",
    },
    {
      title: "spotify-clone",
      description:
        "A music streaming web application inspired by Spotify, with playlist and search functionality.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      image: "🎧",
      link: "https://github.com/Atharva6780/spotify-clone",
    },
    {
      title: "ContractFarming",
      description:
        "An app connecting farmers and contractors for transparent and secure crop agreements.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      image: "🌾",
      link: "https://github.com/Atharva6780/ContractFarming",
    },
    {
      title: "financeApp",
      description:
        "A modern finance tracker web app to manage expenses, income, and visualize your spending.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      image: "💰",
      link: "https://github.com/BhushanMalpani45/financeApp",
    },
  ];

  return (
    <section className="min-h-screen py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Featured <span className="text-purple-400">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 project-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white transition-colors font-semibold"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
