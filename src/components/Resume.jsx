import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-900 mb-8 text-center">
          Resume/CV
        </h2>

        {/* Download Button - Centered at top */}
        <div className="flex justify-center mb-12">
          <a
            href="resume/GregoryDStula_Resume_Latest.pdf"
            download="GregoryDStula_Resume_Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <Download size={20} />
            <span>Download Full Resume</span>
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-sky-900 mb-6 text-center md:text-left">
            Experience
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
              <h4 className="text-xl font-semibold text-sky-700 mb-2">
                Software Developer
              </h4>
              <p className="text-gray-600 mb-2">
                Salute Medical Transportation • June 2025 - Present
              </p>
              <p className="text-gray-700">
                Developed mission-critical dispatch system processing daily ride assignments.
                Built comprehensive ETL pipeline with PowerShell and SQL Server for healthcare data integration.
                Developed interactive dashboards in JavaScript with advanced filtering, context menus, and modal interfaces.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
              <h4 className="text-xl font-semibold text-sky-700 mb-2">
                Software Developer
              </h4>
              <p className="text-gray-600 mb-2">
                4V Services • March 2022 - February 2025
              </p>
              <p className="text-gray-700">
                Shipped features for search product using MarkLogic, Node.js, and React.
                Built URL ingestion pipeline and React component library with data verification.
                Implemented custom backend mapping functions in JavaScript and XQuery for MarkLogic Data Hub.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
              <h4 className="text-xl font-semibold text-sky-700 mb-2">
                Data Operations Specialist
              </h4>
              <p className="text-gray-600 mb-2">
                Marxent 3D Cloud • March 2021 - July 2021
              </p>
              <p className="text-gray-700">
                Worked on a cross-functional scrum team to deploy custom 3D
                model applications. Developed internal tooling for efficient
                3D model data loading and created an API scraping tool in
                Node.js for bulk data collection.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
              <h4 className="text-xl font-semibold text-sky-700 mb-2">
                Compliance Coordinator
              </h4>
              <p className="text-gray-600 mb-2">
                Uber Technologies • June 2019 - February 2020
              </p>
              <p className="text-gray-700">
                Provided software solutions and data analysis for Florida
                alcohol law compliance. Developed data auditing tools with
                Google App Script and created a Sheets extension for automated
                alcohol delivery partner onboarding.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-sky-900 mb-6 text-center md:text-left">
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-200">
              <h4 className="text-xl font-semibold text-sky-700 mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-gray-600 mb-2">
                Oregon State University • Class of 2022
              </p>
              <p className="text-gray-700">Located in Corvallis, Oregon</p>
            </div>
            {/* Empty grid cell for consistent layout on desktop */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
