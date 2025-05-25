import React from "react";

const Home = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {" "}
            Hii ,{" "}
          </span>
          I am Atharva Shinde
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
          Passionate about building beautiful, creative and
          functional websites{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <button
            onClick={() => setActiveSection("work")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="px-8 py-3 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
