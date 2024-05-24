import NavBar from './navbar/NavBar';
import { NextThemeProvider } from '@/context/ThemeContext';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const ResponsiveWrapper = async ({ children }: Props) => {
    return (
        <main className="absolute h-auto inset-x-0 flex justify-center items-center bg-gray-200 dark:bg-gray-800">
            <NextThemeProvider>
                <div className="top-0 dark:bg-opacity-30 bg-opacity-30 backdrop-filter backdrop-blur-lg dark:backdrop-blur-xl fixed min-w-full md:top-2 md:mb-7 z-[100]">
                    <NavBar />
                </div>
                <main className="w-full px-6 relative min-h-full">
                    <div className="absolute top-8 md:top-[5rem] ml-0 md:ml-32 mr-0 md:mr-32 md:px-8 md:py-2 -px-2 py-3 mx-8 my-8">
                        {children}
                    </div>
                </main>
            </NextThemeProvider>
        </main>
    );
};
