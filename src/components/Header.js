import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = ({ title, onAddNew, toggleDarkMode, isDarkMode }) => (
  <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
    <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
    <div className="flex items-center">
      {onAddNew && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={onAddNew}>
          Add New
        </button>
      )}
      <button onClick={toggleDarkMode} className="mr-4">
        {isDarkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} />}
      </button>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  </header>
);

export default Header;
