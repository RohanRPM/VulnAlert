import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSpring, animated } from 'react-spring';

const Header = ({ title, onAddNew, toggleDarkMode, isDarkMode }) => {
  // Animations for light/dark mode toggle
  const iconSpring = useSpring({
    transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 10, friction: 1},
  });

  const headerSpring = useSpring({
    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff', // Dark: gray-800, Light: white
    color: isDarkMode ? '#ffffff' : '#000000', // Text color change
    config: { tension: 10, friction: 1 },
  });

  return (
    <animated.header
      style={headerSpring}
      className="shadow p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
    >
      <animated.h2 className="text-xl font-semibold transition-colors duration-300">
        {title}
      </animated.h2>

      <div className="flex items-center">
        {onAddNew && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 mr-2"
            onClick={onAddNew}
          >
            Add New
          </button>
        )}

        <animated.button onClick={toggleDarkMode} className="mr-4">
          <animated.div style={iconSpring}>
            {isDarkMode ? (
              <Sun size={24} className="text-yellow-400 transition duration-300" />
            ) : (
              <Moon size={24} className="text-gray-600 transition duration-300" />
            )}
          </animated.div>
        </animated.button>

        {/* Profile Placeholder with shimmer animation */}
        <div className="w-8 h-8 bg-gray-300 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 animate-pulse"></div>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
