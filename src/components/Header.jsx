import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest("header")) {
        setMenuOpen(!menuOpen);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="flex justify-between items-center h-20 bg-theme px-10 py-2 fixed top-0 left-0 w-screen z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          className="w-20 mr-2"
          src={logo}
          alt="Your Logo"
        />
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-4 text-dark">
        <Link to="/about" className="hover:text-light">
          About SUAP
        </Link>
        <Link to="/" className="hover:text-light">
          Contact Us
        </Link>
      </nav>

      {/* Login & Signup (Desktop) */}
      <div className="hidden md:flex items-center space-x-2">
        <Link
          to="/login"
          className="px-8 py-2 rounded-md text-dark hover:text-light">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-dark text-light text-center px-16 py-4 rounded-md hover:bg-light hover:text-theme hover:shadow-lg"
        >
          Create Account
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden text-dark focus:outline-none"
        onClick={handleMenuToggle}
      >
        {menuOpen ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Mobile Navigation (Conditional) */}
      <nav
        className={`${
          menuOpen ? "flex flex-col space-y-4 absolute top-full left-0 right-0 p-4 bg-theme z-10" : "hidden"
        }`}
      >
        <Link to="/about" className="text-dark hover:text-gray-400">
          About
        </Link>
        <Link to="/" className="text-dark hover:text-gray-400">
          Contact
        </Link>
        <Link
          to="/login"
          className="text-dark font-bold hover:text-gray-400 mt-4"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-dark text-light text-center px-16 py-4 rounded-md hover:bg-light hover:text-theme hover:shadow-lg"
        >
          Create Account
        </Link>
      </nav>
    </header>
  );
};

export default Header;
