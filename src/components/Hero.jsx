import React from "react";
import { Github, Linkedin } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section className="pt-16 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="https://github.com/gregstula.png"
            alt="Greg Stula"
            className="w-56 h-56 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-6">
          Greg D. Stula
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Software Developer | Data Engineering | Systems Architecture
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/gregstula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gregstula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={28} />
          </a>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
