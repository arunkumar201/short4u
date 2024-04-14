import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ShortHookWrapper = ({ children }: Props) => {
  return (
    <div className="shadow-md p-6 mt-4 mb-4 bg-secondary-foreground dark:bg-[#2B2E4A] rounded-2xl tracking-wide">
      <div className="flex flex-col items-center gap-y-4">
        <h5 className="text-2xl md:text-4xl font-medium text-gray-800 dark:text-accent-foreground text-balance">
          Begin your journey with a single click
        </h5>
        <h1 className="text-lg md:text-xl dark:text-[#E4F9F5] text-[#2B2E4A]">
          Register for a free account and Let Short4u do the work{' '}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default ShortHookWrapper;
