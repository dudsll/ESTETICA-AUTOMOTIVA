import "./main.css";
import logo from "../../assets/eduardo_garage_logo.png";
import up from "../../assets/up.png";
import cliotuned from "../../assets/cliotuned.png";
import renegadetuned from "../../assets/renegadetuned.png";
import mecatuned from "../../assets/mecatuned.png";

function Main() {
    return (
        <main>
            <section>
                <div className="conteudo">
                    <div className="carrossel">
                        <div className="slides">
                            <img className="active" src={logo} alt="Eduardo Garage logo featuring automotive styling branding" />
                            <img src={up} alt="Modified UP vehicle showcasing automotive customization work" />
                            <img src={cliotuned} alt="Tuned Clio car displaying performance enhancements and custom styling" />
                            <img src={renegadetuned} alt="Customized Renegade vehicle with aesthetic and performance upgrades" />
                            <img src={mecatuned} alt="Mechanized tuned vehicle emphasizing engine and mechanical modifications" />
                        </div>      
                    </div>
                </div>
                <div className="botoes-carrossel">
                    <button className="button" id="ant">Anterior</button>
                    <button className="button" id="prox">Próximo</button>
                </div>
                <div className="local">
                    <fieldset className="fieldset">
                        <legend>Nossa localização</legend>
                        <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.055089655222!2d54.604704876038596!3d24.483548010234788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e457e2d394a05%3A0x6076df4876c470a9!2sFerrari%20World!5e0!3m2!1spt-BR!2sbr!4v1773411065353!5m2!1spt-BR!2sbr" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map showing Eduardo Garage location near Ferrari World"></iframe>
                        <div>
                            Eduardo Garage Estética Automotiva<br />
                        </div>
                    </fieldset>
                </div>
            </section>
        </main>
    ); 
}

export default Main;