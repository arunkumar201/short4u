import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface IGridBackground {
  Comp: ReactNode;
  className?: string;
  classNameForGrid?: string;
}

export const GridBackground: React.FC<IGridBackground> = ({
  Comp,
  className,
  classNameForGrid,
}) => {
  return (
      <div
          className={cn(
              'h-[50rem] w-full dark:bg-black bg-gray-100  dark:bg-grid-white/[0.2] bg-grid-gray-200/[0.4] relative flex items-center justify-center',
              className
          )}
      >
          <div
              className={cn(
                  'absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white dark:[mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]  [mask-image:radial-gradient(ellipse_at_top,transparent_0%,yellow)]',
                  classNameForGrid
              )}
          ></div>
          <div className="w-full relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 px-4">
              {Comp}
          </div>
      </div>
  );
};
