'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { HiSun } from 'react-icons/hi';

import { cn } from '@/lib/utils';

interface IThemeToggleBtn {
  className?: string;
  moonStyle?: string;
  sunStyle?: string;
}
const ThemeToggleBtn: React.FC<IThemeToggleBtn> = ({
  className,
  moonStyle,
  sunStyle,
}) => {
  const { theme, setTheme } = useTheme();

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return theme === 'dark';
  });

  const handleToggle = () => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      return newDarkMode;
    });
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const btnStyle = {
    color: darkMode ? '#E2E8F0' : '#1A202C',
  };

  return (
    <button
      aria-label="theme-toggle"
      className={cn(
        'flex items-center justify-center w-12 transition-all rounded-full duration-400',
        className,
      )}
      style={btnStyle}
      onClick={handleToggle}
    >
      <div
        className={cn(
          'absolute inset-0 w-12 transition duration-500 ease-in-out bg-gray-600 rounded-full opacity-0',
        )}
      />
      <div className="absolute inset-0 w-12 transition duration-500 ease-in-out bg-gray-700 rounded-full opacity-0 hover:dark:bg-slate-200" />
      <div className="relative z-10 w-12 mt-2 -mr-8">
        {darkMode ? (
          <HiSun size={30} className={cn('text-yellow-300', sunStyle)} />
        ) : (
          <CiDark
            size={30}
            className={cn('text-gray-900 dark:text-gray-50', moonStyle)}
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggleBtn;
