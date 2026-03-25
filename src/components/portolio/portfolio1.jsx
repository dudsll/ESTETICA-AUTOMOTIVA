function Portfolio1() {
    return (
        <section>
            <div className="portfolio">
                <fieldset className="portfolio-container">
                    <legend>Nosso portfólio</legend>
                <div id="react-root"></div>
                <div className="portfolio-lista">
                    <div className="portfolio-item">
                        <img title="Chevrolet Corsa" src="assets/imgs/corsa2.jpeg" width="400" height="auto" border-radius="20px"/>
                        <div className="portfolio-item">
                            <p><i>Chevrolet Corsa</i> - Serviço de Lavagem Completa</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img title="Ford Ka" src="assets/imgs/ford-ka.jpg" width="400" height="auto" border-radius="20px"/>
                        <div className="portfolio-item">
                            <p><i>Ford Ka</i> - Serviço de Lavagem com Cera e Revitalização de Plásticos</p>
                        </div>
                    </div>
                        <div className="portfolio-item">
                            <img title="Chevrolet Opala" src="assets/imgs/opala.jpeg" width="400" height="auto" border-radius="20px"/>
                        <div className="portfolio-item">
                            <p><i>Chevrolet Opala</i> - Serviço de polimento e cristalização</p>
                        </div>
                    </div>
                        <div className="portfolio-item">
                            <img title="Volkswagen Nivus" src="assets/imgs/nivus.jpeg" width="400" height="auto" border-radius="20px"/>
                        <div className="portfolio-item">
                            <p><i>Volkswagen Nivus</i> - Serviço de proteção cerâmica</p>
                        </div>
                    </div>
                        <div className="portfolio-item">
                            <img title="Volkswagen Gol" src="assets/imgs/golquadrado.jpeg" width="400" height="auto" border-radius="20px"/>
                        <div className="portfolio-item">
                            <p><i>Volkswagen Gol</i> - Serviço de revitalização de plásticos e faróis</p>
                        </div>
                    </div>
                </div>
                </fieldset>
            </div>
        </section>
    );
}

export default Portfolio1;