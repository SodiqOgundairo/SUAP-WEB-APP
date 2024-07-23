import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/suap_logo_g.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoWalletOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { TbGiftCard, TbSettings } from "react-icons/tb";
import { LuCoins, LuUsers2 } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdCircleNotifications } from "react-icons/md";

const SideBar = () => {
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
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="flex md:flex-col justify-between items-center h-20 md:h-screen bg-theme fixed top-0 md:bg-dark py-10 pe-4  w-screen md:w-1/5 z-50">
      {/* Logo */}
      <div className="px-8">
        <img
          className="w-20 mr-2 hidden md:flex"
          src={logo}
          alt="Your Logo"
        />

        <div className="md:hidden flex gap-5 items-center text-dark justify-between">

        <p className=" font-bold text-2xl">Welcome</p>
        <MdCircleNotifications size={24}/>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex flex-col text-theme font-bold w-full text-xl">
        <Link to="/dashboard" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <AiOutlineHome className="text-2xl"/>  Dashboard
        </Link>

        {/* <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <TbGiftCard className="text-2xl"/>  Gift Cards
        </Link> */}
        
        <Link to="/dashboard" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <LuCoins className="text-2xl"/>  Crypto
        </Link>
        
        <Link to="/dashboard" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <IoWalletOutline className="text-2xl"/> Wallet
        </Link>
        
        <Link to="/dashboard" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <LuUsers2 className="text-2xl"/>  Referrals
        </Link>
        
        <Link to="/dashboard" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <TbSettings className="text-2xl"/>  Settings
        </Link>

      </nav>

      {/* Login & Signup (Desktop) */}
      <div className="hidden md:flex items-center justify-center space-x-2">
        <Link
          to="/"
          className="flex gap-3 items-center bg-light text-red-500 text-center px-32 py-4 rounded-md hover:bg-light/80 hover:text-dark hover:shadow-lg"
        >
          <RiLogoutCircleLine />
          Logout
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
          menuOpen
            ? "flex flex-col justify-between space-y-4  absolute top-0 left-0 right-0 h-screen w-screen p-4 bg-theme z-10 transition-all duration-300 ease-in-out"
            : "hidden absolute top-0 left-[-100%]; transition-all duration-300 ease-in-out"
        }`}
      >
        <div>
          
        <IoCloseSharp size={24} onClick={handleMenuToggle} />
        <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <AiOutlineHome className="text-2xl"/>  Dashboard
        </Link>

        {/* <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <TbGiftCard className="text-2xl"/>  Gift Cards
        </Link> */}
        
        <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <LuCoins className="text-2xl"/>  Crypto
        </Link>
        
        <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <IoWalletOutline className="text-2xl"/>  Wallet
        </Link>
        
        <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <LuUsers2 className="text-2xl"/>  Referrals
        </Link>
        
        <Link to="/about" className="flex  gap-3 items-center hover:text-dark hover:bg-light/15 py-6 px-8">
        <TbSettings className="text-2xl"/>  Settings
        </Link>

          </div>
        <div className=" flex items-center mt-3 justify-center bg-light py-4 rounded-md hover:bg-light/80 hover:text-dark hover:shadow-lg">
        <Link
          to="/"
          className="flex gap-3 items-center text-red-500 justify-center "
        >
          <RiLogoutCircleLine />
          Logout
        </Link>
      </div>

      </nav>
    </header>
  );
};

export default SideBar;
