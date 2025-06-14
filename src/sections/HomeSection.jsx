import React from "react";

const HomeSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center justify-center py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white animate-fade-in-down">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Moh. Dwi Afandi</span>
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up">
          A passionate{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Mobile Developer
          </span>
          <br />
          focused on{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Flutter</span>.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="transform rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-fade-in
                     dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
        >
          View My Projects
        </button>
      </div>
    </section>
  );
};

export default HomeSection;