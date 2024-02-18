'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { ListItem } from '../ui/ListItem';
import { Products } from '@/data/navbar';
import { SheetClose } from '../ui/sheet';
import SideNavOptions from './SideNavOptions';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface NavBarOptionsProps {
  isMobile?: boolean;
}
export function NavBarOptions({ isMobile }: NavBarOptionsProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={cn(
          'flex justify-between w-full gap-x-2',
          isMobile && 'flex-col'
        )}
      >
        {!isMobile ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Products</NavigationMenuTrigger>
            <NavigationMenuContent  className='dark:bg-popover/40 bg-popover'>
              <ul className='grid  w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {Products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    icon={product.icon}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <>
            <SideNavOptions />
          </>
        )}
        <NavigationMenuItem
          className={cn(
            'flex justify-between w-full gap-x-4',
            isMobile && 'flex-col'
          )}
        >
          {isMobile ? (
            <SheetClose>
              <NavbarOptionsHelp isMobile={true} />
            </SheetClose>
          ) : (
            <NavbarOptionsHelp />
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export const NavbarOptionsHelp = ({ isMobile }: { isMobile?: boolean }) => {
    const router = useRouter();
  return (
    <div className={cn('flex items-center justify-center ', isMobile && 'mt-4 flex flex-col')}>
      <p
         onClick={() => router.push('/pricing')}
        className={cn('cursor-pointer md:text-base justify-center px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ')}
      > 
          Pricing
      </p>
      <p
        onClick={()=>router.push('/blog')}
        className={" cursor-pointer text-sm md:text-base  justify-center px-4 py-2 font-medium transition-colors rounded-xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none "}>
          Blog
      </p>
      <p
        onClick={() => router.push('/support')}
        className={" cursor-pointer text-sm md:text-base   justify-center px-4 py-2 font-medium transition-colors rounded-xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none "}>
          Help
      </p>
    </div>
  );
};
