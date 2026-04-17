import "./header.css";
import logo from "../../assets/eduardo_garage_logo.svg";
import { NavLink } from "react-router-dom";

function Header({ isHome = false }) {
  return (
    <header className={isHome ? "header home-header" : "header"}>
      <div className="logo">
        {/* <NavLink to="/home"> */}
        <img
          src={logo}
          alt="Eduardo Garage logo - automotive detailing and customization services"
        />
        {/* </NavLink> */}
      </div>
    </header>
  );
}

export default Header;
