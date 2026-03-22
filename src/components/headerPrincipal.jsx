function HeaderPrincipal() {
    return (
        <header id="headerPrincipal">
            <div className="menu-container">
                <button id="menu-button">&#9776;</button>
            </div>
            <nav id="menu" className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
            <div id="overlay"></div>
            <div>
                <div className="logo">
                    <a href="/">
                        <img src="assets/imgs/eduardo_garage_logo.svg" alt="Eduardo Garage logo - automotive detailing and customization services" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default HeaderPrincipal;