function Header() {
  return (
        <header className="header">
                <div className="menu-container">
                    <button id="menu-button">&#9776;</button>
                </div>
                    <nav id="menu" className="menu">
                        <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contate-nos.html">Contato</a></li>
                        </ul>
                    </nav>
                <div id="overlay"></div>
                <div>
                    <div className="logo">
                        <a href="index.html">
                            <img src="assets/imgs/eduardo_garage_logo.svg" alt="Eduardo Garage Logo" />
                        </a>
                    </div>
                </div>
            </header>  
    );
}

export default Header;