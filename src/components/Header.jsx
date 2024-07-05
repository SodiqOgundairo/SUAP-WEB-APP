import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex justify-between px-10 py-4 bg-theme fixed w-screen flex-wrap md:items-center z-10">
      <Link to="/" style={{scrollBehavior: 'smooth'}}>
        <img src={logo} alt="suap logo" className="w-1/5"/>
      </Link>

      <div className="md:hidden" onClick={handleMenu}>
        {menuOpen ? (
          <IoCloseSharp className="text-4xl" />
        ) : (
          <GiHamburgerMenu className="text-4xl" />
        )}
      </div>

      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row justify-center gap-7 items-center w-full md:w-auto`}
      >
        <ul className="list-none block md:flex justify-center gap-4 p-4 flex-wrap">
          <li className="hover:text-light">
            <Link to="/about" onClick={handleMenuItemClick}>
              About SUAP
            </Link>
          </li>
          <li className="hover:text-light cursor-pointer">
            <p onClick={handleMenuItemClick}>
              Contact Us
            </p>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full md:w-auto">
          <Link to="/" className="px-8 py-2 rounded-md text-dark hover:text-light">
            Login
          </Link>
          <Link
            to="/"
            className="bg-dark text-light px-16 py-4 rounded-md hover:bg-light hover:text-theme hover:shadow-lg"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
