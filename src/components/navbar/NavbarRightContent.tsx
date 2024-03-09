import Link from "next/link";
import React from "react";

import ThemeToggleBtn from "../ThemeToggleBtn";
import { Button } from "../ui/button";

export const NavbarRightContent = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <ThemeToggleBtn />
      <Link href={"/login"}>
        <Button
          variant={"outline"}
          className="px-3 py-0 text-sm md:p-4 md:text-inherit rounded-2xl dark:text-primary text-primary-foreground bg-primary dark:bg-primary-foreground"
        >
          Login
        </Button>
      </Link>
      <Link href={"/Sign-up"}>
        <Button
          variant={"outline"}
          className="px-2 py-0 text-sm md:p-4 md:text-inherit rounded-2xl dark:text-primary text-primary-foreground bg-primary dark:bg-primary-foreground "
        >
          Sign up{" "}
        </Button>
      </Link>
    </div>
  );
};
