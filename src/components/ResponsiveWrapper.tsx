import { NextThemeProvider } from '@/context/ThemeContext';
import NavBar from './navbar/NavBar';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const ResponsiveWrapper = async ({ children }: Props) => {
    return (
        <NextThemeProvider>
            <main className="absolute inset-x-0 flex justify-center items-center md:m-32 m-2 z-[200]">
                <div className="top-0 fixed min-w-full md:top-2 md:mb-7 z-[400]">
                    <NavBar />
                </div>
                <main className="z-[200] p-0 md:p-4 min-w-full relative top-[4rem] md:top-[-2rem]">
                    {children}
                </main>
            </main>
        </NextThemeProvider>
    );
};
