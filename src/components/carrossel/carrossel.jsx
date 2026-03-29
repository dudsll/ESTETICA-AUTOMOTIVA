import { useState } from "react";
import cliotuned from "../../assets/cliotuned.png";
import logo from "../../assets/eduardo_garage_logo.png";
import mecatuned from "../../assets/mecatuned.png";
import renegadetuned from "../../assets/renegadetuned.png";
import up from "../../assets/up.png";
import "./carrossel.css";

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
                className={index === getIndex ? "active" : ""}
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

function initCarrossel() {
  const imgs = document.querySelectorAll(".slides img");
  const prox = document.querySelector("#prox");
  const ant = document.querySelector("#ant");

  if (imgs.length === 0 || !prox || !ant) {
    return;
  }

  let i = 0;

  function changeSlide(n) {
    imgs[i].classList.remove("active");
    i = (i + n + imgs.length) % imgs.length;
    imgs[i].classList.add("active");
  }

  prox.addEventListener("click", () => changeSlide(1));
  ant.addEventListener("click", () => changeSlide(-1));

  setInterval(() => changeSlide(1), 5000);
}

export default Carrossel;
