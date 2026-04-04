import "./portfolio.css";
import corsa from "../../assets/corsa2.jpeg";
import fordKa from "../../assets/ford-ka.jpg";
import golQuadrado from "../../assets/golquadrado.jpeg";
import nivus from "../../assets/nivus.jpeg";
import opala from "../../assets/opala.jpeg";

function Portfolio1() {
  const items = [
    {
      image: corsa,
      title: "Chevrolet Corsa",
      description: "Serviço de lavagem completa",
    },
    {
      image: fordKa,
      title: "Ford Ka",
      description: "Serviço de lavagem com cera e revitalização de plásticos",
    },
    {
      image: opala,
      title: "Chevrolet Opala",
      description: "Serviço de polimento e cristalização",
    },
    {
      image: nivus,
      title: "Volkswagen Nivus",
      description: "Serviço de proteção cerâmica",
    },
    {
      image: golQuadrado,
      title: "Volkswagen Gol",
      description: "Serviço de revitalização de plásticos e faróis",
    },
  ];

  return (
    <section>
      <div className="portfolio">
        <fieldset className="portfolio-container">
          <legend>Nosso portfólio</legend>
          <div className="portfolio-lista">
            {items.map((item) => (
              <div className="portfolio-item" key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  width="400"
                />
                <p>
                  <i>{item.title}</i> - {item.description}
                </p>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}

export default Portfolio1;
