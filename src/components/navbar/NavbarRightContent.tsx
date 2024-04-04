import { Button } from '../ui/button';
import Link from 'next/link';
import React from 'react';
import ThemeToggleBtn from '../ThemeToggleBtn';

export const NavbarRightContent = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <ThemeToggleBtn />
      <Link href={'/login'}>
        <Button
          variant={'outline'}
          className="px-3 py-0 border-[1px] hover:border-accent-foreground  hover:dark:border-secondary-foreground  text-sm md:p-4 md:text-inherit rounded-xl dark:text-primary text-primary-foreground bg-primary dark:bg-primary-foreground hover:dark:bg-secondary"
        >
          Login
        </Button>
      </Link>
      <Link href={'/Sign-up'}>
        <Button
          variant={'outline'}
          className="px-2 py-0 text-sm md:p-4 hover:border-accent-foreground  hover:dark:border-secondary-foreground md:text-inherit rounded-xl dark:text-primary text-primary-foreground bg-primary dark:bg-primary-foreground hover:dark:bg-secondary"
        >
          Sign up{' '}
        </Button>
      </Link>
    </div>
  );
};
