import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/AboutMe.jpeg"
              alt="Greg Stula"
              className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-6">
              I'm a software developer focused on building robust data engineering solutions
              and scalable web applications. Currently working on mission-critical systems
              that process thousands of daily transactions using SQL Server, JavaScript, and modern ETL pipelines.
            </p>
            <p className="mb-6">
              My background spans from low-level systems programming in C++ to full-stack web development
              with React and Node.js. I have experience with healthcare data integration,
              real-time dashboards, and building developer tools that improve team productivity.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "JavaScript",
                "SQL Server",
                "Python",
                "C++",
                "React",
                "Node.js",
                "PowerShell",
                "ETL Pipelines",
                "MarkLogic",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm border border-sky-200"
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
