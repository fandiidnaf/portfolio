import React from 'react';

// NavItem Component untuk item navigasi di header
const NavItem = ({ id, onClick, label, active }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 font-medium transition-colors duration-300 ease-in-out overflow-hidden
      ${active ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-[width] after:duration-300 after:rounded-full
      ${active ? 'after:w-full' : 'hover:after:w-full'}
    `}
  >
    {label}
  </button>
);


export default NavItem;
