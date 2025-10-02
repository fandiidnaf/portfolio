import React from "react"; // React is implicitly used, good to explicitly import

const certificates = [
  {
    id: 1,
    title: "Belajar Prinsip Pemrograman Solid",
    platform: "Dicoding",
    logo: "https://www.dicoding.com/img/dicoding-logo-full.png",
    link: "https://www.dicoding.com/certificates/NVP74V4KOPR0",
  },
];

export default function CertificateCourses({ scrollToSection }) {
  return (
    <section
      id="certificates"
      className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        🎓 Certificate & Course
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                         bg-white dark:bg-gray-800"
          >
            <img
              src={cert.logo}
              alt={cert.platform}
              className="h-12 mb-4 mx-auto object-contain" // Added object-contain to prevent stretching
            />
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
              {cert.platform}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-base font-medium inline-flex items-center hover:underline dark:text-indigo-400"
            >
              See Certificate <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
