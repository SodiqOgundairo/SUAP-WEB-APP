import { Link } from "react-router-dom";
import logo from "../assets/img/suap_white.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-wrap md:flex-nowrap justify-betwee gap-5 md bg-dark px-10 py-8">
      <div className="flex flex-col gap-3">
        <img src={logo} alt="suap logo" className="w-1/2 md:w-[10%]" />
        <p className="text-sm text-light">© {year} SUAP all rights reserved</p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap text-light gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Legal</p>
          <Link to='/' className="text-base"> Privacy Policy</Link>
          <Link to='/' className="text-base"> Terms and Conditions</Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Contact</p>
          <a href="mailto:hello@suap.com.ng" className="text-base">hello@suap.com.ng</a>
          <a href="tel:+23481234567890" className="text-base">+23481234567890</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
