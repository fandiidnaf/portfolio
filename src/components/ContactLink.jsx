import React from 'react';

// ContactLink Component untuk tautan kontak
const ContactLink = ({ icon, href, text }) => (
  <a
    href={href}
    // target="_blank" // Uncomment if you want links to open in a new tab
    // rel="noopener noreferrer" // Uncomment if using target="_blank" for security
    className="inline-flex items-center gap-3 transform rounded-full px-6 py-3 text-lg font-medium shadow-md transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4
               bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 focus:ring-indigo-200
               dark:bg-gray-700 dark:text-indigo-300 dark:hover:bg-gray-600 dark:hover:text-indigo-200 dark:focus:ring-gray-600" // Dark mode styles
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default ContactLink;