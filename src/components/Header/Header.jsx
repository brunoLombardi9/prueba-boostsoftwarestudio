import { useState } from "react";
import "../../styles/Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import goUp from "../../utils/goUp";
import LogoNav from "./LogoNav";
import { appRoutes } from "../../App";

const transitions = "transition-all duration-300 ease-in-out";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  const isInHome = pathname === "/";
  const transparency = isInHome && "md:bg-transparent";

  const iconProps = {
    size: 40,
    color: "white",
    className:
      "absolute top-8 md:hidden right-3 hover:fill-orange transition-all ease-in-out duration-150 cursor-pointer",
    onClick: () => setNav(!nav),
  };

  function closeNav() {
    setNav(false);
    goUp();
  }

  return (
    <header
      className={`md:absolute fixed top-0 w-full gap-4 md:gap-8 py-2 md:p-5 bg-black text-white z-10 
                ${transparency} ${transitions}`}
    >
      <div className="md:absolute top-[-6px] left-0 w-fit">
        <NavLink to="/" onClick={closeNav}>
          <LogoNav transitions={transitions} />
        </NavLink>
      </div>

      <nav
        className={`${
          nav ? "max-h-[500px] opacity-100" : "max-h-0 md:max-h-max opacity-0"
        } flex flex-col md:flex-row justify-center overflow-hidden md:opacity-100 gap-4 md:gap-8 ${transitions} `}
      >
        {appRoutes.map((option) => (
          <div key={option.name}>
            <NavLink
              to={option.path}
              className="text-xl navOption ms-4"
              onClick={closeNav}
            >
              {option.name}
            </NavLink>
          </div>
        ))}
      </nav>

      {nav ? <MdOutlineClose {...iconProps} /> : <RiMenu3Fill {...iconProps} />}
    </header>
  );
};

export default Header;
