import { Bot, LayoutDashboard, Link } from 'lucide-react';
import React, { ReactNode } from 'react';

import { NavigationMenuLink } from './navigation-menu';
import { cn } from '@/lib/utils';

const Icon: Record<string, ReactNode> = {
  Link: <Link />,
  Bot: <Bot />,
  LayoutDashboard: <LayoutDashboard />,
};
export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> | any
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='flex flex-row items-center justify-start h-full gap-2 text-sm font-medium leading-none'>
            <span className='self-center'>{Icon[icon]}</span>
            <span className='text-sm md:text-sm '>{title}</span>
          </div>

          <p className='text-sm leading-snug line-clamp-2'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
