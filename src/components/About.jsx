import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-sky-900 mb-20 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/AboutMe.jpeg"
              alt="Greg Stula"
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg object-cover shadow-xl"
            />
          </div>
          <div className="text-gray-700 leading-relaxed flex flex-col justify-center">
            <p className="mb-8 text-lg">
              I'm a software developer focused on building robust data engineering solutions
              and scalable web applications. Currently working as full stack developer and building ride dispatch software for medical transpotation.
            </p>
            <p className="mb-8 text-lg">
              My background spans from low-level systems programming in C++ to full-stack web development
              with React and Node.js. I have experience with healthcare data integration,
              real-time dashboards, and building developer tools that improve team productivity.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "C++",
                "JavaScript",
                "SQL Server",
                "Python",
                "React",
                "Node.js",
                "Zsh",
                "Lua",
                "Java",
                "Rust",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-base border border-sky-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
