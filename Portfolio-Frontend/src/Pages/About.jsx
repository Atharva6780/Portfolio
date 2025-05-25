import React from "react";
import img from "../assets/img.jpg";
const About = () => {
  const skills = [
    "HTML, CSS ",
    "Tailwind CSS",
    "JavaScript ",
    " TypeScript",
    "React.js ",
    " Next.js",
    "Node.js ",
    " Express.js",
    "MongoDB & Mongoose",
    "Python",
    "Git & GitHub",
  ];

  const experience = [
    {
      company: "Athang Infotech",
      role: "Web Developer Intern",
      period: "3 Months",
      description:
        "Contributed to a live project by developing a dynamic room booking engine, enhancing user experience and improving booking efficiency.",
    },
  ];

  return (
    <section className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              As an Information Technology student, I’m passionate about
              crafting web experiences that are both functional and visually
              engaging. With a strong grasp of the MERN stack and Tailwind CSS,
              I transform ideas into clean, responsive interfaces. I love
              building intuitive UIs, exploring new technologies, and
              collaborating with others. Every project is a step forward in my
              journey to create meaningful digital solutions.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full
                 ring-2 ring-purple-400 ring-opacity-50
                 shadow-[0_0_15px_5px_rgba(139,92,246,0.9)]"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">
                  <img
                    src={img}
                    alt="img"
                    className="fit rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:rotate-[4deg] hover:scale-105 skill-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="text-white text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-purple-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
