import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={closeMenu}>
              Contato
            </NavLink>
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
