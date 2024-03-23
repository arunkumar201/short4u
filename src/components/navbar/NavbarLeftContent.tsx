import Link from "next/link";
import { NavSideBar } from "./NavSideBar";
import React from "react";

export const NavbarLeftContent = () => {
  return (
    <div className="flex items-center justify-between mt-2 gap-x-2 md:mt-0">
      <div className="relative z-50 block md:hidden">
        <NavSideBar />
      </div>
      <Link
        href={"/"}
        className="text-base uppercase md:text-xl hover:text-gray-300"
      >
        Short4U
      </Link>
    </div>
  );
};
