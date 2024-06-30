import { NextThemeProvider } from '@/context/ThemeContext';
import NavBar from './navbar/NavBar';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const ResponsiveWrapper = async ({ children }: Props) => {
    return (
        <main className="absolute inset-x-0 flex justify-center items-center md:m-32 m-2">
            <NextThemeProvider>
                <div className="top-0 fixed min-w-full md:top-2 md:mb-7 z-[100]">
                    <NavBar />
                </div>
                <main className="p-0 md:p-4 w-full  relative min-h-screen top-[4rem] md:top-[-2rem]">
                    {children}
                </main>
            </NextThemeProvider>
        </main>
    );
};
