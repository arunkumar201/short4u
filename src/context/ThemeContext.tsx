'use client';

import React, { ReactNode, useState } from 'react';

import { ThemeProvider } from 'next-themes';

export function NextThemeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
