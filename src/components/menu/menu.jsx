import { useState } from "react";
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <div className="menu-container">
        <button id="menu-button" onClick={toggleMenu} aria-label="Abrir menu">
          &#9776;
        </button>
      </div>
      <nav id="menu" className={isOpen ? "menu ativo" : "menu"}>
        <ul>
          <li>
            <a href="index.html" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="portfolio.html" onClick={closeMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="contate-nos.html" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div
        id="overlay"
        className={isOpen ? "active" : ""}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Menu;
