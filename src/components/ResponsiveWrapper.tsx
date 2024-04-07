'use server';

import NavBar from './navbar/NavBar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const ResponsiveWrapper = async ({ children }: Props) => {
  return (
    <main className="absolute inset-x-0 flex justify-center items-center">
      <div className="w-full min-h-dvh">
        <div className="dark:bg-opacity-30 bg-opacity-30 backdrop-filter backdrop-blur-lg dark:backdrop-blur-xl fixed min-w-full md:top-2 md:mb-7 z-[100] ">
          <NavBar />
        </div>
        <div className="relative min-h-full top-8 md:top-[5rem] ml-0 md:ml-32 mr-0 md:mr-32 md:px-8 md:py-2 -px-2 py-3 ">
          {children}
        </div>
      </div>
    </main>
  );
};
