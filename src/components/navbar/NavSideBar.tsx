import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { NavBarOptions } from './NavbarOptions';

export const NavSideBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger
          asChild
          className="p-1 -py-2 cursor-pointer"
          role="button"
        >
          <Menu
            size={30}
            className="dark:text-primary text-primary-foreground"
          />
        </SheetTrigger>
        <SheetContent side={'left'} className="max-w-[18rem]">
          <div className="flex flex-row ">
            <NavBarOptions isMobile={true} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
