import NavBar from './navbar/NavBar';
import { NextThemeProvider } from '@/context/ThemeContext';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const ResponsiveWrapper = async ({ children }: Props) => {
  return (
    <main className="absolute inset-x-0 flex justify-center items-center">
      <NextThemeProvider>
        <div className="w-full">
          <div className="dark:bg-opacity-30 bg-opacity-30 backdrop-filter backdrop-blur-lg dark:backdrop-blur-xl fixed min-w-full md:top-2 md:mb-7 z-[100] ">
            <NavBar />
          </div>
          <div className='dark:bg-[#070815] bg-gray-900/50 min-h-dvh w-full'>
            <div className="relative min-h-full top-8 md:top-[5rem] ml-0 md:ml-32 mr-0 md:mr-32 md:px-8 md:py-2 -px-2 py-3 mx-8 my-8">
              {children}
            </div>
          </div>
        </div>
      </NextThemeProvider>
    </main>
  );
};
