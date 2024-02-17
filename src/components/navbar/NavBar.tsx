import { NavBarOptions } from './NavbarOptions';
import { NavbarLeftContent } from './NavbarLeftContent';
import { NavbarRightContent } from './NavbarRightContent';

const NavBar = () => {
  return (
    <>
      <div className='flex items-center justify-between w-full h-full'>
        {/* Logo */}
        <NavbarLeftContent />
        {/* Navbar Options */}
        <div className='hidden md:flex '>
          <NavBarOptions />
        </div>
        {/* Login,signUp and getQuote section */}
        <NavbarRightContent />
      </div>
    </>
  );
};

export default NavBar;
