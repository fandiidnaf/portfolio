import { useState } from "react";
import { Download, Eye, EyeOff } from "lucide-react"; // Import icons for better visuals

export default function ResumeViewer(scrollToSection) {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div
      id="resume"
      className="p-6 bg-white rounded-2xl shadow-xl dark:bg-gray-800 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        My Resume
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a
          href="/pdf/Moh. Dwi Afandi_EN_CV_ATS.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out
                     dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
        >
          <Download size={20} />
          Download CV
        </a>

        <button
          onClick={() => setShowViewer(!showViewer)}
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out
                     dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500"
        >
          {showViewer ? (
            <>
              <EyeOff size={20} /> Hide Viewer
            </>
          ) : (
            <>
              <Eye size={20} /> View CV Online
            </>
          )}
        </button>
      </div>

      {showViewer && (
        <div className="mt-8 w-full h-[90vh] md:h-[100vh] border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out">
          <iframe
            src="/pdf/Moh. Dwi Afandi_EN_CV_ATS.pdf"
            className="w-full h-full bg-white dark:bg-gray-900" // Added dark background for iframe if PDF itself is transparent
            title="Resume PDF Viewer"
            loading="lazy" // Improves performance by deferring loading of offscreen iframes
          ></iframe>
        </div>
      )}
    </div>
  );
}
