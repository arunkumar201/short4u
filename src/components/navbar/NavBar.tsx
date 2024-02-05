import Image from 'next/image';
import logo from '../../../public/navbar/short4u-logo.png';
const NavBar = () => {
  return (
    <>
      <div>
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt='short4u'
            aria-details='Short4u is a link shortener service'
            quality={100}
            priority={true}
            width={"143"}
            height={103}
            className=''
          />
        </div>
        {/* Navbar Options */}
        <div></div>
        {/* Login,signUp and getQuote section */}
        <div></div>
      </div>
    </>
  );
};

export default NavBar;
