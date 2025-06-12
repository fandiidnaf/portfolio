import React from "react";
import ProjectCard from "../components/ProjectCard"; // Ensure ProjectCard also supports dark mode

const ProjectsSection = ({scrollToSection, showMobileWarning}) => {
    return (
        <section id="projects" className="py-16 md:py-24 min-h-[80vh]">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 text-center dark:text-white"> {/* Dark mode for heading */}
          My Projects
        </h2>
        <p className="mb-12 text-center text-md text-gray-600 max-w-2xl mx-auto
                      bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-sm
                      dark:bg-yellow-900 dark:border-yellow-700 dark:text-gray-200"> {/* Dark mode for note background, border, and text */}
          <span className="font-medium text-yellow-800 dark:text-yellow-400">Note:</span> Some
          features may be unavailable or behave differently on the web version
          compared to the mobile app. These previews are for demonstration
          purposes and may not reflect the full mobile experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-stretch px-4 max-w-5xl mx-auto">
          <ProjectCard
            title="Project Attendance"
            description="A Flutter-based attendance app for employee time management."
            iframeSrc="https://erp-attendance-1.web.app/"
            showMobileWarning={showMobileWarning}
          />
          <ProjectCard
            title="Project Hausjo-Ewallet"
            description="A digital wallet app for transaction and financial management."
            iframeSrc="https://hausjo-ewallet.web.app/"
            showMobileWarning={showMobileWarning}
          />
          {/* Add more projects here if needed */}
        </div>
      </section>
    );
};

export default ProjectsSection;