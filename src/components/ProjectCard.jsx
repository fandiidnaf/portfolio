import React from "react";
import { Monitor } from "lucide-react";

const ProjectCard = ({ title, description, iframeSrc, showMobileWarning }) => {
  return (
    <div className="relative transform rounded-xl p-6 shadow-xl transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto
                bg-white dark:bg-gray-800 dark:shadow-2xl dark:hover:shadow-3xl"> {/* Dark mode for card background and shadow */}
      <h3 className="mb-4 text-2xl font-bold text-center
                 text-gray-900 dark:text-white"> {/* Dark mode for title */}
        {title}
      </h3>
      <p className="mb-6 text-center
                text-gray-700 dark:text-gray-300"> {/* Dark mode for description */}
        {description}
      </p>
      <div className="relative flex justify-center">
        {/* Device Frame */}
        <div
          className="relative h-[800px] w-[360px] rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-2xl overflow-hidden flex items-center justify-center border-[6px] border-gray-900
                    dark:from-gray-950 dark:via-gray-900 dark:to-black dark:border-gray-950" // Dark mode for device frame gradient and border
          style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.7)" }} // This shadow is intentionally dark
        >
          {/* Kondisional mobile warning */}
          {showMobileWarning ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center rounded-lg
                        bg-gray-100 bg-opacity-90 text-gray-700
                        dark:bg-gray-900 dark:bg-opacity-90 dark:text-gray-200"> {/* Dark mode for warning overlay */}
              <Monitor className="mb-4 h-14 w-14
                            text-gray-500 dark:text-gray-400" /> {/* Dark mode for Monitor icon */}
              <p className="text-lg font-semibold">
                Pratinjau hanya tersedia di Desktop.
              </p>
              <p className="text-sm mt-2 max-w-xs">
                Mohon buka dari desktop untuk melihat demo aplikasi.
              </p>
            </div>
          ) : (
            <iframe
              src={iframeSrc}
              title={title}
              className="h-full w-full rounded-lg border-none bg-white shadow-inner
                        dark:bg-gray-900" // Dark mode for iframe background if applicable (though usually not visible)
              style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)" }}
            />
          )}

          {/* Speaker Bar */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[4px] w-28 rounded-full bg-gray-700 shadow-md
                        dark:bg-gray-600"></div> {/* Dark mode for speaker bar */}

          {/* Punch-hole Kamera Depan */}
          <div className="absolute top-6 left-6 h-6 w-6 rounded-full bg-gray-800 shadow-md ring-1 ring-gray-600
                        dark:bg-gray-700 dark:ring-gray-500"></div> {/* Dark mode for punch-hole */}

          {/* Bottom Navigation Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[90%] px-6 py-2 bg-black opacity-30 rounded-full flex justify-around items-center">
            {/* Recent Apps (Square) */}
            <button
              aria-label="Recent"
              className="w-4 h-4 border-2 border-white rounded-sm opacity-80"
            />
            {/* Home (Circle) */}
            <button
              aria-label="Home"
              className="w-4 h-4 border-2 border-white rounded-full opacity-80"
            />
            {/* Back (Triangle on Right) */}
            <button
              aria-label="Back"
              onClick={() => window.history.back()}
              className="w-0 h-0 border-t-8 border-b-8 border-l-0 border-r-[12px] border-transparent border-r-white opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;