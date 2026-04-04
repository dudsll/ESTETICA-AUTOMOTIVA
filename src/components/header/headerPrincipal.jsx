import "./header.css";
import logo from "../../assets/eduardo_garage_logo.svg";

function HeaderPrincipal() {
  return (
    <header id="headerPrincipal">
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

export default HeaderPrincipal;
