import "./header.css";
import logo from "../../assets/eduardo_garage_logo.svg";

function Header({ isHome }) {
  return (
    <header className={isHome ? "header home-header" : "header"}>
      <div className="logo" id="logo">
        <a href="index.html">
          <img src={logo} alt="Eduardo Garage Logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;
