import { NavBarOptions } from './NavbarOptions';
import { NavbarLeftContent } from './NavbarLeftContent';
import { NavbarRightContent } from './NavbarRightContent';

const NavBar = () => {
  return (
    <nav className="bg-accent-foreground/85  dark:bg-primary-foreground/70 ml-0 md:ml-32 mr-0 md:mr-32 flex justify-between items-center shadow-2xl border-b-2 dark:border-b border-zinc-900 dark:border-gray-200 firefox:bg-opacity-90 border-1  md:rounded-2xl px-3 py-3 md:px-10  text-primary-foreground dark:text-primary">
      {/* Logo */}
      <NavbarLeftContent />
      {/* Navbar Options */}
      <div className="hidden md:flex ">
        <NavBarOptions />
      </div>
      {/* Login,signUp and getQuote section */}
      <NavbarRightContent />
    </nav>
  );
};

export default NavBar;
