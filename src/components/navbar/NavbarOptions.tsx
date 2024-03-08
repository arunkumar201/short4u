'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { ListItem } from '../ui/ListItem';
import NavbarOptionsHelp from './NavbarOptionsHelp';
import { Products } from '@/data/navbar';
import { SheetClose } from '../ui/sheet';
import SideNavOptions from './SideNavOptions';
import { cn } from '@/lib/utils';

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
          <NavigationMenuItem >
            <NavigationMenuTrigger  className='' >
              Products</NavigationMenuTrigger>
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
            <SheetClose className='flex ps-2 ml-1'>
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
