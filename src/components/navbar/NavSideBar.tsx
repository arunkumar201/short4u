import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { NavBarOptions } from './NavbarOptions';

export const NavSideBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            aria-description='Menu'
          >
            <span className='sr-only'>Menu</span>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <div className='flex flex-row '>
              <NavBarOptions isMobile={true} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
