// FIXME: This code was only a demo to show the header component
import "./header.css";

function Header(isHome = false) {
  const pages = ["Home", "Portfolio", "Contato"];
  const logo = "assets/imgs/eduardo_garage_logo.svg";

  return (
    <header className={isHome ? "header home-header" : "header"}>
      <div className="menu-container">
        <button id="menu-button">&#9776;</button>
      </div>
      <nav id="menu" className="menu">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <a href={page.toLowerCase()}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div id="overlay"></div>
      <div>
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="Eduardo Garage Logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
