import './globals.css';

import { AOSInit } from '@/aos';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { ResponsiveWrapper } from '@/components/ResponsiveWrapper';
import { cn } from '@/lib/utils';

const poppins = DM_Sans({ weight: '500',subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Short4u- URL Shortener Powered AI | Create your own short branded   ',
  description: 'URL SHORTER | QR CODE | Link Tracking | Bio Link  | Comprehensive Dashboard',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <AOSInit />
      <body className={cn('transition-colors duration-50 ',poppins.className)}>
        <ResponsiveWrapper>{children}</ResponsiveWrapper>
      </body>
    </html>
  );
}
