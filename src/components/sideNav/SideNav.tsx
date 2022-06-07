import "./style.scss";
import BurgerIcon from "../../icons/";

interface ISideNav {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
}

const SideNav = ({ children, toggle, open }: ISideNav) => {
  return (
    <div className={open ? "side-nav" : "side-nav-tools"}>
      <div onClick={toggle}>
        <BurgerIcon />
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

export default SideNav;
