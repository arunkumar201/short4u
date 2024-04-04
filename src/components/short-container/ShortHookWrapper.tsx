import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ShortHookWrapper = ({ children }: Props) => {
  return (
    <div className="shadow-md p-6 mt-4 mb-4 bg-secondary-foreground dark:bg-gray-700 rounded-2xl tracking-wide">
      <div className="flex flex-col items-center gap-y-2">
        <h5 className="text-xl font-medium text-gray-800 dark:text-secondary-foreground">
          Begin your journey with a single click
        </h5>
        <h1 className="text-xl md:text-2xl font-semibold text-primary dark:text-accent-foreground">
          Register for a free account and let short4u do the work{' '}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default ShortHookWrapper;
