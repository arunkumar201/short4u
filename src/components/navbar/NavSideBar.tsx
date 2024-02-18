import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { NavBarOptions } from './NavbarOptions';

export const NavSideBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className='p-1 -py-2'>
            <Menu  size={30} className='dark:text-primary text-primary-foreground'/>
        </SheetTrigger>
        <SheetContent side={'left'} className='max-w-[18rem]'>
          <div className='flex flex-row '>
              <NavBarOptions isMobile={true} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
