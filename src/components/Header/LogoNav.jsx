import Logo from "../../assets/Logo.png";

const LogoNav = ({transitions}) => {
  return (
    <img
      src={Logo}
      className={`w-[100px] h-[100px] ${transitions}`}
      alt="Logo"
    />
  );
};

export default LogoNav;
