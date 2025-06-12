import React from 'react';

// NavItem Component untuk item navigasi di header
const NavItem = ({ id, onClick, label, active }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 font-medium transition-colors duration-300 ease-in-out overflow-hidden
      ${active
        ? 'text-indigo-600 dark:text-indigo-400' // Active state: Lighter indigo in dark mode
        : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400' // Inactive state: Lighter gray, and lighter indigo on hover in dark mode
      }
      // Underline effect
      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-[width] after:duration-300 after:rounded-full
      ${active
        ? 'after:w-full after:bg-indigo-600 dark:after:bg-indigo-400' // Active: Full width, lighter indigo underline in dark mode
        : 'after:w-0 hover:after:w-full after:bg-indigo-600 dark:after:bg-indigo-400' // Inactive: Grows on hover, lighter indigo underline in dark mode
      }
    `}
  >
    {label}
  </button>
);

export default NavItem;