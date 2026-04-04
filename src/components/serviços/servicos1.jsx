import { useState } from "react";

const servicos = [
  { label: "Lavagem Completa", img: "assets/imgs/imagem8.jpg" },
  { label: "Polimento e Cristalização", img: "assets/imgs/imagem2.jpg" },
  {
    label: "Higienização Interna",
    img: "assets/imgs/WhatsApp Image 2026-03-19 at 08.39.11.jpeg",
  },
  { label: "Polimento Técnico", img: "assets/imgs/clio2.jpeg" },
  { label: "Vitrificação de Pintura", img: "assets/imgs/imagem6.jpg" },
  { label: "Revitalização de Faróis", img: "assets/imgs/imagem5.jpg" },
  { label: "Proteção Cerâmica", img: "assets/imgs/imagem7.jpg" },
];

function Servicos1() {
  const [imagemAtual, setImagemAtual] = useState(
    "assets/imgs/eduardo_garage_logo.png",
  );

  return (
    <div className="servicos1">
      <fieldset className="titulo-servicos">
        <legend>Nossos serviços</legend>
        <div className="servicos2">
          <div className="lista-servicos">
            <ul>
              {servicos.map((servico) => (
                <li key={servico.label}>
                  <button
                    className="buttonC"
                    onClick={() => setImagemAtual(servico.img)}
                  >
                    {servico.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="container-imagem">
            <img
              id="imagemPrincipal"
              className="imagem-servico"
              src={imagemAtual}
              alt="Imagem de serviço de estética automotiva"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Servicos1;
