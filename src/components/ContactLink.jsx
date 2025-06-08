import React from 'react';

// ContactLink Component untuk tautan kontak
const ContactLink = ({ icon, href, text }) => (
  <a
    href={href}
    // target="_blank"
    // rel="noopener noreferrer"
    className="inline-flex items-center gap-3 transform rounded-full bg-indigo-50 px-6 py-3 text-lg font-medium text-indigo-700 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default ContactLink;
