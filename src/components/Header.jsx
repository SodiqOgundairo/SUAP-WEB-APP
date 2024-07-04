// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-theme fixed w-full backdrop-blur-lg flex-wrap md:items-center z-10">
      <Link to="/" className="text-orange-500 font-bold text-4xl italic">
       <img src={logo} alt="suap logo" className="w-1/5"/> 
      </Link>
      <nav
        className={`flex-col md:flex md:flex-row justify-center gap-7 items-center flex-wrap`}
      >
        <ul className="list-none block md:flex justify-center gap-4 p-4 flex-wrap">
          <li className="hover:text-orange-500">
            <Link to={"/"} >
              About SUAP
            </Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to={"/"} >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* {user?.email ? (
          <>
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-orange-500 px-6 py-2 rounded-sm text-white hover:bg-orange-900 hover:shadow-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <Link
              to="/login"
              className="bg-orange-500 px-6 py-2 rounded-sm text-white hover:bg-orange-900 hover:shadow-lg"
            >
              Login
            </Link>
            <div className={`  text-4xl md:hidden`} onClick={handleMenu}>
              <IoCloseSharp />
            </div>
          </div>
        )} */}
      </nav>

      <div className="flex gap-2 items-center justify-center">
        <Link to='/' className="px-8 py-2 rounded-md text-dark">Login</Link>
        <Link to='/' className="bg-dark text-light px-8 py-2 rounded-md ">Sign Up</Link>
      </div>

      {/* <div
        className={` ${menuOpen ? "hidden" : "block"} text-4xl md:hidden`}
        onClick={handleMenu}
      >
        <GiHamburgerMenu />
      </div> */}
    </header>
  );
};

export default Header;
