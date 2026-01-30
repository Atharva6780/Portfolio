import React, { useState, useEffect } from "react";
import img from "../assets/img.jpg";

const Home = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("intro");

  const skills = [
    { name: "HTML, CSS", icon: "🌐", level: 95 },
    { name: "Tailwind CSS", icon: "🎨", level: 90 },
    { name: "JavaScript", icon: "⚡", level: 88 },
    { name: "TypeScript", icon: "📘", level: 80 },
    { name: "React.js", icon: "⚛️", level: 85 },
    { name: "Next.js", icon: "🚀", level: 82 },
    { name: "Node.js", icon: "🟢", level: 83 },
    { name: "Express.js", icon: "🚂", level: 81 },
    { name: "MongoDB & Mongoose", icon: "🍃", level: 78 },
    { name: "Python", icon: "🐍", level: 75 },
    { name: "Git & GitHub", icon: "🔧", level: 92 },
  ];

  const experience = [
    {
      company: "Athang Infotech",
      role: "Web Developer Intern",
      period: "3 Months",
      description: "Contributed to a live project by developing a dynamic room booking engine, enhancing user experience and improving booking efficiency.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    },
  ];

  const projects = [
    {
      title: "CollagePrep",
      description: "A platform to help college students prepare with notes, textbooks, question papers, and resources semester-wise.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      emoji: "🚀",
      link: "https://github.com/Atharva6780/CollagePrep",
    },
    {
      title: "spotify-clone",
      description: "A music streaming web application inspired by Spotify, with playlist and search functionality.",
      tech: ["MongoDb", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      emoji: "🎧",
      link: "https://github.com/Atharva6780/spotify-clone",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Hero Text */}
            <div className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 block">
                    Hello, I'm
                  </span>
                  <span className="block mt-2">Atharva Shinde</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Full Stack Developer & Creative Problem Solver
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  As an Information Technology student, I'm passionate about crafting web experiences that are both functional and visually engaging. With a strong grasp of the MERN stack and Tailwind CSS, I transform ideas into clean, responsive interfaces.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center transform hover:scale-105 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">10+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center transform hover:scale-105 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">1+</div>
                    <div className="text-sm text-gray-300">Years Exp</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center transform hover:scale-105 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-pink-400 group-hover:scale-110 transition-transform">MERN</div>
                    <div className="text-sm text-gray-300">Stack</div>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Column - Profile Image */}
            <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30 group">
                  <img
                    src={img}
                    alt="Atharva Shinde"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-12 animate-float shadow-lg group">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    MERN
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-float animation-delay-2000 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="mt-32 opacity-0 animate-fade-in-up animation-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills & <span className="text-purple-400">Technologies</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Proficient in modern web technologies with hands-on experience in full-stack development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:shadow-purple-500/10 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <span className="text-sm font-bold text-purple-400">{skill.level}%</span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded-full blur-sm transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-12 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Tech Stack <span className="text-purple-400">Overview</span>
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {["React", "Node", "MongoDB", "Express", "JavaScript", "TypeScript", "Tailwind", "Git"].map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl">
                        {tech === "React" && "⚛️"}
                        {tech === "Node" && "🟢"}
                        {tech === "MongoDB" && "🍃"}
                        {tech === "Express" && "🚂"}
                        {tech === "JavaScript" && "⚡"}
                        {tech === "TypeScript" && "📘"}
                        {tech === "Tailwind" && "🎨"}
                        {tech === "Git" && "🔧"}
                      </span>
                    </div>
                    <span className="text-white text-sm mt-3 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-32 opacity-0 animate-fade-in-up animation-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Professional <span className="text-purple-400">Experience</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real-world experience building scalable applications and solving complex problems
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 mb-4">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-green-400 text-sm font-medium">Internship</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <span className="text-yellow-400">📅</span>
                        <span className="text-white font-semibold">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg text-white text-sm font-medium border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-lg">🏢</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Remote</p>
                          <p className="text-gray-400 text-sm">Work Mode</p>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .skill-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Home;