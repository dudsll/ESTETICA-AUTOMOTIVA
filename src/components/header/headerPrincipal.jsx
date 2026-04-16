import "./header.css";
import logo from "../../assets/eduardo_garage_logo.svg";

function Header({ isHome = false }) {
  return (
    <header className={isHome ? "header home-header" : "header"}>
      <div className="logo">
        <a href="/">
          <img
            src={logo}
            alt="Eduardo Garage logo - automotive detailing and customization services"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
