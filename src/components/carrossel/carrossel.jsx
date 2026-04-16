import { useState } from "react";
import cliotuned from "../../assets/cliotuned.png";
import logo from "../../assets/eduardo_garage_logo.png";
import mecatuned from "../../assets/mecatuned.png";
import renegadetuned from "../../assets/renegadetuned.png";
import up from "../../assets/up.png";
import "./carrossel.css";

let autoPlayStarted = false;

function Carrossel() {
  // TODO: Study React Hooks
  const [getIndex, setIndex] = useState(0);
  const images = [
    {
      src: logo,
      alt: "Eduardo Garage logo featuring automotive styling branding",
    },
    {
      src: up,
      alt: "Modified UP vehicle showcasing automotive customization work",
    },
    {
      src: cliotuned,
      alt: "Tuned Clio car displaying performance enhancements and custom styling",
    },
    {
      src: renegadetuned,
      alt: "Customized Renegade vehicle with aesthetic and performance upgrades",
    },
    {
      src: mecatuned,
      alt: "Mechanized tuned vehicle emphasizing engine and mechanical modifications",
    },
  ];
  const normalizedIndex =
    ((getIndex % images.length) + images.length) % images.length;

  if (!autoPlayStarted) {
    autoPlayStarted = true;
    setInterval(() => {
      setIndex((currentIndex) => currentIndex + 1);
    }, 5000);
  }

  return (
    <>
      <div className="conteudo">
        <div className="carrossel">
          <div className="slides">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={index === normalizedIndex ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="botoes-carrossel">
        <button
          className="button"
          onClick={() => setIndex(getIndex - 1)}
          id="ant"
        >
          Anterior
        </button>
        <button
          className="button"
          onClick={() => setIndex(getIndex + 1)}
          id="prox"
        >
          Próximo
        </button>
      </div>
    </>
  );
}

export default Carrossel;
