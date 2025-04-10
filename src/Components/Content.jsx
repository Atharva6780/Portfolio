import React, { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const Content = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    projects: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");

    if (aboutSection) observer.observe(aboutSection);
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (projectsSection) observer.unobserve(projectsSection);
    };
  }, []);

  // For the skills section
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Python",
    "Java",
  ];

  return (
    <>
      <div className="text-blue-950 bg-gradient-to-b from-slate-50 to-blue-50 min-h-screen">
        <AnimatedBackground />

        {/* Hero Section */}
        <div
          id="home"
          className="relative flex flex-col lg:flex-row px-5 lg:px-10 py-20 max-w-7xl mx-auto"
        >
          <div className="w-full lg:w-1/2 z-10">
            <div className="animate-fadeIn">
              <p className="text-blue-600 font-medium">Hello there, I'm</p>
              <h1 className="font-bold mt-3 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-950 to-blue-600 bg-clip-text text-transparent">
                Atharva Shinde
              </h1>
              <div className="flex items-center mt-4">
                <h2 className="font-medium text-xl md:text-2xl">
                  Web Developer
                </h2>
                <div className="ml-3 h-1 w-16 bg-blue-600 rounded"></div>
              </div>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 max-w-xl">
                I'm a passionate web developer diving deep into modern
                technologies to create user-friendly applications. Currently
                interning at a fast-paced infotech startup where I'm gaining
                hands-on experience with real-world projects.
              </p>
              <div className="mt-8 flex space-x-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  My Work
                </a>
                <a
                  href="#contacts"
                  className="px-6 py-3 border-2 border-blue-800 text-blue-800 rounded-full hover:bg-blue-50 hover:shadow-md transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-1/2 z-10">
            <div className="relative">
              <img
                src="profile.jpg"
                className="relative rounded-full border-8  border-white shadow-blue-500 shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div
          id="about"
          className={`transform transition-all duration-1000 ${
            isVisible.about
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mt-12 max-w-4xl mx-auto rounded-3xl px-6 py-10 shadow-xl bg-white/80 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a web developer with a growing interest in full-stack
              development. Currently, I'm honing my skills in front-end and
              back-end technologies to build robust, scalable web applications.
              In addition to my personal projects, I am gaining valuable
              experience as a web development intern at a leading infotech
              startup, where I'm exposed to innovative technologies and
              real-world challenges.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative py-3 px-6 bg-white rounded-lg shadow-md hover:shadow-xl border border-blue-100
                          transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-medium text-blue-900">{skill}</div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 px-6 max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible.projects
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {["Pro1", "Pro2", "Pro3", "Pro4"].map((project, index) => (
              <div
                key={project}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-blue-900 text-xl font-medium">
                    {project}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-blue-900">
                    {project} Title
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A brief description of the project and technologies used.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        React
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Node.js
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
