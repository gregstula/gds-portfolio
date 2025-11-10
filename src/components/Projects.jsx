import React from "react";
import { Github, Code, Gamepad2, FileText } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100 flex flex-col">
            <div className="h-38 bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center">
              <Gamepad2 size={38} className="text-white" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">
                Quick Snake
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Fast-paced terminal snake game based on the classic Facebook game Snake 08.
                Built with modern C++ and ncurses.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gregstula/quick-snake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100 flex flex-col">
            <div className="h-38 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code size={38} className="text-white" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">
                CHIP-8 Emulator
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Multi-threaded CHIP-8 virtual machine emulator with hardware-accurate 60Hz timers.
                Uses Qt 6 for windowing and SDL2 for sound/graphics.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gregstula/chip8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100 flex flex-col">
            <div className="h-38 bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
              <FileText size={38} className="text-white" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">
                Unix Config
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Comprehensive Arch Linux configuration suite including NeoVim setup, custom color schemes,
                and utilities for secure boot installation on encrypted drives.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gregstula/unix-config"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100 flex flex-col">
            <div className="h-38 bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
              <Gamepad2 size={38} className="text-white" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">
                Sudoku NCurses
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                Terminal-based Sudoku game with full puzzle generation and solving logic.
                Built with C++ and NCurses for cross-platform terminal compatibility.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gregstula/sudoku-ncurses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
