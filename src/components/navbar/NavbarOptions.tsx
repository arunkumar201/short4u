'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import { ListItem } from '../ui/ListItem';
import { Products } from '@/data/navbar';
import { SheetClose } from '../ui/sheet';
import SideNavOptions from './SideNavOptions';
import { cn } from '@/lib/utils';

interface NavBarOptionsProps {
  isMobile?: true;
}
export function NavBarOptions({ isMobile }: NavBarOptionsProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={cn(
          'flex justify-between w-full gap-x-5',
          isMobile && 'flex-col'
        )}
      >
        {!isMobile ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className='dark:bg-popover/40 bg-popover'>
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
  return (
    <div className={cn('', isMobile && 'mt-4 flex flex-col')}>
      <NavigationMenuLink
        className={cn('nav-menu', navigationMenuTriggerStyle())}
      >
        <Link href='/pricing' legacyBehavior passHref>
          Pricing
        </Link>
      </NavigationMenuLink>

      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link href='/blog' legacyBehavior passHref>
          Blog
        </Link>
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link href='/support' legacyBehavior passHref>
          Help
        </Link>
      </NavigationMenuLink>
    </div>
  );
};
