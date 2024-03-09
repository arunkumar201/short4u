import { NavbarLeftContent } from "./NavbarLeftContent";
import { NavBarOptions } from "./NavbarOptions";
import { NavbarRightContent } from "./NavbarRightContent";

const NavBar = () => {
  return (
    <div className="dark:bg-opacity-90 bg-primary/90 dark:bg-primary-foreground/90 opacity-90 backdrop-filter backdrop-blur-[2px]  ml-0 md:ml-32 mr-0 md:mr-32 flex justify-between items-center shadow-2xl border-b-2 dark:border-b border-zinc-900 dark:border-gray-200 firefox:bg-opacity-90  md:rounded-2xl px-3 py-3 md:px-10  text-primary-foreground dark:text-primary">
      {/* Logo */}
      <NavbarLeftContent />
      {/* Navbar Options */}
      <div className="hidden md:flex ">
        <NavBarOptions />
      </div>
      {/* Login,signUp and getQuote section */}
      <NavbarRightContent />
    </div>
  );
};

export default NavBar;
