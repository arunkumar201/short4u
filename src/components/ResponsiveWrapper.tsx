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
        <div className="fixed  min-w-full z-50 md:top-2 md:mb-2 ">
          <NavBar />
        </div>
        <div className="min-h-full top-8 md:top-[5rem] ml-0 md:ml-32 mr-0 md:mr-32 md:px-8 md:py-2 -px-2 py-3 ">
          {children}
        </div>
      </div>
    </main>
  );
};
