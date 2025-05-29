import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/DateFormatter';

export const DayCardModal = ({ isOpen, onClose, day }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Detect current theme
  useEffect(() => {
    const checkTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      setIsDarkMode(storedTheme === 'dark');
    };

    checkTheme();
    window.addEventListener('themeChanged', checkTheme);
    return () => window.removeEventListener('themeChanged', checkTheme);
  }, []);

  if (!isOpen || !day) return null;

  const problemsCount = day.problems.length;

    const getProgressBadgeClass = () => {
    if (problemsCount >= 6) return isDarkMode ? 'bg-purple-400 text-black' : 'bg-purple-600 text-white';
    if (problemsCount >= 4) return isDarkMode ? 'bg-purple-600 text-white' : 'bg-purple-400 text-white';
    if (problemsCount >= 2) return isDarkMode ? 'bg-purple-800 text-purple-100' : 'bg-purple-200 text-purple-900';
    if (problemsCount >= 1) return isDarkMode ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-900';
    return isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`${isDarkMode ? 'bg-gray-900 bg-opacity-90 text-gray-100' : 'bg-white text-gray-900'} rounded-xl p-6 max-w-lg w-full shadow-xl `}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">
          Day {day.dayNumber} : {formatDate(day.date)}
        </h2>

        {problemsCount > 0 ? (
          <>
            {day.status == 'done' &&
            <div className={`inline-block mb-4 px-3 py-1 text-sm rounded-full font-medium ${getProgressBadgeClass()}`}>
              {`Solved ${problemsCount} problem${problemsCount > 1 ? 's' : ''}`}
            
            </div>}
            <ul className="list-disc list-inside space-y-2">
              {day.problems.map((p, i) => (
                <li key={i}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 italic">No problems solved this day.</p>
        )}

        <button
            className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary transition"
            onClick={onClose}
            >
            Close
        </button>
      </div>
    </div>
  );
};
