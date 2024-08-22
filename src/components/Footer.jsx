import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import goUp from "../utils/goUp";

const Footer = () => {
  return (
    <footer className="min-h-[100px] grid grid-cols-1 md:grid-cols-3 px-10 bg-black text-white mt-auto">
      <h2 className="hidden md:block font-bold text-xl my-auto">
        Pizzería Tagline ®
      </h2>
      <NavLink to="/" onClick={goUp} className="m-auto">
        <img
          src={Logo}
          className="h-[120px] md:h-[200px] w-[120px] md:w-[200px]"
          alt="Logo"
        />
      </NavLink>
    </footer>
  );
};

export default Footer;
