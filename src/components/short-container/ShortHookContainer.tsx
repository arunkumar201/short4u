import React, { ReactNode } from 'react';

const ShortHookContainer = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-[12rem] border-2 border-dashed rounded-xl border-accent dark:border-accent-foreground w-full text-primary-foreground dark:text-accent-foreground px-3 py-4">{children}</main>;
};

export default ShortHookContainer;
